This version of Unity is unsupported.



# ITilemap





class in
          UnityEngine.Tilemaps



/



Implemented in:[UnityEngine.TilemapModule](UnityEngine.TilemapModule.html)


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



















### Description



Class passed onto Tiles when information is queried from the Tiles.





This handles editor preview [tiles](../Manual/Tilemap-ScriptableTiles-TileBase.html) when painting on a [Tilemap](Tilemaps.Tilemap.html) in Editor mode.





### Properties



| Property | Description |
| --- | --- |
| cellBounds | Returns the boundaries of the Tilemap in cell size. |
| localBounds | Returns the boundaries of the Tilemap in local space size. |
| origin | The origin of the Tilemap in cell position. |
| size | The size of the Tilemap in cells. |





### Constructors



| Constructor | Description |
| --- | --- |
| ITilemap | Initializes and returns an instance of ITilemap. |





### Public Methods



| Method | Description |
| --- | --- |
| GetColor | Gets the color of a Tile given the XYZ coordinates of a cell in the Tilemap. |
| GetComponent | Returns the component of type T if the GameObject of the tile map has one attached, null if it doesn't. |
| GetSprite | Gets the Sprite used in a Tile given the XYZ coordinates of a cell in the Tilemap. |
| GetTile | Gets the Tile at the given XYZ coordinates of a cell in the Tilemap. |
| GetTileFlags | Gets the Tile Flags of the Tile at the given position. |
| GetTransformMatrix | Gets the transform matrix of a Tile given the XYZ coordinates of a cell in the Tilemap. |
| RefreshTile | Refreshes a Tile at the given XYZ coordinates of a cell in the :Tilemap. |





### Operators



| Operator | Description |
| --- | --- |
| ITilemap | Tilemap can be implicitly converted to ITilemap. |


            
