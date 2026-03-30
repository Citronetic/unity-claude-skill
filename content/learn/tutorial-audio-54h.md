[Image: image]

# Audio

Tutorial

intermediate

+10XP

40 mins

3

Unity Technologies

[Image: Audio]Summary

In this tutorial, you’ll explore the audio design and implementation for Out of Circulation. You’ll also identify and investigate accessibility considerations for audio in your own game.

Languages available:

日本語English日本語日本語

## 1. Overview

Q&A (0)

Audio requires a design and implementation plan in its own right. It is also an important tool for communicating information to a wide range of players.

Alongside the voiced dialogue for Out of Circulation, we also included mood-setting music, background ambient sound, and a selection of different audio effects. This helped to enhance the atmosphere for the vertical slice and gave us scope to explore different considerations for designing and implementing audio with a focus on accessibility.

In this tutorial, you’ll:

- Evaluate the audio design and implementation in Out of Circulation.
- Adjust the default audio levels and ducking.
- Implement captions for game audio.
- Investigate accessibility considerations related to audio in your own game.

**Note**: If you’d like to refresh your memory of the high-level details of Out of Circulation before you begin, review [**Explore Out of Circulation**](https://learn.unity.com/tutorial/explore-out-of-circulation-1?courseId=625fdcaaedbc2a43147471e0&projectId=62697115edbc2a57a01c5711).

ステップを完了としてマーク

## 2. Our accessibility requirements

Q&A (0)

We set the following initial requirements for the audio in Out of Circulation:

- The character dialogue in each of the three conversations must be fully voiced so the conversations are not only shared with the player via text.
- It must be possible to set the game audio to stereo or mono.
- There must be separate audio channels for sound effects, dialogue, and background audio.
- There must be minimal background audio while a conversation is in progress.

ステップを完了としてマーク

## 3. Audio design

Q&A (0)

Our goal for Out of Circulation was to include a variety of audio. We identified copyright-free music tracks for each scene and recorded the character dialogue within the team. Since we didn’t have an audio specialist on our team, we hired external specialists [Sounding Sweet](https://www.soundingsweet.com/) to create sound effects and ambient tracks and complete the post-production work.

**Note**: The UI narration functionality in Out of Circulation uses the player’s operating system’s or designated screen reader’s text-to-speech functionality. This is explored in [**User interfaces (UI)**](https://learn.unity.com/tutorial/user-interfaces-ui?courseId=625fdcaaedbc2a43147471e0&projectId=62697115edbc2a57a01c5711).

#### Fully-voiced dialogue

The fully-voiced dialogue for Out of Circulation is an important aspect of communicating critical information to the player. If we hadn’t chosen to record audio dialogue, we would have needed to enable UI narration for character speech, otherwise the plot for the vertical slice would only be conveyed through text. Technically this would have worked, and it would have spared us the challenges of recording the character dialogue audio ourselves. However, text-only narration isn’t necessarily a very engaging experience for players. We felt that audio dialogue would better communicate the meaning and tone of the written copy, which would benefit a wider range of players.

#### Background music and ambience

Background music contributes to the mood of Out of Circulation, and the ambient sound helps to ground the gameplay scenes in their respective locations; for example, the ambient sounds of rustling paper in the library. These tracks help set the mood and create a sense of place in each location, but they don’t communicate any important plot or gameplay information.

#### Sound effects

In Out of Circulation, sound effects act as confirmation of an action (for example, interacting with an item) rather than as a tool for communicating any important plot or gameplay information.

If sound effects were being used to communicate important information, such as the location of an antagonist hiding in the library, we would also have implemented captions or an alternative method of communicating that information to the player. That approach felt more complex than the usual approach for a narrative adventure game, so we decided to keep things as simple as possible.

ステップを完了としてマーク

## 4. Audio implementation

Q&A (0)

When the team implemented the audio in Out of Circulation, the main challenge was setting up the stereo and mono audio options correctly. The default audio setting for the vertical slice is stereo, and outputting the audio tracks to the appropriate audio group was critical to make this sound good.

Next, we implemented a mono audio override. If important sounds are only provided from one direction, as they can be with stereo audio, some players will miss this information.

When the player sets the game audio to mono, they switch the output device so that all audio in the game outputs to a mono channel. This change stops all the audio sources in Out of Circulation and resets the audio system. The game audio will stop while this happens, and it will then restart at the same point in each audio track.

As players are most likely to switch the game audio to mono when they start playing, this system restart is unlikely to interrupt a conversation, which is the most important audio in the vertical slice.

You can review the code for the mono audio override in the **AudioManager** class.

ステップを完了としてマーク

## 5. User feedback and iteration

Q&A (0)

Game audio that is too loud or poorly balanced can be overwhelming. Although the player has control over each audio track in Out of Circulation, feedback from a variety of different players was critical to establish default volume levels that would be a good starting point.

We received helpful feedback on the volume levels of different tracks from the accessibility specialists who reviewed the game. The QA tester for Out of Circulation also completed iterative reviews to help the team refine the game audio default levels.

#### Audio ducking

One of the final things that we did to refine Out of Circulation overall was to adjust the audio ducking. **Audio ducking**is the practice of reducing (ducking) volume levels of one or more audio tracks in response to another audio track playing or increasing in volume. This can help minimize background noise when important audio is playing and avoid players being unable to perceive the important audio or feeling overwhelmed by the noise.

In Out of Circulation, we duck the background music and ambience tracks when dialogue audio is played.

**Note**: No sound effects play while conversations are in progress, so we did not need to duck this audio.

ステップを完了としてマーク

## 6. Explore: Adjust the default audio levels and ducking

Q&A (0)

If you want to explore the impact of different audio tracks in our vertical slice, you can change the background audio and ambience tracks and adjust the default volume values and ducking for conversations.

You can also explore alternative default values and ducking for the audio that is already in Out of Circulation if you prefer; we refined the audio implementation, but that doesn’t mean that we found the perfect default configuration.

ステップを完了としてマーク

## 7. Extend: Implement audio captions

Q&A (0)

If we had designed the audio with sound effects that conveyed important gameplay information to the player, that information would have needed to be available in another format as well as audio. One approach would be to implement text captions that describe each sound effect.

If you want to explore this approach in Out of Circulation, try [implementing captions](https://learn.unity.com/tutorial/implement-sound-effects) for audio that provide the player with new information in the vertical slice.

**Tip**: You could remove the background music in the shop and add a radio to provide diegetic sound instead, such as a local news report that provides players with a clue.

ステップを完了としてマーク

## 8. Audio in your game

Q&A (0)

As you work on your own game, consider the following questions:

- [**Gameplay-essential sounds**](https://gameaccessibilityguidelines.com/ensure-that-all-important-supplementary-information-eg-the-direction-you-are-being-shot-from-conveyed-by-audio-is-replicated-in-text-visuals/): The only audio that’s essential to the gameplay in Out of Circulation is the spoken dialogue. However, many games use audio cues to share important information with the player too. How are you going to represent essential  information delivered through audio in other ways?
- [**Volume controls**](https://gameaccessibilityguidelines.com/provide-separate-volume-controls-or-mutes-for-effects-speech-and-background-music/): There are a lot of different sounds in Out of Circulation — it was important to give the player control over the volume level of each specific type so they can customize their experience beyond their operating system’s audio settings. How do you plan to organize your game audio and give players control over the volume levels?
- [**Focus on important audio**](https://gameaccessibilityguidelines.com/keep-background-noise-to-minimum-during-speech/): In Out of Circulation we used audio ducking to help the player focus on the dialogue audio when a conversation starts. How do you plan to help players focus on the most important audio when more than one source is playing at once?

**Important**: Your answers to these questions are not a substitute for regular testing and feedback from players with disabilities.

Remember, you can also refer to [the accessibility resources that you explored earlier in this course](https://learn.unity.com/tutorial/create-your-production-plan?uv=2021.3&courseId=625fdcaaedbc2a43147471e0&projectId=626970c3edbc2a6b79429613#6283e13bedbc2a60117fe9b1).

ステップを完了としてマーク

## 9. Next steps

Q&A (0)

Explore the other tutorials in [**Design and development**](https://learn.unity.com/project/design-and-development?courseId=625fdcaaedbc2a43147471e0) to find out about other aspects of Out of Circulation’s development. When you’re ready, progress to [**Continue your journey**](https://learn.unity.com/project/continue-your-journey?courseId=625fdcaaedbc2a43147471e0).

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
