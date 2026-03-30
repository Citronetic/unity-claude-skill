[Image: image]

# Explore Out of Circulation

Tutorial

intermediate

+10XP

30 mins

1

(6)

Unity Technologies

[Image: Explore Out of Circulation]Summary

In this first tutorial, you’ll play through the Out of Circulation build and explore its Unity project. You’ll also learn more about how you can work with the tutorials in **Design and development**.

Languages available:

EnglishEnglish日本語English

## 1. Overview

Q&A (0)

So far in this course, you’ve explored the fundamentals of inclusive design and game accessibility and created an initial plan for your own game. In this project, you’ll learn more about how we designed and developed Out of Circulation so that you can investigate how different accessibility considerations apply to your own game.

We’ve broken down different systems and features of the game into separate tutorials. The tutorials are in a suggested sequence, but you can explore them in the way that works best for you.

In this first tutorial, you’ll play through the Out of Circulation build again and then explore its Unity project as you learn more about the specifications for the vertical slice.

Mark step as complete

## 2. Before you begin

Q&A (0)

If you’re starting the course at this point, you’ll need to download the course materials before continuing.

#### Update your Unity Hub

Before you begin to set up your Unity project, consider updating your Unity Hub to the latest release. If you are using an older version of the Hub, there may be differences between the guidance provided here and your experience.

#### Set up the Out of Circulation Unity project

To set up your Unity project:

