This version of Unity is unsupported.

3D textures

Create a 3D texture

# Introduction to 3D textures

A 3D texture is a bitmap image that contains information in three dimensions rather than the standard two. 3D textures are commonly used to simulate volumetric effects such as fog or smoke, to approximate a volumetric 3D **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh), or to store animated textures and blend between them.

The source texture files for **2D Array** and **3D** Textures are divided into cells; these textures are called flipbook textures. When Unity imports flipbook textures, it places the contents of each cell into its own 2D array layer or 3D texture slice.

For example, an image with 8x8 cells of smoke effect frames looks like this as a default 2D texture:

[Image: Flipbook image as a 2D shape]
Flipbook image as a 2D shape

But when you correctly import is as a 3D texture with 8 Columns and 8 Rows, it looks like this:

[Image: Flipbook image as a 3D shape]
Flipbook image as a 3D shape

3D textures

Create a 3D texture
