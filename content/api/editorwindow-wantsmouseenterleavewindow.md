This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).wantsMouseEnterLeaveWindow




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












                    public bool wantsMouseEnterLeaveWindow;






### Description



Checks whether MouseEnterWindow and MouseLeaveWindow events are received in the GUI in this Editor window.





If set to true, the window recieves an OnGUI call whenever the mouse enters or leaves a window.

**Note:** This function does not trigger Repaint() Automatically.  Also, entering or leaving a window while a mouse button is pressed does not trigger either event, as pressing the mouse button activates drag mode (see [EventType.MouseDrag](EventType.MouseDrag.html) and other drag-related events for more information).


              


```
// Editor Script that shows how mouse enter and leave window events
// get caught in the Editor window

using UnityEditor;
using UnityEngine;

public class WantsMouseEnterLeaveWindowEx : EditorWindow
{
    [MenuItem("Examples/wantsMouseEnterLeaveWindow example")]
    static void Init()
    {
        EditorWindow editorWindow = GetWindow(typeof(WantsMouseEnterLeaveWindowEx));
        editorWindow.Show();
    }

    public void OnGUI()
    {
        wantsMouseEnterLeaveWindow = EditorGUILayout.Toggle("Receive Enter/Leave: ", wantsMouseEnterLeaveWindow);
        EditorGUILayout.LabelField("Check Console for MouseEnter/LeaveWindow messages");

        // Repaint the window as wantsMouseEnterLeaveWindow doesn't trigger a repaint automatically
        if (Event.current.type == EventType.MouseEnterWindow ||
            Event.current.type == EventType.MouseLeaveWindow)
        {
            Debug.Log("Received event " +
                ((Event.current.type == EventType.MouseEnterWindow) ? "MouseEnterWindow" : "MouseLeaveWindow"));
            Repaint();
        }
    }
}
```


            
