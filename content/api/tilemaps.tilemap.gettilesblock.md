This version of Unity is unsupported.



# [Tilemap](Tilemaps.Tilemap.html).GetTilesBlock




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

public TileBase[] GetTilesBlock([BoundsInt](BoundsInt.html) bounds);






### Parameters



| Parameter | Description |
| --- | --- |
| bounds | The bounds to retrieve from. |





### Returns



**TileBase[]**
        The array of [Tile](Tilemaps.Tile.html)s at the given bounds.





### Description



Retrieves an array of Tiles with the given bounds.





This is meant for more a performant way to get Tiles as a batch, when compared to calling GetTile for every single position.
The bounds size must match the array size. For example bounds of 1x2x3 needs an array length of 6.


              


```
// Retrieves all Tiles from an area on the Tilemap and prints out the Tiles to console
using UnityEngine;
using UnityEngine.Tilemaps;public class ExampleClass : MonoBehaviour
{
    public BoundsInt area;    void Start()
    {
        Tilemap tilemap = GetComponent<Tilemap>();
        TileBase[] tileArray = tilemap.GetTilesBlock(area);
        for (int index = 0; index < tileArray.Length; index++)
        {
            print(tileArray[index]);
        }
    }
}
```


            
