This version of Unity is unsupported.



# ScriptableCullingParameters





struct in
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



Parameters that configure a culling operation in the Scriptable Render Pipeline.





Obtain a ScriptableCullingParameters struct by calling [Camera.TryGetCullingParameters](Camera.TryGetCullingParameters.html).

Note that you can obtain and view a ScriptableCullingParameters struct from a Camera in the Built-in Render Pipeline; however, changing the values has no effect.

The following Scriptable Render Pipeline code demonstrates how to obtain a ScriptableCullingParameters struct from a Camera using [Camera.TryGetCullingParameters](Camera.TryGetCullingParameters.html), configure the struct, and then pass the struct to [ScriptableRenderContext.Cull](Rendering.ScriptableRenderContext.Cull.html) to obtain a [CullingResults](Rendering.CullingResults.html) struct. You can then use the [CullingResults](Rendering.CullingResults.html) struct in a call to ScriptableRenderContext.DrawRenderers.


              


```
using UnityEngine;
using UnityEngine;
using UnityEngine.Rendering;public class ExampleRenderPipelineInstance : RenderPipeline
{
    public ExampleRenderPipelineInstance()
    {
    }    protected override void Render(ScriptableRenderContext context, Camera[] cameras)
    {
        // Get the culling parameters from the desired Camera
        if (cameras[0].TryGetCullingParameters(out var cullingParameters))
        {
            // Change culling parameters to configure the culling operation
            cullingParameters.cullingOptions &= ~CullingOptions.OcclusionCull;
            cullingParameters.isOrthographic = false;            // Schedule the cull operation
            CullingResults cullingResults = context.Cull(ref cullingParameters);            // Place code that schedules drawing operations using the CullingResults struct here
            // See ScriptableRenderContext.DrawRenderers for details and examples
            // …            // Execute all of the scheduled operations, in order
            context.Submit();
        }
    }
}
```





Additional resources: [Camera.TryGetCullingParameters](Camera.TryGetCullingParameters.html), [ScriptableRenderContext.Cull](Rendering.ScriptableRenderContext.Cull.html), [CullingResults](Rendering.CullingResults.html), ScriptableRenderContext.DrawRenderers.





### Static Properties



| Property | Description |
| --- | --- |
| cullingJobsLowerLimit | The lower limit to the value ScriptableCullingParameters.maximumPortalCullingJobs. |
| cullingJobsUpperLimit | The upper limit to the value ScriptableCullingParameters.maximumPortalCullingJobs. |
| layerCount | The amount of layers available. |
| maximumCullingPlaneCount | Maximum amount of culling planes that can be specified. |





### Properties



| Property | Description |
| --- | --- |
| accurateOcclusionThreshold | This parameter determines query distance for occlusion culling. |
| cameraProperties | Camera Properties used for culling. |
| conservativeEnclosingSphere | This property enables a conservative method for calculating the size and position of the minimal enclosing sphere around the frustum cascade corner points for shadow culling. |
| cullingMask | The mask for the culling operation. |
| cullingMatrix | The matrix for the culling operation. |
| cullingOptions | Flags to configure a culling operation in the Scriptable Render Pipeline. |
| cullingPlaneCount | Number of culling planes to use. |
| isOrthographic | Is the cull orthographic. |
| lodParameters | LODParameters for culling. |
| maximumPortalCullingJobs | This parameter controls how many active jobs contribute to occlusion culling. |
| maximumVisibleLights | This parameter controls how many visible lights are allowed. |
| numIterationsEnclosingSphere |  |
| origin | Position for the origin of the cull. |
| reflectionProbeSortingCriteria | Reflection Probe Sort options for the cull. |
| shadowDistance | Shadow distance to use for the cull. |
| shadowNearPlaneOffset | Offset to apply to the near camera plane when performing shadow map rendering. |
| stereoProjectionMatrix | The projection matrix generated for single-pass stereo culling. |
| stereoSeparationDistance | Distance between the virtual eyes. |
| stereoViewMatrix | The view matrix generated for single-pass stereo culling. |





### Public Methods



| Method | Description |
| --- | --- |
| GetCullingPlane | Fetch the culling plane at the given index. |
| GetLayerCullingDistance | Get the distance for the culling of a specific layer. |
| SetCullingPlane | Set the culling plane at a given index. |
| SetLayerCullingDistance | Set the distance for the culling of a specific layer. |


            
