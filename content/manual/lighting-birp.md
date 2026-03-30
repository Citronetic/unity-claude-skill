This version of Unity is unsupported.

Light component Inspector window reference for URP

Per-pixel and per-vertex lights in the Built-In Render Pipeline

# Lighting in the Built-In Render Pipeline

Resources and approaches for lighting in the Built-In **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline).

| Page | Description |
| --- | --- |
| Per-pixel and per-vertex lights in the Built-In Render Pipeline | Learn about how Unity categorizes Light components so they light objects per-pixel or per-vertex. |
| Emit light from a GameObject | Make a material emissive so that it emits light across its surface area. |
| Create cookies | Create a cookie by creating a grayscale texture, importing the texture into Unity, then converting the brightness of the texture to alpha. |
| Customize how shaders contribute lightmap data | Make shadersA program that runs on the GPU. More infoSee in Glossary compatible with lightmapA pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. More infoSee in Glossary textures. |
| Configure shadow resolution | Set the resolution of the shadow map a Light component generates. |
| Configure a GameObject to sample more Light Probes | To make lighting more realistic, use Light ProbeLight probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. More infoSee in Glossary Proxy Volumes to configure a GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary to sample multiple Light Probes. |
| Blend Reflection Probes | Enable Unity gradually fading between the cubemapA collection of six square textures that can represent the reflections in an environment or the skybox drawn behind your geometry. The six squares form the faces of an imaginary cube that surrounds an object; each face represents the view along the directions of the world axes (up, down, left, right, forward and back). More infoSee in Glossary textures from different Reflection ProbesA rendering component that captures a spherical view of its surroundings in all directions, rather like a camera. The captured image is then stored as a Cubemap that can be used by objects with reflective materials. More infoSee in Glossary, as a reflective GameObject passes between them. |
| Optimize lighting | Avoid Unity using multiple render passes to render GameObjects, or doing too much work to render lighting. |
| Light component Inspector window reference | Explore the properties and settings in the Light component InspectorA Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. More infoSee in Glossary window to customize settings specific to the Built-In Render Pipeline. |

Light component Inspector window reference for URP

Per-pixel and per-vertex lights in the Built-In Render Pipeline
