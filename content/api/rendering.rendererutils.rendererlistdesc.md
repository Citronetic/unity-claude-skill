This version of Unity is unsupported.



# RendererListDesc





struct in
          UnityEngine.Rendering.RendererUtils



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



A high-level struct holding the arguments needed to create a [RendererList](Rendering.RendererList.html).





To create a [RendererList](Rendering.RendererList.html) object, fill this struct and pass it to [ScriptableRenderContext.CreateRendererList](Rendering.ScriptableRenderContext.CreateRendererList.html).

Alternatively, if you use the render graph system, pass this struct to [RenderGraph.CreateRendererList](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@latest/index.html?subfolder=/api/UnityEngine.Rendering.RenderGraphModule.RenderGraph.html#UnityEngine_Rendering_RenderGraphModule_RenderGraph_CreateRendererList_UnityEngine_Rendering_RendererUtils_RendererListDesc__). For more information about RenderGraph, refer to  [The render graph system](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@latest/index.html?subfolder=/manual/render-graph-system.html) .

In terms of usage, this struct is similar to [RendererListParams](Rendering.RendererListParams.html), only higher level. If you need access to advanced properties such as [FilteringSettings.sortingLayerRange](Rendering.FilteringSettings-sortingLayerRange.html), use [RendererListParams](Rendering.RendererListParams.html) instead.

This struct can be converted to [RendererListParams](Rendering.RendererListParams.html) using [RendererListDesc.ConvertToParameters](Rendering.RendererUtils.RendererListDesc.ConvertToParameters.html).

The example illustrates how `RendererListDesc` can be used. Follow these steps:



          1. Save the example code in your project as `SimpleRenderPipelineAsset.cs`.

          2. Use the `RenderPipeline/Create SimpleRenderPipelineAsset` menu item to create the render pipeline asset.

          3. Go to Project Settings > Graphics, and assign the created asset as the **Default Render Pipeline Asset**.




              


```
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.RendererUtils;public class SimpleRenderPipelineAsset : RenderPipelineAsset<SimpleRenderPipeline>
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
            var rendererListDesc = new RendererListDesc(new ShaderTagId("ForwardBase"), cullingResults, camera)
            {
                renderQueueRange = RenderQueueRange.opaque
            };
            var rendererList = context.CreateRendererList(rendererListDesc);
            cmd.DrawRendererList(rendererList);            context.ExecuteCommandBuffer(cmd);
            cmd.Release();
            context.Submit();
        }
    }
}
```





Additional resources: [RendererList](Rendering.RendererList.html), [ScriptableRenderContext.CreateRendererList](Rendering.ScriptableRenderContext.CreateRendererList.html).





### Properties



| Property | Description |
| --- | --- |
| batchLayerMask | The batch layer mask to use for filtering this RendererList. |
| excludeObjectMotionVectors | Indicates whether to exclude dynamic GameObjects from the RendererList. |
| layerMask | The layer mask to use for filtering this RendererList. |
| overrideMaterial | The material to render the RendererList's GameObjects with. This overrides the material for each GameObject. |
| overrideMaterialPassIndex | Pass index for the override material. |
| overrideShader | The shader to render the RendererList's GameObjects with. This overrides the shader for each GameObject. Override shaders do not override existing material properties. |
| overrideShaderPassIndex | Selects which pass of the override shader to use. |
| rendererConfiguration | The renderer configuration for the RendererList. For more information, see PerObjectData. |
| renderingLayerMask | The rendering layer mask to use for filtering this RendererList. |
| renderQueueRange | The material render queue range to use for the RendererList. For more information, see RenderQueueRange. |
| sortingCriteria | The method Unity uses to sort the GameObjects in the RendererList. For more information, see SortingCriteria. |
| stateBlock | An optional set of values to override the RendererLists render state. For more information, see RenderStateBlock. |





### Constructors



| Constructor | Description |
| --- | --- |
| RendererListDesc | Initializes and returns an instance of RendererListDesc. |





### Public Methods



| Method | Description |
| --- | --- |
| IsValid | Checks whether the RendererListDesc is valid. |





### Static Methods



| Method | Description |
| --- | --- |
| ConvertToParameters | Convert a given RendererListDesc to a RendererListParams struct with equivalent parameters. |


            
