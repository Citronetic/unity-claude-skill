# Scripting Patterns

## Key Concepts

**ScriptableObjects**: Data containers that live as assets in your project, not on GameObjects. Use them for shared configuration (weapon stats, enemy data, game settings), runtime data sharing between systems, and event channels. They survive play mode changes when configured correctly.

**Coroutines**: Unity's legacy async mechanism. Use `StartCoroutine` with `IEnumerator` methods. Yield `WaitForSeconds`, `WaitForEndOfFrame`, `WaitUntil`, etc. Coroutines are tied to the MonoBehaviour that started them -- destroying the object stops its coroutines.

**Async/Await with Awaitable**: Unity 6's modern replacement for many coroutine patterns. `Awaitable` is pooled (zero allocation in loops). Use `Awaitable.NextFrameAsync()`, `Awaitable.WaitForSecondsAsync()`. Can switch threads: `await Awaitable.BackgroundThreadAsync()` for heavy computation, then `await Awaitable.MainThreadAsync()` to return.

**Object Pooling**: Reuse objects instead of Instantiate/Destroy. Use `ObjectPool<T>` from `UnityEngine.Pool`. Critical for bullets, particles, enemies, and any frequently spawned/despawned objects. Reduces GC pressure significantly.

## Patterns & Workflows

### ScriptableObject as Shared Data Store
```csharp
using UnityEngine;

[CreateAssetMenu(fileName = "WeaponData", menuName = "Game/Weapon Data")]
public class WeaponData : ScriptableObject
{
    [Header("Stats")]
    public string weaponName;
    public int damage;
    public float fireRate;
    public float range;

    [Header("Visual")]
    public Sprite icon;
    public GameObject projectilePrefab;

    // Computed property -- not serialized, calculated on access
    public float DPS => damage * fireRate;
}

// Usage: drag the WeaponData asset onto this component in Inspector
public class Weapon : MonoBehaviour
{
    [SerializeField] private WeaponData data;

    private float lastFireTime;

    public void TryFire()
    {
        if (Time.time - lastFireTime >= 1f / data.fireRate)
        {
            Instantiate(data.projectilePrefab, transform.position, transform.rotation);
            lastFireTime = Time.time;
        }
    }
}
```

### ScriptableObject Event Channel (Decoupled Communication)
```csharp
using UnityEngine;
using UnityEngine.Events;

// Create in Editor: Assets > Create > Events > Void Event
[CreateAssetMenu(fileName = "VoidEvent", menuName = "Events/Void Event")]
public class VoidEventChannel : ScriptableObject
{
    private readonly UnityEvent onEventRaised = new UnityEvent();

    public void RaiseEvent()
    {
        onEventRaised.Invoke();
    }

    public void Register(UnityAction listener) => onEventRaised.AddListener(listener);
    public void Deregister(UnityAction listener) => onEventRaised.RemoveListener(listener);
}

// Publisher: raises event without knowing who listens
public class PlayerDeath : MonoBehaviour
{
    [SerializeField] private VoidEventChannel onPlayerDied;

    public void Die()
    {
        onPlayerDied.RaiseEvent();
        Destroy(gameObject);
    }
}

// Subscriber: listens without knowing who publishes
public class GameOverUI : MonoBehaviour
{
    [SerializeField] private VoidEventChannel onPlayerDied;
    [SerializeField] private GameObject gameOverPanel;

    private void OnEnable() => onPlayerDied.Register(ShowGameOver);
    private void OnDisable() => onPlayerDied.Deregister(ShowGameOver);

    private void ShowGameOver() => gameOverPanel.SetActive(true);
}
```

### Async/Await with Awaitable (Unity 6+)
```csharp
using UnityEngine;

public class AsyncExample : MonoBehaviour
{
    // Awaitable replaces many coroutine patterns
    private async void Start()
    {
        Debug.Log("Starting countdown");

        for (int i = 3; i > 0; i--)
        {
            Debug.Log($"{i}...");
            await Awaitable.WaitForSecondsAsync(1f);
        }

        Debug.Log("Go!");
    }

    // Background thread for heavy computation
    public async Awaitable<int[]> GenerateMapAsync(int size)
    {
        await Awaitable.BackgroundThreadAsync(); // Switch to background thread

        // Heavy work off main thread
        int[] map = new int[size * size];
        for (int i = 0; i < map.Length; i++)
        {
            map[i] = ComputeTile(i);
        }

        await Awaitable.MainThreadAsync(); // Back to main thread for Unity API calls
        Debug.Log($"Generated {size}x{size} map");

        return map;
    }

    private int ComputeTile(int index) => index % 5; // Placeholder
}
```

