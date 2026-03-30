This version of Unity is unsupported.

Prepare your project for 2D lighting

Configure a 2D light

# Light 2D component reference for URP

Explore the properties and options to customize the appearance and behavior of different Light 2D types. This page documents both the properties that are common to all **Light 2D** types, and the different [specific properties](#type-specific) and options available for each **Light 2D** type.

| Property | Function |
| --- | --- |
| Light Type | Select the type of Light you want the selected Light to be. The available types are Freeform, Sprite, Spot, and Global. |
| Color | Use the color picker to set the color of the emitted light. |
| Intensity | Enter the desired brightness value of the Light. The default value is 1. |
| Target Sorting Layers | Select the sorting layers that this Light targets and affects. |
| Blend Style | Select the blend style used by this Light. You can customize different blend styles in the 2D Renderer Asset. |
| Light Order (unavailable for Global Lights) | Enter a value here to specify the rendering order of this Light relative to other Lights on the same sorting layer(s). Lights with lower values are rendered first, and negative values are valid. |
| Overlap Operation | Select the overlap operation used by this light The operations available are Additive, and Alpha Blend. |
| Shadow Strength | Use the slider to control the amount of light that Shadow Caster 2Ds block when they obscure this Light. The value scales from 0 (no light is blocked) to 1 (all light is blocked). |
| Volumtric Intensity | Use the slider to select the opacity of the volumetric lighting. The value scales from 0 (transparent) to 1 (opaque). |
| Volumetric Shadow Strength | Use the slider to control the amount of volumetric light that Shadow Caster 2Ds block when they obscure this Light. The value scales from 0 (no light is blocked) to 1 (all light is blocked). |
| Normal Map Quality | Select either Disabled (default), Accurate or Fast to adjust the accuracy of the lighting calculations used. |
| Normal Map Distance (available when Use Normal Map quality is enabled) | Enter the desired distance (in Unity units) between the Light and the lit Sprite. This does not Transform the position of the Light in the sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary. |

## Specific properties of each type of Light 2D

Learn which type of light is the best fit for your project by comparing the different options of the different **Light 2D** types:

- [Freeform](#freeform)

- [Sprite](#sprite)A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../sprite/sprite-landing.html)
See in [Glossary](../Glossary.html#Sprite)

- [Spot](#spot)

- [Global](#global)

**Important:** The Parametric Light Type is deprecated from URP 11 onwards. To convert existing Parametric lights to Freeform lights, go to **Window** > **Rendering** > **Render Pipeline Converter**, change tab to **Upgrade 2D (URP) Assets** and enable the converter **Parametric To Freeform Light Upgrade**.

## Freeform

[Image: Freeform Properties]
Freeform Properties

Select the **Freeform** Light type to create a Light from an editable polygon with a spline editor. To begin editing your shape, select the Light and find the **Edit Shape** button in its **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../UsingTheInspector.html)
See in [Glossary](../Glossary.html#Inspector) window. Select it to enable the shape editing mode.

Add new control points by clicking the mouse along the inner polygon’s outline. Remove control points selecting the point and pressing the Delete key.

The following additional properties are available to the **Freeform** Light type.

| Property | Function |
| --- | --- |
| Falloff | Adjusts the falloff area of this light. The higher the falloff value, the larger area the falloff spans. |
| Falloff Strength | Adjusts the falloff curve to control the softness of this light’s edges. The higher the falloff strength, the softer the edges of this light. |

[Image: Left: Freeform Light in edit mode. Right: Resulting Light Effect.]
Left: Freeform Light in edit mode. Right: Resulting Light Effect.

When creating a **Freeform** Light, take care to avoid self-intersection as this may cause unintended lighting results. Self-intersection may occur by creating outlines where edges cross one another, or by enlarging falloff until it overlaps itself. To prevent such issues, it is recommended to edit the shape of the Light until the conditions creating the self-intersection no longer occur.

[Image: Left: Outline self-intersection in Edit mode. Right: Light effect with a black triangular artifact.]
Left: Outline self-intersection in Edit mode. Right: Light effect with a black triangular artifact.

[Image: Left: Falloff overlap in Edit mode. Right: Light effect with double lighted areas with overlapping falloff.]
Left: Falloff overlap in Edit mode. Right: Light effect with double lighted areas with overlapping falloff.

## Sprite

Select the **Sprite** Light type to create a Light based on a selected Sprite by assigning the selected Sprite to the additional Sprite property.

[Image: The Sprite property]
The Sprite property

| Property | Function |
| --- | --- |
| Sprite | Select a Sprite as the Light source. |

[Image: Left: Selected Sprite. Right: Resulting Light effect]
Left: Selected Sprite. Right: Resulting Light effect

## Spot

Select the **Spot** Light type for great control over the angle and direction of the selected Light with the following additional properties.

[Image: Point Light properties]
Point Light properties

| Property | Function |
| --- | --- |
| Radius Inner | Set the inner radius here or with the gizmoA graphic overlay associated with a GameObject in a Scene, and displayed in the Scene View. Built-in scene tools such as the move tool are Gizmos, and you can create custom Gizmos using textures or scripting. Some Gizmos are only drawn when the GameObject is selected, while other Gizmos are drawn by the Editor regardless of which GameObjects are selected. More infoSee in Glossary. Light within the inner radius will be at maximum intensity. |
| Radius Outer | Set the outer radius here or with the gizmo. Light intensity decreases to zero as it approaches the outer radius. |
| Inner / Outer Spot Angle | Set the angles with this slider or with the gizmo. Light within the inner and outer angles will be at the intensity specified by inner and outer radius. |

[Image: Left: Point Light in Edit mode. Right: Resulting Light effect.]
Left: Point Light in Edit mode. Right: Resulting Light effect.

## Global

Global Lights light all objects on the [targeted sorting layers](2d-light-properties-explained.html#target-sorting-layers). Only one global Light can be used per [Blend Style](LightBlendStyles.html), and per sorting layer.

## Additional resources

- [Configure a 2D light](2d-light-properties-explained.html)

- [Light Blend Styles component reference](LightBlendStyles.html)

Prepare your project for 2D lighting

Configure a 2D light
