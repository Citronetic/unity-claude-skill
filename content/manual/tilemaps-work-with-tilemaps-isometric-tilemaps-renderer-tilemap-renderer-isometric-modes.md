This version of Unity is unsupported.

Tilemap Renderer for Isometric Tilemaps

Sort isometric Sprites with the Sprite Atlas

# Tilemap Renderer isometric modes

The **Tilemap Renderer** component renders the [Tilemap](../../tilemap-reference.html)A GameObject that allows you to quickly create 2D levels using tiles and a grid overlay. [More info](../../../../tilemaps/work-with-tilemaps/tilemap-reference.html)
See in [Glossary](../../../../Glossary.html#Tilemap) in the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../../../CreatingScenes.html)
See in [Glossary](../../../../Glossary.html#Scene). Unity creates Tilemaps with the Tilemap Renderer attached by default. The Tilemap Renderer can:

- [Render in batches with **Chunk Mode**](#batch)

- [Render individually with **Individual Mode**](#individual)

The Render Mode affects the sorting of Tilemap **Sprites**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../../sprite/sprite-landing.html)
See in [Glossary](../../../../Glossary.html#Sprite) when rendered.

## Rendering in batches with Chunk Mode

**Chunk Mode** is the default rendering mode of the Tilemap Renderer.

When set to **Chunk Mode**, the Tilemap Renderer handles Sprites on a Tilemap in batches and renders them together. They’re treated as a single sort item when sorted in the [2D Transparent Queue](../../../../2d-renderer-sorting.html). While this reduces draw calls, other renderers can’t render between any part of the Tilemap, preventing other rendered Sprites from interweaving with Tilemap Sprites.

In **Chunk Mode**, the Tilemap Renderer isn’t able to sort Tiles from multiple textures individually and doesn’t render the tile sprites consistently. For information on how to work with this, refer to [Use the Sprite Atlas for sorting Sprites](sort-isometric-sprites-sprite-atlas.html).

## Rendering individually with Individual Mode

In **Individual Mode**, the Tilemap Renderer sorts and renders the Sprites on a Tilemap with consideration of other Renderers in the Scene, such as the [Sprite Renderers](../../../../sprite/renderer/renderer-landing.html)A component that lets you display images as Sprites for use in both 2D and 3D scenes. [More info](../../../../sprite/renderer/renderer-landing.html)
See in [Glossary](../../../../Glossary.html#SpriteRenderer) and [Mesh Renderers](../../../../class-MeshRenderer.html)A mesh component that takes the geometry from the Mesh Filter and renders it at the position defined by the object’s Transform component. [More info](../../../../class-MeshRenderer.html)
See in [Glossary](../../../../Glossary.html#MeshRenderer). Use this mode if other Renderers interact with Sprites and objects on the Tilemap.

In this mode, the Tilemap Renderer sorts sprites based on their position on the Tilemap and the sorting properties set in the Tilemap Renderer. For example, this allows a character sprite to go in-between obstacle sprites (refer to the example below).

[Image: In Individual Mode, the character can be rendered behind the tower Sprites, and also appear above the ground Sprites.]
In Individual Mode, the character can be rendered behind the tower Sprites, and also appear above the ground Sprites.

Using the same example in **Chunk Mode**, character sprites might get hidden behind ground sprites:

[Image: The same Scene rendered in Chunk Mode.]
The same Scene rendered in **Chunk Mode**.

Using **Individual Mode** might reduce performance as there is more overhead when rendering each sprite individually on the Tilemap.

To sort and render tile sprites on an **Isometric Z as Y** Tilemap, you must set the **Transparency Sort Axis** to a **Custom Axis**. For more information on how to do this, refer to [Custom Sorting Axis for Tilemaps in Individual Mode](sort-sprites-custom-sorting-axis.html).

Tilemap Renderer for Isometric Tilemaps

Sort isometric Sprites with the Sprite Atlas
