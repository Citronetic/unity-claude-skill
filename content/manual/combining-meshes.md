This version of Unity is unsupported.

Batch meshes at runtime

Access properties in combined meshes

# Combine meshes manually

You can manually combine multiple meshes into a single **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh) as a [draw call optimization](optimizing-draw-calls.html) technique. Unity renders the combined mesh in a single draw call instead of one draw call per mesh. This technique can be a good alternative to [draw call batching](DrawCallBatching.html) in cases where the meshes are close together and don’t move relative to one another. For example, for a static cupboard with lots of drawers, it makes sense to combine everything into a single mesh.

**Warning**: Unity can’t individually cull meshes you combine. This means that if one part of a combined mesh is onscreen, Unity draws the entire combined mesh. If the meshes are static and you want Unity to individually cull them, use [static batching](static-batching)A technique Unity uses to draw GameObjects on the screen that combines static (non-moving) GameObjects into big Meshes, and renders them in a faster way. [More info](DrawCallBatching.html)
See in [Glossary](Glossary.html#StaticBatching) instead.

There are two main ways to combine meshes:

- In your asset generation tool while authoring the mesh.

- In Unity using [Mesh.CombineMeshes](../ScriptReference/Mesh.CombineMeshes.html).

Batch meshes at runtime

Access properties in combined meshes
