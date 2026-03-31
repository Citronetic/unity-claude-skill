This version of Unity is unsupported.



# [Handles](Handles.html).DrawWireArc




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

public static void DrawWireArc([Vector3](Vector3.html) center,
[Vector3](Vector3.html) normal,
[Vector3](Vector3.html) from,
float angle,
float radius,
float thickness = 0.0f);






### Parameters



| Parameter | Description |
| --- | --- |
| center | The center of the circle in world space. |
| normal | The normal of the circle in world space. |
| from | The direction of the point on the circle circumference, relative to the center, where the arc begins. |
| angle | The angle of the arc, in degrees. |
| radius | The radius of the circle in world space units. |
| thickness | Line thickness in UI points (zero thickness draws single-pixel line). |





### Description



Draws a circular arc in 3D space.





The [Handles.color](Handles-color.html) and [Handles.matrix](Handles-matrix.html) properties colorize and additionally transform the arc position. Unity ignores `DrawWireArc` (that is, nothing happens) when the current GUI event type is not [EventType.Repaint](EventType.Repaint.html).

[Image: image]

*Wire Arc in the Scene View.*


              


```
using UnityEditor;
using UnityEngine;
using System.Collections;//this class should exist somewhere in your project
public class WireArcExample : MonoBehaviour
{
    public float shieldArea;
}// Create a 180 degrees wire arc with a ScaleValueHandle attached to the disc
// that lets you modify the "shieldArea" value in the WireArcExample
[CustomEditor(typeof(WireArcExample))]
public class DrawWireArc : Editor
{
    void OnSceneGUI()
    {
        Handles.color = Color.red;
        WireArcExample myObj = (WireArcExample)target;
        Handles.DrawWireArc(myObj.transform.position, myObj.transform.up, -myObj.transform.right, 180, myObj.shieldArea);
        myObj.shieldArea = (float)Handles.ScaleValueHandle(myObj.shieldArea, myObj.transform.position + myObj.transform.forward * myObj.shieldArea, myObj.transform.rotation, 1, Handles.ConeHandleCap, 1);
    }
}
```





You can use [HandleUtility.GetHandleSize](HandleUtility.GetHandleSize.html) to calculate a suitable size for a manipulator handle.

Arc line `thickness` can be optionally set. Zero thickness draws a one-pixel line. Larger thickness values express line thickness in UI points. For example, a thickness of 1.0 could be two pixels wide on screen if the display zoom is 200% (see [EditorGUIUtility.pixelsPerPoint](EditorGUIUtility-pixelsPerPoint.html)).

[Image: image]

*Arcs of varying thickness.*


              


```
using UnityEngine;
using UnityEditor;public class ExampleScript : MonoBehaviour
{
}// Display arcs of various angles and thickness in the scene view
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
            var center = position;
            var start = Vector3.left;
            var normal = Vector3.forward;
            var radius = 3 - i * 0.3f;
            var angle = 40 + 30 * i;
            Handles.DrawWireArc(center, normal, start, angle, radius, i);
        }
    }
}
```





Additional resources: [Handles.lineThickness](Handles-lineThickness.html), [Handles.DrawLine](Handles.DrawLine.html), [Handles.DrawSolidArc](Handles.DrawSolidArc.html), [Handles.DrawWireDisc](Handles.DrawWireDisc.html).


            
