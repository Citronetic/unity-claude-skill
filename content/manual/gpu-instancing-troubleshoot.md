This version of Unity is unsupported.

Enable GPU instancing for a prebuilt material

Combine meshes using batching

# Troubleshooting GPU instancing

Meshes that have a low number of vertices can’t be processed efficiently using GPU instancing because the GPU can’t distribute the work in a way that fully uses the GPU’s resources. This processing inefficiency can have a detrimental effect on performance. The threshold at which inefficiencies begin depends on the GPU, but as a general rule, don’t use GPU instancing for meshes that have fewer than 256 vertices.

If you want to render a **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh) with a low number of vertices many times, best practice is to create a single buffer that contains all the mesh information and use that to draw the meshes.

## Additional resources

- [Make materials incompatible with the SRP Batcher in URP](SRPBatcher-Incompatible.html)

Enable GPU instancing for a prebuilt material

Combine meshes using batching
