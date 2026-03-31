This version of Unity is unsupported.



# [GUIUtility](GUIUtility.html).ScaleAroundPivot




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

public static void ScaleAroundPivot([Vector2](Vector2.html) scale,
[Vector2](Vector2.html) pivotPoint);






### Description



Helper function to scale the GUI around a point.





Modifies [GUI.matrix](GUI-matrix.html) to scale all GUI elements around a `pivotPoint`.

Additional resources: [GUI.matrix](GUI-matrix.html), [RotateAroundPivot](GUIUtility.RotateAroundPivot.html).


              


```
using UnityEngine;
using System.Collections;// Scale a button by 1.5 times each time is pressed.public class ExampleClass : MonoBehaviour
{
    private Vector2 scale = new Vector2(1, 1);
    private Vector2 pivotPoint;    void OnGUI()
    {
        pivotPoint = new Vector2(Screen.width / 2, Screen.height / 2);
        GUIUtility.ScaleAroundPivot(scale, pivotPoint);        if (GUI.Button(new Rect(Screen.width / 2 - 25, Screen.height / 2 - 25, 50, 50), "Big!"))
        {
            scale += new Vector2(0.5F, 0.5F);
        }
    }
}
```


            
