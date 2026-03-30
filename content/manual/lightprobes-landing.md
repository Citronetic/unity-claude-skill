This version of Unity is unsupported.

Lightmap UVs Settings in the Model Import Settings Inspector window reference

Light Probes

# Precalculating indirect light with Light Probes

Resources and techniques for using **Light Probes**Light probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. [More info](LightProbes.html)
See in [Glossary](Glossary.html#LightProbe) to store the light at specific points in a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene), so that Unity can calculate indirect lighting for **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) more quickly.

| Page | Description |
| --- | --- |
| Introduction to Light Probes | Learn about using Light Probes to store the light passing through specific points in a scene. |
| Light Probes and moving GameObjects | Understand how dynamic GameObjects sample the light from Light Probes. |
| Place Light Probes with the Editor | Choose where to place Light Probes, and choose the right amount of probes if you use EnlightenA lighting system by Geomerics used in Unity for Enlighten Realtime Global Illumination. More infoSee in Glossary Realtime Global IlluminationA group of techniques that model both direct and indirect lighting to provide realistic lighting results.See in Glossary. |
| Place Light Probes with a script | An example of forming a ring of Light Probes with a script. |
| Set a GameObject to use light from Light Probes | Use a MeshThe main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. More infoSee in Glossary Renderer component to set a GameObject correctly to receive light from Light Probes. |
| Load Light Probes in multiple scenes | Use a script to control when Unity updates Light Probes if you load multiple scenes. |
| Move Light Probes at runtime | Use the LightProbes API to move Light Probes, for example if you create a world by loading multiple scenes additively and moving each scene to a different position. |
| Troubleshooting Light Probes | Solve common issues with Light Probes, such as light bleeding and ringing. |
| Light Probes reference | Explore the properties and settings in the Light Probe component InspectorA Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. More infoSee in Glossary window reference and the Edit Light Probe GroupA component that enables you to add Light Probes to GameObjects in your scene. More infoSee in Glossary tool. |

# Additional resources

- [Adaptive Probe Volumes (APV) in URP](urp/probevolumes.html)

- [Configure an object to sample more light probes in the Built-In Render Pipeline](LightProbeProxyVolume-landing.html)

Lightmap UVs Settings in the Model Import Settings Inspector window reference

Light Probes
