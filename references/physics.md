# Physics

## Key Concepts

**Rigidbody vs Rigidbody2D**: Use `Rigidbody` for 3D physics, `Rigidbody2D` for 2D. They are completely separate systems -- do not mix them. A 2D game should use `Rigidbody2D` + `Collider2D` exclusively. The physics engines (PhysX for 3D, Box2D for 2D) run independently.

**Collider Types**: Static colliders (no Rigidbody) for floors/walls. Dynamic colliders (Rigidbody with IsKinematic=false) for physics-driven objects. Kinematic colliders (Rigidbody with IsKinematic=true) for script-driven objects that still interact with physics (platforms, doors). Moving a static collider at runtime is expensive -- always add a kinematic Rigidbody if movement is needed.

**Physics Callbacks**: `OnCollisionEnter/Stay/Exit` for physical contacts. `OnTriggerEnter/Stay/Exit` for trigger volumes (IsTrigger=true). Both require at least one Rigidbody in the pair. 2D variants: `OnCollisionEnter2D`, `OnTriggerEnter2D`, etc.

**FixedUpdate**: All physics code goes in `FixedUpdate()`, not `Update()`. Physics simulation runs at a fixed timestep (default 0.02s = 50Hz). Changing Rigidbody properties in `Update()` causes inconsistent behavior because frame rate varies.

**Raycasting**: Use `Physics.Raycast` (3D) or `Physics2D.Raycast` (2D) for line-of-sight checks, ground detection, and targeting. Use layer masks to filter what gets hit. `Physics.RaycastAll` returns all hits; `Physics.RaycastNonAlloc` avoids allocation.

## Patterns & Workflows

### Standard 2D Character Controller
```csharp
using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
public class PlatformerController : MonoBehaviour
{
    [Header("Movement")]
    [SerializeField] private float moveSpeed = 8f;
    [SerializeField] private float jumpForce = 12f;

    [Header("Ground Check")]
    [SerializeField] private Transform groundCheck;
    [SerializeField] private float groundCheckRadius = 0.2f;
    [SerializeField] private LayerMask groundLayer;

    private Rigidbody2D rb;
    private bool isGrounded;
    private float moveInput;
    private bool jumpRequested;

    private void Awake()
    {
        rb = GetComponent<Rigidbody2D>();
        rb.freezeRotation = true; // Prevent toppling
    }

    private void Update()
    {
        // Read input in Update (runs every frame)
        moveInput = Input.GetAxisRaw("Horizontal");
        if (Input.GetButtonDown("Jump") && isGrounded)
        {
            jumpRequested = true;
        }
    }

    private void FixedUpdate()
    {
        // Physics in FixedUpdate (runs at fixed timestep)
        isGrounded = Physics2D.OverlapCircle(groundCheck.position, groundCheckRadius, groundLayer);

        rb.linearVelocity = new Vector2(moveInput * moveSpeed, rb.linearVelocity.y);

        if (jumpRequested)
        {
            rb.linearVelocity = new Vector2(rb.linearVelocity.x, jumpForce);
            jumpRequested = false;
        }
    }
}
```

### 3D Rigidbody Movement
```csharp
using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class ThirdPersonMovement : MonoBehaviour
{
    [SerializeField] private float moveForce = 50f;
    [SerializeField] private float maxSpeed = 10f;
    [SerializeField] private float drag = 5f;

    private Rigidbody rb;
    private Vector3 inputDirection;

    private void Awake()
    {
        rb = GetComponent<Rigidbody>();
        rb.linearDamping = drag;
    }

    private void Update()
    {
        float h = Input.GetAxisRaw("Horizontal");
        float v = Input.GetAxisRaw("Vertical");
        inputDirection = new Vector3(h, 0f, v).normalized;
    }

    private void FixedUpdate()
    {
        if (inputDirection.sqrMagnitude > 0.01f)
        {
            // Clamp speed by checking current velocity
            if (rb.linearVelocity.magnitude < maxSpeed)
            {
                rb.AddForce(inputDirection * moveForce, ForceMode.Force);
            }

            // Rotate toward movement direction
            Quaternion targetRotation = Quaternion.LookRotation(inputDirection);
            rb.MoveRotation(Quaternion.Slerp(rb.rotation, targetRotation, 10f * Time.fixedDeltaTime));
        }
    }
}
```

### Raycasting Patterns
```csharp
using UnityEngine;

public class RaycastExamples : MonoBehaviour
{
    [SerializeField] private LayerMask interactableLayer;
    [SerializeField] private float interactRange = 3f;

    // 3D raycast from camera through mouse position
    public bool TryGetMouseTarget(out RaycastHit hit)
    {
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        return Physics.Raycast(ray, out hit, interactRange, interactableLayer);
    }

    // 2D raycast from a point in a direction
    public Collider2D CheckGround2D(Vector2 origin, float distance)
    {
        RaycastHit2D hit = Physics2D.Raycast(origin, Vector2.down, distance, interactableLayer);
        return hit.collider; // null if nothing hit
    }

    // Non-allocating raycast (reuses array, no GC)
    private readonly RaycastHit[] hitBuffer = new RaycastHit[10];

    public int RaycastNoAlloc(Vector3 origin, Vector3 direction, float maxDist)
    {
        return Physics.RaycastNonAlloc(origin, direction, hitBuffer, maxDist, interactableLayer);
    }

    // Overlap check (circle/sphere, no ray needed)
    public Collider2D[] FindNearbyEnemies(Vector2 center, float radius)
    {
        return Physics2D.OverlapCircleAll(center, radius, LayerMask.GetMask("Enemy"));
    }
}
```

