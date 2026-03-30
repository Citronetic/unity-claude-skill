[Image: image]

# HDRP Area Lights

Tutorial

Beginner

+10XP

10 mins

102

(117)

Unity Technologies

[Image: HDRP Area Lights]Summary

Area lights in the High Definition Rendering Pipeline (HDRP) are rendered in real-time unlike the previous pipelines, there is no baking involved. They now benefit from the HDRP unitified lighting, which means that all objects within the scene should receive the same lighting and there is no longer a distinction between opaque, transparent, or volumetric materials. All of this results in a more coherent look within your scene in regards to your lighting.

Languages available:

EnglishEnglishEnglish

## 1. Video Overview

Q&A (0)

*This tutorial has been verified using Unity 2019.4 LTS*

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off
- English, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Mark step as complete

## 2. HDRP Area Lights

Q&A (0)

Introduced in Unity 2018.1, the High Definition Render Pipeline (HDRP) was developed to fulfill the needs of industries that require high-fidelity visuals. Area Lights in the HDRP are rendered in real time and, unlike previous pipelines, there’s no baking required. Area Lights now benefit from the HDRP’s unified lighting, which means there’s no longer a distinction between opaque, transparent, or volumetric Materials. In this tutorial, we will create an Area Light and then set its properties.

Area Lights illuminate an object from several different directions at once, which means shading tends to be more subtle than with other light types. From a design perspective, Area Lights can be used to create a realistic street light or several banks of light close to the camera, such as multiple skylights or interior house lighting.

[Image: image]Mark step as complete

## 3. Creating an Area Light

Q&A (0)

1. Navigate to the GameObject drop-down menu, and select **Light**> **Area Light**.

2. Using the transform gizmo, move and rotate your Area Light into place.

[Image: image]Mark step as complete

## 4. Area Light Properties

Q&A (0)

In rendering pipelines other than HDRP, Area Lights are used for lightmapping purposes. They are always baked and never rendered in real-time. HDRP renders them in real-time without shadows. This change is significant, as now you can see immediate results instead of having to first bake your lightmaps. This makes it easier to develop your Scene lighting.

With your Area Light selected, in the Inspector window, you’ll notice several categories of properties that you can modify (**Figure 03**).

[Image: image]

The **General**category should remain untouched, as this defines the light as an Area Light. The **Shape**category changes the shape of your light. For Area Lights, you can only change the width (Size X) and height (Size Y) of the light. **Emission**changes the color and intensity of the light. Finally, **Shadows**enables or disables shadows and shows additional light settings. Normally this allows you to toggle if the light creates shadows, but since Area Lights don’t cast shadows, this category will remain disabled.

Mark step as complete

## 5. Conclusion

Q&A (0)

The HDRP offers many new features for Area Lights, including the ability to render them in real-time to bring a believable look to your Scenes. HDRP also provides you with more control over light behavior.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
