This version of Unity is unsupported.

DOTS Instancing shader functions reference for URP

Graphics performance and profiling in the Built-In Render Pipeline

# Enable GPU occlusion culling in URP

GPU occlusion culling means Unity uses the GPU instead of the CPU to exclude objects from **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../CamerasOverview.html)
See in [Glossary](../Glossary.html#Camera) rendering when they’re occluded behind other objects. To speed up GPU rendering in **scenes**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../CreatingScenes.html)
See in [Glossary](../Glossary.html#Scene) with many occluded objects, Unity uses depth information.

GPU occlusion culling works with [GPU Resident Drawer](gpu-resident-drawer.html), and restrictions apply similarly.

## How GPU occlusion culling works

Unity generates depth textures from the perspective of cameras in the scene.

The GPU then uses the depth textures from the current and previous frames to cull objects. Unity renders only objects that are tested as unoccluded in either frame.

GPU occlusion culling uses a conservative approach to determine whether objects are visible in a given frame. The system works as follows:

- **Bounding sphere approximation**: Each potentially occluded object is represented by a bounding sphere. As such, thin or elongated objects have a much coarser spherical representation than their actual **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](../mesh.html)
See in [Glossary](../Glossary.html#Mesh), and Unity is less likely to detect that they are occluded.

- **Downsampled **depth buffer**A memory store that holds the z-value depth of each pixel in an image, where the z-value is the depth for each rendered pixel from the projection plane. [More info](../class-RenderTexture.html)
See in [Glossary](../Glossary.html#depthbuffer)**: Unity uses multiple levels of a downsampled depth buffer to test occlusion. The level selected depends on the projected screen size of the bounding sphere, ensuring that the **pixel**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](../ShadowPerformance.html)
See in [Glossary](../Glossary.html#pixel) size at that level is larger than the projected sphere. Unity tests larger bounding spheres against more coarsely approximated levels of the depth buffer.

Whether GPU occlusion culling speeds up rendering depends on your scene. GPU occlusion culling is most effective in the following setups:

- Multiple objects use the same mesh, so Unity can group them into a single draw call.

- The scene has a lot of occlusion, especially if the occluded objects have a high number of vertices.

- Occluded objects have a small screen space bounding radius.

If occlusion culling doesn’t have a big effect on your scene, rendering time might increase because of the extra work the GPU does to set up GPU occlusion culling.

## Enable GPU occlusion culling

1. Make sure Compatibility Mode is disabled. Go to **Graphics**, select the **URP** tab, then in the **Render Graph** section, disable **Compatibility Mode (Render Graph Disabled)**.

2. [Enable the GPU Resident Drawer](gpu-resident-drawer.html#enable-the-gpu-resident-drawer).

3. In the active [Universal Renderer](urp-universal-renderer.html), enable **GPU Occlusion**.

## Analyze GPU occlusion culling

You can use the following to analyze GPU occlusion culling:

- [Rendering Statistics](https://docs.unity3d.com/Manual/RenderingStatistics.html) overlay to check rendering speed increases.

- [Rendering Debugger](features/rendering-debugger-reference.html) to troubleshoot issues.

## Additional resources

- [Reduce rendering work on the CPU](reduce-rendering-work-on-cpu.html)

- [Occlusion culling](https://docs.unity3d.com/Manual/OcclusionCulling.html)A process that disables rendering GameObjects that are hidden (occluded) from the view of the camera. [More info](../OcclusionCulling.html)
See in [Glossary](../Glossary.html#Occlusionculling)

- [Choose a method for optimizing draw calls](../optimizing-draw-calls-choose-method.html)

DOTS Instancing shader functions reference for URP

Graphics performance and profiling in the Built-In Render Pipeline
