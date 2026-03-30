This version of Unity is unsupported.

Change the color of a sprite

Sprite Renderer reference

# Set the sort point of a sprite

This property is only available when the **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../sprite/sprite-landing.html)
See in [Glossary](../../Glossary.html#Sprite) Renderer’s **Draw Mode** is set to **Simple**.

In a 2D project, the Main **Camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../../CamerasOverview.html)
See in [Glossary](../../Glossary.html#Camera) is set to [Orthographic Projection mode](../../class-Camera.html) by default. In this mode, Unity renders sprites in the order of their distance to the camera, along the direction of the Camera’s view.

[Image: Orthographic Camera: Side view (top) and Game view (bottom)]
**Orthographic Camera:** Side view (top) and Game view (bottom)

By default, a Sprite’s **Sort Point** is set to its **Center**, and Unity measures the distance between the camera’s Transform position and the Center of the Sprite to determine their render order.

To set to a different **Sort Point** from the Center, select the **Pivot** option. Edit the Sprite’s Pivot position in the [Sprite Editor](../sprite-editor/sprite-editor-landing.html).

---

SpriteRenderer

Change the color of a sprite

Sprite Renderer reference
