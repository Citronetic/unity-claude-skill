This version of Unity is unsupported.

Sort renderers within a sorting group

Sorting group reference

# Use sorting groups

The most common way to create a 2D multi-Sprite character is to arrange and parent multiple **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../sprite/sprite-landing.html)
See in [Glossary](../../Glossary.html#Sprite) Renderers together in the Hierarchy window to form a character. You can use **Sorting Groups** to help manage this kind of complex multi-Sprite character.

In the example below, the **Sprite Renderers**A component that lets you display images as Sprites for use in both 2D and 3D scenes. [More info](../../sprite/renderer/renderer-landing.html)
See in [Glossary](../../Glossary.html#SpriteRenderer) belong to the same **Sorting Layer**, but with different **Order in Layer** values. Unity sorts the different parts of a character in the order that you want them to appear.

[Image: A character Prefab with its parts in a hierarchy.]
A character Prefab with its parts in a hierarchy.

After you’ve configured the Sorting Groups and Sorting Layers, you can save your character as a [Prefab](../../Prefabs.html)An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](../../Prefabs.html)
See in [Glossary](../../Glossary.html#Prefab), and clone it as many times as you need to.

However, Prefab sprites all have the same **Sorting Layer** and **Order in Layer** values and render to the same layers as other Prefabs, which can cause different parts of a Prefab character to intersect and layer incorrectly.

[Image: sprites from two Prefabs intersect incorrectly, because Unity is rendering the sprites on the same layers.]
sprites from two Prefabs intersect incorrectly, because Unity is rendering the sprites on the same layers.

To make sure Prefabs keep their own render order consistent so they appear correctly, add the Sorting Group component to the root **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject) of each Prefab. Save the edited Prefab, so that all current and future instances of the Prefab also have the Sorting Group component.

Each Prefab should have a Sorting Group component with the same **Sorting Layer** and **Order in Layer** property settings. This might cause Renderers in the Prefabs that are on the same **Sorting Layer** to render in inconsistent ways, because they have the same priority in the [Render Queue](../../SL-SubShaderTags.html).

To prevent this issue, give each Prefab’s Sorting Group component a unique **Order in Layer** value. Unity renders Sorting Groups with lower **Order in Layer** values first and those with higher values overlap the Sorting Groups that are lower. Refer to [Tags and Layers](../../class-TagManager.html) for more information about editing and reordering **Sorting Layers**.

[Image: Sprites display as expected when each Prefab has a unique Order in Layer.]
Sprites display as expected when each Prefab has a unique Order in Layer.

Each Prefab has a Sorting Group component with a unique **Order in Layer** value to ensure that Unity renders each character and their parts correctly.

SortingGroup

Sort renderers within a sorting group

Sorting group reference
