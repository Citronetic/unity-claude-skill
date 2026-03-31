This version of Unity is unsupported.



# [TileBase](Tilemaps.TileBase.html).RefreshTile




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

public void RefreshTile([Vector3Int](Vector3Int.html) position,
[Tilemaps.ITilemap](Tilemaps.ITilemap.html) tilemap);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Position of the Tile on the Tilemap. |
| tilemap | The Tilemap the tile is present on. |





### Description



This method is called when the tile is refreshed.





Implement this and call [Tilemap.RefreshTile](Tilemaps.Tilemap.RefreshTile.html) on all affected [tiles](../Manual/Tilemap-ScriptableTiles-TileBase.html) on the [Tilemap](Tilemaps.Tilemap.html) including the tile at the given position to refresh them. This is also useful if the placement of a tile affects the properties of neighboring tiles.


              


```
using UnityEngine;
using UnityEngine.Tilemaps;// Tile that displays a Sprite when it is alone and a different Sprite when it is orthogonally adjacent to the same NeighourTile
[CreateAssetMenu]
public class NeighbourTile : TileBase
{
    public Sprite spriteA;
    public Sprite spriteB;    public override void RefreshTile(Vector3Int position, ITilemap tilemap)
    {
        for (int yd = -1; yd <= 1; yd++)
        {
            Vector3Int location = new Vector3Int(position.x, position.y + yd, position.z);
            if (IsNeighbour(location, tilemap))
                tilemap.RefreshTile(location);
        }
        for (int xd = -1; xd <= 1; xd++)
        {
            Vector3Int location = new Vector3Int(position.x + xd, position.y, position.z);
            if (IsNeighbour(location, tilemap))
                tilemap.RefreshTile(location);
        }
    }    public override void GetTileData(Vector3Int position, ITilemap tilemap, ref TileData tileData)
    {
        tileData.sprite = spriteA;
        for (int yd = -1; yd <= 1; yd += 2)
        {
            Vector3Int location = new Vector3Int(position.x, position.y + yd, position.z);
            if (IsNeighbour(location, tilemap))
                tileData.sprite = spriteB;
        }
        for (int xd = -1; xd <= 1; xd += 2)
        {
            Vector3Int location = new Vector3Int(position.x + xd, position.y, position.z);
            if (IsNeighbour(location, tilemap))
                tileData.sprite = spriteB;
        }
    }    private bool IsNeighbour(Vector3Int position, ITilemap tilemap)
    {
        TileBase tile = tilemap.GetTile(position);
        return (tile != null && tile == this);
    }
}
```


            
