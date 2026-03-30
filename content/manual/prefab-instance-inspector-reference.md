This version of Unity is unsupported.

Instantiate projectiles and explosions

Constraints

# Prefab instance Inspector reference

When you [create an instance of a prefab](CreatingPrefabs.html#create-an-instance-of-a-prefab), the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) contains specific **prefab**An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](Prefabs.html)
See in [Glossary](Glossary.html#Prefab) settings which you can use to edit the prefab instance and its parent prefab asset.

[Image: The Inspector window of a prefab instance, with the Override menu selected.]
The Inspector window of a prefab instance, with the Override menu selected.

## Overrides

Opens the **Overrides** dropdown window which displays any [overrides](PrefabInstanceOverrides.html) of the prefab instance. Use this window to apply overrides from the instance to the prefab asset, or revert overrides on the instance back to the values on the prefab asset. The **Overrides** window is only available for the root prefab instances, and not [nested prefabs](NestedPrefabs.html).

You can apply all changes to the asset with the following options:

- **Revert All**: Reverts all overrides on the prefab instance to the default setup of the parent prefab asset.

- **Apply All**: Applies all overrides on the prefab instance to the parent prefab asset.

If you want to apply or revert individual changes, select the specific override in the list, and then use the **Revert** or **Apply** buttons on the individual override.

For more information on prefab overrides, refer to [Override prefab instances](PrefabInstanceOverrides.html).

## Select

Selects the parent prefab asset of the prefab instance in the [Project window](ProjectView.html)A window that shows the contents of your `Assets` folder (Project tab) [More info](ProjectView.html)
See in [Glossary](Glossary.html#Projectwindow).

## Open

Open the parent prefab asset of the prefab instance in [prefab editing mode](EditingInPrefabMode.html).

## Additional resources

- [Create prefabs](CreatingPrefabs.html)

- [Override prefab instances](PrefabInstanceOverrides.html)

- [Remove unused override data](UnusedOverrides.html)

Instantiate projectiles and explosions

Constraints
