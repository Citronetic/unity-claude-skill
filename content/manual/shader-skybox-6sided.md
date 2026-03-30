This version of Unity is unsupported.

Skybox Shader Material Inspector window reference

Cubemap Skybox Shader Material Inspector Window reference

# 6 Sided Skybox Shader Material Inspector Window reference

For information on how to create a Material that uses this **skybox**A special type of Material used to represent skies. Usually six-sided. [More info](sky-landing.html)
See in [Glossary](Glossary.html#Skybox) **Shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader), as well as details on how to render the skybox in your **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene), see [Using skyboxes](skyboxes-using.html).

## Render pipeline compatibility

| Feature | Built-in Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary | Universal Render Pipeline (URP) | High Definition Render Pipeline (HDRP) |
| --- | --- | --- | --- |
| 6 Sided skybox | Yes | Yes | No |

## Properties

| Property | Description |
| --- | --- |
| Tint Color | The color to tint the skybox to. Unity adds this color to the Textures to change their appearance without altering the base Texture files. |
| Exposure | Adjusts the skybox’s exposure. This allows you to correct tonal values in the skybox Textures. Larger values produce a more exposed, seemingly brighter, skybox. Smaller values produce a less exposed, seemingly darker, skybox. |
| Rotation | The rotation of the skybox around the positive y-axis. This changes the orientation of your skybox and is useful if you want a specific section of the skybox to be behind a particular part of your Scene. |
| Front [+Z] (HDR) | The Texture that represents the face of the skybox in the direction of the world’s positive z-axis. In a new Unity Scene, this is in front of the default CameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary. |
| Back [-Z] (HDR) | The Texture that represents the face of the skybox in the direction of the world’s negative z-axis. In a new Unity Scene, this is behind the default Camera. |
| Left [+X] (HDR) | The Texture that represents the face of the skybox in the direction of the world’s positive x-axis. In a new Unity Scene, this is to the right of the default Camera. |
| Right [-X] (HDR) | The Texture that represents the face of the skybox in the direction of the world’s negative x-axis. In a new Unity Scene, this is to the left of the default Camera. |
| Up [+Y] (HDR) | The Texture that represents the face of the skybox in the direction of the world’s positive y-axis. In a new Unity Scene, this is above the default Camera. |
| Down [-Y] (HDR) | The Texture that represents the face of the skybox in the direction of the world’s negative y-axis. In a new Unity Scene, this is below the default Camera. |
| Render Queue | Determines the order in which Unity draws GameObjectsThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary. For more information on Render Queue, see SL-SubShaderTags. |
| Double Sided Global IlluminationA group of techniques that model both direct and indirect lighting to provide realistic lighting results.See in Glossary | Specifies whether the lightmapperA tool in Unity that bakes lightmaps according to the arrangement of lights and geometry in your scene. More infoSee in Glossary accounts for both sides of the geometry when it calculates Global Illumination. When true, if you use the Progressive Lightmapper, back faces bounce light using the same emission and albedo as front faces. |

## Additional resources

- [Configure a skybox with a Skybox Shader](skybox-shaders.html)

- [Cubemaps](class-Cubemap-landing.html)A collection of six square textures that can represent the reflections in an environment or the skybox drawn behind your geometry. The six squares form the faces of an imaginary cube that surrounds an object; each face represents the view along the directions of the world axes (up, down, left, right, forward and back). [More info](class-Cubemap-landing.html)
See in [Glossary](Glossary.html#Cubemap)

Skybox Shader Material Inspector window reference

Cubemap Skybox Shader Material Inspector Window reference
