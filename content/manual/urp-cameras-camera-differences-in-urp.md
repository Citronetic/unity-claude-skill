This version of Unity is unsupported.

Cameras in URP

Camera render types in URP

# Introduction to cameras in URP

URP cameras use the following:

- The [Universal Additional Camera Data](../universal-additional-camera-data.html) component, which extends the Camera component’s functionality and allows URP to store additional camera-related data.

- The [Render Type](../camera-types-and-render-type.html) setting, which defines the two types of camera in URP: Base and Overlay.

- The [Camera Stacking](../camera-stacking.html) system, which allows you to layer the output of multiple Cameras into a single combined output.

- The [Volume](../Volumes.html) system, which allows you to apply [post-processing effects](../integration-with-post-processing.html) to a camera based on the position of a Transform in your **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene).

- The [Camera component](../camera-component-reference.html), which exposes URP-specific properties in the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../../UsingTheInspector.html)
See in [Glossary](../../Glossary.html#Inspector).

For a general introduction to how cameras work in Unity, and examples of common Camera workflows, refer to [Cameras](https://docs.unity3d.com/Manual/CamerasOverview.html)A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../../CamerasOverview.html)
See in [Glossary](../../Glossary.html#Camera).

## Additional resources

- [Cameras in the Built-In Render Pipeline](../../cameras-birp.html)

Cameras in URP

Camera render types in URP
