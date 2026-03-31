This version of Unity is unsupported.



# [Handles](Handles.html).DrawLine




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

public static void DrawLine([Vector3](Vector3.html) p1,
[Vector3](Vector3.html) p2,
float thickness = 0.0f);






### Parameters



| Parameter | Description |
| --- | --- |
| p1 | The position of the first line's end point in world space. |
| p2 | The position of the second line's end point in world space. |
| thickness | Line thickness in UI points (zero thickness draws single-pixel line). |





### Description



Draws a line from `p1` to `p2`.





The [Handles.color](Handles-color.html) and [Handles.matrix](Handles-matrix.html) properties colorize and additionally transform the line position. Unity ignores `DrawLine` (that is, nothing happens) when the current GUI event type is not [EventType.Repaint](EventType.Repaint.html).

[Image: image]

*Draw Line in the Scene View.*

Below is an example of an Editor script that draws lines in SceneView to GameObjects listed in a script.


              


```
// Draw lines to the connected game objects that a script has.
// If the target object doesnt have any game objects attached
// then it draws a line from the object to (0, 0, 0).using UnityEditor;
using UnityEngine;[CustomEditor(typeof(ConnectedObjectsExampleScript))]
class ConnectLineHandleExampleScript : Editor
{
    void OnSceneGUI()
    {
        ConnectedObjectsExampleScript connectedObjects = target as ConnectedObjectsExampleScript;
        if (connectedObjects.objs == null)
            return;        Vector3 center = connectedObjects.transform.position;
        for (int i = 0; i < connectedObjects.objs.Length; i++)
        {
            GameObject connectedObject = connectedObjects.objs[i];
            if (connectedObject)
            {
                Handles.DrawLine(center, connectedObject.transform.position);
            }
            else
            {
                Handles.DrawLine(center, Vector3.zero);
            }
        }
    }
}
```





Example script to attach to a GameObject that will act as a handle:


              


```
using UnityEngine;public class ConnectedObjectsExampleScript : MonoBehaviour
{
    public GameObject[] objs = null;
}
```





Line `thickness` can be optionally set. Zero thickness draws a one-pixel line. Larger thickness values express line thickness in UI points. For example, a thickness of 1.0 could be two pixels wide on screen if the display zoom is 200% (see [EditorGUIUtility.pixelsPerPoint](EditorGUIUtility-pixelsPerPoint.html)).

[Image: image]

*Lines of varying thickness.*


              


```
using UnityEngine;
using UnityEditor;public class ExampleScript : MonoBehaviour
{
}// Displays lines of various thickness in the scene view
[CustomEditor(typeof(ExampleScript))]
public class ExampleEditor : Editor
{
    public void OnSceneGUI()
    {
        var t = target as ExampleScript;
        var tr = t.transform;
        var position = tr.position;
        Handles.color = Color.yellow;
        for (int i = 0; i < 10; ++i)
        {
            var linePos = position + Vector3.right * (i * 0.5f);
            Handles.DrawLine(linePos, linePos + Vector3.up, i);
        }
    }
}
```





Additional resources: [Handles.lineThickness](Handles-lineThickness.html), [Handles.DrawLines](Handles.DrawLines.html), [Handles.DrawPolyLine](Handles.DrawPolyLine.html), [Handles.DrawWireDisc](Handles.DrawWireDisc.html).


            
