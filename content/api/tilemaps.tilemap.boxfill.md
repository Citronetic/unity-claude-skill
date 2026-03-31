This version of Unity is unsupported.



# [Tilemap](Tilemaps.Tilemap.html).BoxFill




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

public void BoxFill([Vector3Int](Vector3Int.html) position,
[Tilemaps.TileBase](Tilemaps.TileBase.html) tile,
int startX,
int startY,
int endX,
int endY);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Position of the Tile on the Tilemap. |
| tile | Tile to place. |
| startX | The minimum X coordinate limit to fill to. |
| startY | The minimum Y coordinate limit to fill to. |
| endX | The maximum X coordinate limit to fill to. |
| endY | The maximum Y coordinate limit to fill to. |





### Description



Does a box fill with the given [Tile](Tilemaps.Tile.html) on the [Tilemap](Tilemaps.Tilemap.html). Starts from given coordinates and fills the limits from start to end (inclusive).





If the limits are larger than the Tilemap bounds, the limits will be capped to the Tilemap bounds. Refer to [Scriptable Tiles](../Manual/Tilemap-ScriptableTiles-TileBase.html) and [Tilemap](../Manual/class-Tilemap.html) for more information.


            
