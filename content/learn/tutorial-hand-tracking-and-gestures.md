[Image: image]

# Hand tracking and gestures

Tutorial

intermediate

+10XP

30 mins

5

Unity Technologies

[Image: Hand tracking and gestures ]Summary

[Hand tracking](https://developer-docs.magicleap.cloud/docs/guides/unity/input/hand-tracking/unity-hand-tracking-overview) is a feature that allows users to interact with applications without the need for controllers or other input devices. The Magic Leap 2 uses a combination of cameras and sensors to detect and track hand movements in real time, which allows for accurate interactions with digital objects. A selection of common gestures, such as pointing, grabbing, and pinching can be recognized by the headset and can be used in applications.

In this tutorial, you will learn how to implement hand tracking and gesture recognition in a Magic Leap 2 application, including an example where hand tracking is used to manipulate meshes in a 3D model viewer.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

#### What is hand tracking?

Hand tracking is an emerging aspect of XR that is often showcased in popular media. **Hand tracking** enables users to engage with digital content in a more intuitive and familiar manner, replicating forms of real-world interactions.

When hand tracking is enabled on the Magic Leap 2, the headset uses its cameras and other sensors to track the user’s hand position and movement. This tracking is extremely detailed and is capable of recognizing and tracking individual fingers and their angles.

[Image: image]

#### What is gesture recognition?

With precise tracking of the user’s hands, the Magic Leap 2 can recognize key gestures, which can then be used to trigger events within an application. You can check out some of the examples of types of gestures and poses that the Magic Leap 2 detects for yourself using the [Gesture Classification example scene](https://developer-docs.magicleap.cloud/docs/guides/unity/sdk-example-scenes/sdk-gesture-classification-scene), which is also shown in the video below.

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

#### Why include hand tracking and gesture recognition?

For users who are not used to using controllers or find other input methods such as keyboards challenging, hand tracking provides a more natural and user-friendly option. Additionally, not relying on controllers can be particularly advantageous for individuals using the Magic Leap 2 in work environments, as it allows them to keep their hands free for other tasks when they are not directly interacting with the application.

[Image: image]

#### What you’ll learn in this tutorial

In this tutorial, you’ll learn how to configure a project to use hand tracking and gesture recognition to interact with digital content in your application.

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

You’ll also review an example where hand tracking and gesture recognition are used alongside other features like marker tracking, segmented dimming, and spatial audio within a 3D model viewer prototype.

Mark step as complete

## 2. Before you begin

Q&A (0)

Before you begin working through this tutorial, you should make sure your development environment is set up for Magic Leap 2 development and download the example prototype project.

#### Set up your development environment

If this is your first time developing in Unity for the Magic Leap 2, make sure you have your development environment configured properly using one of the following guided options:

- Follow the [Unity: Getting started guide](https://developer-docs.magicleap.cloud/docs/guides/unity/getting-started/unity-getting-started) from the Magic Leap 2 developer documentation.
- Follow the [Magic Leap 2 in-Editor tutorial project](https://learn.unity.com/tutorial/get-started-creating-for-the-magic-leap-2) in the Unity Editor.

#### Download and open the example prototype

This tutorial will guide you through the implementation of this feature in your own application using an example prototype. If you want to explore the code of the prototype yourself, download the [accompanying prototype project](https://drive.google.com/file/d/1_a640MnXHYaiUq8ycaCuWo7q3Lo_6u0T/view?usp=share_link) and open it in Unity.

Mark step as complete

## 3. Basic hand tracking setup

Q&A (0)

#### Add an XR Rig to the Unity scene

Just like with any Magic Leap 2 project, the first step is to add the **XR Rig** prefab to the scene from the **Magic Leap SDK** package (**Packages**>**Magic Leap SDK**>**Runtime**>**Tools**>**Prefabs**) and then delete the**Main Camera** GameObject.

[Image: image]

#### Enable the Hand Tracking permission

In order to scan markers in your application, you must have **HAND_TRACKING**enabled in your project’s manifest settings. To do this, navigate to **Edit** > **Project Settings** > **Magic Leap** > **Manifest Settings**. You might also want to include a check in your code to make sure that this permission is granted at the start of the application.

#### Download and import the Hand Visualizer and Hand Controller scripts

The scripts that control and visualize users’  hands are complex and too long to embed here, so we recommend that you open the [example prototype](https://drive.google.com/file/d/1_a640MnXHYaiUq8ycaCuWo7q3Lo_6u0T/view?usp=share_link), locate **HandVisualizer.cs** and **XRIHandController.cs**, and import them into your current project. You’ll need both of these scripts in the next step.

[Image: image]

The **HandVisualizer** script is taken from Magic Leap’s [hand tracking sample scene](https://developer-docs.magicleap.cloud/docs/guides/unity/sdk-example-scenes/sdk-hand-tracking-scene). This script helps visualize the hand by attaching colored spheres to each of the hand’s keypoints.

The **HandController** script inherits from Unity’s XR Interaction Toolkit (XRI) [ActionBasedController](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.3/api/UnityEngine.XR.Interaction.Toolkit.ActionBasedController.html) class. This script overrides the tracking information to use the tracked hands instead of the default controller.

#### Set up the hand tracking GameObjects in the Hierarchy

Since our plan is to use the user’s left and right hands as controllers in the scene that can interact with objects, we will use a lot of the same components provided by XRI’s default left and right hand controllers.

To set up the required GameObject structure in your Hierarchy, follow these instructions:

**1.**Create a new, empty GameObject, name it “Hand Tracking”, and make it a child object of the **Session Origin**.

**2.** Duplicate the default **LeftHand Controller** and **RightHand Controller** GameObjects, then paste them as child GameObjects of the new **Hand Tracking** GameObject.

**3.**Rename the new GameObjects appropriately to “LeftHand” and “RightHand” and set them as active.

[Image: image]

#### Configure the hand tracking script components

To be able to track and visualize your hands, you need to replace the default XR Controller script with the custom HandController subclass, and add the Hand Visualizer script.

To add the required scripts structure in your Hierarchy, follow these instructions:

**1.**Remove the XR Controller components from the **LeftHand** and **RightHand** GameObjects.

**2.**Add the HandController and HandVisualizer script components to the **LeftHand** and **RightHand** GameObjects.

**3.**For the **LeftHand** and **RightHand**GameObjects, make sure that the **Hand Node** property and the**Hand Type** property are assigned appropriately to left and right, respectively.

[Image: image]

Take a moment to read through each of the custom scripts to see how they work.

#### Add grabbable objects to test hand tracking

Add a simple XR Grab Interactable object into your scene and test your hand tracking. There should now be rays coming from each of your hands. When you perform a pinching gesture with your thumb and index finger, you should be able to grab the object as if you pulled the trigger on the Magic Leap 2 controller. In the example below, there is a grabbable cube with a [socket interactor](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.3/manual/xr-socket-interactor.html) on top of it. For demonstration purposes, the left hand’s Ray Interactor component has the **Force Grab** property enabled, which causes the object to snap to the hand’s location, but this property is disabled on the right hand.

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

#### Experiment with other features

Try experimenting with some other of Magic Leap’s [hand gestures](https://developer-docs.magicleap.cloud/docs/guides/unity/input/gesture-classification/unity-gesture-classification-overview), combined with other XRI features. In the example below, for example, the XRIHandController script references **PostureType.Grasp** instead of **PostureType.Pinch**, and [Ray Interactors](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.3/manual/xr-ray-interactor.html?q=ray%20interact) have been replaced by [Direct Interactors](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.3/manual/xr-direct-interactor.html?q=xr%20direct).

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

Mark step as complete

## 4. Hand tracking in context

Q&A (0)

Now that you know how to set up hand tracking in your own projects, let’s check out an example of how this feature can be combined with other interactive functionality.

In this example, the user is using a 3D model viewer. Once the accompanying marker has been scanned, a 3D model appears. The user is then able to pick up and interact with the model with their hands.

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

Mark step as complete

## 5. Next steps and additional resources

Q&A (0)

In this tutorial, you learned about working with hand tracking and gesture recognition on the Magic Leap 2. You can learn more about them with the following resources:

- Magic Leap’s [hand tracking example scene](https://developer-docs.magicleap.cloud/docs/guides/unity/sdk-example-scenes/sdk-hand-tracking-scene)from the [samples project](https://github.com/magicleap/MagicLeapUnityExamples)
- Magic Leap’s [Hand Tracking guide](https://developer-docs.magicleap.cloud/docs/guides/unity/input/hand-tracking/unity-hand-tracking-api)
- Magic Leap’s documentation on the [MLHandTracking class](https://developer-docs.magicleap.cloud/docs/unity-api/api/Files/Extensions/MLHandTracking.cs)
- Magic Leap’s [gesture classification example scene](https://developer-docs.magicleap.cloud/docs/guides/unity/sdk-example-scenes/sdk-gesture-classification-scene)from the [samples project](https://github.com/magicleap/MagicLeapUnityExamples)
- Magic Leap’s [Gesture Classification guide](https://developer-docs.magicleap.cloud/docs/guides/unity/input/gesture-classification/unity-gesture-classification-api)
- Magic Leap’s documentation on the [MLGestureClassification class](https://developer-docs.magicleap.cloud/docs/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/MLGestureClassification/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.MLGestureClassification)

You may also want to learn more about out the other features highlighted in the example prototype:

- [Marker tracking](https://learn.unity.com/tutorial/marker-tracking?&courseId=643419cbedbc2a5f42275126)
- [Segmented dimming](https://learn.unity.com/tutorial/segmented-dimming?&courseId=643419cbedbc2a5f42275126)
- [Spatial audio](https://learn.unity.com/tutorial/spatial-audio?&courseId=643419cbedbc2a5f42275126)

Otherwise, feel free to go back to the [overview page](https://learn.unity.com/course/magic-leap-2-development), where you can explore other tutorials and resources.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
