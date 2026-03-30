This version of Unity is unsupported.

Materials

Create and assign a material

# Introduction to materials

To draw something in Unity, you must provide information that describes its shape, and information that describes the appearance of its surface. You use [meshes](class-Mesh.html) to describe shapes, and materials to describe the appearance of surfaces.

Materials and **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) are closely linked; you always use materials with shaders.

## Render pipeline compatibility

| Feature | Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary (URP) | High Definition Render Pipeline (HDRP) | Custom Scriptable Render Pipeline (SRP) | Built-in Render Pipeline |
| --- | --- | --- | --- | --- |
| Materials | Yes | Yes | Yes | Yes |

## Material fundamentals

A material contains a reference to a [Shader object](shader-objects.html)An instance of the Shader class, a Shader object is container for shader programs and GPU instructions, and information that tells Unity how to use them. Use them with materials to determine the appearance of your scene. [More info](shader-objects.html)
See in [Glossary](Glossary.html#Shaderobject). If that Shader object defines [material properties](SL-Properties.html), then the material can also contain data such as colors or references to textures.

The [Material](../ScriptReference/Material.html)An asset that defines how a surface should be rendered. [More info](class-Material.html)
See in [Glossary](Glossary.html#Material) class represents a material in C# code. For information, see [Using Materials with C# scripts](MaterialsAccessingViaScript.html).

A material asset is a file with the `.mat` extension. It represents a material in your Unity project. For information on viewing and editing a material asset using the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) window, see [Material Inspector reference](class-Material.html).

## Material Variants

Unity supports functionality for creating variants of Materials. To learn more about this functionality, see [Material Variants](materialvariant-landingpage.html).

Materials

Create and assign a material
