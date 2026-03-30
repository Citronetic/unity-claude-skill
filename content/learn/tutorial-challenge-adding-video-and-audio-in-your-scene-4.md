[Image: image]

# Challenge — Adding Video and Audio in your Scene

Tutorial

Beginner

+10XP

30 mins

0

(55)

Unity Technologies

[Image: Challenge — Adding Video and Audio in your Scene]Summary

In this challenge, you will be adding a video and three sound sources to the prehistoric Scene.

Resources

- [Tutorial13_VideoChallenge.zip](https://unity-connect-prd.storage.googleapis.com/20200423/b156f69a-2ca1-4194-aabb-27294f95ad30/Tutorial13_VideoChallenge.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952228711)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In this challenge, you'll add a video to the prehistoric Scene as well as three sound sources (see example in the videos below). While this project specifically uses prehistoric media, you can use the same process to make other portal-type apps using videos or sound sources in an AR Scene.

**Remember**: The use of graphics and audio help boost immersion and, in turn, help you create more effective marketing applications.

**For this challenge, you’ll need to:**

1. Add the Video component to the Video Player GameObject
2. Add a Video Clip to the Video Player component
3. Add each Audio Source to its own GameObject
4. Place each Audio Source in its own location
5. Adjust Spatial Blend on each Audio Source to 3D

[Image: image][Image: image][Image: image]

**Note:** Audio playback is not supported on the platform, but the steps to configure audio in Unity are accurate.

Mark step as complete

## 2. Add a Video Player Component to the VideoPlayer GameObject

Q&A (0)[Image: image]

1. Locate the **Video Player** in the Hierarchy (**Video > Video Player**).
2. Add a Video Player component by clicking **Add Component** and searching for **Video Player**.

Mark step as complete

## 3. Configure the Video Player Component and the Video Controller Component

Q&A (0)

*Configure the Video Player by adding the appropriate video clip, toggling the Loop checkbox, and adding the Video Player component to the GameObject.*

[Image: image]

1. Add the **Ancient Cities** video clip to the Video Player by dragging it from the Project window into the **Video Clip** field.
2. Toggle the **Loop** checkbox to ensure the video clip repeats.
3. Attach a **Video Controller** to the Video Player GameObject by clicking**Add Component** and searching for and selecting the **Video Controller** component. **Note**: You will configure the Video Controller in the next step.

--------------------

**What is a Video Controller?**

A **Video Controller** is a script component that allows the use of a play and pause button with your Video Player. This component is a quick way to add UI functionality to the Video Player.

Mark step as complete

## 4. Assign the UI Buttons to the Video Controller Component

Q&A (0)

*There are some empty fields on the Video Controller script (Video Player, Play and Pause buttons). Assign the fields appropriately.*

[Image: image]

**1.** Assign the **Video Player** to the Video Controller’s **Video Player field** by dragging it directly into the slot.

[Image: image]

**2.** You’ll find the **Play** and **Pause** buttons under the **Canvas GameObject** in the Hierarchy.

​**3.** Drag them into the Video Controller component’s **Play Button**and**Pause Button**slots, respectively.

[Image: image]Mark step as complete

## 5. Create Ambient Audio Sources

Q&A (0)

*Beneath DINOISLAND, map sounds holds environment Audio Clips on each of the respective GameObjects. You’ll duplicate the ocean_audio GameObject and place those around the map.*

[Image: image]

**1.** In the Hierarchy, click on **ocean_audio (1)**.

**2.** Duplicate it 11 times.

**3.** Move each instance within the Scene view until the placement seems reasonable. **Note**: "Reasonable" means that there is some audio surrounding the main Camera almost anywhere the person goes

**4.** Rename each Audio Source to something indicative of the sound file you place on it. For example, the GameObject housing “construction work” can be renamed to *Construction*

[Image: image]

--------------------

**Tip — Duplicate, don't Recreate**

By creating an Empty GameObject, and attaching an Audio Source to it, you can then duplicate that GameObject by Right Clicking and choosing duplicate or you can CMD + D with that GameObject highlighted.

Mark step as complete

## 6. Finish Off Setup of Ambient Audio with Spatial Blend and Loop Settings

Q&A (0)

*Use your knowledge of the Audio Source component to enable looping and make the spatial blend 3D.*

[Image: image]

1. Turn the **Spatial Blend** to 3D on each **Audio Source** so to reflect the location of the viewer of the Site Tour in relation to the point of audio emission
2. Check Loop so that the audio plays on repeat
3. Jump into the Scene view and position the individual **Audio Sources** throughout the environment

Mark step as complete

## 7. Key Takeaways

Q&A (0)

You have now added a video player to the portal scene with prehistoric environment and configured the Video Player Controller to work with the Video Player. The Video Player Controller uses some concepts covered in the UI - Basic and UI - Intermediate modules. For a comprehensive look into Unity’s UI system refer to those modules.

By completing this module, you’re now able to:

- Add 3D and 2D audio to your Unity project
- Add and position video content in your Unity scene
- Use the Video Player Controller to allow users to start, pause, and stop video playback on mobile AR.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
