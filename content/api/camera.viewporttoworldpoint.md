This version of Unity is unsupported.



# [Camera](Camera.html).ViewportToWorldPoint




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




                [Switch to Manual](../Manual/class-Camera.html)










## Declaration

public [Vector3](Vector3.html) ViewportToWorldPoint([Vector3](Vector3.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| position | The 3d vector in Viewport space. |





### Returns



**Vector3**
        The 3d vector in World space.





### Description



Transforms `position` from viewport space into world space.





Viewport space is normalized and relative to the camera. The bottom-left
        of the viewport is (0,0); the top-right is (1,1). The z position is in world units from the camera.

Note that [ViewportToWorldPoint](Camera.ViewportToWorldPoint.html) transforms an x-y screen position into a x-y-z position in 3D space.

Provide the function with a vector where the x-y components of the vector are the screen coordinates
and the z component is the distance of the resulting plane from the camera.


              


```
// Draw a yellow sphere at top-right corner of the near plane
// for the selected camera in the Scene view.
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnDrawGizmosSelected()
    {
        Camera camera = GetComponent<Camera>();
        Vector3 p = camera.ViewportToWorldPoint(new Vector3(1, 1, camera.nearClipPlane));
        Gizmos.color = Color.yellow;
        Gizmos.DrawSphere(p, 0.1F);
    }
}
```


            
