This version of Unity is unsupported.

Halo component reference

Rendering lines

# Lines and trails

Unity uses specialized components to configure and render lines, trails, and **billboards**A textured 2D object that rotates so that it always faces the Camera. [More info](class-BillboardRenderer.html)
See in [Glossary](Glossary.html#Billboard).

| Topic | Description |
| --- | --- |
| Rendering lines | Techniques for rendering individual lines in 3D space, and applying materials to those lines. |
| Rendering trails | Techniques for rendering trails that appear behind moving GameObjectsThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary, and applying materials to those trails. |

## Render pipeline information

How you work with lines and trails depends on the **render pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) you use.

| Feature name | Universal Render Pipeline (URP) | High Definition Render Pipeline (HDRP) | Built-in Render Pipeline |
| --- | --- | --- | --- |
| Line RendererA component that takes an array of two or more points in 3D space and draws a straight line between each one. You can use a single Line Renderer component to draw anything from a simple straight line to a complex spiral. More infoSee in Glossary component | Yes. | Yes. | Yes. |
| Trail Renderer component | Yes.You can also use VFX Graph to create a custom trail effect. | Yes.You can also use VFX Graph to create a custom trail effect. | Yes. |

## Additional resources

- [2D images for low level of detail (LOD)](2d-images-lod.html)

Halo component reference

Rendering lines
