This version of Unity is unsupported.

Tilemaps in Unity

Work with tilemaps

# Tilemaps

Unity’s **Tilemap**A GameObject that allows you to quickly create 2D levels using tiles and a grid overlay. [More info](../tilemaps/work-with-tilemaps/tilemap-reference.html)
See in [Glossary](../Glossary.html#Tilemap) system stores and handles [Tile Assets](tiles-for-tilemaps/tile-asset-reference.html) for creating 2D levels, which makes it easy to create and iterate level design cycles within Unity. The Tilemap system transfers the required information from the Tiles placed on it to other related components such as the [Tilemap Renderer](work-with-tilemaps/tilemap-renderer-reference.html) and the [Tilemap Collider 2D](work-with-tilemaps/tilemap-collider-2d-reference.html).

By default, the Tilemap package isn’t included in the Unity Editor, so you must download the **2D Tilemap** Editor package from the [Package Manager](../Packages.html).

When you create a Tilemap, the Grid component is automatically parented to the Tilemap and acts as a guide when you lay out Tiles onto the Tilemap. To create, change, or pick the Tiles for painting onto a Tilemap, use the **Tile Palette** (menu: **Window** > **2D** > **Tile Palette**) and its tools. For more information, refer to [Creating a Tile Palette](tile-palettes/create-tile-palette.html) and the [Tile Palette editor reference](tile-palettes/tile-palette-editor-reference.html).

## Render Pipeline Compatibility

Tilemaps are supported by all **render pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) that support 2D projects.

| Feature name | Universal Render Pipeline (URP) | High Definition Render Pipeline (HDRP) | Built-in Render Pipeline |
| --- | --- | --- | --- |
| Tilemaps | Yes | Yes | No |

Tilemaps in Unity

Work with tilemaps
