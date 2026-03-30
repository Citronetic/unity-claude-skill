This version of Unity is unsupported.

Introduction to the deferred rendering path

G-buffer layout in the Deferred and Deferred+ rendering paths in URP

# Render passes in the Deferred and Deferred+ rendering paths in URP

The following table lists the render passes that both the Deferred and Deferred+ **rendering paths**The technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. [More info](../../RenderingPaths.html)
See in [Glossary](../../Glossary.html#RenderingPath) use.

| Render event | Render pass that occurs after the render event | Description |
| --- | --- | --- |
| BeforeRendering | - | - |
| BeforeRenderingShadows | - | - |
| AfterRenderingShadows | - | - |
| BeforeRenderingPrePasses | DepthPrepass, or DepthPrepass and DepthNormalPrepass. | Render depth and normal textures in a prepass, for materials that Unity renders in a Forward pass. |
| AfterRenderingPrePasses | - | - |
| BeforeRenderingGbuffer | GBufferPass | Render the G-Buffer, then copy the G-Buffer depth texture. |
| AfterRenderingGbuffer | SSAO | Calculate the screen space ambient occlusionA method to approximate how much ambient light (light not coming from a specific direction) can hit a point on a surface.See in Glossary (SSAO) texture. Unity calculates this here only if you enable SSAO, and disable After Opaque. |
| BeforeRenderingDeferredLights | Deferred Pass | Deferred rendering. Unity uses the SSAO texture during this render pass, if it was created. |
| AfterRenderingDeferredLights | - | - |
| BeforeRenderingOpaques | - | Render opaque forward-only materials. |
| AfterRenderingOpaques | - | Calculate and blend the screen space ambient occlusion (SSAO) texture. Unity calculates this here only if you enable SSAO, and enable After Opaque. |
| BeforeRenderingSkybox | - | - |
| AfterRenderingSkybox | - | - |
| BeforeRenderingTransparents | - | - |
| AfterRenderingTransparents | - | - |
| BeforeRenderingPostProcessing | - | - |
| AfterRenderingPostProcessing | - | - |
| AfterRendering | - | - |

For the full list of render events, and injection points for custom render passes, refer to [Injection points reference for URP](../customize/custom-pass-injection-points.html).

## Source code reference

The following table lists the files that contain code related to the Deferred rendering path, located in the `com.unity.render-pipelines.universal` folder.

| File path | Description |
| --- | --- |
| Runtime/DeferredLights.cs | Defines the main class that handles the Deferred rendering path. |
| Runtime/Passes/GBufferPass.cs | Implements a ScriptableRenderPass for the G-buffer rendering pass. |
| Runtime/Passes/DeferredPass.cs | Implements a ScriptableRenderPass for the Deferred shadingA rendering path in the Built-in Render Pipeline that places no limit on the number of Lights that can affect a GameObject. All Lights are evaluated per-pixel, which means that they all interact correctly with normal maps and so on. Additionally, all Lights can have cookies and shadows. More infoSee in Glossary pass. |
| Shaders/Utils/StencilDeferred.shader | Defines the rendering behavior for stencil-based deferred lighting when using the Deferred rendering path. |
| Shaders/Utils/ClusterDeferred.shader | Defines the rendering behavior for cluster-based deferred lighting when using the Deferred+ rendering path. |
| ShaderLibrary/GBufferInput.hlsl | Contains utility functions for reading material properties from the G-buffers in the Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary (URP). |
| ShaderLibrary/GBufferOutput.hlsl | Contains utility functions for writing material properties to the G-buffers in URP. |

## Additional resources

- [Custom rendering and post-processing in URP](../customizing-urp.html)

Introduction to the deferred rendering path

G-buffer layout in the Deferred and Deferred+ rendering paths in URP
