This version of Unity is unsupported.

Manage the Inspector window

Focus an Inspector window

# Inspect items

What you can view and edit in an **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) window depends on the type of item you’re inspecting. This section describes what an Inspector window displays for different types of items you can select.

| Item type | Description |
| --- | --- |
| Single GameObject | The GameObject’s components and materials. For more information, refer to Manage components and their values. |
| Multiple GameObjects | The components that the selected GameObjects have in common, and a message if: - Any components are hidden because one or more GameObjects don’t have those components. - Any components don’t support editing across multiple GameObjects. - If a component’s values are the same across all selected GamedObjects, the Inspector shows the value. If the values are different across two or more selected GameObjects, the Inspector displays a dash (-). To apply a property value from one selected GameObject to all selected GameObjects, right-click the property name and select Set to Value of [Name of GameObject] from the context menu. |
| Single prefab | Same as other GameObjects, but with additional actions. When you edit a prefab instance, the Inspector window displays options for working with the prefab asset and applying overrides. The Inspector window displays the names of properties you override in bold. |
| Multiple prefabs | You can inspect multiple prefab instances in the same way as multiple GameObjects, but the Inspector hides the Select, Revert, and Apply buttons. For more information, refer to Prefab instance Inspector reference. |
| Single assets | The asset’s import settings and runtime properties. Each type of asset has its own settings, for example the Model Import Settings, Audio Clip Import Settings, and the Texture Import Settings. |
| Multiple assets | The properties that the selected assets have in common. If a property’s values are the same across all selected assets, the Inspector shows the value. If the values are different across two or more selected assets, the Inspector displays a dash (-). Properties you can’t edit for all assets at once are grayed out. |
| Script | The Inspector displays the script’s public variables, and private fields with the SerializeField attribute. Use these to set parameters and default values without modifying the script’s code. To hide these variables, use HideInInspector. |

**Tip:** You can use the **Inspector** window to locate an item in the **Hierarchy** window. From the Inspector window’s **More Items** (**⋮**) menu, select **Ping**.

## Additional resources

- [Inspecting scripts](inspecting-scripts.html)

- [GameObjects](working-with-gameobjects.html)The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject)

- [Components](unity-components.html)A functional part of a GameObject. A GameObject can contain any number of components. Unity has many built-in components, and you can create your own by writing scripts that inherit from MonoBehaviour. [More info](UsingComponents.html)
See in [Glossary](Glossary.html#component)

- [Prefabs](Prefabs.html)An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](Prefabs.html)
See in [Glossary](Glossary.html#Prefab)

- [The Hierarchy window](Hierarchy.html)

Manage the Inspector window

Focus an Inspector window
