This version of Unity is unsupported.

Adaptive Probe Volumes panel reference

Probe Adjustment Volume component reference

# Probe Volumes Options Override reference

Refer to [Fix issues with Adaptive Probe Volumes](probevolumes-fixissues.html) for more information about using the Probe Volumes Options Override.

| Property | Description |
| --- | --- |
| Normal Bias | Enable to move the position used by shaded pixels when sampling Light ProbesLight probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. More infoSee in Glossary. The value is in meters. This affects how sampling is moved along the pixelThe smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. More infoSee in Glossary’s surface normal. |
| View Bias | Enable to move the sampling position towards the cameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary when sampling Light Probes. The results of View Bias vary depending on the camera position. The value is in meters. |
| Scale Bias with Min Probe Distance | Scale the Normal Bias or View Bias so it’s proportional to the spacing between Light Probes in a brick. |
| Sampling Noise | Enable to increase or decrease the amount of noise URP adds to the position used by shaded pixels when sampling Light Probes. This can help fix seams between bricks. |
| Animate Sampling Noise | Enable to animate sampling noise when Temporal Anti-Aliasing (TAA) is enabled. This can make noise patterns less visible. |
| Leak Reduction Mode | Enable to choose the method Unity uses to reduce leaks. Refer to Fix light leaks.Options:• None: No leak reduction.• Performance: The uvw used to sample APV data are warped to try to have invalid probe not contributing to lighting. This samples APV a single time so it’s a cheap option but will only work in the simplest cases.• Quality: This option samples APV between 1 and 3 times to provide the smoothest result without introducing artifacts. This is as expensive as Performance mode in the simplest cases, and is better and more expensive in the most complex cases. |
| Min Valid Dot Product Value | Enable to make URP reduce a Light Probe’s influence on a GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary if the direction towards the Light Probe is too different to the GameObject’s surface normal direction. The value is the minimum dot product between the two directions where URP will reduce the Light Probe’s influence. |
| Intensity Multiplier | Set the strength of the light contribution from Adaptive Probe Volumes. A value of 0 means Unity doesn’t use the Adaptive Probe Volume data. |
| Sky Occlusion Intensity Multiplier | Set the strength of the light contribution from sky occlusion data in Adaptive Probe Volumes, if you enable sky occlusion. |

Adaptive Probe Volumes panel reference

Probe Adjustment Volume component reference
