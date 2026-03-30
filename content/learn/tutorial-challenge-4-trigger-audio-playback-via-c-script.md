[Image: image]

# Challenge 4: Trigger Audio Playback via C# Script

Tutorial

Beginner

+10XP

20 mins

5

(88)

Unity Technologies

[Image: Challenge 4: Trigger Audio Playback via C# Script]Summary

Learn how to trigger audio playback in the scene using a custom C# script component

Languages available:

EnglishEnglish日本語English

## 1. Creating the C# script

Q&A (0)

- Create a new C# Script in the Project window and name it HonkAudioController **(Create > C# Script)**

[Image: image]

- Open the newly created script in your code editor.

[Image: image]

- To trigger an AudioClip when the Player GameObject enters the collider of the attached GameObject, modify the script to look like following:

[Image: image]

Back in Unity;

- Select the Horn_Collider GameObject **(Car > Horn_Collider)** from the Hierarchy, and add your HornAudioController component to it by clicking Add Component, searching for and selecting the HornAudioController.

[Image: image]

- In the Horn_Collider’s Inspector, drag the Audio Source onto the AudioSource field of the HornAudioController, and set the Horn AudioClip to the CarHorn.

[Image: image]

- Play the scene and walk in front of the car to trigger the Horn audio.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
