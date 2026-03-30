[Image: image]

# Adjust the lights, background, and camera angle

Tutorial

foundational

+10XP

25 mins

33

(6701)

Unity Technologies

[Image: Adjust the lights, background, and camera angle]SummarySkills

Edit the lighting, change the background, and position your camera for a perfect shot of your scene.

Languages available:

EnglishEnglishEspañolEnglish

## 1. Overview

Q&A (0)[Image: image]

In this tutorial, you will edit the sun, sky, and camera angle to get the perfect shot of the scene.

When you’re ready to get started, go on to the next step.

Mark step as complete

## 2. Adjust your camera

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

In Unity, the **Camera** GameObject is similar to a physical camera on a movie set, playing a critical role in how your scene is viewed. When you move the camera, you’ll end up with a different view of your scene in Play mode. Adjusting the camera's position, rotation, and field of view allows you to frame your scene just as a cinematographer would in filmmaking.

Let's try adjusting the camera angle and field of view.

**Instructions**

**1.**  In the **Hierarchy** window, select the **Camera** GameObject.

**2.**  In the toolbar overlay at the bottom of Scene view, enable the **Cameras** option to get a preview of what the camera can see.

**3.**  Move and rotate the camera and notice how the camera preview changes.

**4.**  In the **Inspector** window, in the **Camera**component, use the **Field of View** slider to change how zoomed in the camera is.

Try and get a good view of the ball bouncing action, but don’t worry about getting the perfect angle yet — you’ll do that in the next step.

Mark step as complete

## 3. Align the camera with the perfect view

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

It can be tricky to get the camera perfectly aligned using the **Move** and **Rotate** tools. There is a shortcut to get the camera angle you want by aligning the camera with your position and orientation in the **Scene** view.

**Instructions**

**1.**  In the **Scene** view, use Flythrough mode (WASD + right-click) to get the perfect view of the bouncing ball and your block towers.

**2.**  Select the **Camera** GameObject in the **Hierarchy** window.

**3.**  Press **Ctrl+Shift+F** (macOS: **Cmd+Shift+F**) to align the **Camera** GameObject with your current view.

**Note:** With the **Camera** still selected, you could also go to the main menu and select **GameObject** > **Align with View.**

**4.**  Enter Play mode to test the new camera angle.

If necessary, tweak the **Position**, **Rotation**, or **Field of View**property in the **Camera** component to get the perfect angle.

**5.**  When you’re happy with your camera angle, disable the **Cameras** window overlay.

**Tip:** Trying to do these minor movements in the **Scene** view with Flythrough mode can be frustrating. Try lightly tapping on the WASD keys while holding the right mouse button to do small movements. You can also use the Q and E keys in Flythrough mode to go up and down.

Mark step as complete

## 4. Adjust your lighting

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Lighting sets the mood and atmosphere of your scene. Unity's default **Directional Light** — which acts like the sun in the real world — simulates bright, midday sunlight.

By rotating this light, you can simulate different times of day or specific lighting conditions.

**Instructions**

**1.**  In the **Hierarchy** window, select the **Directional Light** GameObject then frame it in the **Scene** view.

**2.**  Rotate the light to adjust the shadows and overall lighting.

**Note:** Changes in position won’t affect the lighting due to its sun-like nature — it represents a light that’s located infinitely far away and emits light in only one direction.

**3.**  In the **Inspector** window, in the **Emission** section, experiment with **Color** and **Intensity** to find the desired lighting effect for your scene​​.

If you want more of a nighttime light, make the light more blue and decrease intensity. But feel free to keep the sun at a bright, midday angle if you want!

Mark step as complete

## 5. Edit the skybox

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

A **skybox** in Unity is a type of virtual backdrop that surrounds the entire scene, giving the illusion of a distant environment or sky around the environment you create.

The skybox contributes a lot to the overall feel of your scene.

**Instructions**

**1.** In the **Project** window, navigate to **_Unity Essentials** > **Materials** > **Skyboxes.**

The skybox currently in your scene is **SkyBrightCloudy.**

**2.** Browse the other skybox materials and preview them in the **Preview** panel at the bottom of the **Inspector** window.

**3.** Click and drag any skybox that interests you directly onto the sky in the **Scene** view to see how it looks behind the room until you find one that you like.

**4.** At the top of the editor click on **Window** > **Rendering** > **Lighting**. In the Lighting window, under **Scene**, click **Generate Lighting**. This will bake lighting and refresh reflections so the new skybox is used across the scene and in reflective surfaces (like the windows).

**Note:** Remember to save your scene often with **Ctrl+S** (macOS: **Cmd+S**).

Mark step as complete

## 6. Edit Playmode Tint

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

As you’ve heard a few times up to this point, when you’re in Play mode, none of the changes you make are saved. Make sure to pay attention when entering and exiting Play mode so that you don't lose your changes!

By default, the **Editor** windows around the**Game**view become a tiny bit darker when you enter Play mode to help visually distinguish between Play mode and Edit mode — this is known as the **Play mode tint.**

In this step, you’ll edit the Play mode tint to make it more noticeable so that you’ll always realize when you’re in Play mode and avoid losing unsaved changes.

**Instructions**

**1.**  From the main menu, select **Edit** > **Preferences** (macOS: **Unity** > **Settings**).

**2.**  In the left menu, select **Colors,** then change the **Playmode tint** color to have a subtle color instead of gray.

**3.**  Enter **Play** mode to test the new tint.

The color should be very noticeable, but still allow you to read text in the Editor windows.

**4.**  If the color needs further adjustment, return to the preferences menu and edit it.

Mark step as complete

## 7. Review and proceed to next tutorial

Q&A (0)

Congratulations on setting up the lighting, skybox, and camera so that you could get a perfect view of the block tower action.

Here are some of the things you learned how to do along the way:

- Position the **Main Camera** in order to achieve the desired framing of the scene.
- Adjust the camera's field of view.
- Align a camera's view to the **Scene**view with a keyboard shortcut.
- Adjust the **Directional Light** to convey the time of day.
- Edit the skybox to change the setting of the scene.
- Adjust the **Play**mode tint to make it obvious when **Play**mode is running.

**Instructions**

Proceed to the next tutorial, which includes optional challenges to further develop your skills, explore new concepts, and improve your project.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
