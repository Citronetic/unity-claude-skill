This version of Unity is unsupported.



# [Camera](Camera.html).CalculateFrustumCorners




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

public void CalculateFrustumCorners([Rect](Rect.html) viewport,
float z,
[Camera.MonoOrStereoscopicEye](Camera.MonoOrStereoscopicEye.html) eye,
Vector3[] outCorners);






### Parameters



| Parameter | Description |
| --- | --- |
| viewport | Normalized viewport coordinates to use for the frustum calculation. |
| z | Z-depth from the camera origin at which the corners will be calculated. |
| eye | Camera eye projection matrix to use. |
| outCorners | Output array for the frustum corner vectors. Cannot be null and length must be >= 4. |





### Description



Given viewport coordinates, calculates the view space vectors pointing to the four frustum corners at the specified camera depth.





The order of the corners is lower left, upper left, upper right, lower right.

`CalculateFrustumCorners` can be used to efficiently calculate the world space position of a pixel in an image effect shader. See standard assets implementation of global fog.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Update()
    {
        // this example shows the different camera frustums when using asymmetric projection matrices (like those used by OpenVR).        var camera = GetComponent<Camera>();
        Vector3[] frustumCorners = new Vector3[4];
        camera.CalculateFrustumCorners(new Rect(0, 0, 1, 1), camera.farClipPlane, Camera.MonoOrStereoscopicEye.Mono, frustumCorners);        for (int i = 0; i < 4; i++)
        {
            var worldSpaceCorner = camera.transform.TransformVector(frustumCorners[i]);
            Debug.DrawRay(camera.transform.position, worldSpaceCorner, Color.blue);
        }        camera.CalculateFrustumCorners(new Rect(0, 0, 1, 1), camera.farClipPlane, Camera.MonoOrStereoscopicEye.Left, frustumCorners);        for (int i = 0; i < 4; i++)
        {
            var worldSpaceCorner = camera.transform.TransformVector(frustumCorners[i]);
            Debug.DrawRay(camera.transform.position, worldSpaceCorner, Color.green);
        }        camera.CalculateFrustumCorners(new Rect(0, 0, 1, 1), camera.farClipPlane, Camera.MonoOrStereoscopicEye.Right, frustumCorners);        for (int i = 0; i < 4; i++)
        {
            var worldSpaceCorner = camera.transform.TransformVector(frustumCorners[i]);
            Debug.DrawRay(camera.transform.position, worldSpaceCorner, Color.red);
        }
    }
}
```





The code sample draws lines to visualize the frustum corners of different VR camera views. The blue lines represent the mono (non-stereoscopic) rendering view. The green lines represent the left eye view. The red lines represent the right eye view.

                [Image: image]

                *Visualization of frustum corners of different VR camera views.*


            
