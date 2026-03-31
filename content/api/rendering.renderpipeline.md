This version of Unity is unsupported.



# RenderPipeline





class in
          UnityEngine.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Provides a way to implement rendering logic for a Scriptable Render Pipeline.





Inherit from this class to override the [RenderPipeline.Render](Rendering.RenderPipeline.Render.html) method as part of implementing a Scriptable Render Pipeline (SRP):


              


```
using UnityEngine;
using UnityEngine.Rendering;
using System.Collections.Generic;public class CustomRenderPipeline : RenderPipeline
{
    protected override void Render(ScriptableRenderContext context, List<Camera> cameras)
    {
        // Implement this method to customize your SRP.
        // For a more complete example, refer to RenderPipeline.Render.
    }
}
```





For more detailed information, refer to [Creating a custom render pipeline](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@latest/index.html?subfolder=/manual/srp-custom.html) and  [Unity Manual: Scriptable Render Pipeline](../Manual/ScriptableRenderPipeline.html).





### Properties



| Property | Description |
| --- | --- |
| disposed | Returns true when the RenderPipeline is invalid or destroyed. |





### Protected Methods



| Method | Description |
| --- | --- |
| IsPreviewSupported | Allow to specify if a camera can be previewed or not. |
| IsRenderRequestSupported | Implement this method in a custom Scriptable Render Pipeline (SRP) to specify if a particular combination of camera and render request is supported. |
| ProcessRenderRequests | Implement this method in a custom Scriptable Render Pipeline (SRP) to execute render requests submitted using RenderPipeline.SubmitRenderRequest. |
| Render | Entry point method that defines custom rendering for this RenderPipeline. |





### Static Methods



| Method | Description |
| --- | --- |
| BeginCameraRendering | Calls the RenderPipelineManager.beginCameraRendering delegate. |
| BeginContextRendering | Calls the RenderPipelineManager.beginContextRendering and RenderPipelineManager.beginFrameRendering delegates. |
| EndCameraRendering | Calls the RenderPipelineManager.endCameraRendering delegate. |
| EndContextRendering | Calls the RenderPipelineManager.endContextRendering and RenderPipelineManager.endFrameRendering delegates. |
| SubmitRenderRequest | Submits a render request to a camera using the render pipeline, outside of the Unity render loop. |
| SupportsRenderRequest | Checks if the render pipeline supports the RequestData type with the camera. |


            
