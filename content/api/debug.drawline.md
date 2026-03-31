This version of Unity is unsupported.



# [Debug](Debug.html).DrawLine




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

public static void DrawLine([Vector3](Vector3.html) start,
[Vector3](Vector3.html) end,
[Color](Color.html) color = Color.white,
float duration = 0.0f,
bool depthTest = true);






### Parameters



| Parameter | Description |
| --- | --- |
| start | Point in world space where the line should start. |
| end | Point in world space where the line should end. |
| color | Color of the line. |
| duration | How long the line should be visible for. |
| depthTest | Determines whether objects closer to the camera obscure the line. |





### Description



Draws a line between specified start and end points.





The line will be drawn in the Game view of the editor when the game is running and the gizmo drawing is enabled.  The line will also be drawn in the Scene when it is visible in the Game view.  Leave the game running and showing the line. Switch to the Scene view and the line will be visible.

The `duration` is the time (in seconds) for which the line will be visible after it is first displayed. A duration of zero shows the line for just one frame.

If `depthTest` is set to true then the line will be obscured by other objects in the Scene that are nearer to the camera.

**Note:** This is for debugging playmode only. Editor gizmos should be drawn with Gizmos.Drawline or [Handles.DrawLine](Handles.DrawLine.html) instead.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        // draw a 5-unit white line from the origin for 2.5 seconds
        Debug.DrawLine(Vector3.zero, new Vector3(5, 0, 0), Color.white, 2.5f);
    }    private float q = 0.0f;    void FixedUpdate()
    {
        // always draw a 5-unit colored line from the origin
        Color color = new Color(q, q, 1.0f);
        Debug.DrawLine(Vector3.zero, new Vector3(0, 5, 0), color);
        q = q + 0.01f;        if (q > 1.0f)
        {
            q = 0.0f;
        }
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
        foreach (ContactPoint contact in collision.contacts)
        {
            Debug.DrawLine(contact.point, contact.point + contact.normal, Color.green, 2, false);
        }
    }
}
```


            
