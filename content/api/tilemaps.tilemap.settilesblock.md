This version of Unity is unsupported.



# [Tilemap](Tilemaps.Tilemap.html).SetTilesBlock




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

public void SetTilesBlock([BoundsInt](BoundsInt.html) position,
TileBase[] tileArray);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Bounds to be filled. |
| tileArray | An array of Tiles to be placed. |





### Description



Fills bounds with array of [Tile](Tilemaps.Tile.html)s.





This is meant for a more performant way to set Tiles as a batch, when compared to calling SetTile for every single Tile.
The bounds size must match the array size. For example bounds of 1x2x3 needs an array length of 6.


              


```
// Fill area on Tilemap with checkerboard pattern of tileA and tileB
using UnityEngine;
using UnityEngine.Tilemaps;public class ExampleClass : MonoBehaviour
{
    public TileBase tileA;
    public TileBase tileB;
    public BoundsInt area;    void Start()
    {
        TileBase[] tileArray = new TileBase[area.size.x * area.size.y * area.size.z];
        for (int index = 0; index < tileArray.Length; index++)
        {
            tileArray[index] = index % 2 == 0 ? tileA : tileB;
        }
        Tilemap tilemap = GetComponent<Tilemap>();
        tilemap.SetTilesBlock(area, tileArray);
    }
}
```





Refer to [Scriptable Tiles](../Manual/Tilemap-ScriptableTiles-TileBase.html) and [Tilemap](../Manual/class-Tilemap.html) for more information.


            
