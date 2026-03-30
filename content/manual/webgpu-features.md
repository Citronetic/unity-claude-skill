This version of Unity is unsupported.

WebGPU (Experimental)

Limitations of the WebGPU graphics API

# Introduction to the WebGPU graphics API

Enhance your Web project with WebGPU’s advanced graphics capabilities.

WebGPU is a web graphics API that provides low-level, high-performance access to modern GPU features. This information covers the features WebGPU uniquely supports and some features it doesn’t support yet.

## The features of WebGPU

In the browser, WebGPU uses modern GPU frameworks such as DirectX 12, Vulkan, or Metal (depending on your device) to improve visuals and optimize performance. Access to these frameworks let WebGPU introduce advanced graphics capabilities that aren’t possible with [WebGL2](WebGL2.html), including:

- [Compute shaders](class-ComputeShader.html)

- [Indirect rendering](../ScriptReference/Graphics.RenderMeshIndirect.html)

- [GPU skinning](../ScriptReference/PlayerSettings-gpuSkinning.html)

- [VFX Graph](https://unity.com/visual-effect-graph?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774939275785)

## Features with no support in WebGPU

Although WebGPU unlocks useful graphics features, there are a few it doesn’t support yet:

- Async compute

- [Dynamic resolution](DynamicResolution-landing.html)A Camera setting that allows you to dynamically scale individual render targets to reduce workload on the GPU. [More info](DynamicResolution-landing.html)
See in [Glossary](Glossary.html#dynamicresolution)

- [Cubemap arrays](class-CubemapArray-create.html)

WebGPU also has some limitations you need to be aware of. For more information, refer to [Limitations of WebGPU](WebGPU-limitations.html).

## Additional resources

- [WebGPU (Experimental)](WebGPU.html)

- [Limitations of the WebGPU graphics API](WebGPU-limitations.html)

- [Recommendations for both WebGL2 and WebGPU APIs](web-graphics-apis-intro.html)

- [Enable the WebGPU graphics API](WebGPU-enable.html)

WebGPU (Experimental)

Limitations of the WebGPU graphics API
