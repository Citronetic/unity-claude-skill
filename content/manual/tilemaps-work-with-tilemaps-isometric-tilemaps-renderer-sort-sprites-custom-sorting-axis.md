This version of Unity is unsupported.

Sort isometric Sprites with the Sprite Atlas

Create an Isometric Tilemap

# Sort Sprites with a Custom Sorting Axis

To sort and render tile **sprites**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../../sprite/sprite-landing.html)
See in [Glossary](../../../../Glossary.html#Sprite) on an **Isometric Z as Y** **Tilemap**A GameObject that allows you to quickly create 2D levels using tiles and a grid overlay. [More info](../../../../tilemaps/work-with-tilemaps/tilemap-reference.html)
See in [Glossary](../../../../Glossary.html#Tilemap), set the Transparency Sort Axis to a **Custom Axis**. To do this:

1. Set the Tilemap Renderer component **Mode** to **Individual**.

2. Navigate to **Edit** > **Project Settings** > **Graphics**.

3. Set **Transparency Sort Mode** to **Custom Axis**.

4. Set the **Transparency Sort Axis** Y-value to 1 and the Z-value to –0.26.

Refer to the page on [Creating an Isometric Tilemap](../create-isometric-tilemap.html) for more information about the **Transparency Sort Axis** settings.

Sort isometric Sprites with the Sprite Atlas

Create an Isometric Tilemap
