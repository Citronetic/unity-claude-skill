This version of Unity is unsupported.

Components

Use components

# Introduction to components

**Components** are the functional pieces of every **GameObject**. Components contain properties which you can edit to define the behavior of a GameObject. For more information on the relationship between components and GameObjects, see [GameObjects](GameObjects.html)The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject).

To view a list of the components attached to a GameObject in the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) window, select a GameObject in either the Hierarchy window or the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) view.

You can attach many components to a GameObject, but every GameObject must have one and only one Transform component. This is because the Transform component dictates the GameObject’s location, rotation, and scale. To create an empty GameObject, select **GameObject** > **Create Empty**. When you select the new GameObject, the Inspector displays the Transform component with default values.

[Image: Empty GameObjects have a Transform component]
Empty GameObjects have a Transform component

A component must be in the same project as the GameObject you want to attach it to. A component can be specific to a package or created by a script. The Unity Editor can’t search for components from:
* Other projects.
* **Scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts) that are not attached to the project.
* [Packages](Packages.html)Packages are collections of assets to be shared and re-used in Unity. The [Unity Package Manager](upm-ui.html) (UPM) can display, add, and remove packages from your project. These packages are native to the Unity Package Manager and provide a fundamental method of delivering Unity functionality. However, the Unity Package Manager can also display [Asset Store packages](AssetStorePackages.html) that you downloaded from the Asset Store. [More info](Packages.html)
See in [Glossary](Glossary.html#Packages) that haven’t been added to the project.

## Additional resources

- [Manage components and their values](InspectorManageComponents.html)

- [The Inspector window](UsingTheInspector.html)

Components

Use components
