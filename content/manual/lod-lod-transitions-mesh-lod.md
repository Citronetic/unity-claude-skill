This version of Unity is unsupported.

How the Mesh LOD generator works

Troubleshooting Mesh LOD visual artifacts

# Make Mesh LOD transitions smooth

Cross-fading is a technique that makes the transitions between LODs smooth and lets you avoid a visible switchover from one **LOD**The *Level Of Detail* (LOD) technique is an optimization that reduces the number of triangles that Unity has to render for a GameObject when its distance from the Camera increases. [More info](../LevelOfDetail.html)
See in [Glossary](../Glossary.html#LOD) to another.

With this technique, Unity renders both the current and the next LODs separately, and then blends them together:

[Image: Cross-fading between the current LOD and the next one.]
Cross-fading between the current LOD and the next one.

Unity implements the cross-fading effect by using either screen-space dithering or transparency.

## Enable LOD cross-fading

To enable LOD cross-fading:

1. In the [Universal Render Pipeline (URP) Asset](../urp/universalrp-asset.html), enable **LOD Cross Fade**.

2. [Enable GPU Resident Drawer](../urp/gpu-resident-drawer.html). This feature is required for cross-fading to work when using **Mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](../mesh.html)
See in [Glossary](../Glossary.html#Mesh) LOD.

If your project uses the Built-In Render Pipeline, go to **Project Settings** > **Quality** > **Level of Detail**, and enable the **LOD Cross Fade** property.

## Additional resources

- [Import a mesh with LOD settings](importing-lod-meshes.html).

How the Mesh LOD generator works

Troubleshooting Mesh LOD visual artifacts
