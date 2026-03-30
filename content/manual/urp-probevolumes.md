This version of Unity is unsupported.

Troubleshooting reflections

Introduction to Adaptive Probe Volumes

# Adaptive Probe Volumes (APV) in URP

Adaptive Probe Volumes make [Light Probes](https://docs.unity3d.com/Manual/LightProbes.html)Light probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. [More info](../LightProbes.html)
See in [Glossary](../Glossary.html#LightProbe) easier to use by automating placement. They also provide higher quality, more accurate lighting, because they light per-pixel not per-object.

| Topic | Description |
| --- | --- |
| Introduction to Adaptive Probe Volumes | The purpose of Adaptive Probe Volumes and what you can do with them. |
| Use Adaptive Probe Volumes | Add Adaptive Probe Volumes to your project and configure them. |
| Display Adaptive Probe Volumes | Visualize the structure of Adaptive Probe Volumes. |
| Configure the size and density of Adaptive Probe Volumes | Change the size of an Adaptive Probe Volume, or increase the density of Light Probes. |
| Bake multiple scenes together with Baking Sets | Add scenesA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary to a Baking Set so you can bake the lighting for all the scenes together. |
| Optimize loading Adaptive Probe Volume data | Stream lighting data to provide lighting for large open worlds, or load data from AssetBundles or Addressables. |
| Changing lighting at runtime | Use Lighting Scenarios or sky occlusion to change how objects use the data in Adaptive Probe Volumes at runtime. |
| Troubleshooting Adaptive Probe Volumes | Solve common issues with Adaptive Probe Volumes, such as light leaks and seams. |
| Adaptive Probe Volume Inspector window reference | Reference for the Adaptive Probe Volume InspectorA Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. More infoSee in Glossary window. |
| Adaptive Probe Volumes panel reference | Reference for the Adaptive Probe Volumes panel in the Lighting settings. |
| Probe Volumes Options Override reference | Reference for the Probe Volumes Options Override. |
| Probe Adjustment Volume component reference | Reference for the Probe Adjustment Volume component. |

## Additional resources

- [Light Probes](https://docs.unity3d.com/Manual/LightProbes.html)

- [Light Probes for moving objects](https://docs.unity3d.com/Manual/LightProbes-MovingObjects.html)

- [Light Probe Group](https://docs.unity3d.com/Manual/class-LightProbeGroup.html)A component that enables you to add Light Probes to GameObjects in your scene. [More info](../class-LightProbeGroup.html)
See in [Glossary](../Glossary.html#LightProbeGroup)

- [Rendering Debugger](features/rendering-debugger.html)

Troubleshooting reflections

Introduction to Adaptive Probe Volumes
