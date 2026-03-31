This version of Unity is unsupported.



# [Event](Event.html).Use




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

public void Use();






### Description



Use this event.





Call this method when you've used an event. The event's type will be set to [EventType.Used](EventType.Used.html), causing other GUI elements to ignore it.

Events of type [EventType.Repaint](EventType.Repaint.html) and [EventType.Layout](EventType.Layout.html) should not be used.
Attempting to call this method on such events will issue a warning.

The following example demonstrates how events are consumed and used up. Copy this code into a script, and open the Example Window this sample creates from the Window menu.


              


```
using UnityEditor;
using UnityEngine;public class ExampleWindow : EditorWindow
{
    [MenuItem("Window/Show Example Window")]
    public static void ShowWindow()
    {
        GetWindow(typeof(ExampleWindow));
    }    private void OnGUI()
    {
        if (Event.current.type == EventType.MouseDown && Event.current.button == 0)
        {
            Debug.Log("Left clicked at: " + Event.current.mousePosition);
            // This if statement Uses up the current MouseDown event so that
            // subsequent code or GUI elements ignore this MouseDown event.
            Event.current.Use();
        }        // This if statement does not check Event.current.button, but it only triggers
        // when Event.current.button is not 0 because the previous if statement will
        // Use up the MouseDown event if it is.
        if (Event.current.type == EventType.MouseDown)
        {
            Debug.Log("This only prints when we right click!");
            Event.current.Use();
        }
    }
}
```





The following example demonstrates how handles such as [Handles.PositionHandle](Handles.PositionHandle.html) and [Handles.FreeMoveHandle](Handles.FreeMoveHandle.html) might use events.


              


```
using UnityEditor;
using UnityEngine;public static class CustomHandle
{
    public static bool DoHandle(Vector3 worldpos, float size, float pickSize)
    {
        int id = GUIUtility.GetControlID(FocusType.Passive);
        Event evt = Event.current;        bool clicked = false;        switch (evt.GetTypeForControl(id))
        {
            case EventType.MouseDown:
                if (evt.button == 0 && HandleUtility.nearestControl == id)
                {
                    GUIUtility.hotControl = id;                    evt.Use(); // Using the MouseDown event
                    clicked = true;
                }
                break;            case EventType.MouseMove:
                HandleUtility.Repaint();
                evt.Use(); // Using the MouseMove event
                break;            case EventType.MouseUp:
                if (evt.button == 0 && HandleUtility.nearestControl == id)
                {
                    GUIUtility.hotControl = 0;
                    evt.Use(); // Using the MouseUp event
                }
                break;            case EventType.Layout:
                HandleUtility.AddControl(id, HandleUtility.DistanceToCircle(worldpos, pickSize));
                // Keep in mind Layout events should not be Used!
                break;            case EventType.Repaint:
                // Draw the handle here
                // Keep in mind Repaint events should not be Used!
                break;
        }        return clicked;
    }
}
```


            
