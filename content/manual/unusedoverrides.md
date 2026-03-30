This version of Unity is unsupported.

Override prefab instances

Revert a prefab instance to a GameObject

# Removing unused override data

An [override](PrefabInstanceOverrides.html) on a **prefab**An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](Prefabs.html)
See in [Glossary](Glossary.html#Prefab) might become unused in the following situations:

- The override’s target object is invalid.

- The override’s [property path](../ScriptReference/PropertyModification-propertyPath.html) is unknown. This might happen if you delete a public field definition or rename it. To preserve overrides when renaming fields, you can use [`FormerlySerializedAsAttribute`](../ScriptReference/Serialization.FormerlySerializedAsAttribute.html).

Unity stores the unused override data in the **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) file, which means that if you restore the deleted script or field definition, Unity reapplies the override data. Unity doesn’t automatically clean up unused data because you might have moved the object or property the data refers to temporarily or in error. It’s best practice to clean up unused override data to ensure that scene files only contain relevant data, which makes **version control**A system for managing file changes. You can use Unity in conjunction with most common version control tools, including Perforce, Git, Mercurial and PlasticSCM. [More info](VersionControl.html)
See in [Glossary](Glossary.html#VersionControl) and collaboration easier.

## Remove unused overrides

To check for and remove unused overrides, perform the following steps:

1. In the prefab instance **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector), select [**Overrides**](prefab-instance-inspector-reference.html).

2. Select **Unused overrides**. If the prefab instance doesn’t have any unused overrides, this section is unavailable.

3. The **Unused overrides** panel displays a list of the unused overrides. Select **Remove** to remove them.

Unity writes details of the removed overrides to the [Editor log](log-files.html).

[Image: Unused overrides panel, displaying unused overrides on the selected prefab.]
Unused overrides panel, displaying unused overrides on the selected prefab.

You can also remove unused overrides from the Hierarchy:

- Right-click on a prefab instance and select **Prefab > Remove Unused Overrides**.

- Right-click on the scene name and select **Prefab > Remove Unused Overrides** to remove all unused overrides in the entire scene.

A dialog appears to confirm the removal of the overrides.

## Additional resources

- [Override prefab instances](PrefabInstanceOverrides.html)

- [Prefab instance reference](prefab-instance-inspector-reference.html)

Override prefab instances

Revert a prefab instance to a GameObject
