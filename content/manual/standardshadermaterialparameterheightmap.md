This version of Unity is unsupported.

Import a normal map

Occlusion maps

# Height maps

Height mapping (also known as parallax mapping) is a similar concept to normal mapping, however this technique is more complex - and therefore also more performance-expensive. **Heightmaps**A greyscale Texture that stores height data for an object. Each pixel stores the height difference perpendicular to the face that pixel represents.
See in [Glossary](Glossary.html#Heightmap) are usually used in conjunction with normalmaps, and often they are used to give extra definition to surfaces where the texture maps are responsible for rendering large bumps and protrusions.

While normal mapping modifies the lighting across the surface of the texture, parallax height mapping goes a step further and actually shifts the areas of the visible surface texture around, to achieve a kind of surface-level occlusion effect. This means that apparent bumps will have their near side (facing the camera) expanded and exaggerated, and their far side (facing away from the camera) will be reduced and seem to be occluded from view.

This effect, while it can produce a very convincing representation of 3D geometry, is still limited to the surface of the flat polygons of an object’s **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh). This means that while surface bumps will appear to protrude and occlude each other, the “silhouette” of the model will never be modified, because ultimately the effect is drawn onto the surface of the model and does not modify the actual geometry.

A heightmap should be a greyscale image, with white areas representing the high areas of your texture and black representing the low areas. Here’s a typical albedo map and a heightmap to match.

[Image: An albedo colour map, and a heightmap to match.]
An albedo colour map, and a heightmap to match.

[Image: Three comparison images of a rocky wall material. The first image has an albedo assigned, but no normalmap or heightmap, so the rocks appear flat. The second image has the normalmap assigned, so the lighting is modified on the surface but the rocks dont occlude each other. The third image has a normalmap and heightmap assigned, so the rocks appear to protrude out from the surface and nearer rocks seem to occlude rocks behind them.]
Three comparison images of a rocky wall material. The first image has an albedo assigned, but no normalmap or heightmap, so the rocks appear flat. The second image has the normalmap assigned, so the lighting is modified on the surface but the rocks don’t occlude each other. The third image has a normalmap and heightmap assigned, so the rocks appear to protrude out from the surface and nearer rocks seem to occlude rocks behind them.

Often (but not always) the greyscale image used for a heightmap is also a good image to use for the occlusion map. For information on occlusion maps, see the next section.

---

Import a normal map

Occlusion maps
