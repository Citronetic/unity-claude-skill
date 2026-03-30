This version of Unity is unsupported.

Post-processing in URP

Add post-processing in URP

# Introduction to post-processing in URP

The Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP) includes an integrated implementation of [post-processing](https://docs.unity3d.com/Manual/PostProcessingOverview.html)A process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. [More info](../PostProcessingOverview.html) post processing, postprocessing, postprocess
See in [Glossary](../Glossary.html#post-processing) effects. This implementation uses the [volume](Volumes.html) framework for post-processing effects.

URP is not compatible with the [Post Processing Stack v2](https://docs.unity3d.com/Packages/com.unity.postprocessing@latest/index.html) package.

The images below show a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../CreatingScenes.html)
See in [Glossary](../Glossary.html#Scene) with and without URP post-processing:

[Image: A scene without post-processing]
A scene without post-processing

[Image: A scene with post-processing.]
A scene with post-processing.

**Note**: URP does not support Post-processing on OpenGL ES 2.0.

## Post-processing in URP for mobile devices

Post-processing effects can take up a lot of frame time. If you’re using URP for mobile devices, these effects are the most “mobile-friendly” by default:

- Bloom (with **High Quality Filtering** disabled)

- Chromatic Aberration

- Color Grading

- Lens Distortion

- Vignette

**Note**: For depth-of field, Unity recommends that you use Gaussian **Depth of Field**A post-processing effect that simulates the focus properties of a camera lens. [More info](../PostProcessingOverview.html)
See in [Glossary](../Glossary.html#DepthofField) for lower-end devices. For console and desktop platforms, use Bokeh Depth of Field.

## Post-processing in URP for VR

In **VR**Virtual Reality [More info](../VROverview.html)
See in [Glossary](../Glossary.html#VR) apps and games, certain post-processing effects can cause nausea and disorientation. To reduce motion sickness in fast-paced or high-speed apps, use the Vignette effect for VR, and avoid the effects Lens Distortion, Chromatic Aberration, and Motion Blur for VR.

Post-processing in URP

Add post-processing in URP
