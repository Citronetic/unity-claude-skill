This version of Unity is unsupported.

Sprite (2D and UI) texture Import Settings window reference

3D texture preview reference

# Cubemap texture Import Settings window reference

You can further refine **Cubemap**A collection of six square textures that can represent the reflections in an environment or the skybox drawn behind your geometry. The six squares form the faces of an imaginary cube that surrounds an object; each face represents the view along the directions of the world axes (up, down, left, right, forward and back). [More info](class-Cubemap-landing.html)
See in [Glossary](Glossary.html#Cubemap) shape textures with the following properties:

Here’s your fixed Markdown table with properly aligned rows:

| Property | Sub-property | Description |
| --- | --- | --- |
| Mapping | - | Use Mapping to specify how the Texture is projected onto your GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary. This is set to Auto by default. |
| Mapping | Auto | Unity tries to create the layout from the Texture information. |
| Mapping | 6 Frames Layout (Cubic Environment) | The Texture contains six images arranged in one of the standard cubemap layouts: cross, or sequence (+x -x +y -y +z -z). The images can be orientated either horizontally or vertically. |
| Mapping | Latitude Longitude (Cylindrical) | Maps the Texture to a 2D Latitude-Longitude representation. |
| Mapping | Mirrored Ball (Sphere Mapped) | Maps the Texture to a sphere-like cubemap. |
| Convolution Type | - | Choose the type of pre-convolution (filtering) that you want to use for this Texture. The result of pre-convolution is stored in mipmaps. This property is only available for the Default Texture type. |
| Convolution Type | None | The Texture has no pre-convolution (no filtering). This is the default. |
| Convolution Type | Specular (Glossy Reflection) | Select this to use cubemaps as Reflection ProbesA rendering component that captures a spherical view of its surroundings in all directions, rather like a camera. The captured image is then stored as a Cubemap that can be used by objects with reflective materials. More infoSee in Glossary. The Texture mipmaps are pre-convoluted (filtered) with the engine BRDF. For more information, see Wikipedia’s page on Bidirectional reflectance distribution function. |
| Convolution Type | Diffuse (Irradiance) | The Texture is convoluted (filtered) to represent irradiance. This is useful if you use the cubemap as a Light ProbeLight probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. More infoSee in Glossary. |
| Fixup Edge Seams | - | This option is only available with the None or Diffuse convolution (filter). Use this on low-end platforms as a work-around for filtering limitations, such as cubemaps incorrectly filtered between faces. |

## Additional resources

- [Cubemaps](class-Cubemap-landing.html)

Sprite (2D and UI) texture Import Settings window reference

3D texture preview reference
