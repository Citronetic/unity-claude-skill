This version of Unity is unsupported.

Select tiles with the Select tool

Modify Tilemap reference

# Grid Selection properties reference

Use the [Select tool](./select-tiles-with-select-tool.html) to select one or more grid cells. The Grid Selection ****Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../../../../UsingTheInspector.html)
See in [Glossary](../../../../Glossary.html#Inspector)** window displays the contents and properties of the tiles at the selected location.

| Property | Function |
| --- | --- |
| Tile | Displays the tile at the selected cell location. If you select multiple cells, and they display the same tile, then this property displays that tiles’ name. If you select multiple cells with different tiles, this property is blank. |
| SpriteA 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. More infoSee in Glossary | Displays the sprite assigned to the tile in the Tile property above. If you select multiple cells with the same tile, then this displays the same sprite. If you select multiple cells with different tiles, this property is blank. This is grayed out by default and can’t be edited. |
| Color | The vertex color of the sprite. This is grayed out if Lock Color is enabled, so you can’t edit it. |
| ColliderAn invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. More infoSee in Glossary Type | The collider type of the tiles at the selected location. This is grayed out and can’t be edited. |
| Position | Enter the offset (in cells) for each axis to shift the tile sprites along the respective axis. This changes where Unity displays the tile sprites on the tilemapA GameObject that allows you to quickly create 2D levels using tiles and a grid overlay. More infoSee in Glossary, but doesn’t change the tiles’ actual cell positions on the tilemap. |
| Rotation | This rotates one or more tile sprites at the selected location. Enter the rotation (in degrees) for each axis to rotate the tile sprites around the respective axis. This changes how Unity displays the tile sprites on the tilemap, but doesn’t change the tiles’ actual cell positions on the tilemap. |
| Scale | Scales the size of one or more tile sprites at the selected location. Enter the factor for each axis to scale the tile sprite by along the respective axis. This changes how Unity displays the tile sprites on the tilemap, but doesn’t change the tiles’ actual cell positions on the tilemap. |
| Lock Color | Select this to prevent changes to the Color of the tile, and clear this to enable the Color property. When this property is grayed out, its state remains fixed. Refer to the Tilemaps.TileFlags set in the Tile Asset to change this property. |
| Lock Transform | Select this to prevent changes to the Transforms of the tile, and clear this to enable the Transform properties. When this property is grayed out, its state remains fixed. Refer to the Tilemaps.TileFlags set in the Tile Asset to change this property. |
| Delete Selection | Select this to delete the contents of selected cells in the tilemap. |

## Additional resources

- [Modify Tilemap reference](./modify-tilemap-reference.html)

- [Tile Palette editor reference](../../tile-palette-editor-reference.html)

Select tiles with the Select tool

Modify Tilemap reference
