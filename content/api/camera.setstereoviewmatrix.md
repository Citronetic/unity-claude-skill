This version of Unity is unsupported.



# [Camera](Camera.html).SetStereoViewMatrix




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

public void SetStereoViewMatrix([Camera.StereoscopicEye](Camera.StereoscopicEye.html) eye,
[Matrix4x4](Matrix4x4.html) matrix);






### Parameters



| Parameter | Description |
| --- | --- |
| eye | Specifies the stereoscopic view matrix to set. |
| matrix | The matrix to be set. |





### Description



Sets a custom view matrix for a specific stereoscopic eye.





In general, you should use the view matrices provided by the [XRDisplaySubsystem](XR.XRDisplaySubsystem.html) for accurate stereoscopic rendering. However, when needed for specific scenarios, you can override the view matrices to achieve specific effects. For example, you would need to set custom projection and view matrices to implement binoculars in VR.

                  When you set custom view matrices, the Camera analyzes them to determine whether it is safe to use a single cull pass or if it must separately cull each eye. Use [Camera.areVRStereoViewMatricesWithinSingleCullTolerance](Camera-areVRStereoViewMatricesWithinSingleCullTolerance.html) to find out which will be used.

                  Call [Camera.ResetStereoViewMatrices](Camera.ResetStereoViewMatrices.html) to revert the camera back to using the view matrices provided by the [XRDisplaySubsystem](XR.XRDisplaySubsystem.html). Note that the [Camera.stereoSeparation](Camera-stereoSeparation.html) is not applied until you call [Camera.ResetStereoViewMatrices](Camera.ResetStereoViewMatrices.html).

                  Additional resources: [Camera.ResetStereoViewMatrices](Camera.ResetStereoViewMatrices.html), [Camera.stereoSeparation](Camera-stereoSeparation.html), [Camera.areVRStereoViewMatricesWithinSingleCullTolerance](Camera-areVRStereoViewMatricesWithinSingleCullTolerance.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    // Use this for initialization
    void Start()
    {
    }    // Update is called once per frame
    void Update()
    {
        Camera cam = GetComponent<Camera>();        Matrix4x4 viewL = cam.worldToCameraMatrix;
        Matrix4x4 viewR = cam.worldToCameraMatrix;        viewL[12] += 0.011f;
        viewR[12] -= 0.011f;
        cam.SetStereoViewMatrix(Camera.StereoscopicEye.Left, viewL);
        cam.SetStereoViewMatrix(Camera.StereoscopicEye.Right, viewR);
    }
}
```


            
