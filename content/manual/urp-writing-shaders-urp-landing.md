This version of Unity is unsupported.

Writing custom shaders in URP

Create a sample scene in URP

# Examples of writing a custom shader in URP

Techniques for writing **shaders**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader) in the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP).

Each example covers some extra information compared to the basic shader example. If you’re new to writing shaders using Unity’s **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](../SL-Shader.html)
See in [Glossary](../Glossary.html#ShaderLab) language, consider going through the sections in the order of appearance on this page.

| Page | Description |
| --- | --- |
| Create a sample scene in URP | Create a sample sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary for writing shaders in URP. |
| Write an unlit basic shader in URP | An example of a basic URP shader that fills a meshThe main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. More infoSee in Glossary shape with a color. |
| Write an unlit shader with color input in URP | An example of a URP shader that adds the Base Color property to a material. |
| Draw a texture in a shader in URP | An example of a URP shader that draws a texture on a mesh. |
| Visualize normal vectors in a shader in URP | An example of a URP shader that visualizes the normal vector values on a mesh. |
| Write depth only in a shader in URP | Add a depth prepass that writes the depth of objects before the opaque and transparent passes. |
| Reconstruct world space positions in a shader in URP | An example of a URP shader that reconstructs the world space positions for pixelsThe smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. More infoSee in Glossary using a depth texture and screen space UV coordinates. |

Writing custom shaders in URP

Create a sample scene in URP
