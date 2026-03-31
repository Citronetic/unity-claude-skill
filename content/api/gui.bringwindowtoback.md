This version of Unity is unsupported.



# [GUI](GUI.html).BringWindowToBack




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

public static void BringWindowToBack(int windowID);






### Parameters



| Parameter | Description |
| --- | --- |
| windowID | The identifier used when you created the window in the Window call. |





### Description



Bring a specific window to back of the floating windows.


              


```
// Draws 2 overlapped windows and when clicked on 1 window's button
// Brings the window to the back.using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    private Rect windowRect = new Rect(20, 20, 120, 50);
    private Rect windowRect2 = new Rect(80, 20, 120, 50);
    void OnGUI()
    {
        windowRect = GUI.Window(0, windowRect, DoMyFirstWindow, "First");
        windowRect2 = GUI.Window(1, windowRect2, DoMySecondWindow, "Second");
    }    void DoMyFirstWindow(int windowID)
    {
        if (GUI.Button(new Rect(10, 20, 100, 20), "Put Back"))
            GUI.BringWindowToBack(0);        GUI.DragWindow(new Rect(0, 0, 10000, 20));
    }    void DoMySecondWindow(int windowID)
    {
        if (GUI.Button(new Rect(10, 20, 100, 20), "Put Back"))
            GUI.BringWindowToBack(1);        GUI.DragWindow(new Rect(0, 0, 10000, 20));
    }
}
```


            
