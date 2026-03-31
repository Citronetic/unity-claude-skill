This version of Unity is unsupported.



# [TileBase](Tilemaps.TileBase.html).StartUp




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

public bool StartUp([Vector3Int](Vector3Int.html) position,
[Tilemaps.ITilemap](Tilemaps.ITilemap.html) tilemap,
[GameObject](GameObject.html) go);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Position of the Tile on the Tilemap. |
| tilemap | The Tilemap the tile is present on. |
| go | The GameObject instantiated for the Tile. |





### Returns



**bool**
        Whether the call was successful.





### Description



StartUp is called on the first frame of the running Scene.





Use this to set values for the instantiated [GameObject](GameObject.html) or run any logic at the beginning of the Scene.


              


```
using UnityEngine;
using UnityEngine.Tilemaps;// Tile that instantiates a GameObject on Start and assigns a random rotation to the instanced GameObject
[CreateAssetMenu]
public class RandomRotationStartupTile : TileBase
{
    public Sprite m_Sprite;
    public GameObject m_Prefab;    public override void GetTileData(Vector3Int location, ITilemap tilemap, ref TileData tileData)
    {
        tileData.sprite = m_Sprite;
        tileData.gameObject = m_Prefab;
    }    public override bool StartUp(Vector3Int location, ITilemap tilemap, GameObject go)
    {
        if (go != null)
        {
            go.transform.rotation = Random.rotation;
        }
        return true;
    }
}
```


            
