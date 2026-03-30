This version of Unity is unsupported.

Light Probe validity in Adaptive Probe Volumes in URP

Troubleshooting light leaks in Adaptive Probe Volumes in URP

# Troubleshooting dark blotches or streaks in Adaptive Probe Volumes in URP

Adjust settings or use Volume overrides to fix artefacts from Adaptive Probe Volumes.

### Adjust Virtual Offset

You can configure **Virtual Offset Settings** in the [Adaptive Probe Volumes panel](probevolumes-lighting-panel-reference.html) in the Lighting window. This changes how URP calculates the validity of **Light Probes**Light probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. [More info](../LightProbes.html)
See in [Glossary](../Glossary.html#LightProbe).

You can adjust the following:

- The length of the sampling ray Unity uses to find a valid capture point.

- How far Unity moves a Light Probe’s capture position to avoid geometry.

- How far Unity moves the start point of rays.

- How many times a probe’s sampling ray hits **colliders**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](../CollidersOverview.html)
See in [Glossary](../Glossary.html#Collider) before Unity considers the probe invalid.

You can also disable Virtual Offset for a Baking Set. Virtual Offset only affects baking time, so disabling Virtual Offset doesn’t affect runtime performance.

### Adjust Dilation

You can configure **Probe Dilation Settings** in the [Adaptive Probe Volumes panel](probevolumes-lighting-panel-reference.html) in the Lighting window). This changes how URP calculates the validity of Light Probes, and how invalid Light Probes use lighting data from nearby valid Light Probes.

You can adjust the following:

- The percentage of backfaces a Light Probe can sample before URP considers that probe invalid.

- How far away from the invalid probe Unity searches for valid probes to contribute lighting data.

- How many iterations of Dilation URP does during the bake.

- How to weight the data from valid probes based on their spatial relationship with the invalid probe.

[How you adjust Light Probe density](probevolumes-changedensity.html) affects the final results, because URP uses the settings as a multiplier to calculate the distance between probes.

You can also disable Dilation for a Baking Set. Dilation only affects baking time, so disabling Dilation doesn’t affect runtime performance.

Light Probe validity in Adaptive Probe Volumes in URP

Troubleshooting light leaks in Adaptive Probe Volumes in URP
