This version of Unity is unsupported.



# [GridLayout](GridLayout.html).WorldToCell




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

public [Vector3Int](Vector3Int.html) WorldToCell([Vector3](Vector3.html) worldPosition);






### Parameters



| Parameter | Description |
| --- | --- |
| worldPosition | World Position to convert. |





### Returns



**Vector3Int**
        Cell position of the world position.





### Description



Converts a world position to cell position.


              


```
// Snap the GameObject to parent GridLayout
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        GridLayout gridLayout = transform.parent.GetComponentInParent<GridLayout>();
        Vector3Int cellPosition = gridLayout.WorldToCell(transform.position);
        transform.position = gridLayout.CellToWorld(cellPosition);
    }
}
```


            
