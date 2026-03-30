This version of Unity is unsupported.

Details of disabling domain and scene reload

Serialization rules

# Script serialization

**Serialization** is the automatic process of transforming data structures or **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) states into a format that Unity can store and reconstruct later.

How you organize data in your Unity project affects how Unity serializes that data, which can have a significant impact on the performance of your project. This page outlines serialization in Unity and how to optimize your project for it.

| Topic | Description |
| --- | --- |
| Serialization rules | Conditions that determine whether fields in your scriptsA piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. More infoSee in Glossary are serialized. |
| Custom serialization | How to serialize additional items not supported by Unity’s serializer. |
| How Unity uses serialization | More details about how serialization works in Unity. |
| Serialization best practices | Best practices for serialization. |

## Additional resources

- [Script compilation](script-compilation.html)

- [Scripting back ends](scripting-backends.html)

- [Code reload in the Editor](code-reloading-editor.html)

Details of disabling domain and scene reload

Serialization rules
