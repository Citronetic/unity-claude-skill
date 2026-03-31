This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).AddControl




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

public static void AddControl(int controlId,
float distance);






### Parameters



| Parameter | Description |
| --- | --- |
| controlId | The ID that is recorded as the nearest control if the mouse cursor is near the handle. |
| distance | The distance from the mouse cursor to the handle. |





### Description



Record a distance measurement from a handle.





All handles call this with their controlID during layout, then use nearestControl to check if they got the mouseDown.


              


```
using UnityEngine;
using UnityEditor;

public class ExampleScript : MonoBehaviour
{
    public float value = 1.0f;
}

// A tiny custom editor for ExampleScript component.
[CustomEditor(typeof(ExampleScript))]
public class ExampleEditor : Editor
{
    // Custom in-scene UI for when ExampleScript component is selected.
    public void OnSceneGUI()
    {
        var controlID = GUIUtility.GetControlID(FocusType.Passive);
        var evt = Event.current;

        var t = target as ExampleScript;
        var tr = t.transform;
        var pos = tr.position;

        switch (evt.GetTypeForControl(controlID))
        {
            case EventType.Layout:
            case EventType.MouseMove:
                // Set the nearest control ID to "controlID" if the mouse cursor is
                // near or directly above the solid disc handle.
                var distanceToHandle = HandleUtility.DistanceToCircle(pos, t.value);
                HandleUtility.AddControl(controlID, distanceToHandle);
                break;
            case EventType.MouseDown:
                // Log the nearest control ID if the click is near or directly above
                // the solid disc handle.
                if (controlID == HandleUtility.nearestControl && evt.button == 0)
                {
                    Debug.Log($"The nearest control is {controlID}.");

                    GUIUtility.hotControl = controlID;
                    evt.Use();
                }
                break;
            case EventType.MouseUp:
                if (GUIUtility.hotControl == controlID && evt.button == 0)
                {
                    GUIUtility.hotControl = 0;
                    evt.Use();
                }
                break;
            case EventType.Repaint:
                // Display an orange solid disc where the object is.
                Handles.color = new Color(1, 0.8f, 0.4f, 1);
                Handles.DrawSolidDisc(pos, tr.up, t.value);
                break;
        }
    }
}
```


            
