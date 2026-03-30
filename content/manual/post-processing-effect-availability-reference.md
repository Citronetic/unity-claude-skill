This version of Unity is unsupported.

Introduction to post-processing

Post-processing and full-screen effects in URP

# Post-processing effect availability reference

This table contains information on which **post-processing**A process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. [More info](PostProcessingOverview.html) post processing, postprocessing, postprocess
See in [Glossary](Glossary.html#post-processing) effects and full-screen effects are available in Unity’s different post-processing solutions, how to find those effects, and what other effects you can use to achieve a similar result.

In previous versions of Unity, you applied all post-processing effects and full-screen effects in the same way; by adding components to a **Camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera). In more recent versions of Unity, you can apply these effects in different ways.

**Note**: Unity implements effects differently depending on the **render pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) you are using. This means that effects vary in terms of performance, appearance, and configuration between packages.

## Post-processing effects and pipeline support

| Effect Name | Description | Available in URP integrated solution? | Available in HDRP integrated solution? | Available in PPv2 package? |
| --- | --- | --- | --- | --- |
| Ambient Occlusion | The Ambient Occlusion effect darkens the areas in your scene that are not exposed to ambient lighting. | Yes See Universal Render Pipeline: Ambient Occlusion   You can also apply Ambient Occlusion as part of your baked lighting. For more information, see Baked Ambient Occlusion | Yes Choose from SSAO using a Volume Override, or Ray-Traced Ambient Occlusion  You can also apply per-Material Ambient Occlusion  You can also apply Ambient Occlusion as part of your baked lighting. For more information, see Baked Ambient Occlusion | Yes See Post Processing: Ambient Occlusion  You can also apply Ambient Occlusion as part of your baked lighting. For more information, see Baked Ambient Occlusion |
| Anti-aliasing | The Anti-aliasing effect softens the appearance of edges in your scene. Depending on your render pipeline, you can use MSAA (hardware anti-aliasing), or FXAA, SMAA, or TAA (anti-aliasing post-processing effects) | Yes FXAA and SMAA can be enabled in the Camera component You can also configure MSAA (hardware anti-aliasing) in Quality Settings | Yes FXAA, SMAA, and TAA are implemented in Project Settings > Frame Settings > HDRP Default Settings; see Anti-aliasing in the High Definition Render PipelineYou can also configure MSAA (hardware anti-aliasing) in the HDRP Asset - see Anti-aliasing in the High Definition Render Pipeline. | Yes For FXAA, SMAA, and TAA, see Post Processing: Anti-aliasing You can also configure MSAA (hardware anti-aliasing) in Quality Settings |
| Auto Exposure | The Auto Exposure effect dynamically adjusts the exposure of an image to match its mid-tone. | No | Yes In High Definition Render Pipeline: Exposure Volume Override, when Mode is set to Automatic | Yes See Post Processing:Auto Exposure |
| Bloom | The Bloom effect makes bright areas in your image glow. Note that Bloom works differently in each package, and requires different settings; read the documentation for a given package for more information. | Yes See Universal Render Pipeline: Bloom | Yes  See High Definition Render Pipeline: Bloom | YesSee Post Processing: Bloom |
| Channel Mixer | The Channel mixer lets you adjust the balance of each input color. | YesSee Universal Render Pipeline: Channel Mixer | YesSee High Definition Render Pipeline: Channel Mixer | YesSee Channel Mixer in Post Processing: Color Grading |
| Chromatic Aberration | The Chromatic Aberration effect disperses colors along the boundaries between dark and light areas of the image. | YesSee Universal Render Pipeline: Chromatic Aberration | YesSee High Definition Render Pipeline: Chromatic Aberration | YesSee Post Processing: Chromatic Aberration |
| Color Adjustments | The Color Adjustments effect lets you change the overall tone, brightness, and contrast of the final rendered image. | YesSee Universal Render Pipeline: Color Adjustments | YesSee High Definition Render Pipeline: Color Adjustments | YesSee Tone in Post Processing: Color Grading |
| Color Curves | The Color Curves effect lets you adjust specific ranges in hue, saturation, or luminosity. | YesSee Universal Render Pipeline: Color Curves | YesSee High Definition Render Pipeline: Color Curves | YesSee Grading Curves in Post Processing: Color Grading |
| Fog | The Fog effect simulates the look of fog or mist in outdoor environments. | No | YesSee High Definition Render Pipeline: Fog Volume Override (note that this is not implemented as a full-screen effect or post-processing effect) | YesSee Post Processing: Deferred Fog |
| Depth of Field | The Depth of Field effect blurs the background of your image while the objects in the foreground stay in focus. | YesSee Universal Render Pipeline: Depth of Field | YesSee High Definition Render Pipeline: Depth of Field | YesSee Post Processing: Depth of Field |
| Grain | The Grain effect overlays film noise onto your image. | YesSee Universal Render Pipeline: Film Grain | YesSee High Definition Render Pipeline: Film Grain | YesSee Post Processing: Grain |
| Lens Distortion | The Lens Distortion effect simulates distortion caused by the shape of a real-world camera lens. | YesSee Universal Render Pipeline: Lens Distortion | YesSee High Definition Render Pipeline: Lens Distortion | Yes See Post Processing: Lens Distortion |
| Lift, Gamma, Gain | The Lift, Gamma, Gain effect allows you to perform three-way color grading. | Yes See Universal Render Pipeline: Lift, Gamma, Gain | Yes See High Definition Render Pipeline: Lift, Gamma, Gain | YesSee Trackballs in Post Processing: Color Grading |
| Motion Blur | The Motion Blur effect blurs the image in the direction of the camera’s movement | Yes See Universal Render Pipeline: Motion Blur | YesSee High Definition Render Pipeline: Motion Blur | YesSee Post Processing: Motion Blur |
| Panini Projection | The Panini Projection effect corrects distortion at the edge of an image caused by a wide field of view. | Yes See Universal Render Pipeline: Panini Projection | Yes See High Definition Render Pipeline: Panini Projection | No |
| Screen Space Reflection | The Screen Space Reflection effect creates subtle reflections that simulate wet floor surfaces or puddles. | No | Yes See High Definition Render Pipeline: Screen Space Reflection | YesSee Post Processing: Screen Space Reflection |
| Shadows Midtones Highlights | The Shadows Midtones Highlights effect separately controls the tint and brightness of the shadows, midtones, and highlights in your image | YesSee Universal Render Pipeline: Shadows, Midtones, Highlights | YesSee High Definition Render Pipeline: Shadows Midtones Highlights | No |
| Split Toning | The Split Toning effect maps two different tones in your image to two specific colors. | Yes See Universal Render Pipeline: Split Toning | YesSee High Definition Render Pipeline: Split Toning | No |
| Tonemapping | The Tonemapping effect remaps the values of an image to high dynamic range (HDR) colors | YesSee Universal Render Pipeline: Tonemapping | YesSee High Definition Render Pipeline: Tonemapping | YesSee Tonemapping in Post Processing: Color Grading |
| Vignette | The Vignette effect darkens the edges of an image | YesSee Universal Render Pipeline: Vignette | YesSee High Definition Render Pipeline:Vignette | YesSee Post Processing: Vignette |
| White Balance | The White Balance effect preserves the white areas in your image and balances other tones around the white areas | YesSee Universal Render Pipeline: White Balance | YesSee High Definition Render Pipeline: White Balance | YesSee White balance in Post Processing: Color Grading |

Introduction to post-processing

Post-processing and full-screen effects in URP
