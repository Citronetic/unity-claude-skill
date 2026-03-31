This version of Unity is unsupported.



# [Tilemap](Tilemaps.Tilemap.html).SetTile




                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel















## Declaration

public void SetTile([Vector3Int](Vector3Int.html) position,
[Tilemaps.TileBase](Tilemaps.TileBase.html) tile);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Position of the Tile on the Tilemap. |
| tile | The Tile to be placed in the cell. |





### Description



Sets a [Tile](Tilemaps.Tile.html) at the given XYZ coordinates of a cell in the [Tilemap](Tilemaps.Tilemap.html).





Refer to [Scriptable Tiles](../Manual/Tilemap-ScriptableTiles-TileBase.html) and [Tilemap](../Manual/class-Tilemap.html) for more information.




---








## Declaration

public void SetTile([Tilemaps.TileChangeData](Tilemaps.TileChangeData.html) tileChangeData,
bool ignoreLockFlags);






### Parameters



| Parameter | Description |
| --- | --- |
| tileChangeData | The Tile with additional properties to be placed in the cell. |
| ignoreLockFlags | Whether to ignore Lock Flags set in the Tile's TileFlags when applying Color and Transform changes from TileChangeData. |





### Description



Sets a [Tile](Tilemaps.Tile.html) with additional properties at the given XYZ coordinates of a cell in the [Tilemap](Tilemaps.Tilemap.html).





Refer to [Scriptable Tiles](../Manual/Tilemap-ScriptableTiles-TileBase.html) and [Tilemap](../Manual/class-Tilemap.html) for more information.


            
