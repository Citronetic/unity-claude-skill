This version of Unity is unsupported.



# [TileBase](Tilemaps.TileBase.html).GetTileData




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
| tileData | Data to render the tile. |





### Returns



**void**
        Whether the call was successful.





### Description



Retrieves any tile rendering data from the scripted tile.





Implement this and fill in the [TileData](Tilemaps.TileData.html) to have the [Tilemap](Tilemaps.Tilemap.html) to render the tile.


              


```
using UnityEngine;
using UnityEngine.Tilemaps;// Tile that repeats two sprites in checkerboard pattern
[CreateAssetMenu]
public class CheckerboardTile : TileBase
{
    public Sprite spriteA;
    public Sprite spriteB;    public override void GetTileData(Vector3Int position, ITilemap tilemap, ref TileData tileData)
    {
        bool evenCell = Mathf.Abs(position.y + position.x) % 2 > 0;
        tileData.sprite = evenCell ? spriteA : spriteB;
    }
}
```


            
