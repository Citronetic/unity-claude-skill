This version of Unity is unsupported.



# [GridLayout](GridLayout.html).CellToLocalInterpolated




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

public [Vector3](Vector3.html) CellToLocalInterpolated([Vector3](Vector3.html) cellPosition);






### Parameters



| Parameter | Description |
| --- | --- |
| cellPosition | Interpolated cell position to convert. |





### Returns



**Vector3**
        Local position of the cell position.





### Description



Converts an interpolated cell position in floats to local position space.





Returns the local position in floats.


              


```
// Snap the GameObject to parent GridLayout center of cell
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        GridLayout gridLayout = transform.parent.GetComponent<GridLayout>();
        Vector3Int cellPosition = gridLayout.LocalToCell(transform.localPosition);
        transform.localPosition = gridLayout.CellToLocalInterpolated(cellPosition + new Vector3(.5f, .5f, .5f));
    }
}
```


            
