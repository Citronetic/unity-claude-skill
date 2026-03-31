This version of Unity is unsupported.



# [Tilemap](Tilemaps.Tilemap.html).SetTiles




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

public void SetTiles(Vector3Int[] positionArray,
TileBase[] tileArray);






### Parameters



| Parameter | Description |
| --- | --- |
| positionArray | An array of positions of Tiles on the Tilemap. |
| tileArray | An array of Tiles to be placed. |





### Description



Sets an array of [Tile](Tilemaps.Tile.html)s at the given XYZ coordinates of the corresponding cells in the [Tilemap](Tilemaps.Tilemap.html).





Refer to [Scriptable Tiles](../Manual/Tilemap-ScriptableTiles-TileBase.html) and [Tilemap](../Manual/class-Tilemap.html) for more information.


              


```
// Fills Tilemap area with checkerboard pattern of tileA and tileB
using UnityEngine;
using UnityEngine.Tilemaps;public class ExampleClass : MonoBehaviour
{
    public TileBase tileA;
    public TileBase tileB;
    public Vector2Int size;    void Start()
    {
        Vector3Int[] positions = new Vector3Int[size.x * size.y];
        TileBase[] tileArray = new TileBase[positions.Length];        for (int index = 0; index < positions.Length; index++)
        {
            positions[index] = new Vector3Int(index % size.x, index / size.y, 0);
            tileArray[index] = index % 2 == 0 ? tileA : tileB;
        }        Tilemap tilemap = GetComponent<Tilemap>();
        tilemap.SetTiles(positions, tileArray);
    }
}
```




---








## Declaration

public void SetTiles(TileChangeData[] tileChangeDataArray,
bool ignoreLockFlags);






### Parameters



| Parameter | Description |
| --- | --- |
| tileChangeDataArray | The array of Tiles with additional properties to place. |
| ignoreLockFlags | Whether to ignore Lock Flags set in the Tile's TileFlags when applying Color and Transform changes from TileChangeData. |





### Description



Sets an array of [Tile](Tilemaps.Tile.html)s with additonal properties at the given XYZ coordinates of the corresponding cells in the [Tilemap](Tilemaps.Tilemap.html). The Color and Transform of the [TileChangeData](Tilemaps.TileChangeData.html) will take precedence over the values from the [Tile](Tilemaps.Tile.html).





Refer to [Scriptable Tiles](../Manual/Tilemap-ScriptableTiles-TileBase.html) and [Tilemap](../Manual/class-Tilemap.html) for more information.


            
