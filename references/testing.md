# Testing

## Key Concepts

**Unity Test Framework**: Built on NUnit. Comes as a default package (`com.unity.test-framework`). Runs in the Test Runner window (Window > General > Test Runner). Supports two modes: EditMode (runs without entering Play mode) and PlayMode (runs in a simulated game session).

**EditMode Tests**: Run synchronously in the Editor. Test pure logic, ScriptableObjects, serialization, utility functions. Fast execution. Use `[Test]` attribute. Cannot access runtime systems (physics, rendering).

**PlayMode Tests**: Run inside a play session. Test MonoBehaviour lifecycle, physics, coroutines, scene loading. Use `[UnityTest]` for coroutine-based tests that span multiple frames. Use `[Test]` for single-frame PlayMode tests.

**Test Assemblies**: Tests must be in assembly definitions (`.asmdef`) that reference `UnityEngine.TestRunner` and `UnityEditor.TestRunner`. EditMode tests go in Editor-only assemblies. PlayMode tests go in assemblies that can reference your runtime code. Reference your game assemblies via Assembly Definition References.

## Patterns & Workflows

### Setting Up Test Assembly
1. Create folder: `Assets/Tests/EditMode/` or `Assets/Tests/PlayMode/`
2. Right-click > Create > Testing > Tests Assembly Folder (or manually create `.asmdef`)
3. In `.asmdef` Inspector:
   - Add Assembly Definition References: `UnityEngine.TestRunner`, `UnityEditor.TestRunner`, plus your game assemblies
   - For EditMode: check only "Editor" platform
   - For PlayMode: check all platforms, enable "Test Assemblies"
4. Create test scripts with `[Test]` or `[UnityTest]` attributes

### EditMode Test Pattern (Pure Logic)
```csharp
using NUnit.Framework;
using UnityEngine;

[TestFixture]
public class HealthTests
{
    [Test]
    public void TakeDamage_ReducesCurrentHealth()
    {
        // Arrange
        var health = new HealthData(maxHealth: 100);

        // Act
        health.TakeDamage(30);

        // Assert
        Assert.AreEqual(70, health.CurrentHealth);
    }

    [Test]
    public void TakeDamage_DoesNotGoBelowZero()
    {
        var health = new HealthData(maxHealth: 100);

        health.TakeDamage(150);

        Assert.AreEqual(0, health.CurrentHealth);
    }

    [Test]
    public void Heal_ClampsToMax()
    {
        var health = new HealthData(maxHealth: 100);
        health.TakeDamage(20);

        health.Heal(50);

        Assert.AreEqual(100, health.CurrentHealth);
    }

    [TestCase(100, 50, 50)]
    [TestCase(100, 0, 100)]
    [TestCase(100, 100, 0)]
    [TestCase(50, 75, 0)]
    public void TakeDamage_ParameterizedCases(int maxHp, int damage, int expectedHp)
    {
        var health = new HealthData(maxHealth: maxHp);
        health.TakeDamage(damage);
        Assert.AreEqual(expectedHp, health.CurrentHealth);
    }
}
```

### PlayMode Test Pattern (MonoBehaviour)
```csharp
using System.Collections;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestUtils;

[TestFixture]
public class ProjectileTests
{
    private GameObject projectileObj;

    [SetUp]
    public void SetUp()
    {
        projectileObj = new GameObject("TestProjectile");
        projectileObj.AddComponent<Rigidbody2D>();
    }

    [TearDown]
    public void TearDown()
    {
        Object.DestroyImmediate(projectileObj);
    }

    [UnityTest]
    public IEnumerator Projectile_MovesForward_AfterSpawn()
    {
        var rb = projectileObj.GetComponent<Rigidbody2D>();
        rb.linearVelocity = Vector2.right * 10f;
        Vector3 startPos = projectileObj.transform.position;

        // Wait a few physics frames
        yield return new WaitForFixedUpdate();
        yield return new WaitForFixedUpdate();

        Assert.Greater(projectileObj.transform.position.x, startPos.x,
            "Projectile should move to the right");
    }

    [UnityTest]
    public IEnumerator Projectile_IsDestroyed_AfterLifetime()
    {
        var projectile = projectileObj.AddComponent<AutoDestroy>();
        projectile.lifetime = 0.1f;

        yield return new WaitForSeconds(0.2f);

        Assert.IsTrue(projectileObj == null, "Projectile should be destroyed after lifetime");
    }
}
```

### Testing ScriptableObjects
```csharp
using NUnit.Framework;
using UnityEngine;

[TestFixture]
public class WeaponDataTests
{
    [Test]
    public void DPS_CalculatesCorrectly()
    {
        // Create ScriptableObject instance for test (not persisted)
        var weapon = ScriptableObject.CreateInstance<WeaponData>();
        weapon.damage = 10;
        weapon.fireRate = 2f;

        Assert.AreEqual(20f, weapon.DPS, 0.01f);

        // Clean up
        Object.DestroyImmediate(weapon);
    }
}
```

