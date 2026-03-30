[Image: image]

# 2.2 - Activation Events

Tutorial

Beginner

+10XP

90 mins

11

(812)

Unity Technologies

[Image: 2.2 - Activation Events]SummarySkills

In this lesson, you will learn how to add unique functionality to an object when the user interacts with it in a certain way. By the end of this lesson, users will be able to pick up a remote and press a button on a controller to turn on a TV.

This lesson is part of the [Create with VR course](https://learn.unity.com/course/create-with-vr).

Resources

- [Polaroid-Scripts.zip](https://unity-connect-prd.storage.googleapis.com/20210416/489413a8-b8f1-4cb5-9490-c7b0cac395f8/Polaroid-Scripts.zip?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931415879)

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

## 1. Add a grabbable remote control object

Q&A (0)

Up to this point, you have only been able to pick up and put down objects. Now, you will add an object that you can *do*something with - or “activate” - once it’s in your hand.

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

**1.  Add a remote control to your scene:**

- Go to **Course Library**> **Prefabs**> **Objects** > **Electronics,**
- Drag the “Remote” prefab object onto a surface in your scene.

**2.  Allow the object to be picked up:**

- Add a Rigidbody component with Collision Detection set to Continuous Dynamic so it doesn’t fall through the floor.
- Add an XR Grab Interactable component.

**3.  Position the remote correctly in the player’s hand when it is picked up:**

- In the **Remote**object, create a new, empty “Attach” child object.
- Position and orient the **Attach** object appropriately.
- Assign the **Attach**object to the **Attach Transform** property in the XR Grab Interactable component.

[Image: image]

You should now be able to pick up the remote in a way that looks natural.

단계를 완료로 표시

## 2. Play a sound when you activate the remote

Q&A (0)

Now you will make the remote make a click sound when you are holding it and press the trigger.

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

**1.  Allow the remote to emit sound:**

- On the Remote object, add an AudioSource component
- In the AudioSource component, slide the **Spatial Blend** property all the way to full **3D**(“1”) to allow for 3D audio.

**2.  Give the remote the ability to play a sound:**

- Add a Play Quick Sound component to the remote.
- For the **Sound** property, assign an audio clip you want from the **Course Library** > **Audio**folder.

**3.  Locate the remote’s “Activated” event:**

- At the bottom of the remote’s XR Grab Interactable component, expand the **Interactable Events**fold-out to see all of the event options.
- Locate the **Activated** event

**4.  Play a sound when the remote is activated:**

- In the **Activated** event, click the **+** to add a new action.
- Drag and drop the **Remote**object to the empty Object slot in order to access its components.
- Click the **No Function** drop-down to select a function, then select **Play Quick Sound**>**Play ().**

[Image: image]

**Note**: In the updated version of the component, **Activate** is now called **On Activate.**

With the remote in your hand, you should now be able to press the activate button, the controller trigger, and hear a sound.

단계를 완료로 표시

## 3. Change the remote’s indicator light color when activated

Q&A (0)

To provide additional feedback that the remote has been pressed, you can also turn the indicator light red when the remote is activated.

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

**1.  Add the capability for the indicator light to turn red:**

- In the Hierarchy, expand the Remote object and select the **Indicator_Light** child object.
- Add a Change Material component.
- Assign a Red material to the “**Other Material**” property.

**2.  Change the material color to red when the trigger is pressed:**

- On the **Remote** parent object, at the bottom of the XR Grab Interactable component, expand the **Interactable Events**fold-out to see all of the event options.
- In the **Activated** event, click the **+** to add a new function.
- Assign the **Indicator Light** child object to the Object property.
- Click the **No Function** drop-down to select a new function, then click **Change Material**>**SetOtherMaterial ()**function**.**

**3.  Make the material revert when the activate button is released:**

- In the **Deactivated** event, click the **+** to add a new action.
- Assign the Indicator_Light object, then select the **Change Material**>**SetOriginalMaterial ()**function.

[Image: image]

**Note**: In the updated version of the component, **Deactivate** is now called **On Deactivate.**

When you activate the remote, the indicator light should turn red and then revert to its original color when the activate button is released.

단계를 완료로 표시

## 4. Make the TV play video

Q&A (0)

Before you get the button set up to turn the TV on, you should make sure the TV in the scene can successfully play video.

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

**1.  Allow the tv to emit 3D audio:**

- In the Hierarchy, select the **Screen** child object of the Television.
- Add an Audio Source component.
- Drag the **Spatial Blend** property to full 3D (1.0) to enable spatial audio.

**2.  Allow the TV to play video:**

- On the Screen child object, add a Video Player component.
- Change the **Material Property**to **_BaseMap** (instead of _MainTex) to project the video to its material rather than its texture.  **Note**: You may have to disable **Auto-Select Property** before you can change the **Material Property** as shown in the video.

[Image: image]

**3.  Add additional video control functionality:**

- On the Screen child object, add a Play Video component.
- Select the **Play At Start**check box to play the video automatically.

**4.  Select the video to play on the screen:**

- In the Play Video component, expand the **Video Clips** fold-out.
- Set the list **Size** property to 1 and press Enter to reveal an empty Video Clip slot.
- Assign one of the videos from the **Course Library** > **Videos** to the Video Clip property.

[Image: image]

Now when you run your application, the video should play automatically on the TV Screen with 3D audio.

단계를 완료로 표시

## 5. Control the TV with the remote

Q&A (0)

Now that the TV is working, you need to be able to control it with the remote.

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

**1.  Stop the video from playing automatically:**

- In the Play Video component, clear the **Play At Start** check box.

**2.  Locate the Remote’s Interaction events:**

- Select the **Remote** GameObject.
- In the XR Grab Interactable component, expand the **Interactable Events**fold-out to see all of the event options.

**3.  Trigger the TV when the remote is activated:**

- In the **Activated** event, click the **+** to add a new action.
- Assign the **Screen** object to the empty Object property, since it has the Play Video script.
- Click the **No Function** drop-down and select the **PlayVideo**>**TogglePlayPause ()**function, or the **PlayVideo**>**TogglePlayStop ()**function**,**depending on whether you want it to pause or stop when pressed a second time.

[Image: image]

When you activate the remote, the video on the TV should alternate between playing and pausing or stopping.

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

- Grabbable remote
- Play sound action
- Change material action
- Play video action

**New Concepts and Skills:**

- Object activation
- Events & actions
- Scripts & functions

**Next Lesson:**

- Direct and Ray Interactors

단계를 완료로 표시선택 단계

## 7. Extension Activities

Q&A (0)

If you want to further develop your skills, explore new concepts, and improve your project, check out some of the optional extension activities below.

Each one is tagged as [Easy], [Medium], [Difficult], or [Expert] and will also include a [Requires Programming] tag if some coding is required.

**1.  Add a phone that plays video [Easy]**

Make a phone that plays a video when you press the trigger:

- You can find phone prefabs from the Course Library > Prefabs > Objects > Electronics folder.
- You will need to make a new separate “screen” child object with a material similar to the way the TV screen is set up.
- **Bonus:**Try making the phone cycle through multiple videos using the Play Video > NextClip () function.

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

**2.  Add a functioning flashlight [Medium]**

Add a working flashlight into the scene that toggles on and off when you press the trigger, including making a clicking sound to provide audio feedback:

- You will need to add a child SpotLight object to the flashlight.
- Try using the ToggleLight > Flip () function to flip the light on and off.

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

**3.  Add a functional lighter and candle that can be lit with it [Difficult]**

Add a lighter to the scene that produces a flame when you activate it. If the flame gets close to a candle, that candle can be lit.

- You can use the Particle_Flame Prefab
- On the candle, use a trigger collider and the OnTrigger script to detect when an object with a particular tag has entered the trigger
- **Bonus:** Make the flame go out when it is shaken using the OnVelocity script

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

**4.  Add a dart gun or stapler projectile [Expert]**

Add a dart gun that shoots darts or a stapler that shoots staples when you press the trigger:

- Locate the prefabs for the objects and projectiles in the Course Library > Prefabs > Objects > Launchers folders
- Use the LaunchProjectile script provided in the Course Library
- If you want, use the DestroyObject script provided in the Course Library to make the projectile disappear after a certain amount of time.
- **Bonus:** Make the stapler swing open with a hinge joint
- **Bonus**:  Add sounds for when the object is launched

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

**5.  Add a functioning polaroid camera  [Expert] [Requires Programming]**

Add a functioning polaroid camera that allows you to preview on a viewfinder screen and print a photo using the trigger:

- For the viewfinder screen, look at how the mirror is set up with a render texture.
- Look at the documentation for [Camera.Render()](https://docs.unity3d.com/ScriptReference/Camera.Render.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931415879).
- Don’t worry if the camera is currently rendering your rays for now - we’ll learn how to hide your rays in the next tutorial.
- If you want some help, download the example [Polaroid and Photo scripts](https://connect-prd-cdn.unity.com/20210416/489413a8-b8f1-4cb5-9490-c7b0cac395f8/Polaroid-Scripts.zip)

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
