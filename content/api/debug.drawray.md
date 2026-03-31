This version of Unity is unsupported.



# [Debug](Debug.html).DrawRay




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




                [Switch to Manual](../Manual/class-Debug.html)










## Declaration

public static void DrawRay([Vector3](Vector3.html) start,
[Vector3](Vector3.html) dir,
[Color](Color.html) color = Color.white,
float duration = 0.0f,
bool depthTest = true);






### Parameters



| Parameter | Description |
| --- | --- |
| start | Point in world space where the ray should start. |
| dir | Direction and length of the ray. |
| color | Color of the drawn line. |
| duration | How long the line will be visible for (in seconds). |
| depthTest | Determines whether objects closer to the camera obscure the line. |





### Description



Draws a line from `start` to `start` + `dir` in world coordinates.





The `duration` parameter determines how long the line will be visible after the frame it is drawn. If duration is 0 (the default) then the line is rendered 1 frame.

If `depthTest` is set to true then the line will be obscured by other objects in the Scene that are nearer to the camera.

The line will be drawn in the Scene view of the editor. If gizmo drawing is enabled in the game view, the line will also be drawn there.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Frame update example: Draws a 10 meter long green line from the position for 1 frame.
    void Update()
    {
        Vector3 forward = transform.TransformDirection(Vector3.forward) * 10;
        Debug.DrawRay(transform.position, forward, Color.green);
    }
}
```


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Event callback example: Debug-draw all contact points and normals for 2 seconds.
    void OnCollisionEnter(Collision collision)
    {
        Debug.DrawRay(collision.contacts[0].point, collision.contacts[0].normal, Color.green, 2, false);
    }
}
```


            
