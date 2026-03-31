This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnPreCull()




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



[Event function](../Manual/event-functions.html) that Unity calls before a [Camera](Camera.html) culls the scene.





In the Built-in Render Pipeline, Unity calls `OnPreCull` on MonoBehaviours that are attached to the same GameObject as an enabled [Camera](Camera.html) component, just before that Camera performs the culling operation that determines what it can see. Use `OnPreCull` to execute your own code at this point in the render loop; for example, you can change the Camera's settings before performing the culling operation, to affect what the Camera sees. `OnPreCull` can be a coroutine.

For similar functionality that does not require the script to be on the same GameObject as a Camera component, refer to [Camera.onPreCull](Camera-onPreCull.html).

**Note**: `OnPreCull` depends on the Built-in Render Pipeline and won't be called in projects using the Scriptable or Universal Render Pieplines. For similar functionality in the Scriptable Render Pipeline, refer to [RenderPipelineManager](Rendering.RenderPipelineManager.html).


              


```
// Attach this to the same GameObject as a Camera component.
// This script inverts the view of the Camera, so that everything rendered by it is flippedusing UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    Camera cam;    void Start()
    {
        cam = GetComponent<Camera>();
    }    void OnPreCull()
    {
        cam.ResetWorldToCameraMatrix();
        cam.ResetProjectionMatrix();
        cam.projectionMatrix = cam.projectionMatrix * Matrix4x4.Scale(new Vector3(1, -1, 1));
    }    void OnPreRender()
    {
        GL.invertCulling = true;
    }    void OnPostRender()
    {
        GL.invertCulling = false;
    }
}
```





Additional resources: [Camera.onPreCull](Camera-onPreCull.html), [MonoBehaviour.OnPreRender](MonoBehaviour.OnPreRender.html), [MonoBehaviour.OnPostRender](MonoBehaviour.OnPostRender.html), [CommandBuffer](Rendering.CommandBuffer.html), [Extending the Built-in Render Pipeline using CommandBuffers](../Manual/GraphicsCommandBuffers.html).


            
