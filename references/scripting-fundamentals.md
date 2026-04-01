# Scripting Fundamentals

## Key Concepts

**MonoBehaviour Lifecycle**: The execution order matters. `Awake()` runs when the script instance loads (even if disabled). `OnEnable()` runs when enabled. `Start()` runs before the first `Update()` only. `Update()` runs every frame. `FixedUpdate()` runs at fixed timestep for physics. `LateUpdate()` runs after all `Update()` calls. `OnDisable()` and `OnDestroy()` for cleanup.

**Component Architecture**: Unity uses composition, not inheritance. Attach multiple components to a single GameObject. Access components via `GetComponent<T>()`. Cache component references in `Awake()` or `Start()` -- never call `GetComponent` in `Update()`.

**Serialization**: Fields are serialized (visible in Inspector) when they are `public` or marked with `[SerializeField]`. Use `[SerializeField] private` to expose to Inspector while keeping encapsulation. Unity serializes: primitives, strings, arrays, Lists, enums, Unity objects, and any class/struct marked `[Serializable]`. Unity does NOT serialize: properties, static fields, dictionaries, or `readonly` fields.

**Script Execution Order**: Scripts within the same lifecycle callback have no guaranteed order by default. Use Edit > Project Settings > Script Execution Order to set explicit ordering when dependencies exist (e.g., GameManager before enemies). Alternatively, use `[DefaultExecutionOrder(N)]` attribute.

**Null Handling**: Unity overrides the `==` operator on `UnityEngine.Object`. A destroyed object `== null` returns `true` even though the C# reference still exists. Use the `?` null-conditional operator only for pure C# objects, not for Unity objects (it bypasses the overloaded `==`).

## Patterns & Workflows

### Standard MonoBehaviour Template
```csharp
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [Header("Movement")]
    [SerializeField] private float moveSpeed = 5f;
    [SerializeField] private float jumpForce = 10f;

    [Header("References")]
    [SerializeField] private Transform groundCheck;
    [SerializeField] private LayerMask groundLayer;

    private Rigidbody2D rb;
    private bool isGrounded;

    private void Awake()
    {
        // Cache component references once
        rb = GetComponent<Rigidbody2D>();
    }

    private void Update()
    {
        // Input and non-physics logic
        isGrounded = Physics2D.OverlapCircle(groundCheck.position, 0.2f, groundLayer);
    }

    private void FixedUpdate()
    {
        // Physics-based movement
        float horizontal = Input.GetAxisRaw("Horizontal");
        rb.linearVelocity = new Vector2(horizontal * moveSpeed, rb.linearVelocity.y);
    }
}
```

### Component Communication Patterns
```csharp
using UnityEngine;

public class Health : MonoBehaviour
{
    [SerializeField] private int maxHealth = 100;
    private int currentHealth;

    // Events for loose coupling -- other components subscribe, no direct references needed
    public event System.Action<int, int> OnHealthChanged; // current, max
    public event System.Action OnDeath;

    private void Awake()
    {
        currentHealth = maxHealth;
    }

    public void TakeDamage(int amount)
    {
        currentHealth = Mathf.Max(0, currentHealth - amount);
        OnHealthChanged?.Invoke(currentHealth, maxHealth);

        if (currentHealth <= 0)
        {
            OnDeath?.Invoke();
        }
    }
}

// Separate component listens to Health events
public class HealthBar : MonoBehaviour
{
    [SerializeField] private Health health;

    private void OnEnable()
    {
        health.OnHealthChanged += UpdateBar;
    }

    private void OnDisable()
    {
        health.OnHealthChanged -= UpdateBar;
    }

    private void UpdateBar(int current, int max)
    {
        // Update UI representation
        float ratio = (float)current / max;
        // ... update fill amount
    }
}
```

### Serialization -- Custom Serializable Types
```csharp
using UnityEngine;

[System.Serializable]
public struct WaveConfig
{
    public string waveName;
    public GameObject enemyPrefab;
    public int enemyCount;
    public float spawnInterval;
    [Range(0f, 1f)] public float difficultyMultiplier;
}

public class WaveManager : MonoBehaviour
{
    [SerializeField] private WaveConfig[] waves; // Visible in Inspector as expandable array
    [SerializeField] private Transform[] spawnPoints;

    private int currentWave = 0;

    public void StartNextWave()
    {
        if (currentWave < waves.Length)
        {
            StartCoroutine(SpawnWave(waves[currentWave]));
            currentWave++;
        }
    }

    private System.Collections.IEnumerator SpawnWave(WaveConfig config)
    {
        for (int i = 0; i < config.enemyCount; i++)
        {
            var spawnPos = spawnPoints[Random.Range(0, spawnPoints.Length)].position;
            Instantiate(config.enemyPrefab, spawnPos, Quaternion.identity);
            yield return new WaitForSeconds(config.spawnInterval);
        }
    }
}
```

