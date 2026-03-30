This version of Unity is unsupported.

Batch static meshes at build time

Combine meshes manually

# Batch meshes at runtime

For more information about batching, refer to [Introduction to batching meshes](DrawCallBatching.html).

**Note:** Unity uses additional CPU memory to store the combined meshes, even if the meshes are the same. For example, marking trees as static in a dense forest environment can have a large impact on memory. If **static batching**A technique Unity uses to draw GameObjects on the screen that combines static (non-moving) GameObjects into big Meshes, and renders them in a faster way. [More info](DrawCallBatching.html)
See in [Glossary](Glossary.html#StaticBatching) uses too much memory, [combine meshes manually](combining-meshes.html) instead.

## Batch static GameObjects at runtime

To batch static **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) at runtime, for example GameObjects you create procedurally, follow these steps:

1. Select each **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh) you want to batch, then in the ****Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector)** window enable **Read/Write enabled**.

2. Use the [StaticBatchingUtility](../ScriptReference/StaticBatchingUtility.html) API to batch the meshes. The [StaticBatchingUtility.Combine](../ScriptReference/StaticBatchingUtility.Combine.html) method combines GameObjects and prepares them for static batching.

**Note:** To avoid the read/write mesh using double the amount of memory, you can now delete one copy of the mesh by calling the [`Mesh.UploadMeshData`](../ScriptReference/Mesh.UploadMeshData.html) API with `markNoLongerReadable` set to `true`.

You don’t need to enable the static batching setting in the URP Asset, HDRP Asset, or ****Player Settings**Settings that let you set various player-specific options for the final game built by Unity. [More info](class-PlayerSettings.html)
See in [Glossary](Glossary.html#PlayerSettings)**.

If a mesh is culled because it’s outside the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) view, Unity might split the batch into two batches, to avoid a gap in the combined vertex buffers.

You can only change the position, rotation, and scale of the whole batch at runtime, not the individual meshes.

## Batch moving GameObjects at runtime

To batch moving GameObjects, enable **dynamic batching**An automatic Unity process which attempts to render multiple meshes as if they were a single mesh for optimized graphics performance. The technique transforms all of the GameObject vertices on the CPU and groups many similar vertices together. [More info](DrawCallBatching.html)
See in [Glossary](Glossary.html#DynamicBatching).

**Warning:** For most uses, dynamic batching is no longer recommended, because the CPU overhead can be greater than the overhead of a draw call. If you use URP or HDRP, use the [Scriptable Render Pipeline (SRP) Batcher](SRPBatcher.html) instead. For more information, refer to [Choose a draw call optimization method](optimizing-draw-calls-choose-method.html).

Follow these steps in the Built-In **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline):

1. Go to **Edit** > **Project Settings** > **Player**.

2. In the **Other Settings** section, enable **Dynamic Batching**.

## Additional resources

- [Disable dynamic batching of a shader](writing-shader-tags-disable-dynamic-batching.html)

Batch static meshes at build time

Combine meshes manually
