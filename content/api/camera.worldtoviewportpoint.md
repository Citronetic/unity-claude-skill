This version of Unity is unsupported.



# [Camera](Camera.html).WorldToViewportPoint




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

public [Vector3](Vector3.html) WorldToViewportPoint([Vector3](Vector3.html) position);






## Declaration

public [Vector3](Vector3.html) WorldToViewportPoint([Vector3](Vector3.html) position,
[Camera.MonoOrStereoscopicEye](Camera.MonoOrStereoscopicEye.html) eye);






### Parameters



| Parameter | Description |
| --- | --- |
| position | A 3D point in world space. |
| eye | Optional argument that can be used to specify which eye transform to use. Default is Mono. |





### Description



Transforms `position` from world space into viewport space.





Viewport space is normalized and relative to the camera. The bottom-left of the camera is
(0,0); the top-right is (1,1). The z position is in world units from the camera.


              


```
// Finds out whether target is on the left or right side of the screen
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Transform target;
    Camera cam;    void Start()
    {
        cam = GetComponent<Camera>();
    }    void Update()
    {
        Vector3 viewPos = cam.WorldToViewportPoint(target.position);
        if (viewPos.x > 0.5F)
            print("target is on the right side!");
        else
            print("target is on the left side!");
    }
}
```


            
