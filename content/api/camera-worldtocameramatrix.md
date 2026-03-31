This version of Unity is unsupported.



# [Camera](Camera.html).worldToCameraMatrix




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







                    public [Matrix4x4](Matrix4x4.html) worldToCameraMatrix;






### Description



Matrix that transforms from world to camera space.





This matrix is often referred to as "view matrix" in graphics literature.

Use this to calculate the Camera space position of GameObjects or to provide a custom Camera's
location that is not based on the transform.

Note that camera space matches OpenGL convention: camera's forward is the negative
Z axis. This is different from Unity's convention, where forward is the positive Z
axis.

If you change this matrix, the camera no longer updates its rendering based on its [Transform](Transform.html).
This lasts until you call [ResetWorldToCameraMatrix](Camera.ResetWorldToCameraMatrix.html).


              


```
// Offsets camera's rendering from the transform's position.
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Vector3 offset = new Vector3(0, 1, 0);
    Camera cam;    void Start()
    {
        cam = GetComponent<Camera>();
    }    void LateUpdate()
    {
        Vector3 camoffset = new Vector3(-offset.x, -offset.y, offset.z);
        Matrix4x4 m = Matrix4x4.TRS(camoffset, Quaternion.identity, new Vector3(1, 1, -1));
        cam.worldToCameraMatrix = m * transform.worldToLocalMatrix;
    }
}
```





Additional resources: [Matrix4x4.LookAt](Matrix4x4.LookAt.html), [CommandBuffer.SetViewMatrix](Rendering.CommandBuffer.SetViewMatrix.html).


            
