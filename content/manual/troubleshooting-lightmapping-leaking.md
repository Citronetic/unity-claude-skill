This version of Unity is unsupported.

Troubleshooting lightmapping quality issues

Optimize baking

# Troubleshooting light leaking

If you use baked [Global Illumination (GI)](global-illumination-configure.html), troubleshoot light leaks.

## Lightmap leaking

Lightmap leaking results in noticeable lighting discrepancies in dark indoor areas adjacent to bright outdoor lighting.

### Symptoms

Light leaking appears as unwanted illumination in shadowed areas due to incorrect **lightmap**A pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmap) texel assignment.

- Aliasing and pixelation in baked lightmaps.

- Console warnings about overlapping UVs. Example error message: `Warning: UV overlap detected on the following GameObjects: [GameObject Name]`.

- Red highlights on affected texels in the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) view’s **UV Overlap** draw mode or **Baked Lightmaps Preview**.

[Image: Mesh with leaking artifacts.]
Mesh with leaking artifacts.

[Image: The same mesh without leaking artifacts.]
The same mesh without leaking artifacts.

### Cause

- Incorrect or inadequate lightmap UVs.

- Low lightmap resolution.

- Small margins between charts.

### Resolution

To resolve lightmap leaking, do the following.

#### Adjust lightmap UVs and resolution

You can increase **Lightmap Resolution** to improve texel coverage and reduce light leaking.

**Note**: Lightmaps use mipmaps. So, while there may be no leakage at high resolution, leakage can occur when the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) moves farther away and a lower mip level is sampled. Therefore, it’s important to ensure sufficient texel spacing between UV charts depending on lighting conditions.

If you can’t adjust resolution, modify lightmap UVs in a digital content creation tool by following these steps:

- Split the UV chart at the seam between light and dark areas to prevent light bleeding.

- Adjust Unity-generated lightmap UVs:

- Set **Margin Method** to **Calculate** and adjust **Min Lightmap Resolution** and **Min Object Scale**.

- Alternatively, set **Margin Method** to **Manual** and increase the **Pack Margin**.

- Increase lightmap resolution to create more space between charts:

- Go to the **Lighting** window and adjust the ****Lightmapper**A tool in Unity that bakes lightmaps according to the arrangement of lights and geometry in your scene. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmapper) Settings**.

- For individual **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject), increase the lightmap resolution under **Lightmap Settings** in the [Mesh Renderer](class-MeshRenderer.html)A mesh component that takes the geometry from the Mesh Filter and renders it at the position defined by the object’s Transform component. [More info](class-MeshRenderer.html)
See in [Glossary](Glossary.html#MeshRenderer) component.

- Preview UV overlaps using the **UV Overlap** draw mode or **Baked Lightmaps Preview** to verify the issue is resolved.

#### Adjust filtering settings

High Gaussian filter settings can introduce light leaks. For detailed solutions on adjusting these settings, refer to [Troubleshooting lightmapping artifacts](troubleshooting-lightmapping-artifacts.html).

#### Adjust scene geometry

Light leaking is often caused by **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh) overlap rather than filtering issues.

To adjust scene geometry, do the following:

- Ensure that objects don’t intersect or protrude through scene geometry.

- For interior scenes, avoid one-sided wall meshes. Instead, use extruded meshes to create proper thickness and effectively block light leaks.

[Image: Lightmap leaking introduced by high Gaussian filtering settings and poor object placement - left. Open Image Denoiser mitigates leaks, but not entirely - center. Adjusting the Y-coordinate of the affected props so that they dont intersect scene geometry fixes the issue entirely - right.]
Lightmap leaking introduced by high Gaussian filtering settings and poor object placement - left. Open Image Denoiser mitigates leaks, but not entirely - center. Adjusting the Y-coordinate of the affected props so that they don’t intersect scene geometry fixes the issue entirely - right.

Troubleshooting lightmapping quality issues

Optimize baking
