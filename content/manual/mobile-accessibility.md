This version of Unity is unsupported.

Vulkan

Unity Remote

# Accessibility for mobile applications

Use the [Accessibility module APIs](../ScriptReference/UnityEngine.AccessibilityModule.html) to create mobile applications that are accessible to a wider audience, including people with disabilities.

## Requirements and compatibility

The Accessibility module APIs are available only for iOS and Android devices, with the following minimum requirements:

| Platform | Operating system version |
| --- | --- |
| Android | Android 8.0 (API level 26) |
| iOS | iOS 13 |

## Screen reader support

Android and iOS devices have built-in screen readers that describe what appears on the screen out loud. These screen readers are designed to help users who are blind or have low vision to navigate and interact with their mobile devices without needing to see the screen.

| Platform | Screen reader |
| --- | --- |
| Android | TalkBack |
| iOS | VoiceOver |

Use Unity’s [Assistive Support API](../ScriptReference/Accessibility.AssistiveSupport.html) to enable screen reader capabilities for your application. The `AssistiveSupport` class stores the active accessibility hierarchy that you create, allows your application to notify the screen reader of changes in your UI, and notifies your application of events based on user actions. Use the **Accessibility Hierarchy Viewer** (menu: **Window** > **Accessibility** > **Hierarchy Viewer**) during Play mode to view the active accessibility hierarchy and its nodes in real-time.

## System settings

Use Unity’s [Accessibility Settings API](../ScriptReference/Accessibility.AccessibilitySettings.html) to configure your UI to interact with native font scaling, bold text, and closed captions. This improves the readability and visibility of your application’s UI for all your users.

## Additional resources

- [Accessibility Public Sample: LetterSpell](https://github.com/Unity-Technologies/a11y-public-sample) on GitHub

- [Accessibility module](../ScriptReference/UnityEngine.AccessibilityModule.html) API documentation

- [Mobile screen reader support in Unity](https://unity.com/blog/engine-platform/mobile-screen-reader-support-in-unity?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774937209250)

- [Unity Discussions: Accessibility](https://discussions.unity.com/tag/accessibility-features?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774937209250)

- [User interfaces roadmap](https://unity.com/roadmap/unity-platform/ui?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774937209250)

Vulkan

Unity Remote
