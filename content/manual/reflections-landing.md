This version of Unity is unsupported.

Troubleshooting shadows

Introduction to Reflection Probes

# Reflections

Techniques and resources for using Reflection Probes to capture and display reflections on **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject).

| Page | Description |
| --- | --- |
| Reflection ProbesA rendering component that captures a spherical view of its surroundings in all directions, rather like a camera. The captured image is then stored as a Cubemap that can be used by objects with reflective materials. More infoSee in Glossary | Understand how Unity bakes a spherical view of a sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary into a Reflection Probe, then uses it to quickly calculate reflections on GameObjects. |
| Types of Reflection Probe | Compare the differences between Baked, Custom, and Realtime Reflection Probes. |
| Place a Reflection Probe | Add, position and resize a Reflection Probe in a scene. |
| Add GameObjects to reflections | Set GameObjects to contribute to Baked and Realtime Reflection Probes, and update Reflection Probes when GameObjects move. |
| Set GameObjects to use Reflection Probes | Set GameObjects to sample the cubemapA collection of six square textures that can represent the reflections in an environment or the skybox drawn behind your geometry. The six squares form the faces of an imaginary cube that surrounds an object; each face represents the view along the directions of the world axes (up, down, left, right, forward and back). More infoSee in Glossary texture stored in a Reflection Probe. |
| Enable reflections of reflections | Enable interreflections, for example for two mirrors placed close together and facing each other. |
| Optimize reflections | Speed up baking time and rendering time for Reflection Probes. |
| Troubleshooting reflections | Solve common issues with reflections, for example incorrect reflection size in indoor scenes. |
| Reflection Probe Inspector window reference | Explore the properties and settings in the Render Probe InspectorA Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. More infoSee in Glossary window to customize Reflection Probes. |

## Additional resources

- [Reflections in URP](urp/lighting/reflection-probes.html)

- [Direct and indirect lighting](direct-and-indirect-lighting.html)

- [Lighting data](Lightmap-data-landing.html)

Troubleshooting shadows

Introduction to Reflection Probes
