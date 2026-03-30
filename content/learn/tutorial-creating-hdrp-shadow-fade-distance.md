[Image: image]

# Creating HDRP Shadow Fade Distance

Tutorial

intermediate

+10XP

20 mins

61

(16)

Unity Technologies

[Image: Creating HDRP Shadow Fade Distance ]Summary

In this tutorial, you will learn how to apply Shadow Fade Distance to lights. One way to optimize performance is to set a Shadow Fade distance on lights in the scene. The Shadow Fade property will gradually decrease shadows cast by objects further away from the light.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

*This tutorial has been verified using Unity 2019.4 LTS*

This tutorial demonstrates how you can add shadow fade to lights and set the distance of the fade in a Scene and make adjustments (**Figure 01**).

[Image: image]Mark step as complete

## 2. Introduction

Q&A (0)

The Unity High Definition Render Pipeline (HDRP) is a high-fidelity Scriptable Render Pipeline that targets high-performance graphics platforms. HDRP uses physically-based lighting techniques, linear lighting, and HDR lighting, allowing you to create projects that require real-time high-end rendering.

In the real world, shadows occur when light that is cast from a source is blocked by an object. A shadow falls on anything behind the object from the opposite side of the light source. The HDRP reproduces accurate shadows, but can also decrease real-time performance. One way to optimize performance is to set a Shadow Fade Distance on Lights in a Scene. The Fade Distance property gradually decreases shadows cast by objects further away from each Light.

When the distance between the Light and the Camera is greater than the Fade Distance, HDRP stops calculating real-time shadows for the Light. A lower Shadow Fade Distance will generally improve rendering performance, with little reduction in Scene quality.

Mark step as complete

## 3. Getting Started

Q&A (0)

You can either upgrade an existing project to HDRP by adding the High Definition RP plug-in with the Package Manager (**Figure 02**), or you can create a new project in the Unity Hub and choose the High Definition RP Project template (**Figure 03**).

[Image: image][Image: image]

Note: When updating an existing Scene to the High Definition Render Pipeline, make sure you update any Materials to HDRP Materials. Do this by selecting **Edit** > **Render Pipeline** > **Update Project Materials to High Definition Materials**.

Mark step as complete

## 4. Set the Shadow Fade Distance for a Light

Q&A (0)

To set the Shadow Fade Distance for a Light:

1. Add a Light to the Scene by going to **GameObject** > **Light** and selecting either Spot Light, Point Light, or Area Light (**Figure 04**). The Shadow properties are not the same for Directional Lights, and will not use the same Shadow Fade Distance. You can also start at step 2 to configure the properties of an existing Light in the Scene.

[Image: image]

Note: Different Light types have individual properties. The Light types can also be changed after adding the Light, but this will change some of the properties. We recommend that you don’t change the Light type after you have set any property values. Instead, add a new Light of the correct type and remove the one that you do not need.

2. Select your new or chosen Light in the Hierarchy. In the Inspector window, find the Light properties, then expand the Shadows section. Enable the Shadow Map checkbox, if this is not already enabled (**Figure 05**).

[Image: image]

3. Select the gear icon to the right of the Shadows section header to enable advanced properties (**Figure 06**).

[Image: image]

4. Click and drag over the Fade Distance Label to adjust the Fade Distance value. This changes the distance that the shadows will fade out in meters. Drag left to decrease the Shadow Fade distance of the light, or drag right to increase the distance. Look in the Scene view as you adjust the values, to see where the shadow begins to disappear.

5. If a Light is not casting enough light in the Scene, increase its Intensity in the Emission property.

When setting the Shadow Fade Distance for a Light, changes you make will be shown in the Scene view. (**Figure 07**). If you move the Camera further away from the Light, you will see the shadows disappear (**Figure 08**).

[Image: image][Image: image]Mark step as complete

## 5. Conclusion

Q&A (0)

By following these steps, you can set a Shadow Fade Distance for Lights in a Scene and optimize the use of lighting in a Project. Optimizing shadow fade distance in a HDRP Scene is another way to increase real-time performance.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
