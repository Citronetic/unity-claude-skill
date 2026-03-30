This version of Unity is unsupported.

Prefabs

Create prefabs

# Introduction to prefabs

You can use **prefabs**An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](Prefabs.html)
See in [Glossary](Glossary.html#Prefab) to reuse [GameObject](GameObjects.html)The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) configurations in multiple places in a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) or across different scenes in your project. The prefab system keeps all copies of a GameObject in sync, so when you make changes to a prefab asset, Unity updates all instances of that prefab automatically. This allows you to update multiple GameObjects without needing to edit each copy individually.

[Image: A selection of prefabs in the Project window.]
A selection of prefabs in the Project window.

Common uses for prefabs include:

- **Environmental assets:** For example, a specific type of tree used multiple times in a level.

- **Non-player characters (NPCs):** For example, a robot that appears in multiple levels, with differences (using overrides) such as movement speed or sound.

- **Projectiles:** For example, a pirate ship’s cannon instantiates a cannonball prefab each time it’s fired.

- **Main playable character:** The character prefab can be placed at the starting point in each scene of your game.

Prefabs are also useful when you want to [instantiate GameObjects at runtime](instantiating-prefabs.html) that don’t exist in your scene at the start. For example, you might spawn in-game items, special effects, projectiles, or NPCs during gameplay.

## Working with prefabs

To work with prefabs, you [create a prefab asset](CreatingPrefabs.html), which you then use to create prefab instances within a scene.

You can [nest prefabs](NestedPrefabs.html) inside other prefabs to create complex hierarchies of objects that you can edit at multiple levels. However, not all prefab instances need to be identical. You can [override](PrefabInstanceOverrides.html) settings on individual prefab instances if you want some to differ from others. You can also create [prefab variants](PrefabVariants.html) to group a set of overrides into different variations of a prefab.

If you override prefabs it’s useful to understand the difference between the prefab’s source, and its original source, so you can determine what parts of a prefab are overridden:

- **Source**: The nearest prefab asset in the inheritence chain that defines the object.

- **Original source**: The root prefab asset that originally introduced the object.

For example, if you create a prefab asset named `Light` and used it in a scene, the corresponding sources are as follows:

| Prefab type | Source | Original source |
| --- | --- | --- |
| Prefab instance | Original Light prefab asset. | Original Light prefab asset. |
| Prefab variant | Variant of Light prefab asset. | Original Light prefab asset. |
| Nested prefab | The nested Light prefab asset. | The nested Light prefab asset. |

You can use the [`PrefabUtility.GetCorrespondingObjectFromSource`](../ScriptReference/PrefabUtility.GetCorrespondingObjectFromSource.html) method to get the source of a prefab, and [`GetCorrespondingObjectFromOriginalSource`](../ScriptReference/PrefabUtility.GetCorrespondingObjectFromOriginalSource.html) to get the original source of the prefab.

## Prefab Inspector previews

When you select a prefab, its **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) window contains an Asset Preview pane which displays a preview of the prefab. If the prefab is smaller than 8 MB, the preview is interactive, and you can rotate the prefab in the pane.

If the prefab is larger than 8 MB, the Asset Preview displays a static image by default. To view an interactive preview for larger prefabs, click anywhere inside the Asset Preview pane.

## Additional resources

- [Creating prefabs](CreatingPrefabs.html)

- [The Inspector window](UsingTheInspector.html)

Prefabs

Create prefabs
