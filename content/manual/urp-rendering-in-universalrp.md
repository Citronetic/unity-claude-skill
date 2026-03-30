This version of Unity is unsupported.

Universal Render Pipeline fundamentals

Rendering paths in URP

# Rendering in the Universal Render Pipeline

The Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP) renders **scenes**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../CreatingScenes.html)
See in [Glossary](../Glossary.html#Scene) using the following components:

- URP Renderer. URP contains the following Renderers:

- [Universal Renderer](urp-universal-renderer.html).

- [2D Renderer](Setup.html).

- [Shading models](shading-model.html) for **shaders**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader) shipped with URP

- Camera

- [URP Asset](universalrp-asset.html)

The following illustration shows the frame rendering loop of the URP Universal Renderer.

[Image: URP Universal Renderer, Forward Rendering Path]
URP Universal Renderer, Forward Rendering Path

When the [render pipeline is active in Graphics Settings](InstallURPIntoAProject.html), Unity uses URP to render all Cameras in your Project, including game and **Scene view**An interactive view into the world you are creating. You use the Scene View to select and position scenery, characters, cameras, lights, and all other types of Game Object. [More info](../UsingTheSceneView.html)
See in [Glossary](../Glossary.html#SceneView) cameras, **Reflection Probes**A rendering component that captures a spherical view of its surroundings in all directions, rather like a camera. The captured image is then stored as a Cubemap that can be used by objects with reflective materials. [More info](../class-ReflectionProbe.html)
See in [Glossary](../Glossary.html#ReflectionProbe), and the preview windows in your **Inspectors**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../UsingTheInspector.html)
See in [Glossary](../Glossary.html#Inspector).

The URP renderer executes a Camera loop for each Camera, which performs the following steps:

1. Culls rendered objects in your scene

2. Builds data for the renderer

3. Executes a renderer that outputs an image to the framebuffer.

## Camera loop

The Camera loop performs the following steps:

| Step | Description |
| --- | --- |
| Setup Culling Parameters | Configures parameters that determine how the culling system culls Lights and shadows. You can override this part of the render pipeline with a custom renderer. |
| Culling | Uses the culling parameters from the previous step to compute a list of visible renderers, shadow casters, and Lights that are visible to the Camera. Culling parameters and Camera layer distances affect culling and rendering performance. |
| Build Rendering Data | Catches information based on the culling output, quality settings from the URP Asset, CameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary, and the current running platform to build the RenderingData. The rendering data tells the renderer the amount of rendering work and quality required for the Camera and the currently chosen platform. |
| Setup Renderer | Builds a list of render passes, and queues them for execution according to the rendering data. You can override this part of the render pipeline with a custom renderer. |
| Execute Renderer | Executes each render pass in the queue. The renderer outputs the Camera image to the framebuffer. |

Universal Render Pipeline fundamentals

Rendering paths in URP
