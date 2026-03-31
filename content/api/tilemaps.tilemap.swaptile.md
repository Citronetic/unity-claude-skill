This version of Unity is unsupported.



# [Tilemap](Tilemaps.Tilemap.html).SwapTile




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

public void SwapTile([Tilemaps.TileBase](Tilemaps.TileBase.html) changeTile,
[Tilemaps.TileBase](Tilemaps.TileBase.html) newTile);






### Parameters



| Parameter | Description |
| --- | --- |
| changeTile | Tile to swap. |
| newTile | Tile to swap to. |





### Description



Swaps all existing [Tile](Tilemaps.Tile.html)s of **changeTile** to **newTile** and refreshes all the swapped [Tile](Tilemaps.Tile.html)s.


              


```
// Change all occurences of tileA into tileB
using UnityEngine;
using UnityEngine.Tilemaps;public class ExampleClass : MonoBehaviour
{
    public TileBase tileA;
    public TileBase tileB;    void Start()
    {
        Tilemap tilemap = GetComponent<Tilemap>();
        tilemap.SwapTile(tileA, tileB);
    }
}
```





Refer to [Scriptable Tiles](../Manual/Tilemap-ScriptableTiles-TileBase.html) and [Tilemap](../Manual/class-Tilemap.html) for more information.


            
