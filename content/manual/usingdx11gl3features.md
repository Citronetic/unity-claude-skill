This version of Unity is unsupported.

Configure graphics APIs

Metal

# DirectX

Unity supports the DirectX graphics API including both DirectX 11 and DirectX 12. However, not all features are available in DirectX 11. For more information, refer to [Feature comparison of DirectX 11 and DirectX 12 in Unity](#comparison-of-directx11-and-directx12-in-unity).

## Set your default graphics API to DirectX

You can choose to set DirectX 11 (DX11) or DirectX 12 (DX12) as your default Graphics API in the Editor or Standalone Player:

1. Open the [Player settings](class-PlayerSettings.html)Settings that let you set various player-specific options for the final game built by Unity. [More info](class-PlayerSettings.html)
See in [Glossary](Glossary.html#PlayerSettings) (menu: **Edit** > **Project Settings** > **Player**).

2. In the **Other Settings** > **Rendering** section, disable the **Auto Graphics API for a platform (Windows/Mac/Linux)** option.

3. Select the **Add** (**+**) button, then select **Direct3D11** or **Direct3D12** from the list of the supported Graphics APIs.

## Feature comparison of DirectX 11 and DirectX 12 in Unity

The following lists include the features introduced with the DirectX 12 graphics API, which are unavailable in DirectX 11.

| APIs | DirectX 11 | DirectX 12 |
| --- | --- | --- |
| Dynamic resolutionA Camera setting that allows you to dynamically scale individual render targets to reduce workload on the GPU. More infoSee in Glossary | Unsupported | Supported |
| Asynchronous compute | Unsupported | Supported |
| Native render pass | Unsupported | Supported |
| Ray tracing acceleration | Unsupported | Supported |
| Graphics state collection | Unsupported | Supported |
| XR foveated rendering | Unsupported | Supported |

| Render Threading Mode | DirectX 11 | DirectX 12 |
| --- | --- | --- |
| Direct | Supported | Supported |
| Single threaded | Supported | Supported |
| Main + render thread | Supported | Supported |
| Legacy jobified | Supported | Supported |
| Native graphics jobs | Unsupported | Supported |
| Split graphics jobs | Unsupported | Supported |

| ShaderA program that runs on the GPU. More infoSee in Glossary features | DirectX 11 | DirectX 12 |
| --- | --- | --- |
| Ray tracing shader | Unsupported | Supported |
| Inline ray tracing (#pragma multi_compile _ UNITY_DEVICE_SUPPORTS_INLINE_RAY_TRACING) | Unsupported | Supported |
| Native 16-bit (#pragma multi_compile _ UNITY_DEVICE_SUPPORTS_NATIVE_16BIT) | Unsupported | Supported |
| Wave function (#pragma multi_compile _ UNITY_DEVICE_SUPPORTS_WAVE_ANY) | Unsupported | Supported |

| Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary | DirectX 11 | DirectX 12 |
| --- | --- | --- |
| Raster pass merging | Unsupported | Supported (Windows on ARM) |
| Native RenderPass | Unsupported | Supported (Windows on ARM) |
| Framebuffer fetch | Unsupported | Supported (Windows on ARM) |

| High Definition Render Pipeline | DirectX 11 | DirectX 12 |
| --- | --- | --- |
| Hardware dynamic resolution | Unsupported | Supported |
| Asynchronous Compute Shaders | Unsupported | Supported |
| Ray traced ambient occlusion | Unsupported | Supported |
| Ray traced contact shadows | Unsupported | Supported |
| Ray traced global illumination | Unsupported | Supported |
| Ray traced reflections | Unsupported | Supported |
| Ray traced shadows | Unsupported | Supported |
| Ray traced recursion | Unsupported | Supported |
| Ray traced subsurface scattering | Unsupported | Supported |

## Additional resources

- [Configure graphics APIs](configure-graphicsAPIs.html)

- [Surface Shaders with DX11 / OpenGL Core Tessellation](SL-SurfaceShaderTessellation.html)

- [Surface shaders and DirectX 11 HLSL syntax](SL-SurfaceShaders.html#surface-shaders-directX)

Configure graphics APIs

Metal
