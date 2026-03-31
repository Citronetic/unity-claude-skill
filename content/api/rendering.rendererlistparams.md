This version of Unity is unsupported.



# RendererListParams





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



A low-level struct holding the arguments needed to create a [RendererList](Rendering.RendererList.html).





To create a [RendererList](Rendering.RendererList.html) object, fill this struct and pass it to [ScriptableRenderContext.CreateRendererList](Rendering.ScriptableRenderContext.CreateRendererList.html).

Alternatively, if you use the render graph system, pass this struct to [RenderGraph.CreateRendererList](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@latest/index.html?subfolder=/api/UnityEngine.Rendering.RenderGraphModule.RenderGraph.html#UnityEngine_Rendering_RenderGraphModule_RenderGraph_CreateRendererList_UnityEngine_Rendering_RendererListParams__). For more information about RenderGraph, refer to  [The render graph system](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@latest/index.html?subfolder=/manual/render-graph-system.html) .

In terms of usage, this struct is similar to [RendererListDesc](Rendering.RendererUtils.RendererListDesc.html), only lower level and more closely tied to engine internals. Use this struct instead of [RendererListDesc](Rendering.RendererUtils.RendererListDesc.html) if you need access to advanced properties such as [FilteringSettings.sortingLayerRange](Rendering.FilteringSettings-sortingLayerRange.html).

The example illustrates how `RendererListParams` can be used. Follow these steps:



          1. Save the example code in your project as `SimpleRenderPipelineAsset.cs`.

          2. Use the `RenderPipeline/Create SimpleRenderPipelineAsset` menu item to create the render pipeline asset.

          3. Go to Project Settings > Graphics, and assign the created asset as the **Default Render Pipeline Asset**.




              


```
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;public class SimpleRenderPipelineAsset : RenderPipelineAsset<SimpleRenderPipeline>
{
#if UNITY_EDITOR
    [UnityEditor.MenuItem("RenderPipeline/Create SimpleRenderPipelineAsset")]
    static void CreateSimpleRenderLoop()
    {
        var instance = CreateInstance<SimpleRenderPipelineAsset>();
        UnityEditor.AssetDatabase.CreateAsset(instance, "Assets/SimpleRenderPipeline.asset");
    }
#endif    protected override RenderPipeline CreatePipeline() => new SimpleRenderPipeline();
}public class SimpleRenderPipeline : RenderPipeline
{
    protected override void Render(ScriptableRenderContext context, List<Camera> cameras)
    {
        foreach (var camera in cameras)
        {
            if (!camera.TryGetCullingParameters(out var cullingParams))
                continue;

            CullingResults cullingResults = context.Cull(ref cullingParams);
            context.SetupCameraProperties(camera);            var cmd = new CommandBuffer();
            cmd.ClearRenderTarget(true, true, Color.red);

            // Draws visible MeshRenderers that use the built-in Default-Material/Default-Diffuse material.
            DrawingSettings drawingSettings = new DrawingSettings(new ShaderTagId("ForwardBase"), new SortingSettings(camera));
            FilteringSettings filteringSettings = new FilteringSettings(RenderQueueRange.opaque);
            var rendererListParams = new RendererListParams(cullingResults, drawingSettings, filteringSettings);
            var rendererList = context.CreateRendererList(ref rendererListParams);

            cmd.DrawRendererList(rendererList);
            context.ExecuteCommandBuffer(cmd);
            cmd.Release();
            context.Submit();
        }
    }
}
```





Additional resources: [RendererList](Rendering.RendererList.html), [ScriptableRenderContext.CreateRendererList](Rendering.ScriptableRenderContext.CreateRendererList.html).





### Static Properties



| Property | Description |
| --- | --- |
| Invalid | Returns an empty RendererListParams. |





### Properties



| Property | Description |
| --- | --- |
| cullingResults | The set of visible objects to draw. You typically obtain this from ScriptableRenderContext.Cull. |
| drawSettings | A struct that describes how to draw the objects. |
| filteringSettings | A struct that describes how to filter the set of visible objects, so that Unity only draws a subset. |
| isPassTagName | If set to true, tagName specifies a Pass Tag. Otherwise, tagName specifies a SubShader Tag. |
| stateBlocks | An array of structs that describe which parts of the GPU's render state to override. |
| tagName | The name of a SubShader Tag or Pass Tag. |
| tagValues | An array of ShaderTagId structs, where the name is the value of a given SubShader Tag or Pass Tag. |





### Constructors



| Constructor | Description |
| --- | --- |
| RendererListParams | Create a RendererListParams struct. |


            
