This version of Unity is unsupported.

Output a motion vector texture from a camera

Troubleshooting camera output

# Sample output textures in a shader

Depth textures are available for sampling in shaders as global **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) properties. By declaring a sampler called `_CameraDepthTexture` you will be able to sample the main depth texture for the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera).

`_CameraDepthTexture` always refers to the camera’s primary depth
texture. By contrast, you can use `_LastCameraDepthTexture` to refer to the last depth texture rendered by any camera. This could be useful for example if you render a half-resolution depth texture in script using a secondary camera and want to make it available to a post-process shader.

In the Built-In **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline), the motion vectors texture (when enabled) is available in Shaders as a global Shader property. By declaring a sampler called ‘_CameraMotionVectorsTexture’ you can sample the Texture for the currently rendering Camera. When sampling from this texture motion from the encoded **pixel**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](ShadowPerformance.html)
See in [Glossary](Glossary.html#pixel) is returned in a range of –1..1. This will be the UV offset from the last frame to the current frame.

## Additional resources

- [Sample motion vectors in a shader in URP](urp/features/motion-vectors-sample.html)

Output a motion vector texture from a camera

Troubleshooting camera output
