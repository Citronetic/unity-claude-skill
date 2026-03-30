This version of Unity is unsupported.

Prewarm shaders

Asynchronous shader compilation in the Editor

# Create a shader variant collection

A **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) variant collection is effectively a list of [shader variants](shader-variants.html)A verion of a shader program that Unity generates according to a specific combination of shader keywords and their status. A Shader object can contain multiple shader variants. [More info](shader-variants.html)
See in [Glossary](Glossary.html#Shadervariant). Use shader variant collections to [prewarm shader variants](shader-loading.html), or to ensure that shader variants that are required at runtime but not referenced in a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) are not excluded (“stripped”) from your build.

## Create a shader variant collection asset

You can create a shader variant collection asset in the following ways:

- In the Create Asset menu, choose **Shader** > **Shader Variant Collection**.

- The Unity Editor can track which shader variants your application uses when it runs, and automatically create a shader variant collection asset that contains them. For more information, see [Graphics Settings: Shader loading](class-GraphicsSettings.html#shader-loading).

## View and edit a shader variant collection

[Image: Shader variant collection inspector]
Shader variant collection inspector

When you select a shader variant collection asset in your project, you can view and edit it in the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector).

Use the controls to build a list of [Pass types](../ScriptReference/Rendering.PassType.html) and [shader keyword](shader-keywords.html) combinations to load in advance.

You can also configure a shader variant collection asset using the [ShaderVariantCollection](../ScriptReference/ShaderVariantCollection.html) API.

## Prewarm a shader variant collection

To avoid visible stalls at performance-intensive times, Unity can ask the graphics driver to create GPU representations of shader variants before they are first needed. This is called **prewarming**. For more information on prewarming the shader variants in a shader variant collection, see [Shader loading: Prewarming shader variants](shader-prewarm.html).

Prewarm shaders

Asynchronous shader compilation in the Editor
