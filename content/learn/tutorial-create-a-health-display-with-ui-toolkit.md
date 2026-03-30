[Image: image]

# Create a health display with UI Toolkit

Tutorial

Beginner

+0XP

30 mins

2

(41)

Unity Technologies

[Image: Create a health display with UI Toolkit]Summary

Now that you’ve implemented the basic health system in your game, you need to share that information with your player. In this tutorial, you’ll use Unity’s UI Toolkit to create a basic health display.

By the end of this tutorial, you’ll be able to do the following:

- Create a UI Document asset.
- Configure a health display interface in the UI Builder.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

When you create a game with a health system, it’s almost always helpful to share key information from that system with players. When a player knows their character’s current health status, they can make choices that take that status into account; prioritizing finding health collectibles to restore lost health, or moving more carefully to avoid being damaged more by enemies. This information is often communicated through the game’s user interface (UI).

For your **Beginner 2D** adventure game, you’ll use Unity’s **UI Toolkit**system to create a health bar for the player character. Status display bars are also sometimes called **heads-up displays** (HUDs).

**Note**: For the purposes of this tutorial, we chose to use the**Ruby’s Adventure** asset set, and the images used in instructions will reflect this. If you chose another asset set, the file names will be the same, but in your corresponding theme folder.

Mark step as complete

## 2. UI systems in Unity

Q&A (0)

There are two different systems that you can use to create runtime UI – user interfaces that players will see in your game:

