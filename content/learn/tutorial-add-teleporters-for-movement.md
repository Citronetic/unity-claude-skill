[Image: image]

# Add teleporters for movement

Tutorial

Beginner

+10XP

20 mins

32

(901)

Unity Technologies

[Image: Add teleporters for movement]Summary

In this tutorial, you’ll:

- Create your own Prototype Room Scene
- Create a new teleporter
- Configure the teleporter
- Test your changes in VR

Languages available:

EnglishEnglish日本語한국어简体中文English

## 1. Overview

Q&A (0)

Now that you’ve explored the example Prototype Room, you’re ready to work on your own VR experience. In this tutorial, you’ll:

- Create your own Prototype Room Scene
- Create a new teleporter
- Configure the teleporter
- Test your changes in VR

Mark step as complete

## 2. Before you begin

Q&A (0)

In this tutorial, you’ll use the VR Beginner Unity Project and your VR hardware. Before you begin:

**1.**  Open the VR Beginner Unity Project.

**2.** Check that your hardware is ready. If you’re using Oculus Link with the Oculus Quest, enable and connect this now through the Oculus app.

Mark step as complete

## 3. Create a new Prototype Room Scene

Q&A (0)

This Unity Project includes a simple Prototype Room Scene template, so you don’t need to begin with a completely blank Scene.

To create a new Scene using this template:

**1.**  In the top menu, go to **VR Kit** > **Create new Prototype Scene**.

[Image: image]

**2.**  Choose a name for the new Scene, then select **Save**. By default, the Scene will be saved in **Assets** > **MyScenes**.

**3.**  Your new Scene will automatically load and open in the Scene view when you have saved it.

[Image: image]Mark step as complete

## 4. Create a new teleporter

Q&A (0)

Now that you have your own Prototype Room, you can begin to create a custom VR experience. The first step is to create a teleporter, so the player can move closer to one of the two simple box tables. This will make it easier for them to pick up interactable objects in the Scene.

To create a new TeleporterBase for your Scene:

**1.**  In the Project window, navigate to **Assets** >**VR Beginner**>**Prefabs**>**Tutorial**.

**2.**  Select the **TeleporterBase**Prefab.

[Image: image]

**3.**  Drag the **TeleporterBase** Prefab from the Project window into the Scene view.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:10Loaded: 0%0:00Remaining Time -0:101xPlayback Rate

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

**4.**  In the toolbar, select the **Move Tool** and position**TeleporterBase**next to one of the two simple box tables.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:13Loaded: 0%0:00Remaining Time -0:131xPlayback Rate

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

**5.**Press **Ctrl**+ **S** to save your changes.

Mark step as complete

## 5. Configure your new teleporter

Q&A (0)

To configure your new teleporter:

**1.**  In the Hierarchy, select the arrow to the left of the **TeleporterBase** GameObject to expand the view of its child GameObjects. Make sure that **TeleporterBase** is still selected.

[Image: image]

**2.**  In the Inspector, select the **Add Component**button.

**3.**  Search for “Teleportation Anchor” and select the component from the list.

[Image: image]

**4.**  At the top of the Interactable Events section of the component, find the **On First Hover Enter** list. Select the **Add** button (**+**).

[Image: image]

**5.** Drag the **TeleporterBeam** child GameObject of TeleporterBase from the Hierarchy to the **None (Object)** field in the **On First Hover Enter** list entry.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

**6.**  In the Function field, select the dropdown menu arrow. Go to **TeleporterAnim** > **StartHighlight**. This is a custom script which provides a fade-in and fade-out effect.

[Image: image]

**7.**  In the Interactable Events section of the **Teleportation Anchor**component, find the **On Last Hover Exit** list. Select the **+** button (Add to list).

**8.**  As you did before, select the **TeleporterBeam** GameObject in the Hierarchy and drag it to the **None (Object)** field in the new list entry.

**9.**  In the Function field, select the dropdown menu arrow. Go to **TeleporterAnim** > **StopHighlight**. This will stop the special effect after the teleporter is used.

[Image: image]

**10.**Press **Ctrl**+ **S** to save your changes.

Mark step as complete

## 6. Test your new teleporter

Q&A (0)

To check that the teleporter works properly:

**1.** If you have an Oculus Quest without Oculus Link, [create an Android Build](https://learn.unity.com/tutorial/explore-the-prototype-room?projectId=5e4abf44edbc2a09bf60dceb#5e4e8d67edbc2a1abc3bbbf9) to test your changes. For all other devices, press **Play** on the toolbar to enter Play Mode. Put on your headset.

**2.** Move the directional input on your controller forward to activate the Teleporter Beam.

**3.** Use your controller to touch the Teleporter Base with the Teleporter Beam.

**4.** Release the directional input to move to the new location.

**5.** If you’re testing from Unity Editor, press **Play**on the toolbar again to exit Play Mode when you’ve finished testing. Remember, changes made while Unity Editor is in Play Mode can’t be saved.

Mark step as complete

## 7. Summary

Q&A (0)

In this tutorial, you created, configured and tested teleporters for your VR experience. Next, you’ll add and configure your choice of object.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
