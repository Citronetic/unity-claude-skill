This version of Unity is unsupported.



# [Camera](Camera.html).onPostRender




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







                    public static [Camera.CameraCallback](Camera.CameraCallback.html) onPostRender;






### Description



Delegate that you can use to execute custom code after a [Camera](Camera.html) renders the scene.





In the Built-in Render Pipeline, Unity calls `onPostRender` after any Camera finishes rendering. To execute custom code at this point, create callbacks that match the signature of [CameraCallback](Camera.CameraCallback.html), and add them to this delegate.

For similar functionality that applies only to a single Camera and requires your script to be on the same GameObject, see [MonoBehaviour.OnPostRender](MonoBehaviour.OnPostRender.html).

If you're using a Scriptable Render Pipeline, for example the Universal Render Pipeline, use [RenderPipelineManager](Rendering.RenderPipelineManager.html) instead.

To execute code after Unity renders all Cameras and GUI, use [WaitForEndOfFrame](WaitForEndOfFrame.html) or a [CommandBuffer](Rendering.CommandBuffer.html).


              


```
using UnityEngine;public class CameraCallbackExample : MonoBehaviour
{
    // Add your callback to the delegate's invocation list
    void Start()
    {
        Camera.onPostRender += OnPostRenderCallback;
    }    // Unity calls the methods in this delegate's invocation list before rendering any camera
    void OnPostRenderCallback(Camera cam)
    {
        Debug.Log("Camera callback: Camera name is " + cam.name);        // Unity calls this for every active Camera.
        // If you're only interested in a particular Camera,
        // check whether the Camera is the one you're interested in
        if (cam == Camera.main)
        {
            // Put your custom code here
        }
    }    // Remove your callback from the delegate's invocation list
    void OnDestroy()
    {
        Camera.onPostRender -= OnPostRenderCallback;
    }
}
```





Additional resources: [CameraCallback](Camera.CameraCallback.html), [Camera.onPreRender](Camera-onPreRender.html), [Camera.onPreCull](Camera-onPreCull.html), [MonoBehaviour.OnPostRender](MonoBehaviour.OnPostRender.html), [CommandBuffer](Rendering.CommandBuffer.html), [Extending the Built-in Render Pipeline using CommandBuffers](../Manual/GraphicsCommandBuffers.html), [WaitForEndOfFrame](WaitForEndOfFrame.html).


            
