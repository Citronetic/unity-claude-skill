This version of Unity is unsupported.

ScriptableObject

Managing update and execution order

# Unity attributes

[Attributes](https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/reflection-and-attributes/) in C# are metadata markers that can be placed above a class, property, or method declaration to indicate special behaviour.

There are many attributes defined in the .NET libraries and Unity also provides a number of custom, Unity-specific attributes. For example, you can add the `HideInInspector` attribute above a property declaration to prevent the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) from showing the property, even if it is public. Attributes are specified in square brackets above the declaration as follows:

```cs
[HideInInspector]
public float strength;
```

For the full list of `UnityEngine` attributes, refer to the list under **UnityEngine > Attributes** in the Scripting API reference, which begins with [AddComponentMenu](../ScriptReference/AddComponentMenu.html).

For the full list of `UnityEditor` attributes, refer to the list under **UnityEditor > Attributes** in the Scripting API reference, which begins with [AssetPostprocessorStaticVariableIgnoreAttribute](../ScriptReference/AssetPostprocessorStaticVariableIgnoreAttribute.html).

**Note:** Do not use the .NET [ThreadStatic](http://msdn.microsoft.com/en-us/library/system.threadstaticattribute.aspx) attribute as this causes a crash if you add it to a Unity script.

## Additional resources

- [Unity Learn: attributes](https://learn.unity.com/tutorial/attributes#?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774938781642)

- [Inspecting scripts](inspecting-scripts.html)

- [Script serialization rules](script-serialization-rules.html)

ScriptableObject

Managing update and execution order