**1.** [Install **Unity** **2022.3 LTS**](https://learn.unity.com/tutorial/project-setup-processes#60ed7a3fedbc2a001f71f1aa), if you haven’t already done so.

**2.** Create and save a new Unity project using the 3D Core template.

**3.**  Open the [Practical Game Accessibility: Case study](https://assetstore.unity.com/packages/slug/223056) project in the Asset Store.

**4.** [Download and import the assets into your Unity project](https://learn.unity.com/tutorial/project-setup-processes#60ed7a86edbc2a002520b6f4).

**5.**  Save your project.

#### Download the vertical slice build

If you haven’t already done so, download a build of the Out of Circulation vertical slice:

**1.**  Download the correct build for your platform:

- [Windows build](https://connect-prd-cdn.unity.com/20220519/c5aefd9a-0a39-498c-9b0c-f68940ce1158/OutOfCirculation_v1_Windows.zip?_ga=2.220841114.362177963.1652687262-566282091.1650545793)
- [macOS build](https://connect-prd-cdn.unity.com/20220519/483b1b91-00cc-4112-bbd0-ca475b2c2eec/OutOfCirculation_v1_Mac.zip?_ga=2.184156452.362177963.1652687262-566282091.1650545793)

**Note:**To open the macOS build for the first time, you’ll need to select and hold (or right-click) the executable file and then select **Open**.

**2.**  Choose a suitable location on your computer and unzip the folder there. The executable file **Out of Circulation** is what you will use to launch the game.

Mark step as complete

## 3. Complete a focused playthrough

Q&A (0)

In the first project of this course, you completed an initial playthrough of the Out of Circulation build. As you play through it again now, apply what you’ve learned so far as you evaluate the player experience.

To complete your focused playthrough:

**1.** Review the notes you made when you [explored Out of Circulation for the first time](https://learn.unity.com/tutorial/explore-out-of-circulation?courseId=625fdcaaedbc2a43147471e0&projectId=62696b6aedbc2a6ab72472f1).

**2.** As you play through the build for a second time, work through this extended set of questions:

- What are your initial impressions on this second playthrough?
- How well does Out of Circulation meet your user needs? Note down what it does well and any areas for development that you notice.
- Can you identify four key accessibility guidelines or standards that Out of Circulation meets? How effectively do you think that the vertical slice meets those standards?

**3.**  If you’re able to answer any of the questions that you recorded on your first review, note down those answers now.

**4.**  Record any additional questions or thoughts that you’d like to explore as you work through this project.

Mark step as complete

## 4. How to use Out of Circulation

Q&A (0)

Before you explore Out of Circulation from a creator perspective, take a moment to reflect on the team’s approach to creating this vertical slice case study.

This case study for the **Practical Game Accessibility** course was our team’s first time prioritizing accessibility in a comprehensive way. We’ve worked hard to create an interesting and helpful example given the resources that we had available, but there are still areas for development. We may have also made some mistakes!

Out of Circulation is a practical example of a game that was created with accessibility as a priority. It’s a starting point that you can explore, extend, and rework as you develop your own game. [Use your critical evaluation skills](https://learn.unity.com/tutorial/develop-your-critical-evaluation-skills#) as you do so to get the most out of this case study.

Mark step as complete

## 5. Out of Circulation: Systems and settings

Q&A (0)

Now it’s time for you to explore Out of Circulation in Unity. Use the information in the rest of this tutorial as a reference to support your exploration.

#### Systems

A range of systems were used to create Out of Circulation:

- The input, navigation, and animation systems used for player movement.
- The dialogue system, used for character interactions.
- The user interface system, used for both the in-game inventory and game settings.
- The camera system, which showcases the different environments as the player explores.

#### Overall design

Other design elements were also key to crafting the vertical slice and had a significant impact on its accessibility:

- The game audio, which consists of character dialogue, sound effects, and music.
- The game art and visual aesthetic, including additional animation.
- The narrative design and writing of the experience.

#### Game settings

The vertical slice has the following settings:

- **Game**

- UI Scale
- Highlight Interactive Objects (when not targeted by the player)
- UI Narration
- Open Dyslexic font
- Dynamic Camera
- Auto Pause Dialogue (in conversations)
- Control icon set
- **Video**

- Display Mode
- Resolution
- Quality
- **Sound**

- Main Volume
- SFX Volume
- Music Volume
- Voice Volume
- Force Mono
- **Keyboard**

- Control input mapping for keyboard (primary and secondary)
- **Gamepad**

- Control input mapping for gamepads and alternative input controls

Mark step as complete

## 6. Out of Circulation: Flags and events

Q&A (0)

A basic flag system supports the narrative progression in Out of Circulation.

#### Wink’s location change

Wink, the salamander NPC, changes location as the player progresses through the narrative of the vertical slice. Wink starts in the street location. When the player (Sureswim) has visited the shop, Wink moves to the library.

We used the flag system to accomplish this move. When the player first enters the shop, a flag is set. When this flag is enabled:

- The Wink NPC GameObject in the street is destroyed when the street scene is loaded.
- The Wink NPC GameObject in the library loads.

**Note**: The player is free to enter the library before the shop. If they do this, Wink will not be present and they will only find interactive objects that are not linked to the game narrative.

#### Hidden objects

When the player activates the **Apantometer 21.3 LTS** interactive object (a scanner) in the library, two interactive and collectable objects are instantiated in the library:

- A written memo
- A locked communications device

**Note**: The scanner cannot be used in any other location.

#### Inventory objects

Interactive objects set a flag when they are added to the player’s inventory so they don’t constantly respawn.

Mark step as complete

## 7. Out of Circulation: Player actions

Q&A (0)

Out of Circulation has a limited number of actions that players can complete.

#### Player movement

The player can:

- Freely move around the prototype environment using:

- A mouse (click).
- An analogue or digital keyboard .
- A gamepad or alternative controller setup (such as the Xbox Adaptive Controller).
- Remap controls in the game settings.

#### Object and character interaction

The player can:

- Select an NPC character to start a conversation.
- Select a response option in a conversation.
- Select an object to add it to your inventory.
- Use an object that you have added to your inventory.

#### User interface (UI) interaction

In the game, the player can interact with the following additional UI windows:

- The **Start screen**, with high priority quick access settings before you launch the game.
- The **Log window**, which stores a record of your conversations and major interactions.
- The **Inventory window**, which contains objects you have picked up.
- The **Object window**, which provides more detail about an object present in your inventory and allows you to use it if this functionality is available.
- The **Settings menu**, which is grouped into tabbed sections.
- **Quick-access setting toggles**, for useful on/off accessibility settings.

Mark step as complete

## 8. Screen reader compatibility

Q&A (0)

The [UI Accessibility Plugin](https://assetstore.unity.com/packages/tools/gui/ui-accessibility-plugin-uap-87935) provides the user interface (UI) narration functionality for Out of Circulation. Players should be able to navigate the game’s UI using their choice of screen reader, including progressing through conversations with NPCs.

We encountered a reproducible issue when we tested using the Windows default screen reader: UI text is read out in full each time it is selected, even if you change focus while it is being read. Our development team tried to address this, but could not find a suitable fix within the project scope and timeframe.

Mark step as complete

## 9. Explore the feature overview tutorials

Q&A (0)

The remaining tutorials in **Design and development** each provide an overview of a specific feature or aspect of Out of Circulation.

Each of the feature overview tutorials includes:

- A list of the requirements we defined for that feature or aspect of the vertical slice.
- An overview of how we approached the feature, including more detailed technical information where this is relevant.
- Optional suggestions for ways that you can explore and extend Out of Circulation.
- Questions to help you investigate relevant accessibility considerations for your own game.

#### Choose your own tutorial sequence

Each feature overview tutorial stands alone and links out to other tutorials where there are dependencies or connections between features. The type of game that you’re making and the learning approach that you prefer are both likely to impact the order in which you complete these feature overview tutorials. You can explore and complete them in the order that works best for you!

#### Update your devlog

As you work on your game and explore the tutorials, don’t forget to complete your devlog for this course. You could include evaluations of Out of Circulation and what you have learned from our team’s example, as well as providing an overview of your own development process.

#### Share your feedback

If you are exploring these tutorials as a standalone resource rather than completing the whole **Practical Game Accessibility** course, we’d love to know more about your experience. Please [complete this short survey](https://unitysoftware.co1.qualtrics.com/jfe/form/SV_6QLP7zQsTNkNmLk) to share any feedback you have for us. Thank you!

**Important**: If you are completing the full course, you’ll have an opportunity to share your feedback at the end of this learning experience.

Mark step as complete

## 10. Next steps

Q&A (0)

Now that you have an overview of Out of Circulation, you’re ready to explore the feature overview tutorials in **Design and development**in the order that works best for you.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
