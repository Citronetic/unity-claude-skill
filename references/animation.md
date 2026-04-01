# Animation

## Key Concepts

**Animator Component + Controller**: The Animator component drives animations on a GameObject. It references an AnimatorController asset that defines a state machine: states (animation clips), transitions (conditions to change state), parameters (bool, int, float, trigger), and layers (for blending upper/lower body).

**Animation Clips**: Individual animations (.anim assets). Created in Unity's Animation window or imported from 3D modeling tools (FBX). Clips define keyframes for properties: position, rotation, scale, SpriteRenderer.sprite, color, etc. For 2D, use sprite-swap keyframes on SpriteRenderer.

**State Machine**: Each AnimatorController has at least one state machine layer. States represent animation clips (or blend trees). Transitions between states use parameter conditions. "Any State" transitions handle events that can occur from any state (e.g., death). "Entry" is the default state on startup.

**Blend Trees**: Smoothly blend between multiple animation clips based on parameters. 1D Blend Tree: one parameter (e.g., speed 0-1 blends idle->walk->run). 2D Blend Tree: two parameters (e.g., horizontal+vertical for 8-directional movement). Critical for smooth locomotion.

**Animation Events**: Call methods on the GameObject's components at specific keyframes in an animation clip. Useful for: playing footstep sounds, spawning effects at attack frames, enabling hitboxes. Methods must be on components attached to the same GameObject.

## Patterns & Workflows

### Animator Parameter Control
```csharp
using UnityEngine;

[RequireComponent(typeof(Animator))]
public class CharacterAnimator : MonoBehaviour
{
    // Cache parameter hashes for performance (avoid string lookups)
    private static readonly int SpeedHash = Animator.StringToHash("Speed");
    private static readonly int IsGroundedHash = Animator.StringToHash("IsGrounded");
    private static readonly int JumpHash = Animator.StringToHash("Jump");
    private static readonly int AttackHash = Animator.StringToHash("Attack");
    private static readonly int DieHash = Animator.StringToHash("Die");

    private Animator animator;

    private void Awake()
    {
        animator = GetComponent<Animator>();
    }

    public void SetSpeed(float speed)
    {
        animator.SetFloat(SpeedHash, speed);
    }

    public void SetGrounded(bool grounded)
    {
        animator.SetBool(IsGroundedHash, grounded);
    }

    public void TriggerJump()
    {
        animator.SetTrigger(JumpHash);
    }

    public void TriggerAttack()
    {
        animator.SetTrigger(AttackHash);
    }

    public void TriggerDeath()
    {
        animator.SetTrigger(DieHash);
    }
}
```

### Animation Events for Gameplay
```csharp
using UnityEngine;

// This component must be on the same GameObject as the Animator
public class AttackAnimationHandler : MonoBehaviour
{
    [SerializeField] private Collider2D hitbox;
    [SerializeField] private AudioClip swingSound;
    [SerializeField] private GameObject hitEffectPrefab;

    private AudioSource audioSource;

    private void Awake()
    {
        audioSource = GetComponent<AudioSource>();
        hitbox.enabled = false;
    }

    // Called from Animation Event at attack startup frame
    public void OnAttackStart()
    {
        hitbox.enabled = true;
        audioSource.PlayOneShot(swingSound);
    }

    // Called from Animation Event at attack end frame
    public void OnAttackEnd()
    {
        hitbox.enabled = false;
    }

    // Called from Animation Event at hit impact frame
    public void OnHitImpact()
    {
        if (hitEffectPrefab != null)
        {
            Instantiate(hitEffectPrefab, hitbox.bounds.center, Quaternion.identity);
        }
    }
}
```

### 2D Sprite Animation Setup
```csharp
using UnityEngine;

// For 2D: Create animation clips by dragging sprite sequences into Scene view
// Unity auto-creates: Animator, AnimatorController, and Animation Clips
public class SpriteAnimationController : MonoBehaviour
{
    private Animator animator;
    private SpriteRenderer sr;

    private static readonly int IsMovingHash = Animator.StringToHash("IsMoving");
    private static readonly int DirectionXHash = Animator.StringToHash("DirectionX");
    private static readonly int DirectionYHash = Animator.StringToHash("DirectionY");

    private void Awake()
    {
        animator = GetComponent<Animator>();
        sr = GetComponent<SpriteRenderer>();
    }

    public void UpdateAnimation(Vector2 movement)
    {
        bool isMoving = movement.sqrMagnitude > 0.01f;
        animator.SetBool(IsMovingHash, isMoving);

        if (isMoving)
        {
            animator.SetFloat(DirectionXHash, movement.x);
            animator.SetFloat(DirectionYHash, movement.y);

            // Flip sprite for left/right
            if (movement.x != 0)
            {
                sr.flipX = movement.x < 0;
            }
        }
    }
}
```

