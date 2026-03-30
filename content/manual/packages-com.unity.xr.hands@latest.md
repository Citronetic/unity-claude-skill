# XR Hands

The XR Hands package defines an API that allows you to access hand tracking data from devices that support hand tracking. To access hand tracking data, you must also enable a provider plug-in that implements the XR hand tracking subsystem.

[Image: Hand tracking cover image]
*Hand-tracking*

The XR Hand package provides:

- [XRHandSubsystem](../api/UnityEngine.XR.Hands.XRHandSubsystem.html): defines the XR subsystem interface for hand  tracking data.

- [OpenXR HandTracking feature](openxr-features/handtracking.html): this feature implements the `XRHandSubsystem` for the OpenXR provider plug-in. This means that you can access hand data if you have both the OpenXR and this XR Hand packages installed in a project. Other provider plug-ins must be updated to implement the XRHandSubsystem before you can access hand data when using them.

- [Open XR Meta Aim Hand feature](openxr-features/metahandtrackingaim.html): this feature provides data from the XR_FB_hand_tracking_aim  extension to the OpenXR specification. This extension provides basic gesture recognition.

- [XRHand struct](../api/UnityEngine.XR.Hands.XRHand.html): the data for an individual tracked hand.

- [XRHandJoint struct](../api/UnityEngine.XR.Hands.XRHandJoint.html): the data for an individual joint or other tracked point of the hand.

- [MetaAimHand class](../api/UnityEngine.XR.Hands.MetaAimHand.html): the pinch and aim gesture data from the Meta Aim hand OpenXR feature.

Refer to [Hand tracking data](hand-data/xr-hand-tracking.html) and [Hand Gestures](gestures/custom-gestures.html) for more information about using hand data in an application.

##### Note

If you are implementing hand tracking for a Unity provider plug-in, see [Implement a provider](implement-a-provider.html). If you are intercepting hand tracking data to filter or process it before it's reported to the caller, see [Process joints](process-joints.html).

## Supporting packages

The XR Hands package defines the API for hand tracking, but doesn't implement the feature itself. To use hand tracking on a target platform, you also need a separate *provider plug-in* package for that platform that has been updated to provide hand-tracking data to the [XRHandSubsystem](../api/UnityEngine.XR.Hands.XRHandSubsystem.html), the subsystem which this package defines.

Currently, the OpenXR package is the only plug-in provider that supports hand tracking.

To see if other provider plug-in packages you use supports hand tracking, check the documentation for those packages.

##### Note

XR Hands will not work on a target platform unless you also install the provider plug-in package for that platform. See [Install XR Hands](project-setup/install-xrhands.html) for detailed setup instructions.

## Samples

This package provides samples that you can import into your project through the Samples tab of this package's view in the Package Manager window.

| Sample | Description |
| --- | --- |
| Gestures | Provides a sample scene, prefabs, and components for debugging and testing hand shapes and hand poses. The Static Hand Gesture component is part of this sample, so you must import the Gestures sample to use the hand gesture feature provided by the XR Hands package. The HandGestures sample scene depends on components in the HandVisualizer sample, so you must import both samples to use it. |
| HandVisualizer | Provides a sample scene, prefabs, and components to visualize hands with a mesh. The HandVisualizer sample has a mesh and script based on the OpenXR hand data layout, so you should use the sample with the OpenXR plug-in or one that conforms to the OpenXR hand joint layout. |
| HandCapture | Provides a sample scene for recording real-time hand data with your XR headset. Recordings can be imported into the Unity Editor and used to create reusable XRHandShape assets for gesture-based interactions. |

[Image: Import the XR Hands samples]
*Import the XR Hands samples*

## Known Limitations

- **Gestures** sample scene: Exiting Play Mode will emit `ObjectDisposedException` errors and related error output.

- **Hand Capture** sample scene: Quest Link is not currently supported.

- **Hand Capture** sample scene: If you encounter double-vision artifacts (such as raycast tear drops), this is a [known limitation](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@latest?subfolder=/manual/index.html#known-limitations) when using Shader Graph shaders on the Build-in Render Pipeline. Please refer to the [troubleshooting](gestures/xrhandcapture-recording.html#incorrect-scene-appearance) section for potential solutions.
