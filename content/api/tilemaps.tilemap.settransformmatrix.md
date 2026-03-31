This version of Unity is unsupported.



# [Tilemap](Tilemaps.Tilemap.html).SetTransformMatrix




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

public void SetTransformMatrix([Vector3Int](Vector3Int.html) position,
[Matrix4x4](Matrix4x4.html) transform);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Position of the Tile on the Tilemap. |
| transform | The transform matrix. |





### Description



Sets the transform matrix of a [Tile](Tilemaps.Tile.html) given the XYZ coordinates of a cell in the [Tilemap](Tilemaps.Tilemap.html).





Note that if the Tile has set [TileFlags.LockTransform](Tilemaps.TileFlags.LockTransform.html), then this matrix has no effect.


              


```
// Rotate the tile in (0,0,0) 90 degrees
using UnityEngine;
using UnityEngine.Tilemaps;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Tilemap tilemap = GetComponent<Tilemap>();
        Matrix4x4 matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.Euler(0f, 0f, 90f), Vector3.one);
        tilemap.SetTransformMatrix(new Vector3Int(0, 0, 0), matrix);
    }
}
```





Refer to [Scriptable Tiles](../Manual/Tilemap-ScriptableTiles-TileBase.html) and [Tilemap](../Manual/class-Tilemap.html) for more information.


            
