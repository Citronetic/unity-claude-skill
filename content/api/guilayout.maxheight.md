This version of Unity is unsupported.



# [GUILayout](GUILayout.html).MaxHeight




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

public static [GUILayoutOption](GUILayoutOption.html) MaxHeight(float maxHeight);






### Description



Option passed to a control to specify a maximum height.





[Image: image]


*Maximum Height allowed for the window.*


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    // Draws a window you can resize between 80px and 200px height
    // Just click the box inside the window and move your mouse
    Rect windowRect = new Rect(10, 10, 100, 100);
    bool scaling = false;    void OnGUI()
    {
        windowRect = GUILayout.Window(0, windowRect, ScalingWindow, "resizeable",
            GUILayout.MinHeight(80), GUILayout.MaxHeight(200));
    }    void ScalingWindow(int windowID)
    {
        GUILayout.Box("", GUILayout.Width(20), GUILayout.Height(20));
        if (Event.current.type == EventType.MouseUp)
        {
            scaling = false;
        }
        else if (Event.current.type == EventType.MouseDown &&
                 GUILayoutUtility.GetLastRect().Contains(Event.current.mousePosition))
        {
            scaling = true;
        }        if (scaling)
        {
            windowRect = new Rect(windowRect.x, windowRect.y,
                windowRect.width + Event.current.delta.x, windowRect.height + Event.current.delta.y);
        }
    }
}
```


            
