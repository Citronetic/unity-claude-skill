This version of Unity is unsupported.



# [ScriptableCullingParameters](Rendering.ScriptableCullingParameters.html).cullingOptions




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












                    public [Rendering.CullingOptions](Rendering.CullingOptions.html) cullingOptions;






### Description



Flags to configure a culling operation in the Scriptable Render Pipeline.





Unity sets some of the [CullingOptions](Rendering.CullingOptions.html) flags with default values, and others depending on the properties of the [Camera](Camera.html) from which you obtained the [ScriptableCullingParameters](Rendering.ScriptableCullingParameters.html) struct. You can override these values before performing the culling operation.

The following example demonstrates how to retrieve a ScriptableCullingParameters object from a Camera, disable occlusion culling on the ScriptableCullingParameters object by unsetting the CullingOptions.OcclusionCull flag, and then use the ScriptableCullingParameters object in a culling operation.


              


```
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
            // Disable occlusion culling
            cullingParameters.cullingOptions &= ~CullingOptions.OcclusionCull;            // Schedule the cull operation
            CullingResults cullingResults = context.Cull(ref cullingParameters);            // Place code that schedules drawing operations using the CullingResults struct here
            // See ScriptableRenderContext.DrawRenderers for details and examples
            // …            // Execute all of the scheduled operations, in order
            context.Submit();
        }
    }
}
```





Additional resources: [ScriptableRenderContext.Cull](Rendering.ScriptableRenderContext.Cull.html), [Camera](Camera.html).


            
