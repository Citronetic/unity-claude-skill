[Image: image]

# Get started with audio

Tutorial

Beginner

+10XP

25 mins

1

(19)

Unity Technologies

[Image: Get started with audio]Summary

In this project, you’ll bring a scene to life using audio effects. You’ll explore the different ways audio is perceived, and implement ambient and event based sound. You’ll also learn a bit about accessibility considerations for audio, and how you can build a more inclusive experience by implementing closed captioning.

By the end of this tutorial, you'll be able to:

- Describe the science of audio in digital environments.
- Recommend audio source file formats that can be used in a given project.
- Explain the role of audio in supporting narrative and worldbuilding.
- Explain the difference between diegetic and nondiegetic sound.
- Describe the primary types of audio found in real-time projects.
- Explain the role of audio in developing atmosphere.

Resources

- [CreativeCore_Audio_U6.3.zip](https://storage.googleapis.com/learn-platform-bucket-production/tutorial/eea205f2-7299-48cb-a9b8-e5276f57d5d0/versions%5B_key==%22b47c22373513%22%5D.materials%5B_key==%22a3dd1cbc396d%22%5D.file/CretiveCore_Audio_U6.3_20251205_203024.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955829769)
- [Monday at 5-35 PM.mp3](https://storage.googleapis.com/learn-platform-bucket-production/tutorial/eea205f2-7299-48cb-a9b8-e5276f57d5d0/versions%5B_key==%22918b6b901a76%22%5D.materials%5B_key==%2244f7ff6a3f54%22%5D.file/Monday%20at%205-35%20PM_20251118_170226.mp3?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955829769)
- [Tuesday at 4-24 PM.mp3](https://storage.googleapis.com/learn-platform-bucket-production/tutorial/eea205f2-7299-48cb-a9b8-e5276f57d5d0/versions%5B_key==%22918b6b901a76%22%5D.materials%5B_key==%22f7f387afdc64%22%5D.file/Tuesday%20at%204-24%20PM_20251118_170328.mp3?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955829769)

Languages available:

日本語EnglishEspañol日本語日本語

## 1. Overview

Q&A (0)

Audio is one of the most overlooked aspects of interactive development, but it’s also one of the first things that can disrupt a user’s immersion if done poorly, or worse, if completely forgotten about. If you’re hearing able, sounds follow your every move and are part of every environment, whether you’re aware of it or not. We take this unconscious expectation into interactive experiences and can immediately tell if something sounds right or sounds wrong.

In this project, you’ll bring a scene to life using audio effects. You’ll explore the different ways audio is perceived and implement ambient and event based sound. You’ll also learn a bit about accessibility considerations for audio and how you can build a more inclusive experience by implementing closed captioning.

By the end of this project, you’ll have all the skills you need to implement basic audio effects in your project.

ステップを完了としてマーク

## 2. Before you begin

Q&A (0)

New to Unity?

This learning experience assumes that you are already familiar with the Unity Editor. If you’re new to Unity, the[Unity Essentials learning pathway](https://learn.unity.com/pathway/unity-essentials) has been designed to help you get set up and ready to create in the Unity Editor.

Update the Unity Hub

Before you begin to set up your Unity project, consider updating your Unity Hub to the latest release. If you are using an older version of the Hub, there may be differences between the guidance provided and your experience.

Review the Unity Editor basics

If you need to refresh your memory of the Unity Editor basics, you can take a moment to review [**Explore the Unity Editor**](https://learn.unity.com/tutorial/explore-the-unity-editor-1) at any time.

Set up your Unity project

To set up your Unity project:

**1.** [Install **Unity 6**](https://learn.unity.com/tutorial/project-setup-processes#60ed7a3fedbc2a001f71f1aa), if you haven’t already done so.

**2.** Download[the project](https://storage.googleapis.com/learn-platform-bucket-production/tutorial/eea205f2-7299-48cb-a9b8-e5276f57d5d0/versions%5B_key==%22b47c22373513%22%5D.materials%5B_key==%22a3dd1cbc396d%22%5D.file/CretiveCore_Audio_U6.3_20251205_203024.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955829769)for this learning experience.

**3.**  Identify a suitable location on your computer and unzip the project folder there. Remove the Unity project folder from its empty parent folder.

**4.** [Add the Unity project to the Unity Hub](https://learn.unity.com/tutorial/65f8a6e3edbc2a545fc44bd3).

**5.**  Open the project from the Unity Hub.

**6.**  In the Unity Editor’s Project window, locate the Scenes folder and then open **Audio_Outdoor_Scene**.

**7.** Ensure that your computer’s system audio is on and at a comfortable volume.

**8.**Check to make sure that audio is not muted in Unity by going to the game view, and checking that the ‘Mute Audio’ icon in the upper right hand corner is not selected.

[Image: image]

**9.** Playtest the game.

The lack of audio doesn’t necessarily seem strange when working in the editor, but if this scene was published now users would feel as if it was incomplete.

**10.**  Exit Play mode.

You’re now ready to begin creating a soundscape.

ステップを完了としてマーク

## 3. Welcome to Creative Core: Audio

Q&A (0)

What is the goal of Creative Core: Audio?

The goal of this learning experience is to introduce you to the core tools used to create audio for interactive experiences in Unity. The skills you build in this project will help you create engaging audio soundscapes for your own projects, and they are applicable across all creative industries.

What will I do in this learning experience?

As you work your way through these tutorials, you’ll create your first complete soundscape for an outdoor scene. You’ll learn how to assess scene audio needs and identify important sound sources. You’ll then discover how to trigger audio with events and then move on to create customized audio sources. As you continue to build up your soundscape, you’ll apply special effects to help reflect the environment visuals, before finally exploring accessibility considerations for audio. You’ll complete this project by creating your own audio soundscape from scratch for a brand new scene.

What will my learning outcomes be?

By the end of this learning experience, you will have worked with all of the major audio components in Unity and will be able to confidently create audio effects for a variety of different experiences in your own projects.

You’ll be able to apply these skills to add audio to your chosen guided project and your independent project (if you are completing the **Creative Core** pathway), or any other prototype real-time experience created with Unity.

ステップを完了としてマーク

## 4. What does an audio engineer do?

Q&A (0)

Background

There are two main types of sound that audio engineers work with: **diegetic** and **non-diegetic**. **Diegetic** sound is sound that exists within the world of the experience: everything from characters speaking to the ambient sounds of the environment they’re in. **Non-diegetic** audio is anything that’s added on top of the experience for the benefit of the audience, such as soundtracks. Whether it's diegetic or non-diegetic, audio engineers are responsible for everything to do with sound in an interactive experience. If it makes a sound, the audio engineer knows about it.

Responsibilities

Audio engineers are responsible for making sure that everything sounds good in the experience, but they’re also responsible for where those sounds come from. They can work with preexisting sound libraries or create effects themselves from scratch. For this reason, it’s common for audio engineers to have experience with sound design, specifically in the realm of music or foley production

Tools

In addition to Unity, audio engineers are likely to use other software to produce or edit sound effects, which may include:

- [**Wwise Spatial Audio**](https://www.audiokinetic.com/products/wwise/): A plugin for more advanced spatial audio effects, used by both indies and AAA studios alike.
- [**Audacity**](https://www.audacityteam.org/): An open source audio application that lets you record and edit audio effects. It’s particularly useful for making small edits to existing sounds.
- [**Beepbox**](https://www.beepbox.co/): A free online tool for creating instrumental melodies.

ステップを完了としてマーク

## 5. How does audio work in Unity?

Q&A (0)

At its core, audio in Unity is all about the interaction between two components: the Audio Listener and the Audio Source.

[Image: image]

An Audio Listener serves as the user’s ears in the interactive experience. Listeners are passive components, meaning there’s nothing for you to configure, and they’re automatically included on cameras. Listeners are associated with cameras because cameras represent the user’s eyes in an interactive experience, and it makes sense to pair the user’s ears with them. Any time an audio listener comes into range of an audio source, the audio source will play the assigned audio clip. There can only ever be one Audio Listener in a scene, so additional cameras will need their listeners removed.

Audio Sources are the components that hold audio files in the Scene view. They define the range that the sound can be heard from as well as how it's perceived by the Audio Listener. There’s no limit to how many Audio Sources are allowed in a scene, so every object that needs to produce a sound can have one.

Unity is capable of handling the following audio formats:

- MPEG (developed by the Moving Picture Experts Group). For example, [footsteps.mp3](https://drive.google.com/file/d/1P8rTJPqiMbb0tkBt2VyYnB8jCTmd8tex/view?usp=drive_link).
- Ogg Vorbis - open-source general purpose audio. For example, [footsteps.ogg](https://drive.google.com/file/d/1I62A0pzagJkNpxPDQ0lrwR6cU3dyg7FQ/view?usp=drive_link).
- WAV (Waveform Audio File) - developed by Microsoft and IBM. For example, [footsteps.wav](https://drive.google.com/file/d/1N9SWxfwPQzSv0YU_EibmoUCYpVncpMCm/view?usp=drive_link).
- AIFF (Audio Interchange File Format) - developed by Apple. For example, [footsteps.aiff](https://drive.google.com/file/d/1qJbs-PtnOoSLWL4kCVK2LkW94Ddbrhv1/view?usp=drive_link).

ステップを完了としてマーク

## 6. The importance of audio in interactive experiences

Q&A (0)

Sound can change the way that we experience the world around us. This is also true for interactive experiences. Take a moment to hear why our pros believe that audio is so important:

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

ステップを完了としてマーク

## 7. Explore: What can you hear?

Q&A (0)

If you are hearing-able, there are never really any instances where you experience true silence. Even in silent rooms – specialized rooms developed to prevent any noise from being produced – people report eventually being able to hear the sound of their own heartbeats and even the blood coursing through their veins!

However, we often believe we do experience complete or near silence. Maybe you’re reading this in what you think is a silent room now. The reason for this is our ability to filter out noise that we don’t consider important. This happens automatically, and it's very fortunate that it does – we live in a very noisy world!

Download and listen to the audio clip below. It’s a short recording of a walk taken on a quiet street on a late autumn afternoon.

[Monday at 5:35 PM](https://storage.googleapis.com/learn-platform-bucket-production/tutorial/eea205f2-7299-48cb-a9b8-e5276f57d5d0/versions%5B_key==%22918b6b901a76%22%5D.materials%5B_key==%2244f7ff6a3f54%22%5D.file/Monday%20at%205-35%20PM_20251118_170226.mp3?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955829769)

What sounds do you hear? A quiet walk isn’t actually quiet after all. Here are just a few different sounds to listen for:

- Footsteps
- Birdsong
- Wind
- Cars driving past
- A metal fence moving in the breeze
- Distant chatter
- Nearby people talking

To develop your audio design skills, you should make it a practice to occasionally tune back into the noise. What does an empty room really sound like? What about a train station? Your back yard at night?

Take a moment now to really listen to the room around you. What do you hear? Even if it’s quiet, you’re bound to hear something that you didn’t notice at first. Is there a fan running somewhere? What about pipes in the wall? Can you hear traffic outside? An airplane overhead?

Write out a list of everything you can hear at this moment, and then reflect on what you wrote. How does the list you created compare to what your initial consideration of your environment was? If you thought it was quiet, does it still seem that way now?

New audio designers often stop at surface level sounds. By digging deeper and really assessing what kind of sounds would make sense for your environments, you’ll create fuller, more realistic experiences.

Not in a place where you can freely move around? Use this ambient home office audio as a point of reference to study!

[Tuesday at 4:24 PM](https://storage.googleapis.com/learn-platform-bucket-production/tutorial/eea205f2-7299-48cb-a9b8-e5276f57d5d0/versions%5B_key==%22918b6b901a76%22%5D.materials%5B_key==%22f7f387afdc64%22%5D.file/Tuesday%20at%204-24%20PM_20251118_170328.mp3?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955829769)

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
