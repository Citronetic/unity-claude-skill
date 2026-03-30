This version of Unity is unsupported.

2D images for low level of detail (LOD)

Billboard Renderer component reference

# Applying 2D billboards for low LOD meshes

Billboards are a level-of-detail (LOD) method for drawing complicated 3D Meshes in a simpler way when they are far away from the **Camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera). When a **Mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh) is far away from the Camera, its size on screen means there is no need to draw it in full detail. Instead, you can replace the complex 3D Mesh with a 2D **billboard**A textured 2D object that rotates so that it always faces the Camera. [More info](class-BillboardRenderer.html)
See in [Glossary](Glossary.html#Billboard) representation.

The [Billboard Renderer](class-BillboardRenderer.html) renders [Billboard assets](class-BillboardAsset.html).

A Billboard asset is a collection of pre-rendered images of a mesh. Use it with the [Billboard Renderer](class-BillboardRenderer.html) to an object that is distant from the Camera at a low [level of detail (LOD)](LevelOfDetail.html).

The most common way to generate a Billboard Asset is to create files in [SpeedTree Modeler](https://unity.com/products/speedtree?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936578310), and then import them into Unity.

It is also possible to create your own Billboard Assets from script. For more information, see the API reference for [BillboardAsset](../ScriptReference/BillboardAsset.html).

Certain features, such as SpeedTree, export Billboard Assets, but you can also create them yourself. For information on how to create a Billboard Asset, see the [BillboardAssets](class-BillboardAsset.html) Manual page and the [BillboardAsset](../ScriptReference/BillboardAsset.html) Script reference page.

2D images for low level of detail (LOD)

Billboard Renderer component reference
