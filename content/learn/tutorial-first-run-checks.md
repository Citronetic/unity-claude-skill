[Image: image]

# VR First Run Checks (using VRTK)

Tutorial

Beginner

+10XP

30 mins

227

(51)

Unity Technologies

[Image: VR First Run Checks (using VRTK)]Summary

Set up Unity to enable the use of virtual reality.

Languages available:

EnglishEnglishEnglish

## 1. First Run: Setting up for VR

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

To begin a virtual reality project, we need to first setup Unity with a few specific settings.

1. Go to the Edit > Project Settings > Player
2. Under "XR Settings", ensure "Virtual Reality Supported" is checkmarked.
3. Under "Other Settings", make sure that in the Configuration section, the Scripting Runtime Version is set to ".NET 4.x Equivalent". Close the Project Settings
4. Under Window > Package Manager menu, select "OpenVR (Desktop)" and choose Install. Close the menu.

#### Test the Example Scene

To test out your setup, open the ExampleScene that comes with VRTK

In the Project window, go to Assets > VRTK > Samples > Farm > Scenes and open the ExampleScene.

[Image: image]

*Tip: To speed up load time when entering play mode, select "Maximize on Play" at the top of the Game window. This relieves Unity from having to render the Scene window and Game window simultaneously.*

Mark step as complete

## 2. No VR Hardware? No Problem. (Using the VR Simulated Camera Rig)

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

If you won't have VR hardware to test on, you can still build VR projects.

1. Enter play mode and click "Simulated CameraRig" to switch modes.
2. Press the 1 key on your keyboard, and you can now "drive" your character around using the WASD to steer, and the mouse to change your view.
3. To "drive" your left hand, press 2.
4. To "drive" your right hand, press 3.
5. To reset your character's position back to the starting point, press 4.
6. To reset your hands back to being in front of you, press 5.
7. To interact with objects like fence gates, the scarecrow, and pick up items, click and hold the left mouse button to simulate "grabbing" objects in the virtual world.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
