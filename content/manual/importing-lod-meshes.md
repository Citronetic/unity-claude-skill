This version of Unity is unsupported.

Configure the LOD Group component

Make LOD Group transitions smooth

# Import a mesh with LOD settings

You can create meshes with different levels of detail in an external 3D application for use with Unity’s [LOD system](https://docs.unity3d.com/Manual/LevelOfDetail.html). If you name these meshes correctly, Unity automatically creates and configures a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) with [LOD group](https://docs.unity3d.com/Manual/class-LODGroup.html)A component to manage level of detail (LOD) for GameObjects. [More info](class-LODGroup.html)
See in [Glossary](Glossary.html#LODGroup) component for them when it imports the Model.

To import a Model with **LOD**The *Level Of Detail* (LOD) technique is an optimization that reduces the number of triangles that Unity has to render for a GameObject when its distance from the Camera increases. [More info](LevelOfDetail.html)
See in [Glossary](Glossary.html#LOD) level into Unity, you must do the following:

1. In your external 3D application, follow the application’s process to create as many LOD meshes as you need.

2. Name the meshes according to the following naming convention:

- ExampleMeshName_LOD0 for the first LOD level (i.e., the most detailed version)

- ExampleMeshName_LOD1

- ExampleMeshName_LOD2

3. Export your Model as an FBX file. Alternatively, if you are using Maya, export the mesh group directly into Unity; to do this, go to **File > Send to Unity > Selection.**

4. Import the FBX into Unity. Unity recognizes the grouped Meshes and naming convention, and automatically creates an[LOD Group](https://docs.unity3d.com/Manual/class-LODGroup.html) component with the appropriate settings.

## Additional resources

- To learn more about importing models, see [Importing models](https://docs.unity3d.com/Manual/ImportingModelFiles.html).

- To learn more about creating and exporting LOD Meshes in Maya, follow the Unity tutorial [Creating LODs in Maya](https://learn.unity.com/tutorial/creating-lods-in-maya-for-unity?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774937050384).

Configure the LOD Group component

Make LOD Group transitions smooth
