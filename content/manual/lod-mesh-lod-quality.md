This version of Unity is unsupported.

Generate LODs on import

How the Mesh LOD generator works

# Mesh LOD runtime quality

Learn about settings that let you configure how Unity selects **Mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](../mesh.html)
See in [Glossary](../Glossary.html#Mesh) **LODs**The *Level Of Detail* (LOD) technique is an optimization that reduces the number of triangles that Unity has to render for a GameObject when its distance from the Camera increases. [More info](../LevelOfDetail.html)
See in [Glossary](../Glossary.html#LOD) at runtime.

For meshes that have LODs, Unity selects a LOD index automatically based on the size of the object on the screen.

The following settings let you adjust the LOD selection and make Unity select more or less detailed LODs.

## Project-wide quality setting

The following settings affect how Unity selects LODs on a project level:

- **Quality** > **Level of Detail** > **Mesh LOD Threshold**

Unity uses the **Mesh LOD Threshold** parameter when evaluating the size of the mesh on the screen and selecting a specific LOD index. Increasing the **Mesh LOD Threshold** setting makes Unity favor less detailed LODs in the evaluation process.

To choose a value appropriate for your application:

1. Place a variety of assets from your project in a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../CreatingScenes.html)
See in [Glossary](../Glossary.html#Scene).

2. Change the **Mesh LOD Threshold** value and inspect the assets while moving the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../CamerasOverview.html)
See in [Glossary](../Glossary.html#Camera) around the scene.

3. Repeat step 2 to find a value that provides a good balance between performance, visual quality of assets, and smoothness of LOD transitions.

This setting can have different values for different quality levels.

## Configure per-object LOD settings

To adjust how Unity selects LODs for a particular object:

1. Select a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../class-GameObject.html)
See in [Glossary](../Glossary.html#GameObject) with the ****Mesh Renderer**A mesh component that takes the geometry from the Mesh Filter and renders it at the position defined by the object’s Transform component. [More info](../class-MeshRenderer.html)
See in [Glossary](../Glossary.html#MeshRenderer)** or **Skinned Mesh Renderer** component.

2. In the Inspector window, go to **Mesh Renderer** > **Mesh LOD**.

3. Use one of the following properties to adjust the behavior:

- [**LOD Override**](../class-MeshRenderer.html#mesh-lod)

- [**LOD Selection Bias**](../class-MeshRenderer.html#mesh-lod)

For information on the settings in the **Mesh LOD** section, refer to [Mesh LOD reference](../class-MeshRenderer.html#mesh-lod).

## Additional resources

- [Introduction to level of detail](../LevelOfDetail.html)

Generate LODs on import

How the Mesh LOD generator works
