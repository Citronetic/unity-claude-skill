This version of Unity is unsupported.



# [GUIUtility](GUIUtility.html).GUIToScreenPoint




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

public static [Vector2](Vector2.html) GUIToScreenPoint([Vector2](Vector2.html) guiPoint);






### Description



Convert a point from GUI position to screen space.





**Note:** In Unity the screen space **y** coordinate varies from zero at the top
edge of the window to a maximum at the bottom edge of the window.  This is
different from what you might expect.

Additional resources: [GUIUtility.ScreenToGUIPoint](GUIUtility.ScreenToGUIPoint.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Converts a GUICoordinate (affected by a group) to a Screen coordinate.    void OnGUI()
    {
        Vector2 gPos = new Vector2(10, 10);
        GUI.BeginGroup(new Rect(10, 10, 100, 100));
        Vector2 convertedGUIPos = GUIUtility.GUIToScreenPoint(gPos);
        GUI.EndGroup();
        Debug.Log("GUI: " + gPos + " Screen: " + convertedGUIPos);
    }
}
```


            
