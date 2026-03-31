This version of Unity is unsupported.



# [RenderPipelineManager](Rendering.RenderPipelineManager.html).beginContextRendering




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



Delegate that you can use to invoke custom code at the start of [RenderPipeline.Render](Rendering.RenderPipeline.Render.html).





When Unity calls [RenderPipeline.BeginContextRendering](Rendering.RenderPipeline.BeginContextRendering.html) at the start of [RenderPipeline.Render](Rendering.RenderPipeline.Render.html), it executes the methods in this delegate's invocation list.

In the Universal Render Pipeline (URP) and the High Definition Render Pipeline (HDRP), Unity calls [RenderPipeline.BeginContextRendering](Rendering.RenderPipeline.BeginContextRendering.html) automatically. If you are writing a custom Scriptable Render Pipeline, you must call the method yourself. This functionality is not compatible with the Built-in Render Pipeline.

This delegate works in the same way as [RenderPipelineManager.beginFrameRendering](Rendering.RenderPipelineManager-beginFrameRendering.html), except that this version does not cause heap allocations.

The following code example demonstrates how to add a method to this delegate's invocation list, and later remove it.


              


```
using UnityEngine;
using UnityEngine.Rendering;
using System.Collections.Generic;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        RenderPipelineManager.beginContextRendering += OnBeginContextRendering;
    }    void OnBeginContextRendering(ScriptableRenderContext context, List<Camera> cameras)
    {
        // Put the code that you want to execute at the start of RenderPipeline.Render here
    }    void OnDestroy()
    {
        RenderPipelineManager.beginContextRendering -= OnBeginContextRendering;
    }
}
```





Additional resources: [RenderPipeline.BeginContextRendering](Rendering.RenderPipeline.BeginContextRendering.html), [RenderPipelineManager.endContextRendering](Rendering.RenderPipelineManager-endContextRendering.html), [Unity Manual: Scriptable Render Pipeline](../Manual/ScriptableRenderPipeline.html)


            
