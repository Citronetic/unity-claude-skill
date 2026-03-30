[Image: image]

# 2.1 - Audio and Haptics

Tutorial

Beginner

+10XP

90 mins

18

(897)

Unity Technologies

[Image: 2.1 - Audio and Haptics]SummarySkills

In this lesson, you will learn how to increase the immersion of your project through touch and audio stimuli. By the end of this lesson, the user will receive haptic and auditory feedback when they hover over or grab an object. There will also be 3D spatial ambient sound in the scene.

This lesson is part of the [Create with VR course](https://learn.unity.com/course/create-with-vr).

Languages available:

한국어EnglishEspañol한국어한국어

## 개요 비디오

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

## 1. Add haptic feedback on hover and select enter

Q&A (0)

You can add haptic on hover enter and select enter to provide physical feedback to the player’s hands.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**Note**: If you are using the OpenXR plug-in for development on devices like the HTC Vive or Valve index, this feature may not work.

**1.  Edit both controller objects at the same time:**

- In the Hierarchy, expand**XR Rig** > **Camera Offset.**
- Ctrl/Cmd+select both the **RightHand** **Controller**and **LeftHand Controller**so they are both selected**.**

**2.  Locate the haptic events:**

- At the bottom of the **Controller** objects’ XR Ray Interactor components, expand the **Haptic Events** fold-out.

**3.  Create subtle haptic feedback when the user hovers over an object:**

- Click the **On Hover Entered** check box to enable it.
- Set the **Intensity**to a low value (e.g. 0.1-0.5).
- Set the **Duration** to a very low value (e.g. 0.1 seconds).

**4.  Create more noticeable feedback when the user grabs an object:**

- Select the **On Select Entered** check box.
- Set the **Intensity** and **Duration** values to slightly higher values (e.g. 0.25 seconds).

[Image: image]

The controller should now vibrate subtly when you hover over an object and slightly more so when you select an object.

**Note**: In the updated version of the component there are additional options under the **Haptic Events**. The events mentioned in the video are all still available.

[Image: image]단계를 완료로 표시

## 2. Add audio feedback on either hover or select enter

Q&A (0)

Now that you have haptic feedback, you can enhance the User Experience (UX) with audio feedback.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**Note**: If you are using the OpenXR plug-in for development on devices like the HTC Vive or Valve index, this feature may not work.

**1.  Select the sound you want to use:**

- From the **Course Library** > **Audio** > **FX**, determine which subtle UI sound effect you want for the hover or select event.
- To preview the sound, you may need to drag up the Preview panel from the bottom of the Inspector window.

**2.  Apply this sound effect to both controllers:**

- From the Hierarchy, select both the RightHand Controller and LeftHand Controller objects.
- In the XR Ray Interactor component, expand the **Audio Events** fold-out.
- Click to enable either the **On Select Entered** or the **On Hover Entered** setting.
- and then assign your chosen sound effect.

[Image: image]

You should now hear a sound effect either when you hover over an object, or when you select an object.

**Note**: In the updated version of the component there are additional options under the **Haptic Events**. The events mentioned in the video are all still available.

[Image: image]단계를 완료로 표시

## 3. Add 3D audio from the fireplace

Q&A (0)

In addition to audio feedback on events, you can add 3D spatial audio into the scene emanating from the fireplace to increase immersion.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**1.  Give the fire a sound effect:**

- Add an Audio Source component to the particle object.
- For the **AudioClip** property, assign the SFX_Loop_Fire sound effect from the **Course Library**>**Audio**>**FX**folder.

**2.  Make the sound play automatically and loop:**

- In the Audio Source component, make sure both the **Play on Awake** and **Loop** settings are enabled.

**3.  Configure this component as a 3D sound:**

- Adjust the **Spatial Blend** property by dragging the slider all the way to the right **3D** setting (or by setting the slider to 1).

**4.  Edit the overall volume and volume roll-off of the fireplace:**

- Edit the **Volume** property.
- Expand the 3D Sound Settings fold-out, then adjust the **Min Distance**and **Max Distance**values**.**

[Image: image]

The fireplace should now make a crackling sound, which should change in volume and left/right balance depending on where you are located and oriented in the scene.

**Related resources:**

- [Audio Source Settings](https://docs.unity3d.com/Manual/class-AudioSource.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931408490)

단계를 완료로 표시

## 4. Add a Reverb Zone

Q&A (0)

To maintain a sense of presence in VR, it’s especially important to make sure audio behaves the way it would in the real world. This includes considering how sounds might reverberate around different kinds of rooms.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**1.  Add a new Audio Reverb Zone as a child of the Room object:**

- In the Hierarchy, right-click the **Room_[style]**object.
- Click **Audio** > **Audio Reverb Zone**.

**2.  Make sure the reverb zone encompasses your whole room:**

- In the Audio Reverb Zone component, make sure the **Min Distance** property is set to at least the width of your room (10).
- **Note:**To visualize the zone, you may need to turn on gizmos and zoom out.
In **Unity 2021 LTS**, the Gizmos button is represented by a sphere icon with dots on its vertices:

[Image: image]

**3.  Make your reverb zone match your room:**

- Use the **Reverb Presets** drop-down to experiment with different styles of reverb.
- Select a setting that matches your room (Room or Living Room).

[Image: image]

You should now have a reverb zone set up in your room to make the 3D sound even more realistic.

**Related resources:**

- [Audio Reverb Zones](https://docs.unity3d.com/Manual/class-AudioReverbZone.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931408490)

**Note:**In the video we mention you should select the word **Gizmo** to open the **Gizmo**settings. In Unity 2022.3, the Gizmos are represented by an icon instead of a word.

[Image: image]단계를 완료로 표시선택 단계

## 5. Experiment with spatializer plugins [optional]

Q&A (0)

In addition to Unity’s built-in 3D sound, which changes the volume in the left and right ears depending on player distance and orientation, there are additional spatializer plugins that you can install to make the sound even more realistic.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**1.  Download and import a plugin:**

- From the links below, download the relevant spatializer plugin for your platform.
- Import the package into your project.

**2.  Enable the plugin:**

- Click **Edit** > **Project Settings**.
- Select the **Audio** section from the left panel.
- Use the drop-down next to **Spatializer Plugin** to select your plugin.

**3.  Implement the plug-in on your fire particle:**

- Follow the instructions relevant to your device to implement spatialized audio.

[Image: image]

You should now have even more realistic sounding audio in your scene, taking into account the user’s Head Related Transfer Function (HRTF).

**Related resources:**

- [Unity Audio Spatializer](https://docs.unity3d.com/Manual/VRAudioSpatializer.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931408490)
- [Oculus Spatializer Download](https://developer.oculus.com/downloads/package/oculus-spatializer-unity/)

- [Oculus 3D Audio Spatialization Guide](https://developer.oculus.com/learn/audio-intro-spatialization/)
- [Oculus Spatializer Features](https://developer.oculus.com/documentation/unity/audio-spatializer-features/?locale=en_US)
- [Apply Spatialization in Unity](https://developer.oculus.com/documentation/unity/audio-osp-unity-spatialize/)
- [Microsoft HRTF Spatializer Download](https://docs.microsoft.com/en-us/windows/mixed-reality/develop/unity/spatial-sound-in-unity)
(supports UWP and PC running Windows 10)

단계를 완료로 표시

## 6. Recap

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

**New Functionality:**

- Haptic feedback on controllers
- Audio feedback on controllers
- Realistic 3D Audio from fireplace

**New Concepts & Skills:**

- Importance of haptics and audio for immersion
- 3d vs 2d audio
- Reverb zones
- Spatialized audio with head-related transfer function (HRTF)

**Technical Skills:**

- Audio & Haptic events

단계를 완료로 표시선택 단계

## 7. Extension Activities

Q&A (0)

If you want to further develop your skills, explore new concepts, and improve your project, check out some of the optional extension activities below.

Each one is tagged as [Easy], [Medium], [Difficult], or [Expert] and will also include a [Requires Programming] tag if some coding is required.

**1.  Add a speaker [Easy]**

Add a speaker to the room that plays music - or even a record player that actually rotates:

- Find a speaker from the Course Library > Prefabs > Objects > Speakers folder.
- Find music options from the **Course Library**>**Audio**>**Music**folder.
- Bonus - If you use the Record Player, you’ll need a simple script to rotate the platter the record spins on.

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

**2.  Add realistic bouncing sounds [Medium] [Requires programming]**

Add a bouncing sound for your ball so that you hear it bounce every time it hits the floor:

- You may want to download and import a new sound effect
- Add a 3d audio source to your ball just like you did for your fireplace.
- To make it play a sound when it hits the ground, you will probably want to use the OnCollisionEnter function and PlayOneShot method.
- Bonus - if you want to make the volume change based on the speed the ball is moving, try using rigidbody.velocity.magnitude.

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

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