## Code Examples

### RequireComponent and DisallowMultipleComponent
```csharp
using UnityEngine;

// Automatically adds Rigidbody2D when this component is added
[RequireComponent(typeof(Rigidbody2D))]
[DisallowMultipleComponent]
public class Projectile : MonoBehaviour
{
    [SerializeField] private float speed = 10f;
    [SerializeField] private float lifetime = 5f;

    private Rigidbody2D rb;

    private void Awake()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    private void Start()
    {
        rb.linearVelocity = transform.right * speed;
        Destroy(gameObject, lifetime);
    }
}
```

### Finding Objects -- Unity 6 Pattern
```csharp
using UnityEngine;

public class GameManager : MonoBehaviour
{
    // Unity 6+: Use FindObjectsByType instead of FindObjectsOfType
    public void CollectAllEnemies()
    {
        // FindObjectsByType requires a sort mode parameter
        // Use DontSort when order doesn't matter (faster)
        var enemies = FindObjectsByType<Enemy>(FindObjectsSortMode.None);

        // Use InstanceID sort when you need deterministic order
        var sorted = FindObjectsByType<Enemy>(FindObjectsSortMode.InstanceID);

        // Find single object
        var player = FindFirstObjectByType<PlayerController>();
        // FindAnyObjectByType is faster but non-deterministic
        var anyEnemy = FindAnyObjectByType<Enemy>();
    }
}
```

### RuntimeInitializeOnLoadMethod
```csharp
using UnityEngine;

// Runs automatically before any scene loads -- no MonoBehaviour needed
public static class GameBootstrap
{
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
    static void Init()
    {
        var prefab = Resources.Load<GameObject>("GameManager");
        var go = Object.Instantiate(prefab);
        Object.DontDestroyOnLoad(go);
    }
}
```

## API Quick Reference

| API | Purpose |
|-----|---------|
| `GetComponent<T>()` | Get component on same GameObject |
| `GetComponentInChildren<T>()` | Search this and child GameObjects |
| `GetComponentInParent<T>()` | Search this and parent GameObjects |
| `FindObjectsByType<T>(sortMode)` | Find all active objects of type (Unity 6+) |
| `FindFirstObjectByType<T>()` | Find first object of type (Unity 6+) |
| `Instantiate(prefab, pos, rot)` | Clone a prefab/object |
| `Destroy(obj, delay)` | Destroy object after optional delay |
| `DontDestroyOnLoad(obj)` | Persist object across scene loads |
| `Invoke("Method", delay)` | Call method after delay (string-based) |
| `InvokeRepeating("Method", delay, rate)` | Repeated delayed calls |
| `CompareTag("TagName")` | Tag check (faster than `==`, validated) |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Call `GetComponent` every frame | Cache in `Awake()` or `Start()` | `GetComponent` does a search each call |
| Use `FindObjectsOfType` (deprecated) | Use `FindObjectsByType` (Unity 6+) | Old API deprecated; new API requires explicit sort mode for clarity |
| Use `FindObjectOfType` (deprecated) | Use `FindFirstObjectByType` or `FindAnyObjectByType` | Same reason; `FindAny` is faster when order doesn't matter |
| Make serialized fields `public` | Use `[SerializeField] private` | Maintains encapsulation while exposing to Inspector |
| Use constructor for initialization | Use `Awake()` or `Start()` | Unity manages object construction; constructors cause issues |
| Use C# `?.` on Unity objects | Explicitly check `== null` | Unity's `==` override detects destroyed objects; `?.` bypasses it |
| Use `SendMessage()` | Use direct references or events | `SendMessage` uses reflection, no compile-time safety |
| Put logic in both `Update` and `FixedUpdate` | Physics in `FixedUpdate`, input/logic in `Update` | `FixedUpdate` runs at fixed timestep; `Update` matches frame rate |

## Version Notes

- **Unity 6.0+**: `FindObjectsOfType` -> `FindObjectsByType` (adds `FindObjectsSortMode` parameter). `FindObjectOfType` -> `FindFirstObjectByType` / `FindAnyObjectByType`.
- **Unity 6.0+**: `Rigidbody.velocity` renamed to `Rigidbody.linearVelocity` (2D and 3D).
- **Unity 6.0+**: `Awaitable` class replaces many coroutine use cases with async/await.
- **Unity 6.0+**: `[DefaultExecutionOrder(N)]` attribute is the preferred way to set script execution order programmatically.
