This version of Unity is unsupported.

Edit prefab assets

Create variations of prefabs

# Nest prefab instances in other prefabs

You can include **prefab**An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](Prefabs.html)
See in [Glossary](Glossary.html#Prefab) instances inside other prefabs. Prefab instances included in other prefabs are called nested prefabs. Nested prefabs keep their links to their own prefab assets, while also forming part of another prefab asset.

You can add nested prefabs in [prefab editing mode](EditingInPrefabMode.html), or from the Hierarchy view.

## Add a nested prefab in prefab editing mode

1. Select the prefab you want to edit, and open [prefab editing mode](EditingInPrefabMode.html).

2. Drag another prefab into the Hierarchy or **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) view. You can also add any overrides to these prefab instances.

## Add a nested prefab from the Hierarchy

You can add a prefab instance as a child of another prefab in the Hierarchy view.

1. In the Hierarchy, select the dropdown arrow next to the prefab you want to edit.

2. Drag a prefab from the **Project window**A window that shows the contents of your `Assets` folder (Project tab) [More info](ProjectView.html)
See in [Glossary](Glossary.html#Projectwindow) into the prefab’s hierarchy.

[Image: An enemy bot variant prefab, with a nested Weapon Blaster prefab, and a recently added Banana prefab override.]
An enemy bot variant prefab, with a nested Weapon Blaster prefab, and a recently added Banana prefab override.

The nested prefab is applied as an [override](PrefabInstanceOverrides.html) to the parent prefab asset, indicated by a green plus icon. You can optionally apply these override changes permanently to the parent prefab asset. For more information, refer to [Apply overrides to the prefab asset](PrefabInstanceOverrides.html#apply-overrides-to-the-prefab-asset).

## Additional resources

- [Edit prefab assets](EditingInPrefabMode.html)

- [Create prefabs](CreatingPrefabs.html)

- [Create variations of prefabs](PrefabVariants.html)

Edit prefab assets

Create variations of prefabs
