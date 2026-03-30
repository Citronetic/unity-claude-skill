This version of Unity is unsupported.

Import trees from SpeedTree

SpeedTree Import Settings

# SpeedTree model import

[SpeedTree](https://store.speedtree.com/?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774937646171) provides prebuilt tree Assets and modeling software focused specifically on trees.

Unity recognizes and imports SpeedTree Assets in the same way that it handles other Assets. If you’re using SpeedTree Modeler 7, make sure to resave your .spm files using the Unity version of the Modeler. If you’re using SpeedTree Modeler 8, 9, or 10, you can save your .st or .st9 files directly into the Unity Project folder.

Make sure that Textures are reachable in the Project folder and that Unity automatically generates Materials for each [Level of Detail (LOD)](LevelOfDetail.html). When you select an Asset, there are [import settings](class-SpeedTreeImporter.html) to tweak the generated **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) and attached Materials. Unity does not re-generate Materials when you re-import them, unless you click the **Generate Materials** or **Apply & Generate Materials** button. Therefore, it is possible to preserve any customizations to the Materials.

The SpeedTree importer generates a **Prefab**An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](Prefabs.html)
See in [Glossary](Glossary.html#Prefab) with the [LODGroup](class-LODGroup.html) component configured. You can instantiate the Prefab in a **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) as a common Prefab instance, or select the Prefab as a tree prototype and paint it across the **Terrain**The landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. [More info](terrain-UsingTerrains.html)
See in [Glossary](Glossary.html#Terrain).

Additionally, the Terrain accepts any GameObject with an LODGroup component as a tree prototype, and does not place limitations on the **Mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh) size, or number of Materials used. This is different from [Tree Editor](class-Tree.html) trees. However, be aware that SpeedTree trees usually use three to four different Materials, which as a result, issues a number of draw calls every frame. Thus, we recommend that you avoid heavy use of **LOD**The *Level Of Detail* (LOD) technique is an optimization that reduces the number of triangles that Unity has to render for a GameObject when its distance from the Camera increases. [More info](LevelOfDetail.html)
See in [Glossary](Glossary.html#LOD) trees on platforms, such as the mobile platforms, where additional draw calls are relatively costly in terms of rendering performance.

## Materials

The SpeedTree Model Importer has a **Materials**An asset that defines how a surface should be rendered. [More info](class-Material.html)
See in [Glossary](Glossary.html#Material) tab to improve the workflow for handling SpeedTree Material Assets. See documentation on the SpeedTree Model Importer’s [Material tab](SpeedTreeImporter-Materials.html) page for more information.

## Casting and receiving real-time shadows

To make billboards cast shadows correctly, Unity rotates billboards during the shadow caster pass to make them face the light direction (or light position in the case of point light) instead of facing the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera).

To enable these options, select the **Billboard**A textured 2D object that rotates so that it always faces the Camera. [More info](class-BillboardRenderer.html)
See in [Glossary](Glossary.html#Billboard) LOD level in the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) of a SpeedTree Asset, check **Cast Shadows** or **Receive Shadows** in **Billboard Options**, and click **Apply**.

[Image: Billboard Options in the SpeedTree import settings]
Billboard Options in the SpeedTree import settings

To change the billboard shadow options of instantiated SpeedTree GameObjects, select the billboard GameObject in the **Hierarchy** window and tweak these options in the **Inspector** of the **Billboard Renderer**.

The trees you paint on a Terrain inherit billboard shadow options from the Prefab. Use `BillboardRenderer.shadowCastingMode` and `BillboardRenderer.receiveShadows` to alter these options at runtime.

**Known issues:** As with any other renderer, the **Receive Shadows** option has no effect while using deferred rendering. Billboards always receive shadows in deferred path.

Import trees from SpeedTree

SpeedTree Import Settings
