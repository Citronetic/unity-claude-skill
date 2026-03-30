This version of Unity is unsupported.

HLSL pragma target command reference

Built-in shader variables reference

# HLSL pragma require command reference

Here are all the valid values for the `#pragma require` directive.

| Value | Description |
| --- | --- |
| interpolators10 | At least 10 vertex-to-fragment interpolators (“varyings”) are available. |
| interpolators15 | At least 15 vertex-to-fragment interpolators (“varyings”) are available.Note: Internally, this also automatically adds integers to the list of requirements. |
| interpolators32 | At least 32 vertex-to-fragment interpolators (“varyings”) are available. |
| integers | Integers are a supported data type, including bit/shift operations.Note: Internally, this also automatically adds interpolators15 to the list of requirements. |
| mrt4 | At least 4 render targets are supported. |
| mrt8 | At least 8 render targets are supported. |
| derivatives | PixelThe smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. More infoSee in Glossary shaderA program that runs on the GPU. More infoSee in Glossary derivative instructions (ddx/ddy) are supported. |
| samplelod | Explicit texture LODThe Level Of Detail (LOD) technique is an optimization that reduces the number of triangles that Unity has to render for a GameObject when its distance from the Camera increases. More infoSee in Glossary sampling (tex2Dlod / SampleLevel) is supported. |
| fragcoord | Pixel location (XY on screen, ZW depth in clip space) input in pixel shader is supported. |
| 2darray | 2D texture arrays are a supported data type. |
| cubearray | CubemapA collection of six square textures that can represent the reflections in an environment or the skybox drawn behind your geometry. The six squares form the faces of an imaginary cube that surrounds an object; each face represents the view along the directions of the world axes (up, down, left, right, forward and back). More infoSee in Glossary arrays are a supported data type. |
| instancing | SV_InstanceID input system value is supported. |
| geometry | Geometry shader stages are supported. |
| compute | Compute shaders, structured buffers, and atomic operations are supported. |
| randomwrite or uav | “Random write” (UAV) textures are supported. |
| tesshw | Hardware tessellation is supported, but not necessarily tessellation (hull/domain) shader stages. For example, Metal supports tessellation, but not hull or domain stages. |
| tessellation | Tessellation (hull/domain) shader stages are supported. |
| msaatex | The ability to access multi-sampled textures (Texture2DMS in HLSL) is supported. |
| sparsetex | Sparse textures with residency info (“Tier2” support in DirectX terms; CheckAccessFullyMapped HLSL function). |
| framebufferfetch or fbfetch | The ability to get the current framebuffer from GPU memory is supported. This process is sometimes called framebuffer fetch. For more information, refer to Writing shaders for different graphics APIs. |
| setrtarrayindexfromanyshader | Setting the render target array index from any shader stage (not just the geometry shader stage) is supported. |
| inlineraytracing | Inline ray tracingThe process of generating an image by tracing out rays from the Camera through each pixel and recording the color contribution at the hit point. This is an alternative to rasterization. raytracingSee in Glossary is supported, so you can generate ray queries in the rasterizationThe process of generating an image by calculating pixels for each polygon or triangle in the geometry. This is an alternative to ray tracing.See in Glossary and compute stages of a shader. Refer to SystemInfo.supportsInlineRayTracing for more information. |

HLSL pragma target command reference

Built-in shader variables reference
