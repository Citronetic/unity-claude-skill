This version of Unity is unsupported.



# [RenderPipeline](Rendering.RenderPipeline.html).EndContextRendering




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

protected static void EndContextRendering([Rendering.ScriptableRenderContext](Rendering.ScriptableRenderContext.html) context,
List<Camera> cameras);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Context to use for rendering the cameras. |
| cameras | List of cameras currently being rendered. |





### Description



Calls the [RenderPipelineManager.endContextRendering](Rendering.RenderPipelineManager-endContextRendering.html) and [RenderPipelineManager.endFrameRendering](Rendering.RenderPipelineManager-endFrameRendering.html) delegates.





Use the delegates that this method calls to implement functionality at the end of [RenderPipeline.Render](Rendering.RenderPipeline.Render.html).

In the Universal Render Pipeline (URP) and the High Definition Render Pipeline (HDRP), Unity calls this method automatically at the end of [RenderPipeline.Render](Rendering.RenderPipeline.Render.html). If you are writing a custom Scriptable Render Pipeline, you can call this method yourself in the same place. This functionality is not compatible with the Built-in Render Pipeline.

The delegates that this method calls work in the same way as one another, except that [RenderPipelineManager.endFrameRendering](Rendering.RenderPipelineManager-endFrameRendering.html) causes heap allocations and [RenderPipelineManager.endContextRendering](Rendering.RenderPipelineManager-endContextRendering.html) does not. You should therefore use [RenderPipelineManager.endContextRendering](Rendering.RenderPipelineManager-endContextRendering.html) to avoid unnecessary heap allocations and garbage collection.

This method replaces RenderPipeline.EndFrameRendering. It does everything that method does, and in addition it calls the [RenderPipelineManager.endContextRendering](Rendering.RenderPipelineManager-endContextRendering.html) delegate. If you are writing a custom Scriptable Render Pipeline, use this method instead of RenderPipeline.EndFrameRendering.

The following code example demonstrates where to call this method if you are creating a custom Scriptable Render Pipeline:


              


```
using UnityEngine;
using UnityEngine.Rendering;
using System.Collections.Generic;public class ExampleRenderPipelineInstance : RenderPipeline
{
    public ExampleRenderPipelineInstance()
    {
    }    override protected void Render(ScriptableRenderContext context, List<Camera> cameras)
    {
        // Put the rest of your Render method code here        // Call the RenderPipelineManager.endContextRendering and RenderPipelineManager.endFrameRendering delegates
        EndContextRendering(context, cameras);
    }    // Older version of the Render function that can generate garbage, needed for backwards compatibility
    override protected void Render(ScriptableRenderContext context, Camera[] cameras)
    {
    }
}
```





Additional resources: [RenderPipelineManager.endContextRendering](Rendering.RenderPipelineManager-endContextRendering.html), [RenderPipelineManager.endFrameRendering](Rendering.RenderPipelineManager-endFrameRendering.html), [RenderPipeline.BeginContextRendering](Rendering.RenderPipeline.BeginContextRendering.html), [RenderPipelineManager.beginContextRendering](Rendering.RenderPipelineManager-beginContextRendering.html), [RenderPipelineManager.beginFrameRendering](Rendering.RenderPipelineManager-beginFrameRendering.html), [Unity Manual: Scriptable Render Pipeline](../Manual/ScriptableRenderPipeline.html).


            
