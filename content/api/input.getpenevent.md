This version of Unity is unsupported.



# [Input](Input.html).GetPenEvent




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

public static [PenData](PenData.html) GetPenEvent(int index);






### Returns



**PenData**
        Pen event details in the struct.





### Description



Returns the [PenData](PenData.html) for the pen event at the given index in the pen event queue.





**Note**: This API is part of the legacy Input Manager. The recommended best practice is that you don't use this API in new projects. For new projects, use the Input System package. To learn more about input, refer to [Input](../Manual/Input.html).

On Windows, the pen event queue holds, in chronological order, any missed pen events as provided by GetPointerPenInfoHistory. The queue is cleared at the end of each frame. On all other platforms the queue will always be empty.


              


```
using UnityEditor;
using UnityEngine;public class Example : EditorWindow
{
    [MenuItem("Window/Pen Window")]
    public static void ShowWindow()
    {
        EditorWindow win = EditorWindow.GetWindow(typeof(Example));
        win.titleContent = new GUIContent("Pen Window");
        win.wantsMouseMove = true;
    }    void OnGUI()
    {
        var e = Event.current;
        if ((e.type == EventType.MouseDown
             || e.type == EventType.MouseDrag
             || e.type == EventType.MouseDown
             || e.type == EventType.MouseUp
             || e.type == EventType.MouseMove)
            && (e.pointerType == PointerType.Pen))
        {
            int count = Input.penEventCount;
            for (int i = 0; i < count; i++)
            {
                // Log data from queued pen events
                PenData p = Input.GetPenEvent(i);
                Debug.Log($"Pen position {p.position}, pen pressure {p.pressure}, pen twist {p.twist}, pen tilt {p.tilt}, pen status - barrel {(p.penStatus & PenStatus.Barrel) != 0}");
            }
            Input.ResetPenEvents();
        }
    }
}
```


            
