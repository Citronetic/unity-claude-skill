This version of Unity is unsupported.

Object-oriented development

Object

# Fundamental Unity types

Unity has some fundamental built-in classes that are particularly important for scripting. These are classes which your own custom types can inherit from to integrate with Editor and Engine functionality. It’s helpful to understand these types, their behavior, and why you should inherit from or use them.

For a complete reference of all the built-in classes and every member available, refer to the [Script Reference](../ScriptReference/index.html).

| Topic | Description |
| --- | --- |
| ObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary | UnityEngine.Object is the base class for all objects the Editor can reference from fields in the InspectorA Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. More infoSee in Glossary window. |
| MonoBehaviour | Inherit from MonoBehaviour to make your script a component and control the behaviour of GameObjects and make them responsive to events. |
| ScriptableObject | Inherit from ScriptableObject to store data that’s independent of GameObjects. |
| Unity attributes | Use Unity-specific C# attributes to define special behavior for your code. |

## Additional resources

- [Unity Scripting reference](../ScriptReference/index.html)

Object-oriented development

Object
