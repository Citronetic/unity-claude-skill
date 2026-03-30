This version of Unity is unsupported.

Create trees and leaves from meshes

Tree Hierarchy view UI reference

# Performance tips for trees

To improve the performance of trees:

- Performance depends on the polygon count of your tree model. Test your trees on your platform, and create simpler trees if performance is low.

- Don’t create too many leaves and branches, because this can reduce performance.

- Each **Terrain**The landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. [More info](terrain-UsingTerrains.html)
See in [Glossary](Glossary.html#Terrain) tile has settings for tree drawing, such as the distance from the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) where trees switch to **billboard**A textured 2D object that rotates so that it always faces the Camera. [More info](class-BillboardRenderer.html)
See in [Glossary](Glossary.html#Billboard) mode. These settings can impact the gaming experience when they create transitions that are visible to the player. Refer to the [Terrain Settings reference](terrain-OtherSettings.html) for more information.

## Additional resources

- [Tree level of detail (LOD)](terrain-Tree-LOD.html)

- [Shaders and the Ambient-Occlusion folder](terrain-Trees-Mat-Shaders.html)

- [Tree Hierarchy view UI reference](terrain-Tree-Hierarchy-UI.html)

- [Root node reference](tree-Root-Node.html)

- [Branch group reference](tree-Branches.html)

- [Leaf group reference](tree-Leaves.html)

- [Terrain Settings reference](terrain-OtherSettings.html)

Create trees and leaves from meshes

Tree Hierarchy view UI reference
