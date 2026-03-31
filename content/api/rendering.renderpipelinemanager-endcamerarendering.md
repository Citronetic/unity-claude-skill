This version of Unity is unsupported.



# [RenderPipelineManager](Rendering.RenderPipelineManager.html).endCameraRendering




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



















### Description



Delegate that you can use to invoke custom code after Unity renders an individual Camera.





When Unity calls [RenderPipeline.EndCameraRendering](Rendering.RenderPipeline.EndCameraRendering.html), it executes the methods in this delegate's invocation list.

In the Universal Render Pipeline (URP) and the High Definition Render Pipeline (HDRP), Unity calls [RenderPipeline.EndCameraRendering](Rendering.RenderPipeline.EndCameraRendering.html) automatically. If you are writing a custom Scriptable Render Pipeline and you want to use this delegate, you must add a call to [RenderPipeline.EndCameraRendering](Rendering.RenderPipeline.EndCameraRendering.html).

The following code example demonstrates how to add a method to this delegate's invocation list, and later remove it.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        RenderPipelineManager.endCameraRendering += OnEndCameraRendering;
    }    void OnEndCameraRendering(ScriptableRenderContext context, Camera camera)
    {
        // Put the code that you want to execute after the camera renders here
        // If you are using URP or HDRP, Unity calls this method automatically
        // If you are writing a custom SRP, you must call RenderPipeline.EndCameraRendering
    }    void OnDestroy()
    {
        RenderPipelineManager.endCameraRendering -= OnEndCameraRendering;
    }
}
```





Additional resources: [RenderPipeline.BeginCameraRendering](Rendering.RenderPipeline.BeginCameraRendering.html), [RenderPipeline.EndCameraRendering](Rendering.RenderPipeline.EndCameraRendering.html), RenderPipeline.BeginFrameRendering, RenderPipeline.EndFrameRendering, [Unity Manual: Scriptable Render Pipeline](../Manual/ScriptableRenderPipeline.html)


            