- **UI Toolkit**: The newest UI system for Unity, based on standard web technologies. You can structure and style the UI created with this system using similar approaches to working with HTML and CSS. For further guidance on creating UI with this system, refer to the [UI Toolkit](https://docs.unity3d.com/Manual/UIElements.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954079553) documentation.
- **The Unity UI package** (**uGUI**): An older, GameObject-based UI system. You can create and configure interfaces using GameObjects and components.

Because this project is in 2D, and only requires simple, fixed-on-screen UI elements (such as the player’s health bar), UI Toolkit is a good fit.

Mark step as complete

## 3. Create a UI Document

Q&A (0)

The UI Toolkit system uses a text file asset called a **UI Document** to store the structure of the UI for your game.

**UI** **Documents** can be complicated to write from scratch, so the UI Toolkit system includes a tool called **UI Builder** that you can use to create the UI for your game.

To create and open a **UI Document** asset for your game, follow these instructions:

**1.** In the **Project** window, navigate to the **Assets** folder.

**2.** Right-click in the **Assets**folder and select **Create** > **UI Toolkit** > **UI Document (UXML)**.

**3.** Name your new asset “GameUI”.

**4.** Double-click the **GameUI**asset to open the **UI Builder** window.

**Note**: You can dock the **UI** **Builder** window by clicking and dragging the name tab next to the **Scene** view.

Before you continue, we recommend maximizing the **UI Builder** window by double-clicking its name tab.

Mark step as complete

## 4. Set the UI Canvas size to match the Game view

Q&A (0)

### UI Builder overview

**UI Builder** functions similarly to the Unity Editor, but with a very specific purpose: you can use it to create and configure the UI for your game.

[Image: The empty UI Builder window with the Hierarchy, Library, Viewport, and Inspector panels highlighted.]

There are four panes that you can use to create the basic UI for your game:

- **Hierarchy**: This pane is used to manage the elements that make up your UI, like how you manage GameObjects in the **Hierarchy** window of the Unity Editor .
- **Library**: This pane lists the different UI elements that you can add to create your interface.
- **Viewport**: This pane is a preview of how the UI will look in your game, like the Unity Editor’s **Scene** view.
- **Inspector**: This pane displays the properties of a selected UI element.

The **Viewport** pane is currently very small; you might find it helpful to set it to the size of the **Game** view so you have a more accurate representation of where the UI elements will be positioned for players.

To adjust the UI Canvas size in the **UI Builder** window, follow these instructions:

**1.** In the **UI Builder** window, go to the **Hierarchy** pane and select the **GameUI.uxml**element.

**2.** In the **Inspector**pane, go to the **Canvas Size** section and enable **Match Game View**.

[Image: Canvas Size’s Inspector settings with “Match Game View” checkbox highlighted as enabled.]

**3.** Save your changes.

Mark step as complete

## 5. Add a VisualElement for the health bar frame

Q&A (0)

Whatever theme you’re using for your game, there are three different sprites for the health bar:

- A background panel.
- A character portrait that fits the space on the left side of the panel.
- A coloured bar to represent the character’s health.

[Image: A frame with a bar and circular space for a portrait, a character portrait of Ruby character, and a blue health bar to fit in the frame. ]

To add the background frame sprite to your **GameUI** asset, follow these instructions:

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

**1.** From the **Library**pane, under the **Containers**section, click and drag a **VisualElement** container over the **Viewport** pane or **Hierarchy** pane and release it.

Any **VisualElement**container can use an image file as its background, so there’s no specific element that you need to use for sprites.

**2.** In the **Inspector** pane, locate the **VisualElement** header, select the name****box, and enter “HealthBarBackground”.

**3.** Use the foldout (triangle) to expand the **Background**section.

**4.** Open the **Image** property dropdown and select **Sprite**.

**5.** Select the **Image** property picker (⊙), then search for and select the corresponding **UIHealthFrame** sprite for your asset pack.

**6.** Use the foldout (triangle) to expand the **Flex** section, then set the **Basis**property’s **Grow**value to **0**.

This will stop your element from filling the whole height of the screen so you can set an explicit height.

**Important**: The frame sprite may disappear from the **Viewport** pane when you set this property, depending on when you last saved your project. Don’t worry – this issue will be resolved when you configure the size and style of the element in the next step.

**7.** In the **Inspector** pane, use the foldout (triangle) to expand the **Size** section. Set the **Size**property’s **Width** and **Height** values to **50**, then open the **Type**property dropdown and select **%**.

There are two different types of value you can provide to determine element size with UI Toolkit:

- A specific value in pixels.
- A percentage of the parent UI element (which in this case would be the entire **Viewport**pane, as the **VisualElement** container is at the root of the **GameUI** asset).

**7.**Save your changes.

The **UI Builder**window displays a small ***** in the name tab whenever you have made unsaved updates – this will disappear when you save.

The health display frame should now be visible in the **Viewport**pane of the **UI Builder**window, but you won’t see it yet in the Unity Editor.

Mark step as complete

## 6. Display the UI in the Game view

Q&A (0)

You’ve added the background element for your health display, but at the moment it’s only visible in the **UI Builder** window. To display the UI in the **Game** view, follow these instructions:

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

**1.**In the Unity Editor, right-click in the **Hierarchy**window and select **UI Toolkit** > **UI Document**.

This creates a new GameObject to display your UI.

**2.**In the **Inspector** window, locate the **UI Document** component, select the **Source Asset** property picker (⊙), and select the **GameUI** asset.

**3.**Select the **Game** tab to switch to the **Game** view.

This shows the UI overlaid on the rest of your game, matching its position in the **UI Builder**window.

The health display frame looks great, but it’s currently very large. You’ll fix this next.

**4.**In the **UI Builder** window, go to the **Hierarchy**pane and select the **HealthBarBackground**VisualElement.

**5.** In the **Inspector**pane, under the **Inlined Styles** section, go to the **Background** section and set the **Scale Mode** property to **scale-to-fit**(the rightmost icon).

This mode stops the sprite from looking stretched.

The last step is to ensure you have proper scaling if the user has a different screen size than the one you used during development.

**6.**In the Unity Editor,****select the **UIDocument**in the **Hierarchy** window.

**7.** In the **Inspector**window, locate the **UI Document**component, double-click the **PanelSettings**property box to highlight the corresponding file****in the **Project** window, and select the **PanelSettings**asset.

In the **Inspector**window****you’ll find all the panel settings.

**8.** Open the **Scale Mode** property dropdown and make sure it is set to **Scale with Screen Size**

**9.**Open the **Screen Match Mode** dropdown and confirm it is set to **Match Width or Height**. In the **Reference Resolution** property, enter **1920** for the **X** value and **1080** for the **Y** value.

With these settings, you’ve defined your UI’s reference resolution as **1920**×**1080**. Unity will now automatically scale the UI up or down depending on how the player’s screen resolution compares to that reference. This will ensure that the UI takes the exact same space on the screen no matter the resolution used, refer to the [Panel Settings properties reference](https://docs.unity3d.com/Manual/UIE-Runtime-Panel-Settings.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954079553) documentation for all the possible scaling strategies.

**10.**Rescale the element in the **Viewport** pane until you’re happy with how it looks in the **Game** view.

**11.** Save your changes.

Mark step as complete

## 7. Configure the character portrait element

Q&A (0)

Now the background is set up! To add a player character portrait to its slot in the frame, follow these instructions:

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

**1.** From the **Library**pane, under the **Containers**section, click and drag a **VisualElement** container and release it over the **HealthBarBackground** element in the **Hierarchy**pane.

This will create the new element as a child element of the existing element.

**2.** In the **Inspector** pane, locate the **VisualElement** header, select the name****box, and enter “CharacterPortrait”.

**3.** Use the foldout (triangle) to expand the **Inlined Styles** section and then expand the **Background**section.

**4.**Open the **Image** property dropdown and select **Sprite**.

**5.** Select the **Image** property picker (⊙) and select the **CharacterPortrait**sprite for your theme.

The portrait won’t be exactly positioned in the correct space yet – this is because the elements have been automatically laid out by UI Toolkit.

**6.** Set the **Scale Mode**property to **scale-to-fit**(the rightmost icon).

**7.** Use the foldout (triangle) to expand the **Position** section, then set the **Position** property to **Absolute.**

The sprite will become small and hard to see, but you’ll resize it in the next step.

**8.** In the **Viewport**pane, adjust the size and position of the portrait so it fits neatly inside the frame, centered within it.

**9.** Save your changes.

Mark step as complete

## 8. Configure the health bar element

Q&A (0)

There’s one vital part of the UI display that you still need to create: the bar that will represent the player character’s health as it increases and decreases.

To set up the element for the health bar, follow these instructions:

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

**1.** From the **Library**pane, under the **Containers**section, click and drag a **VisualElement** container and release it over the **HealthBarBackground** element in the **Hierarchy**pane and release it to create another child element.

**2.** Name the new element “HealthBarContainer”.

**3.** Follow the same process to add another Visual Element as a child of the **HealthBarContainer**element. Name the new child element “HealthBar”.

This particular **Hierarchy**pane structure for your health bar UI means that you can take advantage of UI Toolkit’s percentage size functionality to display character health. This feature means that you can change the **HealthBar** element’s width to be a percentage of the **HealthBarContainer** element, without needing to specify a particular size.

**4.** In the **Hierarchy**pane, select the **HealthBar** element. In the **Inspector**pane, use the foldout (triangle) to expand the **Background** section and repeat the following configuration instructions:

- Open the **Image** property dropdown and select **Sprite**.
- Select the **Image** property picker (⊙) and select the **UIHealthBar**sprite for your theme.

You should notice that the **UIHealthBar** sprite is now completely covering the portrait. This is because all child elements of a particular element are drawn from top to bottom, so UI Toolkit currently draws the **CharacterPortrait** element first and then the **HealthBar**element on top.

**Important**: The sprite for the **HealthBar**element needs to stretch so that you can configure it to be resized based on the player character’s health level. Make sure that the **Scale Mode**property****is set to **stretch-to-fill** (the default setting).

**5.** In the **Hierarchy**pane, click and drag the **HealthBarContainer** element over the **CharacterPortrait** element, so the bar is drawn first before the portrait.

**Important:** Make sure that the portrait remains a child element of the **HealthBarBackground** element but is not a child element of the **HealthBarContainer** element.

**6.** In the **Hierarchy** pane, select the **HealthBarContainer** element.

**7.** Use the foldout (triangle) to expand the **Position** section, then open the **Position Mode**property dropdown and select **Absolute.**

**8.** The sprite might have shrunk too much. Resize the **HealthBarContainer** element in the **Viewport**pane until it fits over the area of the frame for the health bar, and position it within the frame.

**Caution**: Make sure that you’re working with the **HealthBarContainer** element, and not its child element **HealthBar**. If you select something else at any point in this process, check that you have the correct element selected before continuing and that you don’t accidentally change element alignment settings using the **Viewport** pane overlay.

**9.**Save your changes.

You can now close the **UI Builder** window – the heads-up display is fully laid out in the **Game** view!

[Image: Game level showing Ruby’s health bar at the top and the Ruby character nearby, surrounded by enemies, damage zones, and collectible items.]

Mark step as completeOptional Step

## 9. More things to try

Q&A (0)

If you want to further develop your skills, explore new concepts, or improve your project, check out some of the optional activities below. Each one is tagged as either Easy, Medium, or Difficult, so you can choose the level of challenge.

These activities are entirely optional, so if you’re not interested, no problem – just skip this step. We do recommend attempting at least one of them in order to get the most out of this learning experience. Good luck!

### Easy: Mix and customize your assets

We’ve provided sprite assets for the health display in each asset pack – take some time to explore them all and choose the ones that work best for your vision for your own game. You can also make adjustments like changing the color of the health bar to customize the display even more, or even find or create your own assets to use for the display.

Mark step as complete

## 10. Next steps

Q&A (0)

You’ve created a display interface, but at the moment it doesn’t provide the player with any information. In the next tutorial, you’ll create a new script to update the display based on the player character’s health level.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
