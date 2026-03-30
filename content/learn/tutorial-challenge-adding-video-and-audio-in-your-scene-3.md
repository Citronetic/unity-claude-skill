[Image: image]

# Challenge — Adding Video and Audio in Your Scene

Tutorial

Beginner

+10XP

30 mins

2

(9)

Unity Technologies

[Image: Challenge — Adding Video and Audio in Your Scene]Summary

In this challenge, you’ll apply your newly developed Video Player component skills to fix the Video Player in the car showroom environment. After this, you can use the same process to make other informative videos or sound sources in a VR scene to communicate information to your user.

Resources

- [Tutorial13_VideoChallenge.zip](https://unity-connect-prd.storage.googleapis.com/20200410/27e29691-3833-4d9a-a044-285ff806bf2b/Tutorial13_VideoChallenge.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952222702)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In this challenge, you’ll apply your newly developed Video Player component skills to fix the Video Player in the car showroom environment. After this, you can use the same process to make other informative videos or sound sources in a VR scene to communicate information to your user.

[Image: image]

**What Will You Do?**

1. Add 3D and 2D audio to your Unity project.

2. Add and position video content in your Unity Scene.

3. Use the Video Player Controller to allow users to start, pause, and stop video playback while in VR.

Mark step as complete

## 2. Find and Add a Video Player Component onto the Video Player

Q&A (0)[Image: image][Image: image]

1. Locate the **Video Player** (**Video > Video Player**).
2. Add a **Video Player** component by clicking **Add Component**and searching for **Video Player**.

Mark step as complete

## 3. Configure the Video Player and Video Controller Components

Q&A (0)

*Equip the Video Player component with the Video Clip.*

[Image: image]

*We want to add the play/pause feature to this video. We’ll do this by adding a component to the Video****Player called Video Controller.*

[Image: image]

*Here’s how you add a Video Controller script; then you’ll have a couple more steps.*

[Image: image]

1. Toggle the Video Clip to **Loop**.
2. Attach a **Video Controller** to the Video Player component. (Note:****You’ll find the Video Player reference in the Hierarchy underneath the Video GameObject.)

--------------------

**What is a Video Controller?**

A **Video Controller**is component that allows the use of a play and pause button with your Video Player. This component is a quick way to add UI functionality to the Video Player.

Mark step as complete

## 4. Assign the UI Buttons to the Video Controller Component

Q&A (0)

*Note that you have some empty fields on the Video Controller script (Video Player, Play and Pause buttons). We'll be assigning these fields with their respective UI elements.*

[Image: image]

*Drag the video player GameObject to the open slot next to Video Player*.

[Image: image]

*Do the same for both of the buttons.*

[Image: image]

1. Find the **Play**and **Pause**buttons under the **Canvas** GameObject.
2. Drag them into the **Video Controller**component’s respective **Play**and **Pause**Button properties.

--------------------

**What is the Source Property?**

The **Source Property** in a Video Clip component tells Unity where the media is located. Is it on the web or a local clip?

(**Note:** Your Source defaulted to the Video Clip setting. This is what we want so that we can play back the Unity trailer.)

Mark step as complete

## 5. Key Takeaways

Q&A (0)

You have now added audio and video to a Unity Scene that is ready for playback in VR.

By completing this module, you’re now able to:

1. Add 2D and 3D audio to your Scene to enhance the user experience
2. Include video clips in your Scene to display useful information

Mark step as complete

## Complete this Tutorial

Mark all steps complete
