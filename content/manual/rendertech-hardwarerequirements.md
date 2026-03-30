This version of Unity is unsupported.

Using the Built-In Render Pipeline

Graphics quality settings in the Built-In Render Pipeline

# Hardware requirements for the Built-in Render Pipeline

## Summary

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | Win/Mac/Linux | iOS/Android | Consoles |  |
| Forward renderingA rendering path that renders each object in one or more passes, depending on lights that affect the object. Lights themselves are also treated differently by Forward Rendering, depending on their settings and intensity. More infoSee in Glossary | Yes | Yes | Yes |  |
| Vertex Lit rendering | Yes | Yes | - |  |
| Realtime Shadows | GPU support | GPU support | Yes |  |
| Image Effects | Yes | Yes | Yes |  |
| Programmable ShadersA program that runs on the GPU. More infoSee in Glossary | Yes | Yes | Yes |  |
| Fixed Function Shaders | Yes | Yes | - |  |

## Realtime Shadows

Realtime Shadows work on most PC, console & mobile platforms. On Windows (Direct3D), the GPU also needs to support shadow mapping features; most discrete GPUs support that since 2003 and most integrated GPUs support that since 2007. Technically, on Direct3D 10, the GPU should support [D16/D24X8 or DF16/DF24](http://aras-p.info/texts/D3D9GPUHacks.html) **texture formats**A file format for handling textures during real-time rendering by 3D graphics hardware, such as a graphics card or mobile device. [More info](texture-choose-format-by-platform.html)
See in [Glossary](Glossary.html#TextureFormat); and on OpenGL it should support the `GL_ARB_depth_texture` extension.

## Post-processing Effects

[Post-processing effects](PostProcessingOverview.html) require render-to-texture functionality, which is generally supported on anything made in this millenium.

## Shaders

You can write programmable or fixed function shaders. Programmable shaders are supported everywhere, and default to Shader Model 2.0 (desktop) and OpenGL ES 3.0. (mobile). You can target higher shader models if you want to add more functionality. Fixed function is supported everywhere except consoles.

**Note:** Shader Graph doesn’t support [XR](XR.html)An umbrella term encompassing Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR) applications. Devices supporting these forms of interactive applications can be referred to as XR devices. [More info](XR.html)
See in [Glossary](Glossary.html#XR) in the Built-in **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline).

## Additional resources

- [Render pipeline feature comparison reference](render-pipelines-feature-comparison.html)

- [Hardware requirements for the Univeral Render Pipeline](urp/requirements.html)

Using the Built-In Render Pipeline

Graphics quality settings in the Built-In Render Pipeline
