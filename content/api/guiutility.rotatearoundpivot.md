This version of Unity is unsupported.



# [GUIUtility](GUIUtility.html).RotateAroundPivot




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

public static void RotateAroundPivot(float angle,
[Vector2](Vector2.html) pivotPoint);






### Description



Helper function to rotate the GUI around a point.





Modifies [GUI.matrix](GUI-matrix.html) to rotate all GUI elements `angle` degrees around `pivotPoint`.

Additional resources: [GUI.matrix](GUI-matrix.html), [ScaleAroundPivot](GUIUtility.ScaleAroundPivot.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Rotate a button 10 degrees clockwise when pressed.    float rotAngle = 0;
    Vector2 pivotPoint;    void OnGUI()
    {
        pivotPoint = new Vector2(Screen.width / 2, Screen.height / 2);
        GUIUtility.RotateAroundPivot(rotAngle, pivotPoint);
        if (GUI.Button(new Rect(Screen.width / 2 - 25, Screen.height / 2 - 25, 50, 50), "Rotate"))
        {
            rotAngle += 10;
        }
    }
}
```


            
