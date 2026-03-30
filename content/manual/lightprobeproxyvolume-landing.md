This version of Unity is unsupported.

Add ambient occlusion in the Built-In Render Pipeline

Introduction to Light Probe Proxy Volumes in the Built-In Render Pipeline

# Configure a GameObject to sample more Light Probes in the Built-In Render Pipeline

To make lighting more realistic, use a **Light Probe**Light probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. [More info](LightProbes.html)
See in [Glossary](Glossary.html#LightProbe) Proxy Volume to configure a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) to sample multiple Light Probes.

| Page | Description |
| --- | --- |
| Light Probe Proxy VolumesA component that allows you to use more lighting information for large dynamic GameObjects that cannot use baked lightmaps (for example, large Particle Systems or skinned Meshes). More infoSee in Glossary | Understand how a Light Probe Proxy Volume component generates a 3D grid and texture that Unity uses to create gradients on GameObjects. |
| Set a GameObject to use a Light Probe Proxy Volume | Use the settings in a MeshThe main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. More infoSee in Glossary Renderer component to set a GameObject to sample multiple probes. |
| Configure a Light Probe Proxy Volume | Change the size and data format of a Light Probe Proxy Volume. |
| Light Probe Proxy Volume component reference | Explore the properties and settings in the Light Probe Proxy Volume component InspectorA Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. More infoSee in Glossary window to customize how Unity generates the 3D grid and texture. |
| Add Light Probe Proxy Volume support to a custom shader | An example of a particle shaderA program that runs on the GPU. More infoSee in Glossary that uses the ShadeSHPerPixel function to add support for a Light Probe Proxy Volume. |

## Additional resources

- [Precalculating indirect light with Light Probes](LightProbes-landing.html)

Add ambient occlusion in the Built-In Render Pipeline

Introduction to Light Probe Proxy Volumes in the Built-In Render Pipeline