### StateMachineBehaviour for State Logic
```csharp
using UnityEngine;

// Attach to a specific state in the Animator Controller
public class PatrolState : StateMachineBehaviour
{
    [SerializeField] private float patrolSpeed = 3f;

    // Called when entering this state
    public override void OnStateEnter(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
    {
        var enemy = animator.GetComponent<EnemyAI>();
        enemy?.StartPatrol(patrolSpeed);
    }

    // Called every frame while in this state
    public override void OnStateUpdate(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
    {
        var enemy = animator.GetComponent<EnemyAI>();
        enemy?.UpdatePatrol();
    }

    // Called when leaving this state
    public override void OnStateExit(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
    {
        var enemy = animator.GetComponent<EnemyAI>();
        enemy?.StopPatrol();
    }
}
```

### Procedural Animation (Root Motion Override)
```csharp
using UnityEngine;

[RequireComponent(typeof(Animator))]
public class RootMotionController : MonoBehaviour
{
    [SerializeField] private bool useRootMotion = true;

    private Animator animator;

    private void Awake()
    {
        animator = GetComponent<Animator>();
        animator.applyRootMotion = useRootMotion;
    }

    // Called by the Animator after root motion is calculated
    // Override to apply custom root motion processing
    private void OnAnimatorMove()
    {
        if (useRootMotion)
        {
            // Apply animation-driven movement to the Transform
            transform.position += animator.deltaPosition;
            transform.rotation *= animator.deltaRotation;
        }
    }

    // Called when IK pass runs (requires IK on the Animator layer)
    private void OnAnimatorIK(int layerIndex)
    {
        // Example: make character look at target
        // animator.SetLookAtWeight(1f);
        // animator.SetLookAtPosition(targetPosition);
    }
}
```

## API Quick Reference

| API | Purpose |
|-----|---------|
| `Animator.SetFloat/Bool/Int/Trigger()` | Set parameter values |
| `Animator.StringToHash("name")` | Convert parameter name to hash (cache this) |
| `Animator.Play("StateName")` | Force-play a state immediately |
| `Animator.CrossFade("StateName", duration)` | Blend to state over time |
| `Animator.GetCurrentAnimatorStateInfo(layer)` | Get info about current state |
| `AnimatorStateInfo.IsName("StateName")` | Check if in a named state |
| `AnimatorStateInfo.normalizedTime` | Progress through clip (0-1) |
| `Animator.applyRootMotion` | Enable/disable root motion |
| `OnAnimatorMove()` | Override root motion application |
| `OnAnimatorIK(layer)` | Handle IK pass |
| `Animation.Play()` | Legacy animation system (avoid for new code) |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Use Legacy Animation system | Use Animator + AnimatorController | Legacy Animation replaced by Mecanim; no state machine, no blending |
| Use string parameters in hot paths | Cache hashes with `Animator.StringToHash()` | String lookups allocate and are slower |
| Put gameplay logic in AnimatorController | Use StateMachineBehaviour or external scripts | AnimatorController is for animation flow; logic belongs in code |
| Animate Transform for Rigidbody objects | Use root motion (`applyRootMotion = true`) or script-driven movement | Direct Transform animation conflicts with physics |
| Create separate animation clips for left/right | Use `SpriteRenderer.flipX` | Halves the number of animation clips needed |
| Forget to set transitions to "Has Exit Time = false" | Disable "Has Exit Time" for responsive transitions | Exit time causes input lag on state changes |

## Version Notes

- **Unity 6.0+**: Animation Rigging package provides production-ready IK constraints (Two-Bone IK, Multi-Aim, Chain IK).
- **Unity 6.0+**: Animator supports `Awaitable`-based async patterns for sequencing animations.
- **Unity 6.0+**: Improved Blend Tree editor with visual preview of 2D blending fields.
