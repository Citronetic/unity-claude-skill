This version of Unity is unsupported.



# [GridLayout](GridLayout.html).LocalToCellInterpolated




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

public [Vector3](Vector3.html) LocalToCellInterpolated([Vector3](Vector3.html) localPosition);






### Parameters



| Parameter | Description |
| --- | --- |
| localPosition | Local Position to convert. |





### Returns



**Vector3**
        Interpolated cell position of the local position.





### Description



Converts a local position to cell position.





Returns the interpolated cell position in floats, rather than the exact cell position.


              


```
// Move GameObject left by 1/4th of cell width of parent GridLayout
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        GridLayout gridLayout = transform.parent.GetComponent<GridLayout>();
        Vector3 cellPosition = gridLayout.LocalToCellInterpolated(transform.localPosition);
        cellPosition += Vector3.left * 0.25f;
        transform.localPosition = gridLayout.CellToLocalInterpolated(cellPosition);
    }
}
```


            
