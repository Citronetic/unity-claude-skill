This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).DistanceToCone




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

public static float DistanceToCone([Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation,
float size);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Position of the cone. |
| rotation | Rotation of the cone. |
| size | Size of the cone. |





### Returns



**float**
        Distance from mouse to cone in pixels.





### Description



Returns the distance in pixels from the mouse pointer to a cone.





Calculates the screen space distance from the mouse pointer to a cone at given world
space `position` with the given `rotation` and `size`.

Returns zero when mouse pointer is directly over the cone.

Uses the current camera to determine the distance.


              


```
using UnityEngine;
using UnityEditor;public class ExampleScript : MonoBehaviour
{
}// Displays cone in scene view, and distance from mouse
// to the cone.
[CustomEditor(typeof(ExampleScript))]
public class ExampleEditor : Editor
{
    public void OnSceneGUI()
    {
        var t = target as ExampleScript;
        var tr = t.transform;
        var position = tr.position;
        var rotation = tr.rotation;
        var size = 1.0f;
        // draw a cone in scene
        Handles.color = Color.yellow;
        Handles.ConeHandleCap(0, position, rotation, size, Event.current.type);
        // calculate distance from mouse to cone, and display it
        var distance = HandleUtility.DistanceToCone(position, rotation, size);
        GUI.color = Color.black;
        Handles.Label(position, distance.ToString("F0"));
        // make scene view repaint on mouse move
        if (Event.current.type == EventType.MouseMove)
            Event.current.Use();
    }
}
```





[Image: image].

Additional resources: [DistanceToCircle](HandleUtility.DistanceToCircle.html), [DistanceToCube](HandleUtility.DistanceToCube.html), [DistanceToLine](HandleUtility.DistanceToLine.html).


            
