This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnPreRender()




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)














### Description



[Event function](../Manual/event-functions.html) that Unity calls before a [Camera](Camera.html) renders the scene.





In the Built-in Render Pipeline, Unity calls `OnPreRender` on MonoBehaviours that are attached to the same GameObject as an enabled [Camera](Camera.html) component, just before that Camera renders the scene. Use `OnPreRender` to execute your own code at this point in the render loop; for example, you could change visual settings to affect the scene while a given Camera is rendering. `OnPreRender` can be a coroutine.

For similar functionality that does not require the script to be on the same GameObject as a Camera component, refer to [Camera.onPreRender](Camera-onPreRender.html).

**Note**: `OnPreRender` depends on the Built-in Render Pipeline and won't be called in projects using the Scriptable or Universal Render Pieplines. For similar functionality in the Scriptable Render Pipeline, refer to [RenderPipelineManager](Rendering.RenderPipelineManager.html).

Unity calls `OnPreRender` after the Camera performs its culling operation. This means that if you make a change that affects what the Camera sees, the change will take effect from the next frame. To make a change to what the Camera sees in the current frame, use [MonoBehaviour.OnPreCull](MonoBehaviour.OnPreCull.html).

When Unity calls `OnPreRender`, the Camera's render target and depth textures are not yet set up. If you need to access these, you can execute code later in the render loop using a [CommandBuffer](Rendering.CommandBuffer.html).


              


```
// This script lets you enable/disable fog per camera.
// by enabling or disabling the script in the title of the Inspector
// you can turn fog on or off per camera.using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    private bool revertFogState = false;    void OnPreRender()
    {
        revertFogState = RenderSettings.fog;
        RenderSettings.fog = enabled;
    }    void OnPostRender()
    {
        RenderSettings.fog = revertFogState;
    }
}
```





Additional resources: [Camera.onPreRender](Camera-onPreRender.html), [MonoBehaviour.OnPreCull](MonoBehaviour.OnPreCull.html), [MonoBehaviour.OnPostRender](MonoBehaviour.OnPostRender.html), [CommandBuffer](Rendering.CommandBuffer.html), [Extending the Built-in Render Pipeline using CommandBuffers](../Manual/GraphicsCommandBuffers.html).


            
