This version of Unity is unsupported.

Transfer a texture between render passes in URP

Get data from the current frame in URP

# Frame data in the render graph system in URP

Fetch the textures that the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP) creates for the current frame or previous frames, for example a color texture or a depth texture.

| Page | Description |
| --- | --- |
| Get data from the current frame | Fetch the textures URP creates for the current frame. |
| Get data from previous frames | To fetch the previous frames the cameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary rendered, use the UniversalCameraData.historyManager API. |
| Add textures to the camera history | To add your own texture to the camera history, create a camera history type to store the texture between frames. |
| Get the current framebuffer from GPU memory | To speed up rendering, use the SetInputAttachment API to read the frame that Unity has rendered so far. |
| Frame data textures reference | Explore the textures you can fetch from the current frame or previous frames. |

Transfer a texture between render passes in URP

Get data from the current frame in URP