### Coroutine Patterns (Legacy, Still Valid)
```csharp
using UnityEngine;
using System.Collections;

public class CoroutinePatterns : MonoBehaviour
{
    // Basic delayed action
    public IEnumerator SpawnAfterDelay(GameObject prefab, float delay)
    {
        yield return new WaitForSeconds(delay);
        Instantiate(prefab, transform.position, Quaternion.identity);
    }

    // Wait for condition
    public IEnumerator WaitForPlayerReady(System.Func<bool> isReady)
    {
        yield return new WaitUntil(isReady);
        Debug.Log("Player is ready");
    }

    // Tween over time (manual lerp)
    public IEnumerator FadeCanvasGroup(CanvasGroup cg, float from, float to, float duration)
    {
        float elapsed = 0f;
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            cg.alpha = Mathf.Lerp(from, to, elapsed / duration);
            yield return null; // Wait one frame
        }
        cg.alpha = to;
    }

    // Stop coroutines when disabling
    private Coroutine activeRoutine;

    private void OnDisable()
    {
        if (activeRoutine != null)
        {
            StopCoroutine(activeRoutine);
            activeRoutine = null;
        }
    }
}
```

### Object Pooling with UnityEngine.Pool
```csharp
using UnityEngine;
using UnityEngine.Pool;

public class BulletPool : MonoBehaviour
{
    [SerializeField] private GameObject bulletPrefab;
    [SerializeField] private int defaultCapacity = 20;
    [SerializeField] private int maxSize = 100;

    private ObjectPool<GameObject> pool;

    private void Awake()
    {
        pool = new ObjectPool<GameObject>(
            createFunc: () => Instantiate(bulletPrefab),
            actionOnGet: bullet => bullet.SetActive(true),
            actionOnRelease: bullet => bullet.SetActive(false),
            actionOnDestroy: bullet => Destroy(bullet),
            collectionCheck: true,
            defaultCapacity: defaultCapacity,
            maxSize: maxSize
        );
    }

    public GameObject GetBullet()
    {
        return pool.Get();
    }

    public void ReturnBullet(GameObject bullet)
    {
        pool.Release(bullet);
    }
}
```

## API Quick Reference

| API | Purpose |
|-----|---------|
| `CreateAssetMenu` attribute | Add ScriptableObject creation to Assets menu |
| `ScriptableObject.CreateInstance<T>()` | Create SO at runtime (not persisted) |
| `StartCoroutine(IEnumerator)` | Start a coroutine |
| `StopCoroutine(Coroutine)` | Stop a specific coroutine |
| `StopAllCoroutines()` | Stop all coroutines on this MonoBehaviour |
| `Awaitable.NextFrameAsync()` | Await next frame (replaces `yield return null`) |
| `Awaitable.WaitForSecondsAsync(f)` | Await duration (replaces `WaitForSeconds`) |
| `Awaitable.BackgroundThreadAsync()` | Move execution to background thread |
| `Awaitable.MainThreadAsync()` | Move execution back to main thread |
| `ObjectPool<T>` | Generic object pool from `UnityEngine.Pool` |
| `JsonUtility.ToJson(obj)` | Serialize object to JSON |
| `JsonUtility.FromJsonOverwrite(json, obj)` | Deserialize JSON into existing object |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Use `WWW` class | Use `UnityWebRequest` | `WWW` deprecated since Unity 2018 |
| Use `PlayerPrefs` for save data | Use `JsonUtility` + file I/O | `PlayerPrefs` has size limits, no encryption, not for complex data |
| Instantiate/Destroy frequently | Use `ObjectPool<T>` from `UnityEngine.Pool` | Frequent alloc/dealloc causes GC spikes |
| Start coroutines in `OnDestroy` | Guard with `gameObject.activeInHierarchy` | Coroutines on destroyed objects throw errors |
| Use `Thread` directly | Use `Awaitable.BackgroundThreadAsync()` | Unity's Awaitable integrates with the player loop; raw threads don't |
| Store mutable game state in ScriptableObjects | Use ScriptableObjects for config; use MonoBehaviour/static for state | SO state persists between play sessions in Editor, causing bugs |
| Use string-based `Invoke()` | Use coroutines, async, or direct timers | String-based invocation has no compile-time safety |

## Version Notes

- **Unity 6.0+**: `Awaitable` class is the modern replacement for coroutines in many cases. Zero-allocation pooled design.
- **Unity 6.0+**: `Awaitable.BackgroundThreadAsync()` / `MainThreadAsync()` enable safe thread switching.
- **Unity 6.0+**: `ObjectPool<T>` available in `UnityEngine.Pool` namespace for built-in pooling.
- **Unity 6.0+**: `JsonUtility` supports `[SerializeReference]` polymorphic serialization.
