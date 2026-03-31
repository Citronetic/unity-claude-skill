This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).DistanceToCube




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

public static float DistanceToCube([Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation,
float size);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Position of the cube. |
| rotation | Rotation of the cube. |
| size | Size of the cube. |





### Returns



**float**
        Distance from mouse to cube in pixels.





### Description



Returns the distance in pixels from the mouse pointer to a cube.





Calculates the screen space distance from the mouse pointer to a cube at given world
space `position` with the given `rotation` and `size`.

Returns zero when mouse pointer is directly over the cube.

Uses the current camera to determine the distance.


              


```
using UnityEngine;
using UnityEditor;public class ExampleScript : MonoBehaviour
{
}// Displays cube in scene view, and distance from mouse
// to the cube.
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
        // draw a cube in scene
        Handles.color = Color.yellow;
        Handles.CubeHandleCap(0, position, rotation, size, Event.current.type);
        // calculate distance from mouse to cube, and display it
        var distance = HandleUtility.DistanceToCube(position, rotation, size);
        GUI.color = Color.black;
        Handles.Label(position, distance.ToString("F0"));
        // make scene view repaint on mouse move
        if (Event.current.type == EventType.MouseMove)
            Event.current.Use();
    }
}
```





[Image: image].

Additional resources: [DistanceToCircle](HandleUtility.DistanceToCircle.html), [DistanceToCone](HandleUtility.DistanceToCone.html), [DistanceToLine](HandleUtility.DistanceToLine.html).


            
