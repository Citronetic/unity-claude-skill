This version of Unity is unsupported.



# [RenderPipeline](Rendering.RenderPipeline.html).Render




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

protected void Render([Rendering.ScriptableRenderContext](Rendering.ScriptableRenderContext.html) context,
List<Camera> cameras);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Context to use for rendering the cameras. |
| cameras | List of cameras to render. |





### Description



Entry point method that defines custom rendering for this RenderPipeline.





This method is the entry point to the Scriptable Render Pipeline (SRP). This functionality is not compatible with the Built-in Render Pipeline.

Unity calls this method automatically. In a standalone application, Unity calls this method once per frame to render the main view, and once per frame for each manual call to [Camera.Render](Camera.Render.html). In the Unity Editor, Unity calls this method once per frame for each Scene view or Game view that is visible, once per frame if if the Scene camera preview is visible, and once per frame for each manual call to [Camera.Render](Camera.Render.html).

If you are using the Universal Render Pipeline (URP) or the High Definition Render Pipeline (HDRP), you can use the [RenderPipelineManager.beginContextRendering](Rendering.RenderPipelineManager-beginContextRendering.html), [RenderPipelineManager.beginCameraRendering](Rendering.RenderPipelineManager-beginCameraRendering.html), [RenderPipelineManager.endCameraRendering](Rendering.RenderPipelineManager-endCameraRendering.html) and [RenderPipelineManager.endContextRendering](Rendering.RenderPipelineManager-endContextRendering.html) delegates to call your custom code at defined points during this method.

If you are writing a custom SRP, you can either add code directly to this method body, or call the delegates yourself using [RenderPipeline.BeginContextRendering](Rendering.RenderPipeline.BeginContextRendering.html), [RenderPipeline.BeginCameraRendering](Rendering.RenderPipeline.BeginCameraRendering.html), [RenderPipeline.EndCameraRendering](Rendering.RenderPipeline.EndCameraRendering.html) and [RenderPipeline.EndContextRendering](Rendering.RenderPipeline.EndContextRendering.html).

The following example code shows how to implement this method in a custom SRP:


              


```
using UnityEngine;
using UnityEngine.Rendering;
using System.Collections.Generic;public class ExampleRenderPipelineInstance : RenderPipeline
{
    public ExampleRenderPipelineInstance()
    {
    }    protected override void Render(ScriptableRenderContext context, List<Camera> cameras)
    {
        // This is where you can write custom rendering code. Customize this method to customize your SRP.
        // Create and schedule a command to clear the current render target
        var cmd = new CommandBuffer();
        cmd.ClearRenderTarget(true, true, Color.red);
        context.ExecuteCommandBuffer(cmd);
        cmd.Release();        // Tell the ScriptableRenderContext to tell the graphics API to perform the scheduled commands
        context.Submit();
    }    // Older version of the Render function that can generate garbage, needed for backwards compatibility
    protected override void Render(ScriptableRenderContext context, Camera[] cameras)
    {
    }
}
```





Additional resources: [Unity Manual: Scriptable Render Pipeline](../Manual/ScriptableRenderPipeline.html), [RenderPipelineManager.beginContextRendering](Rendering.RenderPipelineManager-beginContextRendering.html), [RenderPipelineManager.beginCameraRendering](Rendering.RenderPipelineManager-beginCameraRendering.html), [RenderPipelineManager.endContextRendering](Rendering.RenderPipelineManager-endContextRendering.html), [RenderPipelineManager.endFrameRendering](Rendering.RenderPipelineManager-endFrameRendering.html).




---






                        **Obsolete**
                        Render with an array parameter is deprecated. Use Render with a list parameter instead. If you're extending the RenderPipeline class, override the Render method with a List parameter to perform rendering in order to avoid unnecessary allocations and copies. #from 6000.1.




## Declaration

protected void Render([Rendering.ScriptableRenderContext](Rendering.ScriptableRenderContext.html) context,
Camera[] cameras);






### Description



Entry point method that defines custom rendering for this RenderPipeline.





The functionality for this signature is exactly the same as for the version that uses a List of Cameras, except that this version can cause heap allocations due to array resizing.

If you experience heap allocations, use the version that uses a List instead.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class ExampleRenderPipeline : RenderPipeline
{
    public ExampleRenderPipeline()
    {
    }    protected override void Render(ScriptableRenderContext context, Camera[] cameras)
    {
        // This is where you can write custom rendering code. Customize this method to customize your SRP.
        // Create and schedule a command to clear the current render target
        var cmd = new CommandBuffer();
        cmd.ClearRenderTarget(true, true, Color.red);
        context.ExecuteCommandBuffer(cmd);
        cmd.Release();        // Tell the ScriptableRenderContext to tell the graphics API to perform the scheduled commands
        context.Submit();
    }
}
```


            
