This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).GUIPointToScreenPixelCoordinate




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

public static [Vector2](Vector2.html) GUIPointToScreenPixelCoordinate([Vector2](Vector2.html) guiPoint);






### Description



Converts a 2D GUI position to screen pixel coordinates.





The bottom-left of the screen or window is at (0, 0). The top-right of the screen or window is at ([Screen.width](Screen-width.html), [Screen.height](Screen-height.html)).

Additional resources: [Input.mousePosition](Input-mousePosition.html) and [Camera.ScreenPointToRay](Camera.ScreenPointToRay.html).


              


```
using UnityEngine;
using UnityEditor;public class ExampleScript : MonoBehaviour
{
    public static Ray GUIPointToWorldRay(Vector2 guiPos, Camera camera)
    {
        Vector2 screenPixelPos = HandleUtility.GUIPointToScreenPixelCoordinate(guiPos);
        return Camera.main.ScreenPointToRay(screenPixelPos);
    }
}
```


            
