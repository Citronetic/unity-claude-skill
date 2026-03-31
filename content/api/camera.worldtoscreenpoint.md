This version of Unity is unsupported.



# [Camera](Camera.html).WorldToScreenPoint




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

public [Vector3](Vector3.html) WorldToScreenPoint([Vector3](Vector3.html) position);






## Declaration

public [Vector3](Vector3.html) WorldToScreenPoint([Vector3](Vector3.html) position,
[Camera.MonoOrStereoscopicEye](Camera.MonoOrStereoscopicEye.html) eye);






### Parameters



| Parameter | Description |
| --- | --- |
| position | A 3D point in world space. |
| eye | Optional argument that can be used to specify which eye transform to use. Default is Mono. |





### Description



Transforms `position` from world space into screen space.





Screen space is defined in pixels. The lower left pixel of the screen is (0,0). The upper right pixel of the screen is (screen width in pixels - 1, screen height in pixels - 1).

The z coordinate is the distance from the camera in world units.

If `position` is outside the Camera's viewing volume, Unity returns a screen position that's off-screen.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Transform target;
    Camera cam;    void Start()
    {
        cam = GetComponent<Camera>();
    }    void Update()
    {
        Vector3 screenPos = cam.WorldToScreenPoint(target.position);
        Debug.Log("target is " + screenPos.x + " pixels from the left");
    }
}
```


            
