This version of Unity is unsupported.

Removing unused override data

Instantiating prefabs at runtime

# Revert a prefab instance to a GameObject

If you want to convert a **prefab**An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](Prefabs.html)
See in [Glossary](Glossary.html#Prefab) instance into a regular [GameObject](GameObjects.html)The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject), you can use the **Unpack** command. Unity then unpacks the prefab instance into GameObjects but retains the original prefab asset.

To use the **Unpack** command to convert a prefab instance into a GameObject, perform the following steps:

1. In the [Hierarchy](Hierarchy.html), right-click on the prefab instance.

2. Select **Prefab** > **Unpack**.

Unity converts the prefab instance into a GameObject which no longer has any links to the original prefab asset. Unity also saves any [overrides](PrefabInstanceOverrides.html) on the prefab instance into the GameObject.

The **Unpack** command only unpacks the selected prefab instance, and has the following effects:

- If you unpack a prefab instance that has [nested prefabs](NestedPrefabs.html), the nested prefabs remain as prefab instances inside the new GameObject.

- If you unpack a [prefab variant](PrefabVariants.html), the root becomes a new prefab instance of the base prefab asset of the variants. Unity converts all properties of the variant which differ from the original prefab asset into overrides.

To completely unpack a prefab instance and its nested prefabs, or to completely unpack a variant to its base set of GameObjects, select **Prefab** > **Unpack Completely**.

## Additional resources

- [Create prefabs](CreatingPrefabs.html)

- [Nest prefab instances in other prefabs](NestedPrefabs.html)

- [Create variations of prefabs](PrefabVariants.html)

Removing unused override data

Instantiating prefabs at runtime
