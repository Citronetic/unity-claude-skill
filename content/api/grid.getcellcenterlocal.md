This version of Unity is unsupported.



# [Grid](Grid.html).GetCellCenterLocal




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
        Center of the cell transformed into local space coordinates.





### Description



Get the logical center coordinate of a grid cell in local space.





In a rectangular grid layout, a call to [GridLayout.CellToLocal](GridLayout.CellToLocal.html) with [Vector3Int](Vector3Int.html) parameter, returns a [Vector3](Vector3.html) coordinate that represents the bottom-left of the cell. This is mathematically correct, but when for example instantiating a GameObject into the grid, you often prefer the center of the cell instead.


              


```
// Snap the GameObject to parent Grid center of cell
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Grid grid = transform.parent.GetComponent<Grid>();
        Vector3Int cellPosition = grid.LocalToCell(transform.localPosition);
        transform.localPosition = grid.GetCellCenterLocal(cellPosition);
    }
}
```


            