### Collision and Trigger Callbacks
```csharp
using UnityEngine;

public class DamageZone : MonoBehaviour
{
    [SerializeField] private int damage = 10;
    [SerializeField] private float damageInterval = 1f;

    // Trigger: IsTrigger must be enabled on this collider
    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Player"))
        {
            other.GetComponent<Health>()?.TakeDamage(damage);
        }
    }

    // Collision: physical contact, both objects have colliders, at least one has Rigidbody
    private void OnCollisionEnter2D(Collision2D collision)
    {
        // Access contact points for effects
        ContactPoint2D contact = collision.GetContact(0);
        Debug.Log($"Hit at {contact.point} with normal {contact.normal}");
    }
}
```

### Compound Colliders
```csharp
using UnityEngine;

// Compound collider: multiple colliders on child objects share parent's Rigidbody
// No code needed -- configure in Editor:
// Parent: Rigidbody2D (no collider)
//   Child1: BoxCollider2D (body)
//   Child2: CircleCollider2D (head)
//   Child3: BoxCollider2D (feet)
// All children's colliders belong to the parent's Rigidbody2D

// Access example:
public class CompoundColliderHelper : MonoBehaviour
{
    private void Start()
    {
        // All colliders contributing to this Rigidbody
        var rb = GetComponent<Rigidbody2D>();
        var allColliders = GetComponentsInChildren<Collider2D>();
        Debug.Log($"Compound collider has {allColliders.Length} shapes");
    }
}
```

## API Quick Reference

| API | Purpose |
|-----|---------|
| `Rigidbody.AddForce(force, mode)` | Apply force (Acceleration, Force, Impulse, VelocityChange) |
| `Rigidbody.MovePosition(pos)` | Move kinematic body to position |
| `Rigidbody.MoveRotation(rot)` | Rotate kinematic body |
| `Rigidbody.linearVelocity` | Get/set linear velocity (Unity 6+, was `velocity`) |
| `Rigidbody.angularVelocity` | Get/set angular velocity |
| `Physics.Raycast(origin, dir, hit, dist, mask)` | 3D line trace |
| `Physics.RaycastNonAlloc()` | Non-allocating 3D raycast |
| `Physics.OverlapSphere(center, radius, mask)` | 3D sphere overlap |
| `Physics2D.Raycast(origin, dir, dist, mask)` | 2D line trace |
| `Physics2D.OverlapCircle(center, radius, mask)` | 2D circle overlap |
| `Physics2D.OverlapCircleAll()` | All objects in 2D circle |
| `LayerMask.GetMask("LayerName")` | Get layer mask by name |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Move Rigidbody with `Transform.position` | Use `Rigidbody.MovePosition()` or `AddForce()` | Transform bypasses physics; causes tunneling and missed collisions |
| Put physics code in `Update()` | Use `FixedUpdate()` for all physics | Physics runs at fixed timestep; Update is frame-rate dependent |
| Use `Rigidbody.SetDensity()` (deprecated) | Set `Rigidbody.mass` directly | `SetDensity` deprecated in Unity 6.1 |
| Move static colliders at runtime | Add kinematic Rigidbody to moving colliders | Moving static colliders forces expensive physics recalculation |
| Use `Physics.RaycastAll` in hot paths | Use `Physics.RaycastNonAlloc` with pre-allocated array | `RaycastAll` allocates arrays every call |
| Mix 2D and 3D physics components | Use exclusively 2D or 3D physics per object | They are separate physics engines; mixing causes no interaction |
| Forget layer masks on raycasts | Always specify layer mask parameter | Without masks, raycasts hit everything, including UI and ignored layers |
| Set velocity directly for movement | Use `AddForce` for realistic physics | Direct velocity ignores mass and physics interactions |

<!-- See also: references/scripting-fundamentals.md for MonoBehaviour lifecycle context -->

## Version Notes

- **Unity 6.0+**: `Rigidbody.velocity` renamed to `Rigidbody.linearVelocity` (both 2D and 3D). Old name still works as alias but is deprecated.
- **Unity 6.1**: `Rigidbody.SetDensity()` deprecated; set `Rigidbody.mass` directly.
- **Unity 6.0+**: PhysX 5 backend available for 3D physics with improved solver accuracy.
- **Unity 6.0+**: 2D physics supports custom physics shapes via `PhysicsShapeGroup2D`.
