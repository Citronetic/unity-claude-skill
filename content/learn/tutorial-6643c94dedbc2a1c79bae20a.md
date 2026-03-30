[Image: image]

# Create an immersive soundscape

Tutorial

foundational

+10XP

20 mins

13

(587)

Unity Technologies

[Image: Create an immersive soundscape]Summary

Bring a kitchen scene to life with audio, including some background music, a boiling pot of water, and even some birds chirping outside.

Languages available:

EnglishEnglishEspañolEnglish

## 1. Mission overview

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

In this Audio Mission, you will learn the fundamentals of implementing different types of audio into Unity scenes. You’ll learn how to set the tone with background music, how to add realism with sound effects, and even how to implement spatial audio in a 3D scene.

When you watch the video demos throughout this tutorial, make sure to turn on your computer’s sound!

Mark step as complete

## 2. Open the kitchen scene and enter Play mode

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

In this step, you'll just explore the silent kitchen scene.

This scene is already set up with a script, attached to the Main Camera, that will work in Play mode. This script allows the user (you, for now) to easily explore the environment with the WASD keys and listen to the sounds in the scene from a first-person perspective.

By default, the Main Camera will have an **Audio Listener** component on it, which acts like the player’s ears. When the **Audio Listener** component is far away from a sound, it should be quieter. When the **Audio Listener**  component is closer to a sound, it should be louder. With this component, the camera acts both as the player’s eyes and ears in the scene.

In fact, Unity does not even allow you to have more than one active **Audio Listener** component in a scene. With multiple sets of “ears” in different locations, at what volume would you play a sound?

**Instructions**

**1.**  In the **Project** window, in the **_Unity Essentials** > **Scenes** folder, locate and open the **3_Kitchen_Audio_Scene.**

**2.**  In the **Scene** view, use Flythrough mode (right-click + WASD) or the Frame, Orbit, Zoom technique to give yourself a good view of the interior of the kitchen.

**3.**  Enter **Play** mode to preview the silent kitchen scene, then use the WASD keys to move forward, backward, and to turn left and right. To look up and down, use your mouse.

If you are you using your mouse to look up and down and the cursor moves off to the edge of your screen during **Play** mode, don’t worry – that’s expected.

**4.**  Once you feel comfortable navigating with this pre-built player controller script and have explored the silent kitchen scene, exit **Play**mode.

**5.**  In the **Hierarchy** window, select the **Main Camera** GameObject, then locate its **Audio Listener** component.

Mark step as complete

## 3. Add a pot to the stove

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

Now you’ll add a pot to the stove in the kitchen. The pot comes equipped with a particle system for the steam and for the bubbling, boiling water.

**Instructions**

**1.**  In the **Project** window, navigate to **_Unity Essentials** > **Prefabs** > **Kitchen.**

**2.**  Click and drag the **Boiling_Pot** prefab onto the stove in the **Scene** view.

Notice the distinctive icons that cover the pot. These represent the particle systems for the steam and bubbles.

**3.**  Frame and orbit around the pot in the **Scene** view to get a close look at it and to center it carefully over one of the burners.

If you want, enter **Play** mode and approach the pot to see the boiling water and steam in action.

Mark step as complete

## 4. Add a boiling sound

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

Now it’s time to add an **Audio Source** component, which will simulate the sound of boiling water. In Unity, an **Audio Source** component acts as the origin of sound in your virtual environment.

**Instructions**

**1.**  In the **Hierarchy window**, select the **Boiling_Pot** GameObject.

**2.**  In the **Inspector** window, select **Add Component** and enter “Audio Source” to add it to the selected object.

**3.**  In the new **Audio Source** component, locate the**Audio Generator** property.

This is where you specify the actual sound file you want to play. Unity allows only one clip per **Audio Source**.

**4.**  Use the **Object** picker (**⊙**) for the **Audio Generator** property to browse all available audio clips in your project, then select the **Bubbling_Water** audio clip from the list provided.

**5.**  To make the clip play on repeat, enable the **Loop** property in the **Audio Source** component.

**6.**  Enter **Play** mode to test the new audio.

The sound should play, but it will maintain the same volume regardless of the camera's position relative to the source, which sounds unnatural — you’ll fix that next.

Mark step as complete

## 5. Make it a 3D Audio Source

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

In real life, sounds change in volume in each ear based on your distance and direction relative to the sound source.

By default, audio in a Unity scene is **2D Audio,** which means that it stays the same regardless of the listener's position or orientation in the game world.

**3D Audio,** on the other hand, is **spatialized:** the sound changes based on the listener's position and orientation relative to the **Audio Source**, mimicking how sound behaves in the real world.

