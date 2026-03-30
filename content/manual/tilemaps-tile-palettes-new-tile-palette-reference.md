This version of Unity is unsupported.

Create Brush Picks from tiles with the Pick tool

Tile palette preferences reference

# New tile palette properties reference

When you create a new tile palette, you must configure its properties before the tile palette asset can be created.

| Property | Function |
| --- | --- |
| Name | Provide a name for the created Tile Palette Asset. |
| Grid | Select the Grid layout the created Tile Palette will be used to paint on. |
| Rectangle | Select this if creating a Palette for the default rectangular TilemapA GameObject that allows you to quickly create 2D levels using tiles and a grid overlay. More infoSee in Glossary. |
| Hexagon | Select this when creating a Palette for a Hexagonal Tilemap. |
| Isometric | Select this when creating a Palette for a Isometric Tilemap. Refer to Creating a Tile Palette for an Isometric Tilemap for more information. |
| Isometric Z as Y | Select this when creating a Palette for a Isometric Z as Y Tilemap. Refer to Creating a Tile Palette for an Isometric Tilemap for more information. |
| Hexagon Type (only available when the Hexagon Grid type is selected) | Select the type of Hexagonal Tilemap that the Palette will be used to paint on. Refer to the documentation on Hexagonal Tilemaps for more information. |
| Cell Size | The size of a cell that the Tiles are painted on. |
| Automatic | The Cell Size is automatically set in Unity unitsThe unit size used in Unity projects. By default, 1 Unity unit is 1 meter. To use a different scale, set the Scale Factor in the Import Settings when importing assets.See in Glossary and based on the size of the SpriteA 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. More infoSee in Glossary used to create the Tile Assets. If there are multiple Tiles, the Cell Size is adjusted to match the first Tile from the bottom left of the Palette, so that it fits exactly on a cell. |
| Manual | Select this option to input custom size values. |
| Sort Mode | Determines the transparency sort mode of Renderers in the Tile Palette. |
| Default | The default transparency Sort Mode. This mode is determined by the Graphics Settings of the project. |
| Orthographic | Select this mode to sort Renderers based on the perpendicular distance from the cameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary to a Renderer in the Tile Palette. |
| Perspective | Select this mode to sort Renderers based on the direct distance from the camera to a Renderer in the Tile Palette. |
| Custom Axis Sort | Select this mode to sort objects based on their distance along a custom axis. |
| Sort Axis | Set the XYZ values for the sorting axis, if the Sort Mode is set to Custom Axis Sort. |

Create Brush Picks from tiles with the Pick tool

Tile palette preferences reference
