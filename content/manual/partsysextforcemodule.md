This version of Unity is unsupported.

Rotation by Speed module reference

Collision module reference

# External Forces module reference

This property modifies the effect of **wind zones**A GameObject that adds the effect of wind to your terrain. For instance, Trees within a wind zone will bend in a realistic animated fashion and the wind itself will move in pulses to create natural patterns of movement among the tree. [More info](class-WindZone.html)
See in [Glossary](Glossary.html#windzone) and [Particle System Force Fields](class-ParticleSystemForceField.html) on particles emitted by the system.

## Properties

For some properties in this section, you can use different modes to set their value. For information on the modes you can use, refer to [Vary Particle System properties over time](varying-particle-system-properties-over-time.html).

| Property | Function |
| --- | --- |
| Multiplier | Scale value applied to wind zone forces. |
| Influence Filter | Choose whether to include Force Fields based on a Layer MaskA value defining which layers to include or exclude from an operation, such as rendering, collision or your own code. More infoSee in Glossary, or via an explicit List. |
| List | Define an explicit list of Force Fields that can affect this Particle SystemA component that simulates fluid entities such as liquids, clouds and flames by generating and animating large numbers of small 2D images in the scene. More infoSee in Glossary. This appears when the Influence Filter is set to List. |
| Influence Mask | Use a Layer Mask to determine which Force Fields affect this Particle System. This appears when the Influence Filter is set to Layer Mask.  This property has the following options:
 Nothing: Automatically unticks all other options, turning them off
 Everything (default): Automatically ticks all other options, turning them on
 Default
 TransparentFX
 Ignore Raycast

 Water
 UI
 PostProcessing |

## Additional resources

- [Particle physics forces](particle-physics-forces.html)

Rotation by Speed module reference

Collision module reference
