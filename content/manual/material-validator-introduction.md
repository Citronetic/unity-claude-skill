This version of Unity is unsupported.

Material Validator in the Built-In Render Pipeline

Validate and correct materials in the Built-In Render Pipeline

# Material Validator in the Built-In Render Pipeline

The Physically Based Rendering Material Validator is a draw mode in the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) View. It allows you to make sure your materials use values which fall within the recommended reference values for physically-based **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader). If **pixel**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](ShadowPerformance.html)
See in [Glossary](Glossary.html#pixel) values in a particular material fall outside of the reference ranges, the Material Validator highlights the pixels in different colors to indicate failure.

**Note**: You can also check the recommended values with [Unity’s Material Charts](StandardShaderMaterialCharts.html). You still need to use these charts when authoring Materials to decide your **albedo** and **metal specular** values. However, the Material Validator provides you with a visual, in-editor way of quickly checking whether your Materials’ values are valid once your Assets are in the Scene.

**Also note**: The validator only works in Linear color space. Physically Based Rendering is not intended for use with Gamma color space, so if you are using Physically Based Rendering and the PBR Material Validator, you should also be using [Linear color space](color-spaces-landing.html).

## Open the Material Validator

To use the Material Validator, select the **Scene View**An interactive view into the world you are creating. You use the Scene View to select and position scenery, characters, cameras, lights, and all other types of Game Object. [More info](UsingTheSceneView.html)
See in [Glossary](Glossary.html#SceneView)’s **draw mode** drop-down menu, which is is usually set to **Shaded** by default.

[Image: The scene views draw mode drop-down menu]
The scene view’s draw mode drop-down menu

Navigate to the **Material Validation** section. The Material Validator has two modes: **Validate Albedo** and **Validate Metal Specular**.

[Image: The material validation options in the scene view draw mode drop-down menu]
The material validation options in the scene view draw mode drop-down menu

Material Validator in the Built-In Render Pipeline

Validate and correct materials in the Built-In Render Pipeline
