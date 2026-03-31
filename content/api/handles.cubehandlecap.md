This version of Unity is unsupported.



# [Handles](Handles.html).CubeHandleCap




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

public static void CubeHandleCap(int controlID,
[Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation,
float size,
[EventType](EventType.html) eventType);






### Parameters



| Parameter | Description |
| --- | --- |
| controlID | The control ID for the handle. |
| position | The position of the handle in the space of Handles.matrix. |
| rotation | The rotation of the handle in the space of Handles.matrix. |
| size | The size of the handle in the space of Handles.matrix. Use HandleUtility.GetHandleSize if you want a constant screen-space size. |
| eventType | Event type for the handle to act upon. By design it handles EventType.Layout and EventType.Repaint events. |





### Description



Draw a cube handle. Pass this into handle functions.





On [EventType.Layout](EventType.Layout.html) event, calculates handle distance to mouse and calls [HandleUtility.AddControl](HandleUtility.AddControl.html) accordingly.

On [EventType.Repaint](EventType.Repaint.html) event, draws the handle shape.

[Image: image]
*Cube Handle Cap in the Scene View.*

Add the following script to your Assets folder as CubeExample.cs and add the CubeExample component to an object in the Scene.


              


```
using UnityEngine;public class CubeExample : MonoBehaviour {}
```





Add the following script to Assets/Editor as CubeExampleEditor.cs and select the object with the CubeExample component.


              


```
using UnityEditor;
using UnityEngine;[CustomEditor(typeof(CubeExample))]
public class CubeExampleEditor : Editor
{
    float size = 1f;    protected virtual void OnSceneGUI()
    {
        if (Event.current.type == EventType.Repaint)
        {
            Transform transform = ((CubeExample)target).transform;
            Handles.color = Handles.xAxisColor;
            Handles.CubeHandleCap(
                0,
                transform.position + new Vector3(3f, 0f, 0f),
                transform.rotation * Quaternion.LookRotation(Vector3.right),
                size,
                EventType.Repaint
            );
            Handles.color = Handles.yAxisColor;
            Handles.CubeHandleCap(
                0,
                transform.position + new Vector3(0f, 3f, 0f),
                transform.rotation * Quaternion.LookRotation(Vector3.up),
                size,
                EventType.Repaint
            );
            Handles.color = Handles.zAxisColor;
            Handles.CubeHandleCap(
                0,
                transform.position + new Vector3(0f, 0f, 3f),
                transform.rotation * Quaternion.LookRotation(Vector3.forward),
                size,
                EventType.Repaint
            );
        }
    }
}
```


            
