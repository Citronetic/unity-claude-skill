This version of Unity is unsupported.



# [GUIUtility](GUIUtility.html).ScreenToGUIPoint




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

public static [Vector2](Vector2.html) ScreenToGUIPoint([Vector2](Vector2.html) screenPoint);






### Description



Convert a point from screen space to GUI position.





Used for reconverting values calculated from [GUIToScreenPoint](GUIUtility.GUIToScreenPoint.html)

**Note:** In Unity the screen space **y** coordinate varies from zero at the top
edge of the window to a maximum at the bottom edge of the window. This is
different from what you might expect.

Additional resources: [GUIUtility.GUIToScreenPoint](GUIUtility.GUIToScreenPoint.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Check the difference between the mouse position (Screen) and
    // the converted GUI positions because of the group.    void OnGUI()
    {
        Vector2 screenPos = Event.current.mousePosition;
        GUI.BeginGroup(new Rect(10, 10, 100, 100));
        Vector2 convertedGUIPos = GUIUtility.ScreenToGUIPoint(screenPos);
        GUI.EndGroup();
        Debug.Log("Screen: " + screenPos + " GUI: " + convertedGUIPos);
    }
}
```


            
