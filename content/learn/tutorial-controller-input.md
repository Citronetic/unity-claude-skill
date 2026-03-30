[Image: image]

# Controller input

Tutorial

intermediate

+10XP

30 mins

3

(13)

Unity Technologies

[Image: Controller input]Summary

The Magic Leap 2 comes with a single handheld controller. The controller offers six degrees of freedom (6DoF) tracking, haptic feedback, and flexible input methods, allowing for dynamic interactions with virtual objects and environments.

In this tutorial, you will learn how to access and respond to input from the Magic Leap 2 controller, including an example of a typical use case where the user can toggle and control [global dimming](https://developer-docs.magicleap.cloud/docs/guides/unity/display/unity-global-dimming).

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

The [Magic Leap 2 controller](https://www.magicleap.care/hc/en-us/articles/4424698871565-Controller-Overview) has a touchpad, a bumper, a trigger, a menu button, and a home button.

[Image: image]

#### What input can the controller receive?

Although the Home Button is reserved for exiting an application, all other controller inputs can be accessed during runtime to perform whatever actions you want. If you read through the [input table](https://developer-docs.magicleap.cloud/docs/guides/unity/input/controller/unity-controller-api-overview), you’ll see all of the available inputs and notice that you are not limited to simple button presses: you can access the position and rotation of the controller itself, the precise trigger value between 0-1, the position of multiple touches on the touchpad with the force applied, and more.

If you explore the inputs in the **Controller** window of the [Application Simulator](https://developer-docs.magicleap.cloud/docs/guides/developer-tools/app-sim/app-sim), you will also see that the touchpad can track specific [gestures](https://developer-docs.magicleap.cloud/docs/guides/unity/input/controller/controller-gestures) like swipes, taps, and scrolls, including their respective states and directions.

[Image: image]

#### What you’ll learn in this tutorial

In this tutorial, you will learn how to access and respond to input from the Magic Leap 2 controller.  You’ll also see an example of a typical use case where the user can toggle and control global dimming and video playback with the bumper, menu button, and touchpad.

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

## 3. Basic input setup

Q&A (0)

#### Add an XR Rig

Just like with any Magic Leap 2 project, the first step is adding the **XR Rig** prefab to the scene from the **Magic Leap SDK** package (**Packages**>**Magic Leap SDK**>**Runtime**>**Tools**>**Prefabs**).

You will notice that the **XR Rig** includes an Input Action Manager component with a **MagicLeapInputs** action asset already assigned to it.

[Image: image]

#### Inspect the Magic Leap input actions

From the Inspector window, double-click the **MagicLeapInputs (Input Action Asset)** to open it in the [Action Asset editor](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.5/manual/Actions.html#creating-actions-using-the-action-editor?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954032741). From the Action Asset Editor, you can explore all of the inputs from the controller, as well as from the head-mounted display (HMD), the user’s eyes, and the user’s left and right hands in this editor.

[Image: image]

#### Enable the Magic Leap inputs in a script

To get access to the inputs through a script, you need to create a new script, enable the Magic Leap inputs, and initialize a new [Controller Actions](https://developer-docs.magicleap.cloud/docs/unity-api/api/Classes/MagicLeapInputs/MagicLeapInputs.ControllerActions) object.

This process is explained in detail in the Magic Leap 2 [controller input documentation](https://developer-docs.magicleap.cloud/docs/guides/unity/input/controller/unity-controller-api-overview).

```csharp
public class ControllerInput : MonoBehaviour
{
    private MagicLeapInputs mlInputs;
    private MagicLeapInputs.ControllerActions controllerActions;

    void Start()
    {
        mlInputs = new MagicLeapInputs();
        mlInputs.Enable();
        controllerActions = new MagicLeapInputs.ControllerActions(mlInputs);
    }
}
```

Mark step as complete

## 4. Respond to controller input events

Q&A (0)

The main purpose of getting access to the Magic Leap controller inputs is, of course, to respond in some way when the user interacts with the controller.

You can read about these events in the Magic Leap 2 [Controller Input Events documentation](https://developer-docs.magicleap.cloud/docs/guides/unity/input/controller/controller-input-events), but all you need to do is subscribe to whichever controller events you’re targeting, then call those events and perform some action.

The example below subscribes to the bumper and touchpad events. When the bumper is pressed, a new cube is created at the controller’s location. The touchpad’s y-position sets the scale of the most recently created cube. If you want to try this for yourself, remember to assign your GameObjects in the Inspector window.

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class ControllerInput : MonoBehaviour
{
    private MagicLeapInputs magicLeapInputs;
    private MagicLeapInputs.ControllerActions controllerActions;

    public GameObject newCube;
    public Transform controllerTransform;
    private GameObject currentCube;

    private void Start()
    {
        magicLeapInputs = new MagicLeapInputs();
        magicLeapInputs.Enable();
        controllerActions = new MagicLeapInputs.ControllerActions(magicLeapInputs);

        // subscribe to the controller events
        controllerActions.Bumper.performed += Bumper_performed;
        controllerActions.TouchpadPosition.performed += TouchpadPositionOnperformed;
    }

    // when bumper is pressed, instantiate a new cube
    private void Bumper_performed(InputAction.CallbackContext obj)
    {
        currentCube = Instantiate(newCube, controllerTransform.position, controllerTransform.rotation);
    }

    // when the touchpad is touched, set the local scale of the current cube
    private void TouchpadPositionOnperformed(InputAction.CallbackContext obj)
    {
        var touchPosition = controllerActions.TouchpadPosition.ReadValue<Vector2>();
        var touchValue = Mathf.Clamp((touchPosition.y + 1) / (1.8f), 0, 1);
        currentCube.transform.localScale = new Vector3(touchValue, touchValue, touchValue);

    }

}
```

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

Mark step as complete

## 5. Controller input in context

Q&A (0)

Now that you know how to detect and respond to user input, let’s check out an example of how this feature can be combined with other interactive functionality.

Following the example below is not required in order to understand controller input, but doing so will be helpful to better appreciate how controller input can be integrated in real use cases.

In this example, the bumper is used to play and pause a video in a [media player](https://developer-docs.magicleap.cloud/docs/guides/unity/sdk-example-scenes/sdk-media-player-scene), the menu button toggles [Global Dimming](https://developer-docs.magicleap.cloud/docs/guides/features/dimmer-feature), and the y-value on the touchpad dynamically controls the dimming value.

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

To learn how to implement this functionality yourself, you can review all of the code for this demo in the [example prototype project](https://drive.google.com/file/d/1_a640MnXHYaiUq8ycaCuWo7q3Lo_6u0T/view?usp=share_link).

Mark step as complete

## 6. Next steps and additional resources

Q&A (0)

In this tutorial, you learned about controller input on the Magic Leap 2. You can learn more about controller input with the following resources:

- Magic Leap’s [controller example scene](https://developer-docs.magicleap.cloud/docs/guides/unity/sdk-example-scenes/sdk-controller-scene) from the [samples project](https://github.com/magicleap/MagicLeapUnityExamples)
- Magic Leap’s [guide on controller input](https://developer-docs.magicleap.cloud/docs/guides/unity/input/controller/unity-controller-overview)
- Magic Leap’s [scripting documentation on input](https://developer-docs.magicleap.cloud/docs/api-ref/api/Modules/group___input)

You may also want to learn more about out the other features highlighted in the example prototype:

- [Media player](https://learn.unity.com/tutorial/media-player?&courseId=643419cbedbc2a5f42275126)
- [Plane detection](https://learn.unity.com/tutorial/magic-leap-2-feature-highlight-meshing?&courseId=643419cbedbc2a5f42275126#)
- [Voice commands](https://learn.unity.com/tutorial/voice-intents?&courseId=643419cbedbc2a5f42275126)
- [Global dimming](https://learn.unity.com/tutorial/global-dimming?courseId=643419cbedbc2a5f42275126)

Otherwise, feel free to go back to the [overview page](https://learn.unity.com/course/magic-leap-2-development), where you can explore other tutorials and resources.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
