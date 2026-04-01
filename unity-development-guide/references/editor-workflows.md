# Editor Workflows

## Key Concepts

**Scene Management**: Scenes are the fundamental organizational unit. A Unity project has one or more scenes. Use multi-scene editing (additive loading) for complex projects -- load a base scene with managers, then additively load level content. Access via `SceneManager.LoadSceneAsync("SceneName", LoadSceneMode.Additive)`.

**GameObjects and Components**: Everything in a scene is a GameObject. GameObjects do nothing alone -- they are containers for Components. A Transform component is always present (position, rotation, scale). Add behavior with MonoBehaviour scripts, physics with Rigidbody/Collider, visuals with Renderer components.

**Prefabs**: A Prefab is a reusable GameObject template stored as an asset. Changes to a Prefab asset propagate to all instances. Use Prefab Variants for specialized versions (e.g., base Enemy prefab, then ArcherEnemy variant). Unpack prefabs only when you need unique per-instance behavior.

**Inspector Customization**: Custom Editors and Property Drawers let you build tools directly in the Inspector. Use `[CustomEditor(typeof(T))]` for full inspector replacement. Use `[CustomPropertyDrawer(typeof(T))]` for individual field rendering.

**Profiler**: The Profiler window (Window > Analysis > Profiler) is the primary performance tool. Use Profiler markers (`ProfilerMarker`) to instrument your own code. CPU, GPU, Memory, and Rendering modules are the most used.

## Patterns & Workflows

### Custom Inspector Pattern
```csharp
using UnityEngine;
using UnityEditor;

[CustomEditor(typeof(EnemyConfig))]
public class EnemyConfigEditor : Editor
{
    public override void OnInspectorGUI()
    {
        // Draw the default inspector first
        DrawDefaultInspector();

        EnemyConfig config = (EnemyConfig)target;

        // Add custom controls
        EditorGUILayout.Space();
        EditorGUILayout.LabelField("Computed Stats", EditorStyles.boldLabel);
        EditorGUILayout.LabelField("DPS", (config.damage * config.attackSpeed).ToString("F1"));

        if (GUILayout.Button("Reset to Defaults"))
        {
            Undo.RecordObject(config, "Reset Enemy Config");
            config.ResetDefaults();
            EditorUtility.SetDirty(config);
        }
    }
}
```

### Custom Property Drawer
```csharp
using UnityEngine;
using UnityEditor;

[CustomPropertyDrawer(typeof(RangeWithStepAttribute))]
public class RangeWithStepDrawer : PropertyDrawer
{
    public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
    {
        var range = (RangeWithStepAttribute)attribute;
        if (property.propertyType == SerializedPropertyType.Float)
        {
            float val = EditorGUI.Slider(position, label, property.floatValue, range.min, range.max);
            property.floatValue = Mathf.Round(val / range.step) * range.step;
        }
    }
}
```

### Editor Window Pattern
```csharp
using UnityEngine;
using UnityEditor;

public class LevelDesignerWindow : EditorWindow
{
    private string levelName = "New Level";
    private int width = 10;
    private int height = 10;

    [MenuItem("Tools/Level Designer")]
    public static void ShowWindow()
    {
        GetWindow<LevelDesignerWindow>("Level Designer");
    }

    private void OnGUI()
    {
        GUILayout.Label("Level Settings", EditorStyles.boldLabel);
        levelName = EditorGUILayout.TextField("Name", levelName);
        width = EditorGUILayout.IntSlider("Width", width, 1, 100);
        height = EditorGUILayout.IntSlider("Height", height, 1, 100);

        if (GUILayout.Button("Generate Level"))
        {
            GenerateLevel();
        }
    }

    private void GenerateLevel()
    {
        var go = new GameObject(levelName);
        Undo.RegisterCreatedObjectUndo(go, "Create Level");
        // Add generation logic here
    }
}
```

### Scene Gizmo Drawing
```csharp
using UnityEngine;

public class SpawnPoint : MonoBehaviour
{
    public float spawnRadius = 2f;
    public Color gizmoColor = Color.green;

    // Drawn only when the object is selected
    private void OnDrawGizmosSelected()
    {
        Gizmos.color = gizmoColor;
        Gizmos.DrawWireSphere(transform.position, spawnRadius);
    }

    // Drawn always in scene view
    private void OnDrawGizmos()
    {
        Gizmos.color = new Color(gizmoColor.r, gizmoColor.g, gizmoColor.b, 0.3f);
        Gizmos.DrawSphere(transform.position, 0.3f);
    }
}
```

