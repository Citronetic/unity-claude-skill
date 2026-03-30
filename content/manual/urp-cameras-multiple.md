This version of Unity is unsupported.

Change the render type of a camera in URP

Camera stacking in URP

# Multiple cameras in URP

[Image: An example of the effect camera stacking can produce in URP]
An example of the effect camera stacking can produce in URP

Resources and approaches for using multiple cameras to work with multiple **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../CamerasOverview.html)
See in [Glossary](../Glossary.html#Camera) outputs and targets in the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP).

**Note:** If you use multiple cameras, it might make rendering slower. An active camera runs through the entire rendering loop even if it renders nothing.

| Page | Description |
| --- | --- |
| Camera stacking | Learn about the fundamental concepts of camera stacking. |
| Set up a camera stack | Stack cameras to layer the outputs of multiple cameras into a single combined output. |
| Add and remove cameras in a camera stack | Add, remove, and reorder cameras within a camera stack. |
| Set up split-screen rendering | Render multiple camera outputs to a single render target to create effects such as split screen rendering. |
| Apply different post processing effects to separate cameras | Apply different post-processingA process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. More info post processing, postprocessing, postprocessSee in Glossary setups to individual cameas within a sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary. |
| Render a camera’s output to a Render Texture | Render to a Render TextureA special type of Texture that is created and updated at runtime. To use them, first create a new Render Texture and designate one of your Cameras to render into it. Then you can use the Render Texture in a Material just like a regular Texture. More infoSee in Glossary to create effects such as in-game CCTV monitors. |
| Create a render request | Trigger a camera to render to a Render Texture outside of URP rendering loop. |

## Additional resources

- [Multiple cameras](../MultipleCameras-landing.html)

- [Camera render types in URP](camera-types-and-render-type.html)

- [Camera render order in URP](cameras-advanced.html)

Change the render type of a camera in URP

Camera stacking in URP
