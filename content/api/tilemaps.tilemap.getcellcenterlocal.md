This version of Unity is unsupported.



# [Tilemap](Tilemaps.Tilemap.html).GetCellCenterLocal




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

public [Vector3](Vector3.html) GetCellCenterLocal([Vector3Int](Vector3Int.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Grid cell position. |





### Returns



**Vector3**
        Returns the center of the cell transformed into local space coordinates.





### Description



Gets the logical center coordinate of a [Grid](Grid.html) cell in local space. The logical center for a cell of the [Tilemap](Tilemaps.Tilemap.html) is defined by the Tile Anchor of the Tilemap.





In a rectangular grid layout, a call to [GridLayout.CellToLocal](GridLayout.CellToLocal.html) with [Vector3Int](Vector3Int.html) parameter, returns a [Vector3](Vector3.html) coordinate that represents the bottom-left of the cell. While mathematically correct, you may prefer the center of the cell, for example when instantiating a GameObject into the grid.


              


```
// Snap the GameObject to parent Tilemap center of cell
using UnityEngine;
using UnityEngine.Tilemaps;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Tilemap tilemap = transform.parent.GetComponent<Tilemap>();
        Vector3Int cellPosition = tilemap.LocalToCell(transform.localPosition);
        transform.localPosition = tilemap.GetCellCenterLocal(cellPosition);
    }
}
```


            
