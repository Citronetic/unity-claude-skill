This version of Unity is unsupported.

Tilemap Renderer isometric modes

Sort Sprites with a Custom Sorting Axis

# Sort isometric Sprites with the Sprite Atlas

In **Chunk Mode**, the **Tilemap**A GameObject that allows you to quickly create 2D levels using tiles and a grid overlay. [More info](../../../../tilemaps/work-with-tilemaps/tilemap-reference.html)
See in [Glossary](../../../../Glossary.html#Tilemap) Renderer isn’t able to sort Tiles from multiple textures individually and doesn’t render the tile **sprites**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../../sprite/sprite-landing.html)
See in [Glossary](../../../../Glossary.html#Sprite) consistently.

[Image: The Scene view with an example of isometric tile rendering issues.]
The Scene view with an example of isometric tile rendering issues.

Pack all the individual Sprites that make up the Tilemap into a single [Sprite Atlas](https://docs.unity3d.com/Manual/SpriteAtlas.html)A utility that packs several sprite textures tightly together within a single texture known as an atlas. [More info](../../../../sprite/atlas/v2/v2-landing.html)
See in [Glossary](../../../../Glossary.html#SpriteAtlas) to solve this issue. To do this:

1. Create a **Sprite Atlas** from the Assets menu (go to: **Atlas > Create > Sprite Atlas**).

2. Add the Sprites to the Sprite Atlas by dragging them to the **Objects for Packing** list in the Atlas’ **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../../../../UsingTheInspector.html)
See in [Glossary](../../../../Glossary.html#Inspector) window.

[Image: Objects for packing list]
**Objects for packing** list

3. Click **Pack Preview**. Unity packs the Sprites into the Sprite Atlas during Play mode, and correctly sorts and renders them. This is only visible in the Editor during Play mode.

[Image: Isometric tilemap]
Isometric tilemap

Tilemap Renderer isometric modes

Sort Sprites with a Custom Sorting Axis
