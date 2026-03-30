This version of Unity is unsupported.



# [Tile](Tilemaps.Tile.html).GetTileData




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

public void GetTileData([Vector3Int](Vector3Int.html) position,
[Tilemaps.ITilemap](Tilemaps.ITilemap.html) tilemap,
ref [Tilemaps.TileData](Tilemaps.TileData.html) tileData);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Position of the Tile on the Tilemap. |
| tilemap | The Tilemap the tile is present on. |
| tileData | Data to render the tile. This is filled with Tile, Tile.color and Tile.transform. |





### Returns



**void**
        Whether the call was successful. This returns true for [Tile](Tilemaps.Tile.html).





### Description



Retrieves the tile rendering data for the [Tile](Tilemaps.Tile.html).


            
