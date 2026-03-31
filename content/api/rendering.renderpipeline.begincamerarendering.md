This version of Unity is unsupported.



# [RenderPipeline](Rendering.RenderPipeline.html).BeginCameraRendering




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















## Declaration

protected static void BeginCameraRendering([Rendering.ScriptableRenderContext](Rendering.ScriptableRenderContext.html) context,
[Camera](Camera.html) camera);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Context to use for rendering the camera. |
| camera | The camera currently being rendered. |





### Description



Calls the [RenderPipelineManager.beginCameraRendering](Rendering.RenderPipelineManager-beginCameraRendering.html) delegate.





In the Universal Render Pipeline (URP) and the High Definition Render Pipeline (HDRP), Unity calls this method automatically before performing rendering operations for an individual Camera. If you are writing a custom Scriptable Render Pipeline, you can call this method manually to use the [RenderPipelineManager.beginCameraRendering](Rendering.RenderPipelineManager-beginCameraRendering.html) delegate.

The following code example demonstrates where to call this method if you are creating a custom Scriptable Render Pipeline:


              


```
using UnityEngine;
using UnityEngine.Rendering;public class ExampleRenderPipelineInstance : RenderPipeline
{
    public ExampleRenderPipelineInstance()
    {
    }    override protected void Render(ScriptableRenderContext context, Camera[] cameras)
    {
        for (var i = 0; i < cameras.Length; i++)
        {
            var camera = cameras[i];            // Call the RenderPipelineManager.beginCameraRendering delegate
            BeginCameraRendering(context, camera);            // Put your code for rendering the Camera here
        }
    }
}
```





Additional resources: [RenderPipelineManager.beginCameraRendering](Rendering.RenderPipelineManager-beginCameraRendering.html), [RenderPipeline.EndCameraRendering](Rendering.RenderPipeline.EndCameraRendering.html), RenderPipeline.BeginFrameRendering, RenderPipeline.EndFrameRendering, [Unity Manual: Scriptable Render Pipeline](../Manual/ScriptableRenderPipeline.html).


            
