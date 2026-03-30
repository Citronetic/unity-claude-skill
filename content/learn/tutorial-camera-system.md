[Image: image]

# Camera system

Tutorial

intermediate

+10XP

40 mins

1

(6)

Unity Technologies

[Image: Camera system]Summary

In this tutorial, you’ll learn about the camera system in Out of Circulation. You’ll also investigate accessibility considerations for the camera system in your own game.

Languages available:

EnglishEnglish日本語English

## 1. Overview

Q&A (0)

The camera system has a significant impact on a player’s experience of a game. A poorly designed camera system can ruin a user's experience, and a well designed one is easy to take for granted. However, players can experience significant barriers related to camera systems and how they interact with other aspects of a game — for example, a mismatch between camera movement and player character movement can cause motion sickness.

As with many aspects of Out of Circulation, we worked to reduce barriers related to the camera system by defining a default system configuration that would work for as many players as possible. We also included options for customization so that players could adapt the gameplay experience to meet their specific needs.

In this tutorial, you’ll:

- Evaluate the camera system for Out of Circulation.
- Reconfigure the camera waypoints and weighting.
- Adjust the weighting algorithm.
- Investigate accessibility considerations related to the camera system in your own game.

**Note**: If you’d like to refresh your memory of the high-level details of Out of Circulation before you begin, review [**Explore Out of Circulation**](https://learn.unity.com/tutorial/explore-out-of-circulation-1?courseId=625fdcaaedbc2a43147471e0&projectId=62697115edbc2a57a01c5711).

Mark step as complete

## 2. Our accessibility requirements

Q&A (0)

We set an initial accessibility requirement that no essential information should be outside of the player’s view when a static camera is used in the game. If information is outside of the player’s view, they may not be able to find it or progress with the game. This requirement impacted both the placement of interactive items in scenes and the camera system configuration.

At first we were uncertain whether we would include a dynamic camera mode for the game, as we were unsure whether this functionality was warranted by the relative simplicity of the vertical slice experience. However, it quickly became clear that a dynamic camera mode could improve player experience for some players by providing more flexibility to explore the gameplay scene.

Mark step as complete

## 3. The three camera system modes

Q&A (0)

The camera system for Out of Circulation supports three different modes:

- **Static mode**: A single still camera pose that shows as much of the scene as possible.
- **Dynamic mode**: Multiple camera poses in each gameplay scene, used to give the player a good view of different areas as they explore the scene.
- **Conversation mode**: Two camera poses, each of which focuses on one of the two characters talking in the conversation. When a conversation is active, the camera system always uses the pose that is calculated for the speaking character.

**Note**: Poses represent a position and a rotation.

The default camera mode for Out of Circulation is static to avoid unnecessary camera movement that may be distracting or uncomfortable for some players. It was critical to set the camera pose for static mode carefully — it needed to show all the critical elements in each gameplay scene, including every important interactive object.

Dynamic and conversation modes are only used in Out of Circulation if the **Dynamic Camera** setting is enabled in the game accessibility settings.

Mark step as complete

## 4. Our camera system approach

Q&A (0)

When you develop a camera system in Unity, the first thing that you need to consider is whether you should use the [Cinemachine package](https://docs.unity3d.com/Packages/com.unity.cinemachine@2.2/manual/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952010827).

For Out of Circulation’s planned camera system, the [CinemachineMixingCamera](https://docs.unity3d.com/Packages/com.unity.cinemachine@2.3/manual/CinemachineMixingCamera.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952010827) was an obvious choice, as you can use it to manually set the camera weighting between up to eight child virtual cameras. We decided to use two virtual cameras in each gameplay scene.

#### Dynamic cameras

By default, Out of Circulation uses a single static camera in each gameplay scene. However, players can also turn on dynamic cameras. When dynamic cameras are used, the camera pose will move depending on the player character’s position in the scene and will focus on the current speaker in conversations.

To set up our camera system, we started by pairing each virtual camera with a defined waypoint in each gameplay scene. We then set the relative weight of each virtual camera based on the player character’s proximity to its paired waypoint.

#### Conversations

In a conversation, it makes sense to position the camera over the shoulder of the listener and to have the camera facing the speaker. The camera system determines the ideal pose of the camera by using some vector mathematics and public settings — and since the camera’s pose can be determined in this way, we decided not to use virtual cameras for this part of the system. Instead, the system directly sets the Transform of the camera when a conversation is active.

Here the **Dynamic Camera** setting is turned on for a conversation between Sureswim (the player character) and Old Smalt (the NPC) in the shop:

[Image: image]

At this point in the conversation, the conversation system is waiting for the player to select a response from Sureswim. The camera focus is entirely on Sureswim; Old Smalt is not visible.

Mark step as complete

## 5. Conversation mode implementation

Q&A (0)

There’s a particular challenge of setting the camera’s Transform directly: the player character is spawned into each gameplay scene, so a reference cannot be directly assigned to its Transform. In addition to that, it’s not guaranteed that the player will immediately spawn. To address this issue, we set up an event that initiates when the player character is spawned; the Transform reference is obtained via this event.

#### The DialogueHandler class

In Out of Circulation, character dialogue is broken into units of text called **phrases**. Each phrase has its own individual identifier ID. You can find out more about this in [**Conversation system**](https://learn.unity.com/tutorial/conversation-system?courseId=625fdcaaedbc2a43147471e0&projectId=62697115edbc2a57a01c5711).

Conversations are managed by the**DialogueHandler class**, which has a collection of phrases for each conversation. Each phrase has a **SubtitleIdentifier**, which determines the character that is currently speaking. The DialogueHandler class itself also has a SubtitleIdentifier, which indicates the NPC that is involved in the conversation.

The camera system has a mapping of SubtitleIdentifiers to camera targets. The DialogueHandler tells the camera system which NPC the player is currently in conversation with and who is currently speaking. This means that it is possible to determine the Transforms of both the listener and the speaker at any given moment in each conversation.

#### Conversations without dynamic cameras

If dynamic cameras are turned off, as they are by default, the camera’s Transform is set to directly match the static camera pose when a conversation is active. The static camera pose is a child Transform, which is referenced in script via a public variable.

Here the **Dynamic Camera** setting is turned off for the conversation between Sureswim and Old Smalt in the shop:

[Image: image]

The conversation system is waiting for the player to select a response from Sureswim in this screenshot too. The camera is not focused on Sureswim; Smalt remains in the center of the shot, and more of the shop environment is also visible.

Mark step as complete

## 6. User feedback and iteration

Q&A (0)

It took a number of different iterations to find a camera system configuration that worked well for Out of Circulation. We received some feedback on the camera system from the accessibility specialists who reviewed this project, but most of the feedback on this system was provided by the core project team.

There were some challenges involved in weighting the significance of being close to a waypoint in dynamic camera systems; there are many different algorithms that can be used to do this weighting. In order to find an algorithm that worked well for Out of Circulation, we had to try a few different options.

If you’d like to find out more about how the camera systems work in Out of Circulation, explore the **CharacterController** script.

Mark step as complete

## 7. Explore: Reconfigure the camera waypoints and weighting

Q&A (0)

Our gameplay scenes only use two virtual cameras for the dynamic camera mode. Try adding more virtual camera and waypoint pairs to find new configurations that you like.

Here are some tips to help as you reconfigure the system:

- Fast movement can be disorienting and can cause motion sickness.
- Small changes and testing help you find a configuration that works well.

Mark step as complete

## 8. Extend: Change the weighting algorithm

Q&A (0)

We tested a few different algorithms to find one that was a good fit for Out of Circulation. If you’d like to try a more advanced algorithm for different styles of dynamic camera setup, research **radial basis functions** for more ideas.

**Important**: Different algorithms can offer new opportunities, but they may also create barriers for your players. Before you get swept up in the creative possibilities, think about the player experience that will be created by the dynamic camera setup approach that you choose.

Mark step as complete

## 9. Cameras in your game

Q&A (0)

As you work on your own game, consider the following questions:

- [**Camera and movement difference**](https://gameaccessibilityguidelines.com/avoid-or-provide-option-to-disable-any-difference-between-controller-movement-and-camera-movement-such-as-weaponwalk-bobbing-or-mouse-smoothing/): Out of Circulation has dynamic camera  functionality that won’t work for all players. Other games have different camera and controller movement happening at the same time. How will you design and implement your camera system (and other systems) so your players can choose an experience that meets their needs?
- [**Essential information**](https://gameaccessibilityguidelines.com/avoid-placing-essential-temporary-information-outside-the-players-eye-line/): The placement of essential information in a scene is a design task, but this can also impact how you configure your camera system. How will you validate that you have made the essential information in your game available to a wide range of players and that your camera setup supports this?
- [**Field of view**](https://gameaccessibilityguidelines.com/if-the-game-uses-field-of-view-3d-engine-only-allow-a-means-for-it-to-be-adjusted/): If the field of view for your game is significantly different from what players expect to see, this can cause motion sickness. If your game includes a non-standard field of view, how will you give players the option to customize this based on their needs and environment?

**Important**: Your answers to these questions are not a substitute for regular testing and feedback from players with disabilities.

Remember, you can also refer to [the accessibility resources that you explored earlier in this course](https://learn.unity.com/tutorial/create-your-production-plan?uv=2021.3&courseId=625fdcaaedbc2a43147471e0&projectId=626970c3edbc2a6b79429613#6283e13bedbc2a60117fe9b1).

Mark step as complete

## 10. Next steps

Q&A (0)

Explore the other tutorials in [**Design and development**](https://learn.unity.com/project/design-and-development?courseId=625fdcaaedbc2a43147471e0) to find out about other aspects of Out of Circulation’s development. When you’re ready, progress to [**Continue your journey**](https://learn.unity.com/project/continue-your-journey?courseId=625fdcaaedbc2a43147471e0).

Mark step as complete

## Complete this Tutorial

Mark all steps complete
