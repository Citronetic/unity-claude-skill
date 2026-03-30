This version of Unity is unsupported.

Create a new project that uses URP

Import a package sample in URP

# Scene templates in URP

You can use [Scene Templates](https://docs.unity3d.com/Manual/scene-templates.html) to quickly create scenes that include pre-configured URP-specific settings and **post-processing**A process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. [More info](../PostProcessingOverview.html) post processing, postprocessing, postprocess
See in [Glossary](../Glossary.html#post-processing) effects. For information on how to create a new **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../CreatingScenes.html)
See in [Glossary](../Glossary.html#Scene) from a Scene Template, refer to [Creating a new scene from the New Scene dialog](https://docs.unity3d.com/Manual/scenes-working-with.html#creating-a-new-scene-from-the-new-scene-dialog).

[Image: The New Scene dialog displaying Scene Templates.]
The New Scene dialog displaying Scene Templates.

The following Scene Templates are available for URP:

- **Basic (URP)**: A scene that contains a [Camera](camera-component-reference.html)A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../CamerasOverview.html)
See in [Glossary](../Glossary.html#Camera) and a [Light](light-component.html). This is the URP equivalent of Unity’s default scene.

- **Standard (URP)**: A scene that contains a Camera, a Light, and a global [Volume](Volumes.html) with various post-processing effects. **Note**: If you create a scene using the Standard (URP) Scene Template, Unity creates a new [Volume Profile](Volume-Profile.html) to store the post-processing effects.

Create a new project that uses URP

Import a package sample in URP
