This version of Unity is unsupported.

GPU Usage Profiler module

Introduction to optimizing draw calls

# Optimize rendering lots of objects

Speed up rendering lots of similar objects by optimizing draw calls, which reduces how often the CPU sends information to the GPU.

| Page | Description |
| --- | --- |
| Introduction to optimizing draw calls | Understand why reducing draw calls improves rendering time. |
| Choose a method for optimizing draw calls | Compare the different methods for optimizing draw calls. |
| GPU instancing | Resources and techniques for rendering multiple copies of the same meshThe main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. More infoSee in Glossary at the same time. |
| Batching meshes | Combine meshes to reduce draw calls, for either static or moving GameObjectsThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary. |

## Additional resources

- [Optimizing draw calls in URP](reduce-draw-calls-landing-urp.html)

- [Introduction to Mesh LOD](lod/mesh-lod-introduction.html)

GPU Usage Profiler module

Introduction to optimizing draw calls
