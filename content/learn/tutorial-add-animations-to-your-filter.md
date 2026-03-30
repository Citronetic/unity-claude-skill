[Image: image]

# Add animations to your filter

Tutorial

Beginner

+10XP

30 mins

1

(121)

Unity Technologies

[Image: Add animations to your filter]SummarySkills

You have added 3D models to your face filter; now you can bring those models to life through animation.

In this tutorial you'll do the following:

- Identify and explore animations in the Unity Editor.
- Add animations for your selected accessories.
- Build and test your updated app.

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. Overview

Q&A (0)

Animations bring a game or software experience to life. For this project, we’ve created animations for all of the accessory options available to you.

In this tutorial, you’ll do the following:

- Identify and explore animations in the Unity Editor.
- Add animations for your selected accessories.
- Build and test your animated accessories in your app.

**Important:** In this tutorial, you'll add existing animations — you won’t learn how to animate objects yourself. If you want to learn more about animating in Unity, try [**Creative Core: Animation**](https://learn.unity.com/project/creative-core-animation)!

ステップを完了としてマーク

## 2. Explore animations

Q&A (0)

There are two key things that you need to know about animations in Unity: Animation Clips and Animation Controllers.

**Animation Clips** are [animation data that can be used for animated characters or simple animations](https://docs.unity.cn/Manual/Glossary.html#AnimationClip). They are basic units of motion, such as one specific instance of a walk, run, or idle (not doing anything) animation for a character.

An **Animator Controller** [controls how Animation Clips are played](https://docs.unity.cn/Manual/class-AnimatorController.html). You can use an Animator Controller to arrange and maintain a set of Animation Clips and associated Animation Transitions for a character or object. Animation Controllers can be simple or they can be very complex. You can read more about [Animator Controllers](https://docs.unity.cn/Manual/class-AnimatorController.html) in the Unity Manual to learn more.

In the **Project** window, go to **Assets**>**_BasicFaceFilter**>**Animations** and examine the contents of the folder.

[Image: image]

Assets with the triangular icon are Animation Clips. Assets with an icon of two connected boxes are their related Animator Controllers.

ステップを完了としてマーク

## 3. Attach animations to the AR Default Face

Q&A (0)

To attach the animations related to the accessory (or accessories) you have chosen for your app to the **AR Default Face** prefab:

**1.**  In the **Project** window, navigate to **Assets**> **_BasicFaceFilter**>**Prefabs**and open the **AR Default Face**prefab.

**2.**  In the **Hierarchy**window, identify the accessory that you wish to animate and select the arrow to the right of the GameObject name to open the prefab.

[Image: image]

**3.**  In the **Inspector**window, find the Animator component for the accessory. The **Controller** property will not have an Animator Controller assigned yet.

**4.**  Use the **Object Picker** (**⊙**) for the Controller property to select the appropriate Animator Controller.

For example, the **Props_HiHat** GameObject has a corresponding Props_HiHat Animator Controller.

[Image: image]

**5.**  Select the left-facing arrow next to the prefab name in the **Hierarchy** window to exit prefab editing mode for the accessory. Repeat to exit prefab editing mode for the **AR Default Face**.

ステップを完了としてマーク

## 4. Build and test

Q&A (0)

When you build the application to test it, the accessory prop that you have added should now play its animations when a face is detected.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

Follow these instructions to build and test your app:

**1.**  Save the scene.

**2.**  Open the **Build Settings** window (**File** > **Build Settings**).

**3.**  Make sure that your device is plugged in and then select **Build and Run**to build the app on your device.

**4.** The application will open automatically on your device.

When a face is detected, the application should display everything you have added so far and the animations for your accessory should play.

**Note:** For a reminder of how to build to your device, you can review the process for [Android](https://learn.unity.com/tutorial/66edba36edbc2a0512b946f6?uv=2022.3#66edba36edbc2a0512b94703) or[iOS](https://learn.unity.com/tutorial/66edba36edbc2a0512b946f6?uv=2022.3#66edba36edbc2a0512b946f9).

ステップを完了としてマーク

## 5. More things to try

Q&A (0)

If you want to further develop your skills, explore new concepts, or improve your project, check out some of the optional activities below. Each one is tagged as either Easy, Medium, or Difficult, so you can choose the level of challenge.

These activities are entirely optional, so if you’re not interested, no problem — just skip this step. We do recommend attempting at least one of them in order to get the most out of this learning experience. Good luck!

#### Easy: Edit existing animation keyframes

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

Open the animations in the project and adjust the keyframes, or add your own. The Unity Manual has [information about keyframes](https://docs.unity3d.com/Manual/animeditor-AnimatingAGameObject.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950543281) and is a great resource to check out!

#### Medium: Add additional properties to the animation

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

In addition to animating the position of an object, you can also animate additional properties. Try this exercise:

- Make sure the animation window is open.
- Open one of the included props and select **Add Property** in the animation window.
- Find the Mesh Renderer.Material.Base Color property and use keyframe animations to change the color of the object over the animation.
- Select **Record** to add your changes to the animation.

#### Difficult: Create new animations

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

You probably have a lot of ideas about how you could animate the included props or models you have imported from the Asset Store. Now it’s time to turn those ideas into an animated reality! Select one or more of the props and create your own animations that bring those props to life in your filter.

Here are some ways you could animate the included props to get you started (in case you need some ideas):

- Make the Props_CrazyEyes go cross eyed.
- Make the Props_CatNose twitch.
- Make the Props_GoblinEars rotate like they are hearing something.

You can learn how to create your own animations in Unity in [**Creative Core: Animation**](https://learn.unity.com/project/creative-core-animation)!

ステップを完了としてマーク

## 6. Next steps

Q&A (0)

Congratulations, you now have a face filter with animated accessories! In the next tutorial, you’ll add post-processing effects to your application to polish the visuals.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
