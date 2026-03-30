[Image: image]

# Conversation system

Tutorial

intermediate

+10XP

45 mins

1

Unity Technologies

[Image: Conversation system]Summary

In this tutorial, you’ll explore the conversation system for Out of Circulation. You’ll also investigate accessibility considerations for communication systems in your own game.

Languages available:

EnglishEnglish日本語English

## 1. Overview

Q&A (0)

The conversation system is a critical part of Out of Circulation — in-character conversations are the primary approach for communicating the narrative for the game to the player. The player can also express themselves using this system by selecting the player character’s responses to the NPCs.

In this tutorial, you’ll:

- Evaluate the conversation system for Out of Circulation.
- Implement a new conversation.
- Extend the conversation system with variable tracking.
- Investigate accessibility considerations related to communication systems in your own game.

**Note**: If you’d like to refresh your memory of the high-level details of Out of Circulation before you begin, review [**Explore Out of Circulation**](https://learn.unity.com/tutorial/explore-out-of-circulation-1?courseId=625fdcaaedbc2a43147471e0&projectId=62697115edbc2a57a01c5711).

Mark step as complete

## 2. Our accessibility requirements

Q&A (0)

#### Initial requirements

We set the following initial accessibility requirements that relate to this system:

- The player must be able to reduce the speed at which dialogue progresses in the conversation system.
- The speaker in a conversation must be indicated by displaying an icon that appears in the conversation panel, their character name associated with the relevant dialogue, and camera focus if dynamic cameras are turned on.
- Dialogue must be fully voiced so players do not need to rely on the on-screen text alone.

Most of the accessibility considerations for the conversation system are connected to [communicating information to the player](https://learn.unity.com/tutorial/important-information-and-communication?courseId=625fdcaaedbc2a43147471e0&projectId=62697115edbc2a57a01c5711): they relate to how the information contained in this system is presented, rather than the underlying system itself.

#### Descoped feature: Localized game content

In our initial planning, we discussed prioritizing localization in this project; localization of a game to multiple languages has a significant impact on how many potential players can access that game. However, we quickly descoped localization for this project due to:

- The relative complexity of addressing localization effectively within a custom conversation system, given the established scope of our vertical slice.
- The number of accessibility requirements that we decided were a higher priority for this course.

If you want to learn more about localization for Unity, one option is the [Localization package](https://docs.unity3d.com/Packages/com.unity.localization@1.0/manual/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954050067). There are also a number of third-party tools that you can use to support localization in your game.

#### Descoped feature: Quick-time events

[Quick time events (QTEs)](https://gameaccessibilityguidelines.com/avoid-repeated-inputs-button-mashingquick-time-events/) in a game require the player to perform an action, or an action sequence, under a time constraint. QTEs are common in older narrative adventure games. However, they can cause serious accessibility problems: not all players can perform quick actions under time constraints, particularly those who may have user needs related to motor accessibility.

Our team had a number of conversations about whether we would include QTEs in Out of Circulation. The main argument in favor of including QTEs was to provide an example of the work required to make them as accessible as possible. However, it quickly became clear to us that we did not have the necessary resources to achieve this ourselves. Furthermore, QTEs did not suit the type of narrative adventure game that we had chosen to make; including them would undermine other aspects of the narrative experience we were trying to create.

Mark step as complete

## 3. Conversation system: Dialogue organization

Q&A (0)

Let’s review Out of Circulation’s conversation system in detail, starting with the way the conversation dialogue is organized.

#### Conversation data

In Out of Circulation, character dialogue is broken down into units called **phrases**. When the player is given a choice in a conversation with an NPC, they select one of up to three separate phrase options for their character to speak.

Each phrase is associated with a specific [Timeline](https://docs.unity3d.com/Packages/com.unity.timeline@1.7/manual/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954050067)that has multiple tracks. These tracks can contain:

- The on-screen subtitles.
- Dialogue audio.
- Character animation.
- Player choices.

#### Conversation handling

Conversation logic for Out of Circulation is controlled by the **DialogueHandler class**.

We added a custom Dialogue Handler script component on the GameObject for each NPC that can speak with the player. There are three NPC conversations in the vertical slice:

- The conversation with Wink in the street setting, where the vertical slice begins.
- The conversation with Old Smalt, in the shop.
- The conversation with Wink in the library, after the player has visited the shop.

Each Dialogue Handler contains a collection of phrases that form the full conversation. Here is Old Smalt’s Dialogue Handler for the conversation in the shop:

[Image: image]

There are 28 different phrases in this collection. Each phrase in the conversation contains either a section of the dialogue or the different phrases that the player can select to choose Sureswim’s response to the NPC (denoted with the unique string ID or choice string in the right column).

**Note**: The unique string IDs are in a numerical sequence for each conversation. Conversations progress in the order determined by this unique ID rather than the single or double digit phrase listing ID (the left column in the screenshot).

Mark step as complete

## 4. Conversation system: Conversation progression

Q&A (0)

Once the dialogue for the conversation is in place, the player needs to be able to initiate and complete each conversation successfully.

#### Conversation initiation

We used a DialogueInteractiveObject to initiate the DialogueHandler and start each conversation. **DialogueInteractiveObject** is a subclass of InteractiveObject that notifies the DialogueHandler to start the conversation.

The custom Dialogue Interactive Object component is also added on the GameObject for the NPC character. Here is the Dialogue Interactive Object component for Old Smalt in the shop:

[Image: image]

#### Conversation progression

At the start of the conversation and after each phrase has been played, PlayNext is called.

PlayNext does two things:

1. It starts playing the Timeline associated with the next phrase ID in the sequence, which is assigned using the **Next Timeline Indexes** property.
2. It sends information to the camera system about the current speaker and the current listener.

You can find the **Next Timeline Indexes** property for any phrase by expanding that phrase in the Dialogue Handler (Script) component.

[Image: image]

If there is no further Timeline index assigned for the phrase collection to progress to, PlayNext will exit the conversation.

#### Timeline management

The Timelines that make up conversations are mainly animation and audio tracks, which are built-in tracks that are already available. However, we also needed to make custom Timeline tracks and clips to support the full conversation system.

These custom tracks are:

- Subtitle tracks, bound to the SubtitleManager.
- Choice tracks, bound to the MultiChoiceManager.

The custom managers determine which UIGameObjects are displayed and the content of those GameObjects for each phrase.

Mark step as complete

## 5. Auto Pause Dialogue and the log window

Q&A (0)

We also included two additional features for the conversation system to help players customize the game experience to their specific needs.

#### Auto Pause Dialogue

Some of the characters in Out of Circulation speak quite quickly, and they also use slang. The **Auto Pause Dialogue** setting pauses the conversation flow after every phrase, in case the player wants to slow down the conversations. When this setting is turned on, the player can progress the conversation by providing user input in the conversation window.

This setting can be accessed from the gameplay user interface using the **Pause** toggle button. Players can also access the **Auto Pause Dialogue** setting in the main game settings menu.

#### The conversation log window

We knew that we wanted players to be able to review previous conversations in the game. We also received some very helpful feedback from our reviewers that this functionality would improve the player experience by providing a way to recap the story so far, since this information is all provided through character dialogue.

The log window can be accessed from the gameplay user interface using the **Log** toggle button. It can be closed using the same button or the window **Exit** button.

Mark step as complete

## 6. Our custom conversation import tool

Q&A (0)

We received lots of helpful user feedback on the user interface for the character conversations but relatively little on the underlying system itself. However, there was significant internal feedback provided by a member of the core project team early in the system’s development process: the Dialogue Handler for each conversation required a lot of manual effort to set up and iterate.

For each phrase in a conversation, someone needed to complete the following actions:

1. Create a new Timeline.
2. Create clips on the Timeline.
3. Create a new GameObject with a **PlayableDirector**script on it.
4. Assign all of the timeline references to the PlayableDirector.
5. Reference the PlayableDirector and its order in the conversation sequence correctly in the Dialogue Handler.

That’s a lot of work for a long conversation!

One of our developers created a small tool to simplify this process for the team. The tool imports all the data required for the conversation from the spreadsheet file that the writers had been using to store the conversation dialogue outside of the Unity project.

#### Import tool functionality

When data from the spreadsheet is exported as a tab-separated values (TSV) file, the tool parses that data and performs the following actions for each phrase of the conversation:

1. Finds the existing Timeline for the phrase’s unique ID, or creates a new one if no Timeline exists.
2. Adds the following clips to the Timeline tracks: a subtitle clip or choice clip, an audio clip with the associated audio file, an animation clip with the speaker’s associated talk animation.
3. Finds the existing child GameObject of the **DialogueHandler**with a PlayableDirector for that Timeline. If this child GameObject does not exist, the tool creates a new one and assigns the Timeline to its PlayableDirector.
4. Assigns any other necessary references, such as the **SubtitleManager** or **ChoiceManager**.
5. Adds the phrase to the **DialogueHandler** and then fills the **Next Timeline** value with the next phrase in the conversation sequence.

Mark step as complete

## 7. Test the dialogue importer tool

Q&A (0)

To test the importer tool:

**1.** [Download the importer spreadsheet template](https://docs.google.com/spreadsheets/d/1M0ZLDTXEY8lURZ4WgNU4ZQuTJfK-guptARrVjDPfPdc/export?format=xlsx).

**2.** Review the spreadsheet. Each sheet in the spreadsheet file contains a different conversation, broken down into phrases.

There are a range of columns containing data, but the critical ones for the importer tool are:

- **Speaker (Column A)**: The speaker for each phrase (Player or NPC).
- **Dialogue (Column D)**: The dialogue text for each phrase.
- **StringID (Column E)**: The unique ID for the phrase.
- **→ Next [phrase] (Column F)**: The StringID(s) for the next phrase or choice in the sequence.
- **Audio (Column G)**: The audio file identifier for the phrase. These filenames are the same as the StringID in Out of Circulation, but they don’t have to be.

**3.** Make a noticeable change to the first phrase of dialogue in one of the three existing conversations.

**4.**  Export the conversation sheet as a TSV file. We used the TSV format instead of CSV because our dialogue text contains commas, but it never contains tabs.

**5.**  In the Unity Editor, go to **Tools** > **TSV Importer**.

**6.**  In the ConversationTSVImporter window, copy and paste the content of the TSV file. Select **Import**. The importer will then parse the data that you have submitted.

[Image: image]

**7.**  In the ConversationTSVImporter window, assign the correct**DialogueHandler**for the NPC in the conversation.

[Image: image]

**8.**  The importer tool extracts the Speaker ID from the spreadsheet and lists the different speakers in the conversation — in our case, this is always the NPC and the player character. In the Project window, go to **Assets**> **Data** and find the correct **SubtitleIdentifier**assets for the speakers in the conversation.

The importer tool needs the correct SubtitleIdentifier for each speaker (which defines the portrait, name, and text color displayed in the conversation window) and associates this with the appropriate phrases in the conversation.

**9.**  In the ConversationTSVImporter window, assign the correct **SubtitleIdentifier** assets to the appropriate SpeakerID property (**NPC** and **Player**).

[Image: image]

**10.**Select **Build** and then check that your change has been made. You can either launch the game and initiate the conversation or just review the updated phrase in the relevant Dialogue Handler component.

Mark step as complete

## 8. Explore: Implement a new conversation

Q&A (0)

You’ve tested out the import tool with a minor change, but you can also try a more ambitious customization of Out of Circulation by using the tool to implement a completely new conversation.

Here are some tips to help as you implement a new conversation:

- Don’t change the column titles in the importer spreadsheet — if you do this, the tool will not work. You can add additional columns if you need to though.
- If you want to create a long discussion with multiple branch points, try something smaller first to help you get used to the system.
- [Audio](https://learn.unity.com/tutorial/audio-54h?courseId=625fdcaaedbc2a43147471e0&projectId=62697115edbc2a57a01c5711) is optional, so you don’t need to include audio files if you are just testing a conversation. However, remember that without an audio option for conversation dialogue, you will exclude some players.

Mark step as complete

## 9. Extend: Add variable tracking to conversation choices

Q&A (0)

Most of the accessibility considerations for the conversation system are connected to communicating information to the player. For example, the text of the dialogue is presented through the conversation window. The voiced audio is an alternative method for sharing that information with the player; the audio enhances the game experience, but it also means that more people are able to perceive the conversation.

What if the NPCs changed their attitude towards the player character based on the conversation responses that the player selects? To extend the system in this way, you would need to track variables to store each NPC’s sentiment towards the player character based on those responses.

For example, you might decide that Sureswim’s responses to the NPCs are either optimistic or pessimistic. You could determine dialogue and plot options that only become available when the player has demonstrated a certain amount of optimism through the responses that they choose for Sureswim.

#### Extend the current system

Here is some guidance to help you track variables associated with conversation choices:

- Determine a system for getting and setting named variables. You could adapt the existing **GameStateManager** class to support this functionality.
- Change the **DialogueHandler**class to make the required checks against and adjustments to variables.

#### Communicate the new information with players

Communicating information to players has its own accessibility considerations.

First, you must decide whether it is important to communicate the information that you are tracking to players directly; for example, through NPC sentiment stats. In some games this information is a key aspect of the gameplay. In other games, this information is only available to players indirectly; for example, through conversation options and the overall gameplay experience.

If you communicate this information to players directly, you will add some cognitive complexity to the game: you will be providing your players with more information to interpret. The information might be something that you want to make a core part of the gameplay experience for your game. If not, it may be better to communicate the information indirectly instead.

If you decide to communicate the new information directly to players, identify the related accessibility considerations for your chosen approach. These could include [the design of a new user interface](https://learn.unity.com/tutorial/user-interfaces-ui?courseId=625fdcaaedbc2a43147471e0&projectId=62697115edbc2a57a01c5711) or the use of multiple methods to [communicate important information](https://learn.unity.com/tutorial/important-information-and-communication?courseId=625fdcaaedbc2a43147471e0&projectId=62697115edbc2a57a01c5711).

Mark step as complete

## 10. Communication systems in your game

Q&A (0)

You may not have a conversation system in your game, but many of the principles we followed for our system can be applied to other systems that communicate information to the player.

As you work on your own game, consider the following questions:

- [**No time constraints for reading**](https://gameaccessibilityguidelines.com/allow-players-to-progress-through-text-prompts-at-their-own-pace/): We implemented an Auto Pause Dialogue setting so that players can choose when to progress to the next phrase in a conversation. How will your players be able to control the speed of communication in your game?
- [**Multiple communication modes**](https://gameaccessibilityguidelines.com/ensure-no-essential-information-especially-instructions-is-conveyed-by-text-alone-reinforce-with-visuals-andor-speech/): Communicating information in just one format will exclude some players. Out of Circulation’s dialogue is not just provided as text — it’s fully-voiced and the current speaker is indicated to the player with a character icon in the dialogue window and the camera’s focus (if dynamic cameras are implemented). How do you plan to use audio and visuals to support text content in your game?
- [**Reminders**](https://gameaccessibilityguidelines.com/indicate-allow-reminder-of-current-objectives-during-gameplay/): In Out of Circulation, the player can use the log as a reminder of past conversations. How will your players be able to get a reminder of key information?

**Important**: Your answers to these questions are not a substitute for regular testing and feedback from players with disabilities.

Remember, you can also refer to [the accessibility resources that you explored earlier in this course](https://learn.unity.com/tutorial/create-your-production-plan?uv=2021.3&courseId=625fdcaaedbc2a43147471e0&projectId=626970c3edbc2a6b79429613#6283e13bedbc2a60117fe9b1).

Mark step as complete

## 11. Next steps

Q&A (0)

Explore the other tutorials in [**Design and development**](https://learn.unity.com/project/design-and-development?courseId=625fdcaaedbc2a43147471e0) to find out about other aspects of Out of Circulation’s development. When you’re ready, progress to [**Continue your journey**](https://learn.unity.com/project/continue-your-journey?courseId=625fdcaaedbc2a43147471e0).

Mark step as complete

## Complete this Tutorial

Mark all steps complete
