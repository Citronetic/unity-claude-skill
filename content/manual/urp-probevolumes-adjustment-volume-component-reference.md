This version of Unity is unsupported.

Probe Volumes Options Override reference

Rendering Layers in URP

# Probe Adjustment Volume component reference

Select a [Probe Adjustment Volume Component](probevolumes-troubleshoot-light-leaks.html#probevolumeadjustment) and open the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../UsingTheInspector.html)
See in [Glossary](../Glossary.html#Inspector) to view its properties.

Refer to the following for more information about using the Probe Adjustment Volume component:

- [Fix issues with Adaptive Probe Volumes](probevolumes-fixissues.html)

- [Configure the size and density of Adaptive Probe Volumes](probevolumes-changedensity.html)

| Property | Description |
| --- | --- |
| Influence Volume | Sets the shape, size and radius of the Adjustment Volume. The options are:

Shape: Set the shape of the Adjustment Volume to either Box or Sphere.

Size: Set the size of the Adjustment Volume. This property only appears if you set Shape to Box.

Radius: Set the radius of the Adjustment Volume. This property only appears if you set Shape to Sphere. |
| Mode | Sets how Unity overrides probes inside the Adjustment Volume. |

### Mode

| Value | Description |
| --- | --- |
| Invalidate Probes | Mark selected probes as invalid. Refer to How light probe validity works for more information. |
| Override Validity Threshold | Override the threshold URP uses to determine whether Light ProbesLight probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. More infoSee in Glossary are marked as invalid. Refer to Adjust Dilation for more information. |
| Apply Virtual Offset | Change the position Light Probes use when sampling the lighting in the sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary during baking. Refer to Adjust Virtual Offset for more information. |
| Override Virtual Offset Settings | Override the biases URP uses during baking to determine when Light Probes use Virtual Offset, and calculate sampling positions. Refer to Adjust Virtual Offset for more information. |
| Intensity Scale | Override the intensity of probes to brighten or darken affected areas. |
| Override Sky Direction | Override the directions Unity uses to sample the ambient probe, if you enable sky occlusion. |
| Override Sample Count | Override the number of samples Unity uses for Adaptive Probe Volumes. |

### Mode settings

| Property | Description |
| --- | --- |
| Dilation Validity Threshold | Override the ratio of backfaces a probe samples before URP considers it invalid. This option only appears if you set Mode to Override Validity Threshold, and you enable Advanced Properties. |
| Virtual Offset Rotation | Set the rotation angle for the Virtual Offset vector on all probes in the Adjustment Volume. This option only appears if you set Mode to Apply Virtual Offset. |
| Virtual Offset Distance | Set how far URP pushes probes along the Virtual Offset Rotation vector. This option only appears if you set Mode to Apply Virtual Offset. |
| Geometry Bias | Sets how far URP pushes a probe’s capture point out of geometry after one of its sampling rays hits geometry. This option only appears if you set Mode to Override Virtual Offset Settings. |
| Ray Origin Bias | Override the distance between a probe’s center and the point URP uses to determine the origin of that probe’s sampling ray. This can be used to push rays beyond nearby geometry if the geometry causes issues. This option appears only if you set Mode to Override Virtual Offset Settings. |
| Intensity Scale | Change the brightness of all probes covered by the Probe Volumes Adjustment Volume component. Use this sparingly, because changing the intensity of probe data can lead to inconsistencies in the lighting. This option only appears if you set Mode to Intensity Scale. |
| Sky Direction | Set the direction Unity uses to sample the ambient probe. This option only appears if you set Mode to Override Sky Direction. |

#### Probes

| Property | Description |
| --- | --- |
| Direct Sample Count | Set the number of samples Unity uses to calculate the direct light each probe stores. This option only appears if you set Mode to Override Sample Count. |
| Indirect Sample Count | Set the number of samples Unity uses to calculate the indirect light each probe stores, including environment samples. This option only appears if you set Mode to Override Sample Count. |
| Sample Count Multiplier | Set the value Unity multiplies Direct Sample Count and Indirect Sample Count by. This option only appears if you set Mode to Override Sample Count. |
| Max Bounces | Set the number of times Unity bounces light off objects. This option only appears if you set Mode to Override Sample Count. |

#### Sky Occlusion

| Property | Description |
| --- | --- |
| Sample Count | Set the number of samples Unity uses to calculate the amount of light each probe receives from the sky, if you enable sky occlusion. This option only appears if you set Mode to Override Sample Count. |
| Max Bounces | Set the number of times Unity bounces light from the sky off objects to calculate the sky occlusion data, if you enable sky occlusion. This option only appears if you set Mode to Override Sample Count. |

Probe Volumes Options Override reference

Rendering Layers in URP
