This version of Unity is unsupported.

Troubleshooting GPU instancing

Introduction to batching meshes

# Combine meshes using batching

Resources and approaches for improving performance by combining static **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) or moving GameObjects into fewer draw calls.

| Page | Description |
| --- | --- |
| Introduction to batching | Understand how Unity creates batches of static and dynamic GameObjects to reduce draw calls. |
| Set up GameObjects for batching | Get the best results from batching, and make sure Unity batches GameObjects. |
| Batch static meshes at build time | Use static batchingA technique Unity uses to draw GameObjects on the screen that combines static (non-moving) GameObjects into big Meshes, and renders them in a faster way. More infoSee in Glossary to combine static meshes at build time. |
| Batch meshes at runtime | Batch static objects with the StaticBatchingUtility API, or dynamic GameObjects with dynamic batchingAn automatic Unity process which attempts to render multiple meshes as if they were a single mesh for optimized graphics performance. The technique transforms all of the GameObject vertices on the CPU and groups many similar vertices together. More infoSee in Glossary. |
| Combine meshes manually | Merge multiple meshes into a single meshThe main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. More infoSee in Glossary that Unity can render in a single draw call. |
| Access properties in combined meshes | Use MaterialPropertyBlocks to change properties of combined meshes without breaking batching. |

## Additional resources

- [Choose a method for optimizing draw calls](optimizing-draw-calls-choose-method.html)

- [Reduce rendering work on the CPU or GPU](OptimizingGraphicsPerformance.html)

Troubleshooting GPU instancing

Introduction to batching meshes
