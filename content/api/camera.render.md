This version of Unity is unsupported.



# [Camera](Camera.html).Render




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

public void Render();






### Description



Render the camera manually.





This will render the camera. It will use the camera's clear flags, target texture and all other settings.

The camera will send [MonoBehaviour.OnPreCull](MonoBehaviour.OnPreCull.html), [MonoBehaviour.OnPreRender](MonoBehaviour.OnPreRender.html) and
[MonoBehaviour.OnPostRender](MonoBehaviour.OnPostRender.html) to any scripts attached, and render any eventual image filters.

This is used for taking precise control of render order. To make use of this feature, create a
camera and disable it. Then call Render on it.

You are not able to call the Render function from a camera that is currently rendering. If you wish to
do this create a copy of the camera, and make it match the original one using [CopyFrom](Camera.CopyFrom.html).

Additional resources: [RenderWithShader](Camera.RenderWithShader.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Take a "screenshot" of a camera's Render Texture.
    Texture2D RTImage(Camera camera)
    {
        // The Render Texture in RenderTexture.active is the one
        // that will be read by ReadPixels.
        var currentRT = RenderTexture.active;
        RenderTexture.active = camera.targetTexture;        // Render the camera's view.
        camera.Render();        // Make a new texture and read the active Render Texture into it.
        Texture2D image = new Texture2D(camera.targetTexture.width, camera.targetTexture.height);
        image.ReadPixels(new Rect(0, 0, camera.targetTexture.width, camera.targetTexture.height), 0, 0);
        image.Apply();        // Replace the original active Render Texture.
        RenderTexture.active = currentRT;
        return image;
    }
}
```


            