Let's make the Boiling_Pot audio clip a 3D experience!

**Instructions**

**1.**  In the **Boiling Pot** GameObject’s **Audio Source** component, locate the **Spatial Blend** property and drag the slider from **0** (fully 2D) to **1** (fully 3D).

**2.**  Enter **Play**mode again to test your new 3D spatial audio effect. Move closer and farther away, and be sure to experience the stereo effect by rotating your view left and right relative to the boiling pot.

**3.**  Exit **Play** mode.

Mark step as complete

## 6. Add background music

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

In this step you'll add background music, which will set the emotional tone of your scene. The track you select can completely alter the ambiance of the scene, whether it's a calm classical piece, something more upbeat, or even something a little spooky.

The boiling pot is meant to mimic real-world 3D sound coming from the environment. Background music, on the other hand, isn’t produced by anything in the environment and is purely used to enhance the overall atmosphere of the scene.

Let's set a mood in this scene with some background music.

**Instructions**

**1.**  In the **Hierarchy** window, right-click in the empty space and select **Audio** > **Audio Source.**

This will create a new GameObject that only has a **Transform** component and an **Audio Source** component.

**2.**  Rename the GameObject “Background Music” for clarity.

**3.**  In the **Project** window, browse the available music options in the **_Unity Essentials** > **Audio** > **Music** folder.

You can preview the selected music in the **Preview** panel at the bottom of the **Inspector** window.

**4.**  In the **Background Music** GameObject’s **Audio Source** component, set the **Audio Generator** to your desired music, then enable **Loop.**

**5.**  Adjust the **Audio Source’s** **Volume** property to a more subtle level, like **0.1 - 0.5,** to ensure the background music doesn't overpower other sound in the scene.

**6.**  Keep the **Spatial Blend** of this **Audio Source** component as the default 2D so that the background music's presence is consistent throughout the scene without positional changes.

**7.**  Enter Play mode to test your background music and how it interacts with the sound of the boiling pot.

You may want to change the volume of the boiling pot or the music to get the balance just right.

**Note:**  Remember to save your scene often with **Ctrl+S** (macOS: **Cmd+S**).

Mark step as complete

## 7. Add random bird sounds outside

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

To further enrich the soundscape of your kitchen scene, next you'll add the ambient sound of birds chirping outside.

You'll achieve this effect by positioning **Audio Sources** outside the kitchen, such as near a window or in an adjacent outdoor area, and using a custom script to play bird chirping sounds at random intervals.

This randomness mimics the natural behavior of birds, making the scene more immersive and lifelike.

**Instructions**

**1.**  Create a new **Audio Source** in your scene and position it where you'd like the sound of a bird to originate, such as outside a window or near an imaginary tree.

**2.**  Rename this **Audio Source** something descriptive, like “Bird_1”.

**3.**  Assign the **SFX_Bird_1** sound as the **Audio Generator** of the source, then make sure to set the **Spatial Blend** to **1.0** (full 3D).

**4.**  To avoid the bird sound playing immediately as the scene loads, disable the **Play on Awake** property.

**5.**  Select **Add Component,** then search for and add a component named “Play Sound at Random Intervals”.

We've provided this simple script so that you can play an audio clip at random time intervals. If you want, adjust the properties to change the minimum and maximum seconds.

**6.**  Enter **Play** mode to hear the bird chirping at random intervals.

**7.**  Duplicate this **Audio Source** for additional birds. Rename each **Audio Source** accordingly (for example, “Bird_2”, “Bird_3”, etc.), and position them at different points around the exterior of the kitchen.

**8.**  For each new bird sound source, choose a different bird chirping sound to vary the soundscape.

**9.**  Enter **Play** mode to appreciate the level of immersion that is added to the scene with this natural-sounding ambient audio.

**10.**  Save your scene.

Mark step as complete

## 8. Review and proceed to next tutorial

Q&A (0)

Congratulations on enriching your kitchen scene with immersive audio. From the subtle boiling pot on the stove to the serene background music and the lively chirping of birds outside, each audio element you've added plays a crucial role in bringing your scene to life.

Here are some of the things you learned how to do along the way:

- Explain the purpose of an Audio Source.
- Explain the purpose of an Audio Listener.
- Add a source of sound in the scene with an **Audio Source** component.
- Explain the difference between 2D and 3D (spatialized) audio.
- Change 2D audio into 3D sound for realistic spatial effects.
- Add background music to a 3D scene.
- Layer different types of audio to create a rich soundscape.

**Instructions**

Proceed to the next tutorial, which includes optional challenges to further develop your skills, explore new concepts, and improve your project.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
