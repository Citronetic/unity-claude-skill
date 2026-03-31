This version of Unity is unsupported.



# [GUI](GUI.html).FocusWindow




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

public static void FocusWindow(int windowID);






### Parameters



| Parameter | Description |
| --- | --- |
| windowID | The identifier used when you created the window in the Window call. |





### Description



Make a window become the active window.





Additional resources: [GUI.UnfocusWindow](GUI.UnfocusWindow.html).


              


```
// Draw 2 windows.
// When the first window is button-clicked focus on the other window.using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    private Rect windowRect = new Rect(20, 20, 120, 50);
    private Rect windowRect2 = new Rect(20, 80, 120, 50);    void OnGUI()
    {
        windowRect = GUI.Window(0, windowRect, DoMyFirstWindow, "First");
        windowRect2 = GUI.Window(1, windowRect2, DoMySecondWindow, "Second");
    }    void DoMyFirstWindow(int windowID)
    {
        if (GUI.Button(new Rect(10, 20, 100, 20), "Focus other"))
            GUI.FocusWindow(1);
    }    void DoMySecondWindow(int windowID)
    {
        if (GUI.Button(new Rect(10, 20, 100, 20), "Focus other"))
            GUI.FocusWindow(0);
    }
}
```


            
