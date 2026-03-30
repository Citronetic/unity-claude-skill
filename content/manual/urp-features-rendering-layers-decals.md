This version of Unity is unsupported.

Enable Rendering Layers for Lights in URP

Custom lighting in URP

# Enable Rendering Layers for Decals in URP

To enable Rendering Layers for decals in your project:

1. In the **Project** window, select a Renderer asset with a [Decal Renderer Feature](../renderer-feature-decal.html).

2. In the Decal Renderer Feature, enable **Use Rendering Layers**.

When you enable Rendering Layers for Decals, Unity shows the **Rendering Layers** property on each Decal Projector.

## Example

This section describes how to configure the following application example:

- The **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene) contains a Decal Projector.

- The Decal Projector projects a decal on the wall and the ground, but not on the paint bucket.

The following illustration shows the example:

[Image: In image 1, the paint bucket has the Receive decals layer selected. In image 2 it does not, so the Decal Projector does not project on the bucket.]
*In image `1`, the paint bucket has the `Receive decals` layer selected. In image `2` it does not, so the Decal Projector does not project on the bucket.*

To implement the example:

1. Enable Rendering Layers for Decals in your project.

2. [Create a Decal Projector](../renderer-feature-decal-create.html) in the scene.

3. Go to **Project Settings** > **Tags and Layers**. Add a Rendering Layer called `Receive decals`.

4. Select the Decal Projector. In the Rendering Layers property, select `Receive decals`.

5. Select the paint bucket **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject). In the **Rendering **Layer Mask**A value defining which layers to include or exclude from an operation, such as rendering, collision or your own code. [More info](../../Layers.html)
See in [Glossary](../../Glossary.html#LayerMask)** field, clear the `Receive decals` layer. Now the Decal Projector does not affect this GameObject.

## Additional resources

- [`RenderingLayerMask` API](../../../ScriptReference/RenderingLayerMask.html)

Enable Rendering Layers for Lights in URP

Custom lighting in URP
