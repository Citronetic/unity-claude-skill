This version of Unity is unsupported.

Use Adaptive Probe Volumes

Configure the size and density of Adaptive Probe Volumes

# Display Adaptive Probe Volumes

You can use the Rendering Debugger to check how URP places **Light Probes**Light probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. [More info](../LightProbes.html)
See in [Glossary](../Glossary.html#LightProbe) in an Adaptive Probe Volume, then use Adaptive Probe Volume settings to configure the layout.

## Display Adaptive Probe Volumes

To display Adaptive Probe Volumes, open the [Rendering Debugger](features/rendering-debugger.html) and select the **Probe Volume** tab.

You can do the following:

- Enable **Probe Visualization** > **Display Probes** to display the locations of Light Probes and the lighting they store.

- Enable **Subdivision Visualization** > **Display Bricks** to display the outlines of groups of Light Probes (‘bricks’). Refer to [Understanding Adaptive Probe Volumes](probevolumes-concept.html#how-probe-volumes-work) for more information on bricks.

- Enable **Subdivision Visualization** > **Display Cells** to display the outlines of cells, which are groups of bricks used for [streaming](probevolumes-streaming.html).

- Enable **Subdivision Visualization** > **Debug Probe Sampling** to display how neighboring Light Probes influence a chosen position. Select a surface to display the weights URP uses to sample nearby Light Probes.

If the Rendering Debugger displays invalid probes when you select **Display Probes**, refer to [Fix issues with Adaptive Probe Volumes](probevolumes-fixissues.html).

[Image: The Rendering Debugger with Display Probes enabled.]

[Image: The Rendering Debugger with Display Bricks enabled.]

[Image: The Rendering Debugger with Display Cells enabled.]

[Image: The Rendering Debugger with Debug Probe Sampling enabled]

Refer to [Rendering Debugger](features/rendering-debugger.html) for more information.

## Additional resources

- [Configure the size and density of an Adaptive Probe Volume](probevolumes-changedensity.html)

- [Adaptive Probe Volumes panel reference](probevolumes-lighting-panel-reference.html)

- [Probe Volumes Options Override reference](probevolumes-options-override-reference.html)

- [Probe Adjustment Volume component reference](probevolumes-adjustment-volume-component-reference.html)

Use Adaptive Probe Volumes

Configure the size and density of Adaptive Probe Volumes
