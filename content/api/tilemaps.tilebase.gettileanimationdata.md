This version of Unity is unsupported.



# [TileBase](Tilemaps.TileBase.html).GetTileAnimationData




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

public bool GetTileAnimationData([Vector3Int](Vector3Int.html) position,
[Tilemaps.ITilemap](Tilemaps.ITilemap.html) tilemap,
ref [Tilemaps.TileAnimationData](Tilemaps.TileAnimationData.html) tileAnimationData);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Position of the Tile on the Tilemap. |
| tilemap | The Tilemap the tile is present on. |
| tileAnimationData | Data to run an animation on the tile. |





### Returns



**bool**
        Whether the call was successful.





### Description



Retrieves any tile animation data from the scripted tile.





Implement this and fill in the [TileAnimationData](Tilemaps.TileAnimationData.html) to have the [Tilemap](Tilemaps.Tilemap.html) run an animation for the tile.


              


```
using UnityEngine;
using UnityEngine.Tilemaps;// Tile that plays an animated loops of sprites
[CreateAssetMenu]
public class AnimatedTile : TileBase
{
    public Sprite[] m_AnimatedSprites;
    public float m_AnimationSpeed = 1f;
    public float m_AnimationStartTime;    public override void GetTileData(Vector3Int location, ITilemap tileMap, ref TileData tileData)
    {
        if (m_AnimatedSprites != null && m_AnimatedSprites.Length > 0)
        {
            tileData.sprite = m_AnimatedSprites[m_AnimatedSprites.Length - 1];
        }
    }    public override bool GetTileAnimationData(Vector3Int location, ITilemap tileMap, ref TileAnimationData tileAnimationData)
    {
        if (m_AnimatedSprites != null && m_AnimatedSprites.Length > 0)
        {
            tileAnimationData.animatedSprites = m_AnimatedSprites;
            tileAnimationData.animationSpeed = m_AnimationSpeed;
            tileAnimationData.animationStartTime = m_AnimationStartTime;
            return true;
        }
        return false;
    }
}
```


            
