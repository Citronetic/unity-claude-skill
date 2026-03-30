This version of Unity is unsupported.

Choosing a render pipeline

Render pipeline feature comparison

# Choose a render pipeline

It’s important to choose the right [Unity render pipeline](render-pipelines-overview.html) for your project when you’re early in development.

Different **render pipelines**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) have different capabilities and perform differently, so they work best for different games, applications, and platforms.

It can be very time-consuming to switch a project from one render pipeline to another, especially if the project is far along in development. Different render pipelines use different **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) and might not have the same features.

The table shows some high-level differences between the pipelines to help you choose the right pipeline for your project at the start.

**Note:** You can’t use the Universal Render Pipeline and the High Definition Render Pipeline (HDRP) at the same time. They’re both built with the Scriptable Render Pipeline (SRP), but their render paths and light models are different.

| Feature | Universal Render Pipeline (URP) | High Definition Render Pipeline (HDRP) | Built-In Render Pipeline |
| --- | --- | --- | --- |
| Target uses | Projects that need rendering scalability across all platforms, especially tile-based deferred rendering (TBDR) platforms, and untethered VR platforms.Projects that need to extend and customize the rendering pipeline.2D and 3D projects. | Projects that need photorealism and high-fidelity rendering on high-end platforms3D projects | Projects that need rendering scalability across all platforms.2D and 3D projects. |
| Platform support | Supports all Unity-supported platformsFocuses on efficiency on tile-based deferred rendering (TBDR) platforms, and untethered VR platforms | Supports desktop, Xbox and PlayStation platformsFocuses on efficiently using advanced GPU hardware capabilities such as async compute shaders, and ray tracing if the hardware supports it. | Supports all Unity-supported platforms |
| Source code access | Mostly C# Public access to the URP source code on GitHub. You can also create a custom pipeline using URP as a baseEasier to read, change, and extend the source code than the Built-In Render Pipeline | Mostly C# Public access to the HDRP source code on GitHub. You can also create a custom pipeline using HDRP as a baseEasier to read, change, and extend the source code than the Built-In Render Pipeline | Mostly C++ Private access by purchasing source code access |
| Pipeline extension | The API and injection points the pipeline provides, or you can modify the publicly available source codeEasier to extend than the Built-In Render Pipeline | The API and injection points the pipeline provides, or you can modify the publicly available source codeEasier to extend than the Built-In Render Pipeline, but more difficult than URP because HDRP is complex and has advanced features | The API and injection points the pipeline provides |
| Customization through artist tooling | Shader Graph, which you can use to customize shading, materials, and screen space effects Built-in Particle System, which you can use to customize visual effects.Limited customization VFX Graph, which you can use to design visual effects, from simple common particle behaviors to complex simulations running on the GPU. | Shader Graph, which you can use to customize shading, materials, and screen space effects Built-in Particle System, which you can use to customize visual effects. Limited customizationVFX Graph, which you can use to design visual effects, from simple common particle behaviors to complex simulations running on the GPU. | Shader Graph, which you can use to customize shading, materials, and screen space effectsShader Graph doesn’t receive updates for Built-In Render Pipeline support, aside from bug fixes for existing features Built-in Particle System, which you can use to customize visual effects. Limited customization |
| Customization through hand-coded shaders | HLSL shaders, and URP shaders in the source code that you can customize | HLSL shaders, and HDRP shaders in the source code that you can customizeHand-coded shaders are recommended for advanced users only, because HDRP shaders are complex and have advanced features | HLSL shaders and surface shaders |
| Lighting | Designed for both realistic and stylized lightingBasic PBR, and some advanced PBR such as clear coatEasier to customize for custom lighting models such as cel shading | Focuses on photorealism and physically accurate lighting with built-in support for physical light unitsBasic and advanced PBR. For example clear coat, skin, hair, eyes, subsurface scattering and waterAdvanced screen space and volumetric effectsHarder to customize for custom lighting models such as cel shading | Designed for both realistic and stylized lightingBasic physically-based rendering (PBR)Easier to customize for custom lighting models such as cel shading |
| Performance | Supports static batching and dynamic batching Advanced draw call batching with the Scriptable Render Pipeline (SRP) Batcher Compatible with the BatchRenderer Group API, and Entities | Supports static batchingAdvanced draw call batching with the Scriptable Render Pipeline (SRP) Batcher Compatible with the BatchRenderer Group API, and Entities | Supports static batching and dynamic batching |

Refer to [Render pipeline feature comparison](render-pipelines-feature-comparison.html) for detailed information about which pipeline is compatible with which features, to help you choose the right pipeline for your project.

## Additional resources

- [Universal Render Pipeline](universal-render-pipeline.html)

- [High Definition Render Pipeline](high-definition-render-pipeline.html)

- [Creating Believable Visuals tutorial](https://unity3d.com/learn/tutorials/s/creating-believable-visuals) for the Built-In Render Pipeline

- [Creating a custom render pipeline](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@17.0/manual/srp-custom.html)

Choosing a render pipeline

Render pipeline feature comparison
