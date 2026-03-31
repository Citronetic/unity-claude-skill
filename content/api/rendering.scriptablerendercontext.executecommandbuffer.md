This version of Unity is unsupported.



# [ScriptableRenderContext](Rendering.ScriptableRenderContext.html).ExecuteCommandBuffer




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

public void ExecuteCommandBuffer([Rendering.CommandBuffer](Rendering.CommandBuffer.html) commandBuffer);






### Parameters



| Parameter | Description |
| --- | --- |
| commandBuffer | Specifies the Command Buffer to execute. |





### Description



Schedules the execution of a custom graphics Command Buffer.





During the call to [ScriptableRenderContext.ExecuteCommandBuffer](Rendering.ScriptableRenderContext.ExecuteCommandBuffer.html), [ScriptableRenderContext](Rendering.ScriptableRenderContext.html) registers the commandBuffer parameter into its own internal list of commands to execute.
The actual execution of these commands (including the commands stored in the custom commandBuffer) happens during [ScriptableRenderContext.Submit](Rendering.ScriptableRenderContext.Submit.html).

Make sure that you call ExecuteCommandBuffer before other ScriptableRenderContext methods (such as DrawRenderers, DrawShadows) if your draw calls depend on a state of the pipeline that you specify in a CommandBuffer.
The code sample below illustrates a case when commands are submitted in an incorrect order ; followed by a case that behaves as expected:


              


```
using UnityEngine;
using UnityEngine.Rendering;internal class ExecuteCommandBufferExample
{
    // TODO: replace with actual settings
    ScriptableRenderContext scriptableRenderContext;
    DrawingSettings drawingSettings;
    CullingResults cullingResults = new CullingResults();
    FilteringSettings filteringSettings = new FilteringSettings();    Matrix4x4 myViewMatrix = Matrix4x4.Scale(new Vector3(2f, 2f, 2f));    public void DrawRenderersExampleIncorrect()
    {
        CommandBuffer myCommandBuffer = new CommandBuffer();        myCommandBuffer.SetViewMatrix(myViewMatrix);        scriptableRenderContext.DrawRenderers(cullingResults, ref drawingSettings, ref filteringSettings);
        // NO! When scriptableRenderContext submits the DrawRenderers command, it will not know about myViewMatrix :(        scriptableRenderContext.ExecuteCommandBuffer(myCommandBuffer);
        myCommandBuffer.Clear();
    }    public void DrawRenderersExampleBetter()
    {
        CommandBuffer myCommandBuffer = new CommandBuffer();        myCommandBuffer.SetViewMatrix(myViewMatrix);        scriptableRenderContext.ExecuteCommandBuffer(myCommandBuffer);
        myCommandBuffer.Clear();        scriptableRenderContext.DrawRenderers(cullingResults, ref drawingSettings, ref filteringSettings);
        // OK! During next scriptableRenderContext.Submit() call, scriptableRenderContext will set myViewMatrix *before* drawing the renderers.
    }
}
```





Additional resources: [CommandBuffer](Rendering.CommandBuffer.html).


            
