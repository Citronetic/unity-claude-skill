This version of Unity is unsupported.

Adding material properties to shaders

Add material properties

# Introduction to material properties

In your **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](SL-Shader.html)
See in [Glossary](Glossary.html#ShaderLab) code, you can define **material properties**. A material property is a property that Unity stores as part of the material asset. This allows artists to create, edit, and share materials with different configurations.

If you use material properties:

- You can get or set the value of a variable in a **Shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) object by calling functions on the material (such as [Material.SetFloat](../ScriptReference/Material.SetFloat.html)).

- You can view and edit the values using the material **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector).

- Unity saves the changes that you make as part of the material asset, so they persist between sessions.

If you do not use material properties:

- You can still get or set the value of a variable in a **Shader object**An instance of the Shader class, a Shader object is container for shader programs and GPU instructions, and information that tells Unity how to use them. Use them with materials to determine the appearance of your scene. [More info](shader-objects.html)
See in [Glossary](Glossary.html#Shaderobject) by calling a function on a material.

- There is no visual editor for these values.

- Changes do not persist between sessions.

The only times that you would normally *not* create a material property is if you want to set shader property values entirely using **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts) (for example, if you are making procedural content), if the properties cannot be made into material properties, or if you don’t want them to be edited in the Inspector.

## How property values are provided to shaders

Shader property values are found and provided to shaders from these places:

- Per-Renderer values set in [MaterialPropertyBlock](../ScriptReference/MaterialPropertyBlock.html). This is typically “per-instance” data (e.g. customized tint color for a lot of objects that all share the same material).

- Values set in the [Material](class-Material.html)An asset that defines how a surface should be rendered. [More info](class-Material.html)
See in [Glossary](Glossary.html#Material) that’s used on the rendered object.

- Global shader properties, set either by Unity rendering code itself (see [built-in shader variables](SL-UnityShaderVariables.html)), or from your own scripts (e.g. [Shader.SetGlobalTexture](../ScriptReference/Shader.SetGlobalTexture.html)).

The order of precedence is like above: per-instance data overrides everything; then Material data is used; and finally if shader property does not exist in these two places then global property value is used. Finally, if there’s no shader property value defined anywhere, then “default” (zero for floats, black for colors, empty white texture for textures) value will be provided.

## Serialized and Runtime Material properties

[Materials](class-Material.html) can contain both serialized and runtime-set property values.

Serialized data is all the properties defined in shader’s [Properties](SL-Properties.html) block. Typically these are values that need to be stored in the material, and are tweakable by the user in Material Inspector.

A material can also have some properties that are used by the shader, but not declared in shader’s [Properties](SL-Properties.html) block. Typically this is for properties that are set from script code at runtime, e.g. via [Material.SetColor](../ScriptReference/Material.SetColor.html). Note that matrices and arrays can only exist as non-serialized runtime properties (since there’s no way to define them in Properties block).

Adding material properties to shaders

Add material properties
