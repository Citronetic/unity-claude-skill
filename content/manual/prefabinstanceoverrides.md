This version of Unity is unsupported.

Overriding prefab instance data

Removing unused override data

# Override prefab instances

You can override the properties and components of a **prefab**An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](Prefabs.html)
See in [Glossary](Glossary.html#Prefab) instance to create variations between instances, while still linking those instances to the same prefab asset. For example, you might create several instances of the same character, but override its speed value, and assign a different **audio clip**A container for audio data in Unity. Unity supports mono, stereo and multichannel audio assets (up to eight channels). Unity can import .aif, .wav, .mp3, and .ogg audio file format, and .xm, .mod, .it, and .s3m tracker module formats. [More info](class-AudioClip.html)
See in [Glossary](Glossary.html#AudioClip) to each instance.

When you change any of the following on a prefab instance, Unity treats it as an override:

- The values of a property.

- Adding or removing a component.

- Adding or removing a child **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject).

If you modify or delete any **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts) that declare the value of an instance override, then the override becomes unused. For information on how to remove unused override data, refer to [Remove unused override data](UnusedOverrides.html).

## Appearance of overrides in the Editor

Unity indicates overrides with a blue line on the left of the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) window. Any added or removed components have a plus or minus badge on their icon.

[Image: A prefab instance Inspector with an added Box Collider component as an override, indicated with a plus badge on its icon (highlighted). The Max Health property on the Health script also has an override, indicated in bold and with a blue line to the left of the property.]
A prefab instance Inspector with an added Box Collider component as an override, indicated with a plus badge on its icon (highlighted). The Max Health property on the Health script also has an override, indicated in bold and with a blue line to the left of the property.

In the Hierarchy, any added objects have a plus badge on their icons.

[Image: The Hierarchy window showing a Prefab instance with a child prefab instance called Banana added as an override.]
The Hierarchy window showing a Prefab instance with a child prefab instance called Banana added as an override.

## Behavior of overrides

An overridden property value on a prefab instance always takes precedence over the value from the prefab asset. This means that if you change a property on a prefab asset, it doesn’t have any effect on instances where that property is overridden.

If you edit a prefab asset and some instances don’t update as expected, check if that property is overridden on those instances. If your project has many instance overrides, it can be hard to track which changes take effect, so consider using [prefab variants](PrefabVariants.html) for more manageable variations.

### Transform overrides

A prefab instance’s **Position** and **Rotation** properties always differ from the root prefab asset’s properties and aren’t an explicit override. This is because in most projects, different prefab instances need to be at different positions and rotations to the original prefab asset, so Unity doesn’t consider this to be an override.

For a Rect Transform, the **Width**, **Height**, **Margins**Minimum distance between UV charts within the same layout. Margin helps prevent texture bleeding between charts during filtering and mipmapping, and is usually specified in texels at the target resolution.
See in [Glossary](Glossary.html#Margin), **Anchors**A UI layout tool that fixes a UI element to a parent element. Anchors are shown as four small triangular handles in the Scene view and anchor information is also shown in the Inspector. [More info](https://docs.unity3d.com/Packages/com.unity.ugui@latest/index.html?subfolder=/manual/UIBasicLayout.html#anchors)
See in [Glossary](Glossary.html#Anchor) and **Pivot** properties aren’t considered overrides.

## Apply overrides to the prefab asset

You can use the [Override](prefab-instance-inspector-reference.html) dropdown to apply override data permanently to the root prefab asset of the instance, and discard the override. You can also revert the instance back to the original settings of the prefab asset.

[Image: The Inspector window of a prefab instance, with the Override menu selected.]
The Inspector window of a prefab instance, with the Override menu selected.

To apply or revert changes to a prefab asset:

1. Select the prefab instance in the Hierarchy.

2. In the Inspector, select **Override**.

3. You can apply or revert overrides in the following ways:

- To apply or revert all overrides to the prefab asset, select **Apply All** or **Revert All**.

- To apply or revert a selection of overrides to the prefab asset, click the override, and then use Ctrl (macOS: Command), or Shift to select the overrides. Then select **Apply Selected** or **Revert Selected**.

- To apply or revert an individual override, select the individual override, and then select **Revert** or **Apply**. Depending on the context, you can choose to apply the override to the prefab asset, or the [prefab variant](PrefabVariants.html).

If there are [unused overrides](UnusedOverrides.html) on any selected objects, the **Overrides** drop down displays an option that allows you to remove them.

### Apply individual overrides with the context menu

You can also revert or apply individual overrides to a prefab asset with the context menu in the Inspector or Hierarchy. To do so:

- For added, removed, or modified components, select the More menu (three dots), and then select **Added Component**, **Removed Component**, or **Modified Component**. You can then select **Revert** or **Apply**.

- For individual properties, right-click on the property and select **Apply** or **Revert**.

- For added GameObjects, right-click the object in the Hierarchy and then select **Added GameObject** > **Apply** or **Revert**.

The options available in the context menus vary depending on the type of prefab. For example, if the prefab instance has a [nested prefab](NestedPrefabs.html), you can use the context menu to apply overrides to either the prefab asset of the nested prefab, or the prefab asset of the root prefab instance. Similarly, if you’ve created a [prefab variant](PrefabVariants.html), you can choose to apply the override to the prefab variant, or the original prefab asset.

## Additional resources

- [Remove unused override data](UnusedOverrides.html)

- [Create prefabs](CreatingPrefabs.html)

- [Create variations of prefabs](PrefabVariants.html)

Overriding prefab instance data

Removing unused override data
