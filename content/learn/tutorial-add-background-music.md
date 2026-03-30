[Image: image]

# Add background music

Tutorial

foundational

+10XP

15 mins

34

(6680)

Unity Technologies

[Image: Add background music]Summary

This tutorial will get you started with audio by introducing you to the Audio Source Component and showing you how audio is added to a Scene.

In this tutorial, you will:

- Add an Audio Source Component to a GameObject.
- Add an Audio Clip to an Audio Source.
- Implement background music in a 3D Scene.

Resources

- [Foundations of Audio](https://assetstore.unity.com/packages/essentials/tutorial-projects/foundations-of-audio-183075)

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. Overview

Q&A (0)

In this tutorial, you will explore the audio features of Unity. Audio is critical to making simulated environments feel real.

In previous challenges, you saw how Unity helps you simulate the ways objects interact with each other. Unity also simulates the ways sound waves interact in a physical environment. Audible sounds change depending on the listener’s distance from the source, and even on the physical characteristics of the materials between the source and listener.

This introductory tutorial will help you explore the ways Unity enhances realism with audio.

ステップを完了としてマーク

## 2. Before you begin

Q&A (0)

To set up your Unity project:

**1.**  Open the **Unity Hub**.

**2.** [Create a new Unity project](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196) using the **3D** **(URP) Template**.

[Image: image]

**3.**  Go to the [Foundations of Audio assets](https://assetstore.unity.com/packages/essentials/tutorial-projects/foundations-of-audio-183075) in the Unity Asset Store.

**4.** [Download and import the assets into your Unity project.](https://learn.unity.com/tutorial/project-setup-processes#60ed7a86edbc2a002520b6f4)

That’s it! Now that you’re all set up, let’s open and test the scene.

ステップを完了としてマーク

## 3. Open and test the Example Scene

Q&A (0)

**1.**Open the Scenes folder in the Project window and double-click the **EssentialsAudioScene**to open the example Scene.

[Image: image]

**2.**Select the **Play** button to test the Scene.

**3.**Drag your mouse without clicking to look around the Scene. Use the WASD keys (W forward, S backwards, A left, D right) to navigate your view of the Scene.

**4.**Select **Play** to stop testing the example Scene.

ステップを完了としてマーク

## 4. Create an empty GameObject

Q&A (0)

You will use an empty GameObject as a placeholder and container for the background audio. To set this up:

**1.**Right-click in the Hierarchy and select **Create Empty**.

[Image: image]

**2.**Rename this GameObject to Music in the Inspector.

[Image: image]

**3.**In the Inspector, reset the position by selecting the three dots on the right and then selecting **Reset Position**. This sets the position of the center of the GameObject to 0,0,0, aligning it to the center of your Scene.

If **Reset Position** is grayed out, check the GameObject’s current position — it might already be at 0,0,0.

[Image: image][Image: image]ステップを完了としてマーク

## 5. Add audio to the empty GameObject

Q&A (0)

To make a GameObject play audio in your scene, you need to add an **Audio Source Component:**

**1.**In the Hierarchy window, select the Music GameObject.

**2.**Select the **Add Component** button in the Inspector window.

[Image: image]

**3.**Use the search bar to find an **Audio Source** component and select it.

[Image: image]

**4.**In the Audio Source Component in the Inspector, examine the available properties.

[Image: image]

For the Audio Source to play sound, you will add an **Audio Clip**.

**5.**In the Project Window, open the Audio folder to see the Audio Clips provided with this example project. Select **Music.**

[Image: image]

**6.**In the Inspector window you will see the Import Settings for the Music Audio Clip. At the bottom of the Inspector window, you will see a Waveform Preview of the selected Audio Clip. If you do not see this, click and drag upwards on the Preview Header at the bottom to reveal the Preview Panel.

[Image: image]

**7.**Select the **Play**button to preview the Music Audio Clip. You can click on the waveform to skip through playback, as well as click and drag to scrub through the waveform. Select the Play button again when you are finished previewing.

[Image: image]

**8.**In the Hierarchy window, select the Music GameObject.

**9.**In the Inspector window click the circle icon to the right of the Audio Clip.

[Image: image]

**10.**The Select Window will open and show all the available Audio Clips in this Project. Select the Music Audio Clip to assign it as the Audio Clip for the Music Audio Source.

[Image: image]

**11.**Select the **Play**button to test. If you do not hear any music playing, make sure that the Game View’s Mute Audio button is not currently enabled. Click the **Mute Audio** button to toggle between muted and unmuted when in Play Mode.

**Note:** If you still do not hear any music playing, make sure the **Play On Awake** setting in the Audio Source Component is enabled.

[Image: image]ステップを完了としてマーク

## 6. Next steps

Q&A (0)

You have incorporated audio into a Scene, but there is so much more you can do with audio. In the next tutorial, you’ll learn about the role of audio in a real-time 3D project, and create realistic sound for a 3D environment.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
