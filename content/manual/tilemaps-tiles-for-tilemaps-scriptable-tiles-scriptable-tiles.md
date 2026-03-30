This version of Unity is unsupported.

Scriptable Tile assets

Create a scriptable tile

# Scriptable tiles

Scriptable tiles are tiles that you can assign behavior **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](../../../creating-scripts.html)
See in [Glossary](../../../Glossary.html#Scripts) to and you can paint with the scriptable tiles on a **Tilemap**A GameObject that allows you to quickly create 2D levels using tiles and a grid overlay. [More info](../../../tilemaps/work-with-tilemaps/tilemap-reference.html)
See in [Glossary](../../../Glossary.html#Tilemap) component.

These C# scripts allow you to customize how the tile interacts with other tiles or other behaviours defined by the [TileBase](../../../../ScriptReference/Tilemaps.TileBase.html) class.

All tiles added to a Tilemap component must inherit from `TileBase`. `TileBase` provides a tilemap with a fixed set of APIs to communicate its rendering properties. For most cases of the APIs, the location of the tile and the instance of the tilemap the tile is placed on is passed in as arguments of the API. You can use this to find any required attributes for setting the tile information.

The most common methods to override are:

- `RefreshTile` determines which Tiles in the vicinity are updated when this Tile is added to the Tilemap.

- `GetTileData` determines what the Tile looks like on the Tilemap.

Scriptable Tile assets

Create a scriptable tile