### Testing with Scenes
```csharp
using System.Collections;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.TestUtils;

[TestFixture]
public class SceneTests
{
    [UnityTest]
    public IEnumerator MainMenu_LoadsWithoutErrors()
    {
        SceneManager.LoadScene("MainMenu", LoadSceneMode.Single);
        yield return null; // Wait one frame for scene to load

        var menuUI = Object.FindFirstObjectByType<MainMenuUI>();
        Assert.IsNotNull(menuUI, "MainMenuUI should exist in MainMenu scene");
    }

    [UnityTest]
    public IEnumerator GameScene_SpawnsPlayer()
    {
        SceneManager.LoadScene("GameLevel1", LoadSceneMode.Single);
        yield return null;

        var player = GameObject.FindWithTag("Player");
        Assert.IsNotNull(player, "Player should spawn in game scene");
    }
}
```

## Code Examples

### Custom Assertions
```csharp
using NUnit.Framework;
using UnityEngine;

public static class UnityAssert
{
    public static void AreApproximatelyEqual(Vector3 expected, Vector3 actual, float tolerance = 0.01f)
    {
        Assert.AreEqual(expected.x, actual.x, tolerance, $"X: expected {expected.x} but was {actual.x}");
        Assert.AreEqual(expected.y, actual.y, tolerance, $"Y: expected {expected.y} but was {actual.y}");
        Assert.AreEqual(expected.z, actual.z, tolerance, $"Z: expected {expected.z} but was {actual.z}");
    }
}
```

### Test Setup/Teardown with Attributes
```csharp
using NUnit.Framework;
using UnityEngine;

[TestFixture]
public class GameManagerTests
{
    [OneTimeSetUp]
    public void OneTimeSetUp()
    {
        // Runs once before all tests in this fixture
        // Initialize shared test resources
    }

    [SetUp]
    public void SetUp()
    {
        // Runs before each individual test
    }

    [TearDown]
    public void TearDown()
    {
        // Runs after each individual test -- clean up
    }

    [OneTimeTearDown]
    public void OneTimeTearDown()
    {
        // Runs once after all tests complete
    }
}
```

### Running Tests from Command Line
```bash
# Run EditMode tests
Unity -runTests -batchmode -projectPath /path/to/project \
  -testPlatform EditMode \
  -testResults ./results.xml

# Run PlayMode tests
Unity -runTests -batchmode -projectPath /path/to/project \
  -testPlatform PlayMode \
  -testResults ./results.xml

# Run specific test category
Unity -runTests -batchmode -projectPath /path/to/project \
  -testPlatform EditMode \
  -testCategory "Unit" \
  -testResults ./results.xml

# Run specific test by name
Unity -runTests -batchmode -projectPath /path/to/project \
  -testPlatform EditMode \
  -testFilter "HealthTests.TakeDamage_ReducesCurrentHealth"
```

## API Quick Reference

| API | Purpose |
|-----|---------|
| `[Test]` | Mark method as NUnit test (single frame) |
| `[UnityTest]` | Mark method as Unity coroutine test (multi-frame) |
| `[SetUp]` / `[TearDown]` | Per-test setup and cleanup |
| `[OneTimeSetUp]` / `[OneTimeTearDown]` | Per-fixture setup and cleanup |
| `[TestCase(args)]` | Parameterized test data |
| `[UnitySetUp]` / `[UnityTearDown]` | Coroutine-based setup/teardown |
| `[Category("name")]` | Group tests for selective runs |
| `Assert.AreEqual(expected, actual)` | Equality assertion |
| `Assert.IsTrue(condition)` | Boolean assertion |
| `Assert.Throws<T>(() => code)` | Exception assertion |
| `LogAssert.Expect(LogType, message)` | Expect a Debug.Log message |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Test MonoBehaviour logic in EditMode | Use PlayMode for MonoBehaviour, EditMode for pure logic | MonoBehaviour lifecycle requires Play mode |
| Forget to clean up GameObjects in tests | Use `[TearDown]` with `DestroyImmediate` | Leftover objects contaminate subsequent tests |
| Use `FindObjectsOfType` in tests | Use `FindObjectsByType` or direct references | Deprecated API; also non-deterministic without sort mode |
| Skip assembly definition setup | Create proper `.asmdef` with test runner references | Tests won't appear in Test Runner without proper assembly config |
| Test implementation details | Test behavior and public API | Implementation changes shouldn't break tests |
| Make tests depend on each other | Each test should be independent | Test ordering is not guaranteed |

## Version Notes

- **Unity 6.0+**: `FindObjectsOfType` deprecated in tests too -- use `FindObjectsByType` or `FindFirstObjectByType`.
- **Unity 6.0+**: `Awaitable`-based tests supported via `[Test]` with `async Awaitable` return type (no `[UnityTest]` needed).
- **Unity Test Framework 2.0+**: Improved test discovery and parallel execution support.

<!-- See also: references/scripting-patterns.md for coroutine patterns used in [UnityTest] methods -->
