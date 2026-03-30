[Image: image]

# Add and configure an interactable object

Tutorial

Beginner

+10XP

20 mins

30

(735)

Unity Technologies

[Image: Add and configure an interactable object]Summary

In this tutorial, you’ll:

- Add your choice of objects to the Prototype Room
- Configure the object and add interactivity in VR
- Test the object in VR

Languages available:

EnglishEnglish日本語한국어简体中文English

## 1. Overview

Q&A (0)

In this tutorial, you’ll:

- Add your choice of objects to the Prototype Room
- Configure the object and add interactivity in VR
- Test the object in VR

Mark step as complete

## 2. Before you begin

Q&A (0)

In this tutorial, you’ll use the VR Beginner Unity Project and your VR hardware. Before you begin:

**1.**  Open the VR Beginner Unity Project.

**2.** Check that your hardware is ready. If you’re using Oculus Link with the Oculus Quest, enable and connect this now through the Oculus app.

Mark step as complete

## 3. Add a new object to the Scene

Q&A (0)

Now that you can teleport to one of the table boxes, it’s time to add an interactable object to the experience. We’ve created a few different object Prefabs; you can add any one of them in this tutorial.

To add a new interactable object to your Scene:

**1.**In the Project window, navigate to **Assets** > **VR Beginner** > **Prefabs** > **Tutorial** > **Objects**.

**2.** Select one of the available objects.

[Image: image]

**3.**  Drag your chosen object Prefab into the Scene view.

**4.**   In the toolbar, select the **Move Tool** and position the object on top of the box table near your teleporter.

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

**5.**  Press **Ctrl**+ **S** to save your changes.

Mark step as complete

## 4. Configure your object

Q&A (0)

To simplify the process of creating interactable objects, the objects in this Unity Project have custom scripts attached which control what happens when the object is activated. This is controlled using the XR Grab Interactable component.

To configure your new interactable object:

**1.**  In the Hierarchy, select the arrow to the left of the interactable object GameObject to expand the view of its child GameObjects. Make sure that parent GameObject is still selected.

[Image: image]

**2.**  In the Inspector, select the **Add Component**button.

**3.**  Search for “XR Grab Interactable” and select the component from the list.

[Image: image]

**4.**  At the bottom of the component, select the arrow to the left of the **Interactable Events**section header to expand it.

[Image: image]

**5.**  Find the **On Activate** list at the bottom of the component. Select the **Add** button (**+**).

**6.**  In the Hierarchy, drag the **ObjectActivator** child GameObject of the interactable object to the **None (Object)** field in your new list entry.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:11Loaded: 56.87%0:00Remaining Time -0:111xPlayback Rate

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

**7.**  In the Function field, select the dropdown menu arrow. Go to **ObjectActivator** > **Activated()**.

[Image: image]

This makes the interactable object work by triggering a specific event (for example, the bubble gun emitting bubbles) on the activation of the object.

**8.**Press **Ctrl**+ **S** to save your changes.

Mark step as complete

## 5. Test your interactable object

Q&A (0)

To check that the interactable object works properly:

**1.** In the Unity Editor toolbar, press **Play** to enter Play Mode or build for your Oculus Quest.

**2.**  Press forward on your controller to display the Teleporter Ray.

**3.** Use your controller to touch the Teleporter Base with the Ray.

**4.**  Release the thumbstick to transport yourself to the box where you placed your interactable object.

**5.** Reach for the interactable object and press and hold the grip button to pick it up.

**6.**Press the trigger button to activate the interactable object.

**7.** If you’re testing from Unity Editor, remember to select **Play** on toolbar again to exit Play Mode when you’ve finished.

Mark step as complete

## 6. Summary

Q&A (0)

In this tutorial, you have added, configured and tested an interactable object for your VR experience using the functionality of the XR Interaction Toolkit.

Next, you’ll enhance the experience by implementing sound effects and closed captions.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
