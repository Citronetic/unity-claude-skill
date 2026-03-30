This version of Unity is unsupported.

Multiple cameras in URP

Set up a camera stack in URP

# Camera stacking in URP

In the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../../render-pipelines.html)
See in [Glossary](../../Glossary.html#Renderpipeline) (URP), you use **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../../CamerasOverview.html)
See in [Glossary](../../Glossary.html#Camera) stacking to layer the output of multiple Cameras and create a single combined output. Camera stacking allows you to create effects such as a 3D model in a 2D UI, or the cockpit of a vehicle.

A camera stack consists of a [Base Camera](../camera-types-and-render-type-introduction.html#base-camera) and one or more [Overlay Cameras](../camera-types-and-render-type-introduction.html#overlay-camera). A camera stack overrides the output of the Base Camera with the combined output of all the cameras in the camera stack. As a result, anything you can do with the output of a Base Camera, you can do with the output of a camera stack. For example, you can render a camera stack to a render target, or apply **post-processing**A process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. [More info](../../PostProcessingOverview.html) post processing, postprocessing, postprocess
See in [Glossary](../../Glossary.html#post-processing) effects.

Refer to [Set up a camera stack](../camera-stacking.html) for more information. To download examples of camera stacking in URP, install the [Camera Stacking samples](../package-sample-urp-package-samples.html#camera-stacking).

## Camera stacking and rendering order

URP performs several optimizations within a camera, including rendering order optimizations to reduce overdraw. However, when you use a camera stack, you define the order in which URP renders the cameras. You must be careful not to order the cameras in a way that causes excessive overdraw. For more information on overdraw in URP, refer to [Rendering order optimizations](../cameras-advanced.html#rendering-order-optimizations).

## Camera stacking and post-processing

You should only apply post-processing to the last camera in the stack, so the following applies:

- URP renders the post-processing effects only once, not repeatedly for each camera.

- The visual effects are consistent, because all the cameras in the stack receive the same post-processing.

## Limitations

You cannot use a mix of different types of renderers (2D and 3D) for cameras in a camera stack.

## Additional resources

- [Set up a camera stack](../camera-stacking.html)

- [Camera component reference](../camera-component-reference.html)

Multiple cameras in URP

Set up a camera stack in URP