### Multi-Scene Workflow
```csharp
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneLoader : MonoBehaviour
{
    // Load a level scene additively on top of the persistent scene
    public async void LoadLevel(string sceneName)
    {
        var op = SceneManager.LoadSceneAsync(sceneName, LoadSceneMode.Additive);
        while (!op.isDone) await Awaitable.NextFrameAsync();
        SceneManager.SetActiveScene(SceneManager.GetSceneByName(sceneName));
    }

    public async void UnloadLevel(string sceneName)
    {
        await SceneManager.UnloadSceneAsync(sceneName);
    }
}
```

## Code Examples

### Profiling Custom Code
```csharp
using UnityEngine;
using Unity.Profiling;

public class GameSimulation : MonoBehaviour
{
    static readonly ProfilerMarker s_SimulateMark = new ProfilerMarker("GameSimulation.Simulate");
    static readonly ProfilerMarker s_SpawnMark = new ProfilerMarker("GameSimulation.Spawn");

    void Update()
    {
        using (s_SimulateMark.Auto())
        {
            SimulateEnemies();
        }

        using (s_SpawnMark.Auto())
        {
            SpawnWave();
        }
    }

    void SimulateEnemies() { /* ... */ }
    void SpawnWave() { /* ... */ }
}
```

### SerializedProperty for Undo-Safe Inspector Edits
```csharp
using UnityEditor;

[CustomEditor(typeof(WeaponData))]
public class WeaponDataEditor : Editor
{
    SerializedProperty damageProp;
    SerializedProperty rangeProp;

    void OnEnable()
    {
        damageProp = serializedObject.FindProperty("damage");
        rangeProp = serializedObject.FindProperty("range");
    }

    public override void OnInspectorGUI()
    {
        serializedObject.Update(); // Pull latest values
        EditorGUILayout.PropertyField(damageProp);
        EditorGUILayout.PropertyField(rangeProp);
        serializedObject.ApplyModifiedProperties(); // Push changes with Undo support
    }
}
```

## API Quick Reference

| API | Purpose |
|-----|---------|
| `SceneManager.LoadSceneAsync()` | Load scene asynchronously (additive or single) |
| `SceneManager.UnloadSceneAsync()` | Unload additively loaded scene |
| `PrefabUtility.InstantiatePrefab()` | Instantiate prefab maintaining prefab link (Editor) |
| `PrefabUtility.SaveAsPrefabAsset()` | Save GameObject as prefab asset |
| `EditorWindow.GetWindow<T>()` | Open/focus a custom editor window |
| `Undo.RecordObject()` | Mark object for undo before changes |
| `EditorUtility.SetDirty()` | Mark asset as modified (triggers save) |
| `Selection.activeGameObject` | Get currently selected GameObject |
| `ProfilerMarker` | Instrument code for Profiler analysis |
| `Handles.DrawWireDisc()` | Draw interactive handles in Scene view |
| `EditorGUILayout.PropertyField()` | Draw property with undo support |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Edit `target` directly in custom editors | Use `SerializedProperty` + `ApplyModifiedProperties()` | Direct edits skip Undo, don't mark dirty, lose changes |
| Put Editor scripts in runtime assemblies | Put Editor code in `Editor/` folders or editor-only asmdefs | Editor code in builds causes compile errors |
| Use `FindObjectsOfType` (deprecated) | Use `FindObjectsByType` with sort mode | `FindObjectsOfType` deprecated in Unity 6.0 |
| Load scenes synchronously in production | Use `SceneManager.LoadSceneAsync` | Sync loads freeze the main thread |
| Hardcode scene names as strings | Use `SceneReference` or build scene indices | String typos cause silent failures |
| Use `Debug.Log` for performance profiling | Use `ProfilerMarker` with the Profiler window | `Debug.Log` has significant overhead and no timeline view |

## Version Notes

- **Unity 6.0+**: `FindObjectsOfType` replaced by `FindObjectsByType` (requires `FindObjectsSortMode` parameter).
- **Unity 6.0+**: Build Profiles window replaces legacy Build Settings for per-platform scene lists.
- **Unity 6.0+**: `Awaitable` class enables async scene loading patterns without coroutines.
