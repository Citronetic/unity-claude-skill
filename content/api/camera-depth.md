This version of Unity is unsupported.



# [Camera](Camera.html).depth




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







                    public float depth;






### Description



Camera's depth in the camera rendering order.





Cameras with lower depth are rendered before cameras with higher depth.

Use this to control the order in which cameras are drawn if you have multiple cameras and some of them don't cover the full screen.

Additional resources: [camera component](../Manual/class-Camera.html), [Camera.rect](Camera-rect.html).


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    Camera cam;    void Start()
    {
        // Set this camera to render after the main camera
        cam.depth = Camera.main.depth + 1;
    }
}
```


            
