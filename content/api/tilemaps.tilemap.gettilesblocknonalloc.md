This version of Unity is unsupported.



# [Tilemap](Tilemaps.Tilemap.html).GetTilesBlockNonAlloc




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

public int GetTilesBlockNonAlloc([BoundsInt](BoundsInt.html) bounds,
TileBase[] tiles);






### Parameters



| Parameter | Description |
| --- | --- |
| bounds | The bounds to retrieve from. |
| tiles | The array of Tiles to contain the Tiles at the given bounds. |





### Returns



**int**
        Returns the number of Tiles retrieved, including null entries.





### Description



Retrieves an array of Tiles with the given bounds.





This is meant for more a performant way to get Tiles as a batch, when compared to calling GetTile for every single position.
If the size of the arrays passed in as parameters are less than the number of Tiles within the range, the arrays will not be resized and the results will be limited.


              


```
// Retrieves all Tiles from an area on the Tilemap and prints out the Tiles to console
using UnityEngine;
using UnityEngine.Tilemaps;public class ExampleClass : MonoBehaviour
{
    public BoundsInt area;    void Start()
    {
        Tilemap tilemap = GetComponent<Tilemap>();
        TileBase[] tileArray = new TileBase[16];
        int count = tilemap.GetTilesBlockNonAlloc(area, tileArray);
        for (int index = 0; index < count; index++)
        {
            print(tileArray[index]);
        }
    }
}
```


            
