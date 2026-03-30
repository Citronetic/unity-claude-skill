[Image: image]

# User interfaces (UI)

Tutorial

intermediate

+10XP

45 mins

2

(6)

Unity Technologies

[Image: User interfaces (UI)]Summary

In this tutorial, you’ll learn about the user interface implementation and design in Out of Circulation. You’ll also investigate accessibility considerations for user interfaces in your own game.

Languages available:

EnglishEnglish日本語English

## 1. Overview

Q&A (0)

User interfaces are especially critical for narrative adventure games because character dialogue and interactive items are all presented to the player via UI windows. It’s important for players to be able to configure user interfaces to their individual needs, especially when a user interface is displaying a lot of text.

In this tutorial, you’ll:

- Evaluate the user interfaces for Out of Circulation.
- Redesign a UI window.
- Switch to the UI Toolkit system and implement UI theming.
- Investigate accessibility considerations related to user interfaces in your own game.

**Note**: If you’d like to refresh your memory of the high-level details of Out of Circulation before you begin, review [**Explore Out of Circulation**](https://learn.unity.com/tutorial/explore-out-of-circulation-1?courseId=625fdcaaedbc2a43147471e0&projectId=62697115edbc2a57a01c5711).

Mark step as complete

## 2. Our accessibility requirements

Q&A (0)

#### Initial requirements

We set the following initial requirements for the user interface implementation in Out of Circulation:

- The player must be able to scale the user interface windows in the game, up to a set maximum size.
- The default gameplay UI must include quick access toggles so that players don’t need to go into the settings menu for helpful on/off settings.
- The default UI color palette must meet the [WCAG 2.1 AA color contrast requirements](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) at a minimum.
- The default font size must be easily readable for someone with 20/20 vision (28px minimum when viewed in 1080p).
- The player must be able to choose a font that best meets their needs.
- The user interface must have audio description or be navigable with the player’s choice of a screen reader.

#### Descoped feature: UI theming

We initially hoped to include multiple UI themes in Out of Circulation so that players could choose so that players could choose a theme that best meets their needs. However, we encountered a significant problem: the Unity UI (uGUI) package has no built-in theming system. We explored implementation approaches, but we were not able to add this feature within the scope of this project.

Mark step as complete

## 3. Our UI system selection

Q&A (0)

Unity has [three different UI systems](https://docs.unity3d.com/Manual/UIToolkits.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950327690): the UI Toolkit, the Unity UI package (uGUI), and the Immediate Mode Graphical User Interface (IMGUI). IMGUI is meant for Unity Editor extensions, not for runtime user interfaces. There were a number of different considerations that factored into our decision between the UI Toolkit and uGUI systems.

#### Unity Long Term Support (LTS) release

The UI Toolkit became an officially supported package in 2021.3 LTS. When we began work on Out of Circulation, we did not know whether we would be launching it on the 2020 or 2021 LTS release of Unity.

We prefer not to work with preview packages in our learning content so that our learning experiences will be as stable as possible.

#### UI narration support

We used the open source [UI Accessibility Plugin](https://assetstore.unity.com/packages/tools/gui/ui-accessibility-plugin-uap-87935) to provide UI narration for Out of Circulation. This third-party tool significantly reduced the amount of custom development work that would have been required to either custom record UI narration or to implement full screen reader support. The UI Accessibility Plugin supports the uGUI system but does not currently support the UI Toolkit.

Balancing these two considerations, we chose to use uGUI for Out of Circulation.

#### The disadvantage of choosing uGUI

The choice that we made was not a perfect one. The uGUI system does not support UI theming by default, meaning that it would take a considerable amount of developer work to change the UI color palette or fonts in Out of Circulation.

We completed some initial exploration and work to support full UI theming, but ultimately we decided that developer time would be better spent on other critical project features.

If you use an alternative approach to implement UI narration or screen reader support in your own game, we recommend that you use the UI Toolkit as your UI system.

Mark step as complete

## 4. UI navigation using directional input

Q&A (0)

Classic point-and-click narrative adventures were designed primarily for a pointer controller, such as a mouse. However, we needed to make it possible for players to navigate Out of Circulation using a wide range of input controls, such as buttons, or assistive technology, such as a screen reader.

This need for indirect interaction with the game UI led to two requirements for Out of Circulation:

1. The player must be able to change which UI GameObject is active (selected).
2. The UI Interact [Input Action](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.3/manual/Actions.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950327690) must activate (trigger) the UI GameObject, just like the click-to-select functionality for pointer input.

The Actions are automatically handled by the Input Module that can be found on the **EventSystem**GameObject, which is part of the **SceneSetupPrefab**. In order for the player to navigate the user interfaces, we needed to set up the UI so that the Input Module could identify which UI GameObjects could be selected and which UI GameObject it should select next when the player provides input.

#### UI GameObject selection tracking

Unity has a built-in system that tracks the currently selected UI GameObject. The UI GameObject needs to derive from the [Selectable](https://docs.unity3d.com/2017.4/Documentation/ScriptReference/UI.Selectable.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950327690) class to use this tracking feature. Most UI components derive from the Selectable class; UITab, a custom UI component that we created to define the tabs for the setting menu, also uses this class.

Players using non-pointer input controllers can select a UI GameObject by providing input that is mapped to any one of the movement directions in the **Input Manager**. For example, if a player provides input to move right when they open the game setting menu, the next tab to the right will be selected.

#### Automatic UI navigation

The uGUI system uses the **Navigation**property to determine the next UI GameObject that can be selected in a particular direction when the player provides input, such as a button, toggle, or slider. Every UI GameObject has this property available in the Inspector.

This is the Button component for one of Out of Circulation’s main menu buttons:

[Image: image]

**Navigation**can be manually configured or set to **Automatic**, as it is for this particular button.

When **Navigation** is set to **Automatic**, the UI system decides the next UI GameObject selection by detecting the UI GameObject that is closest to the currently selected UI GameObject in the direction provided by the player’s input. This approach is useful for games with minimal user interfaces.

#### Manual UI navigation

Out of Circulation has a complex user interface, including windows that can be turned on and off. We needed complete control over the UI navigation map to support navigation with a variety of input controllers. This requirement meant that we could not use automatic navigation for most of Out of Circulation’s UI.

We set most of the UI navigation manually, which meant that we had to identify a specific UI GameObject to be selected next when the player gives input in each cardinal direction (up, down, left, and right).

The next UI GameObject can be specified through the Inspector or via code. Setting UI GameObjects via code is particularly useful when you want to create GameObjects dynamically, like the input remapping button on the remapping tab of the game settings window. This approach is also useful for adding or removing UI GameObjects into or from the navigation map based on the state of the UI; for example, the Save and Undo buttons in the settings menu, which are only selectable if the player has made a change that they can save or undo.

Mark step as complete

## 5. UI narration

Q&A (0)

We used the open source [UI Accessibility Plugin (UAP)](https://assetstore.unity.com/packages/tools/gui/ui-accessibility-plugin-uap-87935) to provide UI narration for Out of Circulation. This plugin passes data from the game’s user interface to an external screen reader and uses that screen reader’s text-to-speech functionality to provide narration for the game UI. The plugin is compatible with a range of screen readers, including the operating system defaults for Windows and macOS.

It’s a big task to create user interfaces that a screen reader can navigate in Unity — this was beyond the scope of Out of Circulation. The UI Accessibility Plugin was a good solution to help us meet our requirements for the game, even if it does not not allow players to actually navigate the UI using their screen reader.

#### Text-to-speech support

We used the UI Accessibility Plugin for its text-to-speech functionality. We needed to create a custom script component for UI GameObjects called UI Component Info to support this functionality in order to provide the plugin with the correct information to read.

The UI Component Info component records the following information:

- The name of the UI GameObject.
- A usage hint for the UI GameObject, if required.
- A tooltip for the UI GameObject.

Here is the UI Component Info (Script) component for the Log button on the main gameplay UI:

[Image: image]

When the text-to-speech system detects that the currently selected UI GameObject has changed, it checks whether that UI GameObject has a UI Component Info component on its GameObject. If this component is present, the system will read the name, state, usage hint (if this is used), and tooltip for that UI GameObject.

**Note**: The Tooltip field is also displayed to the player when they hover over settings on the gameplay interface or the game settings menu.

#### Navigation using the UI Accessibility Plugin

The UI Accessibility Plugin also has built-in components that can handle most types of UI GameObject. These components add navigation with keyboard input on desktop and touch input on mobile.

We didn’t use this functionality in Out of Circulation because we needed a player movement system for the game that worked well with a gamepad. The movement system that we implemented handles keyboard and gamepad UI navigation too, and this would have conflicted with the UI Accessibility Plugin’s approach for handling keyboard input.

Mark step as complete

## 6. UI navigation and narration feedback

Q&A (0)

Of the user feedback we received about the user interfaces, most of it related to either navigation without pointer input or the UI narration functionality.

The UI navigation was manually configured for almost all of the UI in Out of Circulation. To make sure that every UI GameObject had an associated UI Component Info (Script) component with data to pass to a screen reader, we performed a lot of thorough testing.

One tester reported that when they were navigating the game settings UI with a keyboard, the selection would jump from a setting at the top of the tab to a setting lower in the list, skipping some settings in between. This jump happened because the intermediary UI GameObjects were not properly registered for navigation.

Both the external testers and our internal QA tester identified multiple navigation issues due to UI GameObjects that had been missed during their initial manual configuration or subsequent changes to the project.

Mark step as complete

## 7. UI design and theme

Q&A (0)

We didn’t have a dedicated UI designer for this project, and we knew that we would have limited capacity to work on a polished user interface design. This restriction meant that we needed to keep the design simple.

#### UI placement and scaling

We received some very useful feedback from our reviewers about both the UI placement and UI scaling functionality. We worked through a number of design iterations and made small adjustments to ensure that key information was still available in the player’s gameplay view when the UI windows were scaled up.

#### High contrast theme

As described earlier, we made a significant compromise when we selected the uGUI system for Out of Circulation. Although this choice allowed us to use the UI Accessibility Plugin to provide UI narration functionality, it also meant that we weren’t able to take advantage of the UI Toolkit system’s support for UI theming. Therefore, providing the users with color and font customization options would require a manual implementation by our team.

We explored ways that we could implement UI theming for the uGUI system. However, the scope of work required was beyond our resource constraints.

We decided to use a high contrast color palette of black text (#000000) on a white background (#FFFFFF), to support players with low vision who need a strong visual contrast. The contrast ratio that these colors provide is 21:1, which indicates a very strong contrast. The colors also work well in each of the three different gameplay scenes, which use different overall color palettes.

[Image: image]

There are disadvantages to this choice of color theme: there are players who may find it harder to perceive high contrast text, such as those who experience reading difficulties.

**Note:**Different colors are used to identify the dialogue of the characters in the conversation window.

#### Font selection

Different typefaces work well for different players. The default font in Out of Circulation is a basic sans-serif font: Lato. Basic sans-serif fonts are readable for a wide range of players, so this felt like a good fit for Out of Circulation. When we believed we would only be able to offer players one font, we wanted an option that would meet the needs of as many players as possible.

However, there are also other fonts available that are designed to support other needs — there’s no one font that works equally well for every reader. For example, some fonts are designed specifically to be more legible for readers with dyslexia.

At the end of production, the team manually implemented a toggle that players can use to switch the font in Out of Circulation to the open source [OpenDyslexic font](https://opendyslexic.org/). Although the limited research on this font does not indicate that it improves readability, some people find it very helpful. The toggle means that players who would find this useful can customize their experience.

Mark step as complete

## 8. Explore: Redesign a UI window

Q&A (0)

Our user interface design is very basic. You can practice your skills by redesigning any of the existing windows to improve accessibility while following the visual theme of the game. You can also implement a new UI window with your own custom design.

Mark step as complete

## 9. Extend: Switch to UI Toolkit and implement UI theming

Q&A (0)

Although we weren’t able to implement UI theming within the scope of our work, you can extend Out of Circulation by doing just that. Try switching to UI Toolkit and creating theme choices for players.

**Important**: Switching to UI Toolkit will require considerably less work than starting at the beginning because custom scripts have already been written for Out of Circulation. However, this work will still involve completely redoing all of the UI. You might prefer to develop the UI for your own game rather than extending Out of Circulation.

Here are some tips to help as you switch to the UI Toolkit system:

- We call the UI Accessibility Plugin’s Say function manually in our scripts to pass the data to an external screen reader for navigation. To switch to the UI Toolkit system but continue to use the UI Accessibility Plugin’s narration functionality, you can call Say from your code to detect the currently selected UIElement.
- In the UI Toolkit system, UIElements have built-in tooltip functionality. You can also use the [**userData** property](https://docs.unity3d.com/ScriptReference/UIElements.VisualElement-userData.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950327690) to store other important information, like a usage hint, if you need to.

Mark step as complete

## 10. User interfaces in your game

Q&A (0)

As you work on your own game, consider the following questions:

- [**Text formatting**](https://gameaccessibilityguidelines.com/use-simple-clear-text-formatting/): We navigated some challenges related to font for Out of Circulation, and we weren’t able to provide players with choice. What font(s) are you planning to use, and how are you planning to meet the needs of a wide range of players?
- [**Resizable interfaces**](https://gameaccessibilityguidelines.com/allow-interfaces-to-be-resized/): There are a lot of user interfaces in Out of Circulation; making them resizable was critical to creating a user experience that many different players could enjoy. How do you plan to make your user interfaces resizable?
- [**Screen reader support**](https://gameaccessibilityguidelines.com/ensure-screenreader-support-including-menus-installers/): Implementing screen reader support was a priority for Out of Circulation; alongside the voiced dialogue, this meant that more players would be able to explore our story. Is screen reader support in scope for your project?

**Important**: Your answers to these questions are not a substitute for regular testing and feedback from players with disabilities.

Remember, you can also refer to [the accessibility resources that you explored earlier in this course](https://learn.unity.com/tutorial/create-your-production-plan?uv=2021.3&courseId=625fdcaaedbc2a43147471e0&projectId=626970c3edbc2a6b79429613#6283e13bedbc2a60117fe9b1).

Mark step as complete

## 11. Next steps

Q&A (0)

Explore the other tutorials in [**Design and development**](https://learn.unity.com/project/design-and-development?courseId=625fdcaaedbc2a43147471e0) to find out about other aspects of Out of Circulation’s development. When you’re ready, progress to [**Continue your journey**](https://learn.unity.com/project/continue-your-journey?courseId=625fdcaaedbc2a43147471e0).

Mark step as complete

## Complete this Tutorial

Mark all steps complete
