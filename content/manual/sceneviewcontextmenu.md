This version of Unity is unsupported.

Programming with gizmos and handles

Custom Editor tools

# Scene view context menu

Use the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) view context menu to access common **Scene view**An interactive view into the world you are creating. You use the Scene View to select and position scenery, characters, cameras, lights, and all other types of Game Object. [More info](UsingTheSceneView.html)
See in [Glossary](Glossary.html#SceneView) actions directly in the scene rather than from the menu **toolbar**A row of buttons and basic controls at the top of the Unity Editor that allows you to interact with the Editor in various ways (e.g. scaling, translation). [More info](Toolbar.html)
See in [Glossary](Glossary.html#Toolbar).

The menu options that display in the Scene view context menu depend on your current selection and the tool context enabled in the Tools overlay. If you’ve selected a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject), the Scene view context menu displays options for that GameObject and any relevant attached components.

To display the context menu, right-click in the Scene view.

**Note**: You can select a different shortcut to display the Scene view context menu in the [Shortcuts Manager](ShortcutsManager.html).

The default tool context in the Scene view is **GameObject**. When the **GameObject** tool context is enabled, the Scene view context menu displays the following menu items by default when you select a GameObject:

- Clipboard actions such as cut, copy, paste, delete, and duplicate.

- GameObject view options to help you visualize the selected GameObject in the Scene view.

- The option to [Isolate selected GameObjects](SceneVisibility.html#isolate-go) in the Scene view so that only the selected GameObject is visible.

- The option to a add a [component](UsingComponents.html)A functional part of a GameObject. A GameObject can contain any number of components. Unity has many built-in components, and you can create your own by writing scripts that inherit from MonoBehaviour. [More info](UsingComponents.html)
See in [Glossary](Glossary.html#component) to the selected GameObject.

- The option to open the [properties](InspectorManageComponents.html) of the selected in GameObject in a new window.

- The [Prefab](Prefabs.html)An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](Prefabs.html)
See in [Glossary](Glossary.html#Prefab) menu.

- The [Transform](class-Transform.html) menu.

If the GameObject has additional components attached to it, actions related to those components display at the end of the Scene view context menu.

If your project contains multiple tool contexts, you can use the first button in the Tools overlay to select a tool context. If you enable a tool context that isn’t **GameObject**, the Scene view context menu displays options relevant to your selection in that tool context. For example, if your project contains the [Splines](https://docs.unity3d.com/Packages/com.unity.splines@latest) package and you enable the **Splines** tool context, then the Scene view context menu displays options to create and edit splines.

## Additional resources

- [Using the Scene view](UsingTheSceneView.html)

- [Scene view navigation](SceneViewNavigation.html)

- [Keyboard shortcuts](ShortcutsManager.html)

Programming with gizmos and handles

Custom Editor tools
