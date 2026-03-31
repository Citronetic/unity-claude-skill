This version of Unity is unsupported.



# [Camera](Camera.html).CopyFrom




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

public void CopyFrom([Camera](Camera.html) other);






### Parameters



| Parameter | Description |
| --- | --- |
| other | Copy camera settings to the other camera. |





### Description



Makes this camera's settings match other camera.





This will copy all camera's variables (field of view, clear flags, culling mask, ...) from the other
camera. It will also set this camera's transform to match the other camera, as well as this camera's
layer to match the layer of the other camera.

This can be useful if you want one camera to match the other camera's setup, when doing custom
rendering effects. For example when using [RenderWithShader](Camera.RenderWithShader.html).


              


```
// Two cameras.  One based on the Main Camera and the other on a new camera that takes over.using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Camera cam;    void Start()
    {
        // Set the current camera's settings from the main Scene camera
        cam.CopyFrom(Camera.main);
    }
}
```


            
