This version of Unity is unsupported.



# [RectTransform](RectTransform.html).GetLocalCorners




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

public void GetLocalCorners(Vector3[] fourCornersArray);






### Parameters



| Parameter | Description |
| --- | --- |
| fourCornersArray | The array that corners are filled into. |





### Description



Get the corners of the calculated rectangle in the local space of its Transform.





Each corner provides its local space value.  The returned array of
                    4 vertices is clockwise.  It starts bottom left and rotates to top left,
                    then top right, and finally bottom right.  Note that bottom left, for
                    example, is an (x, y, z) vector with x being left and y being bottom.

**Note**: If the [RectTransform](RectTransform.html) is rotated in Z then the dimensions of the [GetLocalCorners](RectTransform.GetLocalCorners.html)
will not be changed.

Additional resources: [GetWorldCorners](RectTransform.GetWorldCorners.html).


              


```
using UnityEngine;// GetLocalCorners():
//   Rotate the local corners and display
//   the corner values.public class ExampleClass : MonoBehaviour
{
    RectTransform rt;    void Start()
    {
        rt = GetComponent<RectTransform>();
        DisplayLocalCorners();
    }    void DisplayLocalCorners()
    {
        Vector3[] v = new Vector3[4];        rt.rotation = Quaternion.AngleAxis(45, Vector3.forward);
        rt.GetLocalCorners(v);        Debug.Log("Local Corners");
        for (var i = 0; i < 4; i++)
        {
            Debug.Log("Local Corner " + i + " : " + v[i]);
        }
    }
}
```





Additional resources: [GetWorldCorners](RectTransform.GetWorldCorners.html).


            
