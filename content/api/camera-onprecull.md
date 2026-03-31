This version of Unity is unsupported.



# [Camera](Camera.html).onPreCull




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







                    public static [Camera.CameraCallback](Camera.CameraCallback.html) onPreCull;






### Description



Delegate that you can use to execute custom code before a [Camera](Camera.html) culls the scene.





In the Built-in Render Pipeline, Unity calls `onPreCull` before performing the culling operation that determines what a Camera can see. To execute custom code at this point, create callbacks that match the signature of [CameraCallback](Camera.CameraCallback.html), and add them to this delegate. For example, you could change a Camera's settings to affect what the Camera sees.

For similar functionality that applies only to a single Camera and requires your script to be on the same GameObject, see [MonoBehaviour.OnPreCull](MonoBehaviour.OnPreCull.html).

If you're using a Scriptable Render Pipeline, for example the Universal Render Pipeline, use [RenderPipelineManager](Rendering.RenderPipelineManager.html) instead.


              


```
using UnityEngine;public class CameraCallbackExample : MonoBehaviour
{
    // Add your callback to the delegate's invocation list
    void Start()
    {
        Camera.onPreCull += OnPreCullCallback;
    }    // Unity calls the methods in this delegate's invocation list before rendering any camera
    void OnPreCullCallback(Camera cam)
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
        Camera.onPreCull -= OnPreCullCallback;
    }
}
```





Additional resources: [CameraCallback](Camera.CameraCallback.html), [Camera.onPreRender](Camera-onPreRender.html), [Camera.onPostRender](Camera-onPostRender.html), [MonoBehaviour.OnPreCull](MonoBehaviour.OnPreCull.html), [CommandBuffer](Rendering.CommandBuffer.html), [Extending the Built-in Render Pipeline using CommandBuffers](../Manual/GraphicsCommandBuffers.html).


            
