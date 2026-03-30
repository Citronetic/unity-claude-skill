This version of Unity is unsupported.

Texture and mesh loading

Optimizing GPU texture memory with mipmap streaming

# Make a texture compatible with asynchronous texture loading

A texture is eligible for the asynchronous upload pipeline if the following conditions are met:

- The texture is not read/write enabled.

- The texture is not in the Resources folder.

- If the build target is Android, LZ4 **compression**A method of storing data that reduces the amount of storage space it requires. See [Texture Compression](texture-choose-format-by-platform.html), [Animation Compression](class-AnimationClip.html#AssetProperties), [Audio Compression](AudioFiles-compression.html), [Build Compression](ReducingFilesize.html).
See in [Glossary](Glossary.html#compression) is enabled in the [Build Profiles](build-profiles.html)A set of customizable configuration settings to use when creating a build for your target platform. [More info](build-profiles.html)
See in [Glossary](Glossary.html#Buildprofile) window.

Note that if you load a texture using `LoadImage(byte[] data)`, this forces Unity to use the synchronous upload pipeline, even if the above conditions are met.

A **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh) is eligible for the asynchronous upload pipeline if the following conditions are met:

- The mesh is not read/write enabled.

- The mesh is not in the Resources folder.

- The mesh has no [BlendShapes](../ScriptReference/Mesh-blendShapeCount.html).

- Unity has not applied **Dynamic Batching**An automatic Unity process which attempts to render multiple meshes as if they were a single mesh for optimized graphics performance. The technique transforms all of the GameObject vertices on the CPU and groups many similar vertices together. [More info](DrawCallBatching.html)
See in [Glossary](Glossary.html#DynamicBatching) to the mesh, either because the mesh is ineligible for Dynamic Batching or because Dynamic Batching is disabled. For more information on Dynamic Batching, see [Draw call batching](DrawCallBatching.html).

- The mesh vertex/index data is not needed by a **Particle System**A component that simulates fluid entities such as liquids, clouds and flames by generating and animating large numbers of small 2D images in the scene. [More info](class-ParticleSystem.html)
See in [Glossary](Glossary.html#particlesystem), a **Terrain**The landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. [More info](terrain-UsingTerrains.html)
See in [Glossary](Glossary.html#Terrain), or a Mesh **Collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collider).

- The mesh has no [bone weights](../ScriptReference/Mesh-boneWeights.html).

- The mesh [topology](../ScriptReference/MeshTopology.html) is not [quads](../ScriptReference/MeshTopology.Quads.html)A primitive object that resembles a plane but its edges are only one unit long, it uses only 4 vertices, and the surface is oriented in the XY plane of the local coordinate space. [More info](PrimitiveObjects.html)
See in [Glossary](Glossary.html#Quad).

- The [meshCompression](../ScriptReference/ModelImporter-meshCompression.html) for the mesh asset is set to [Off](../ScriptReference/ModelImporterMeshCompression.Off.html).
If the build target is Android, LZ4 compression is enabled in the [Build Profiles](build-profiles.html) window.

In all other circumstances, Unity loads textures and meshes synchronously.

Texture and mesh loading

Optimizing GPU texture memory with mipmap streaming
