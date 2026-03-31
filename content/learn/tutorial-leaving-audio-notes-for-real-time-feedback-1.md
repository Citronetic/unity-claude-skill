[Image: image]

# Leaving Audio Notes for Real-Time Feedback

Tutorial

Beginner

+10XP

0 mins

1

Unity Technologies

[Image: Leaving Audio Notes for Real-Time Feedback]Summary

By the end of this tutorial, you will be able to add voice note functionality to your project using the Audio Notes component.

Resources

- [Tutorial26_Microphone.zip](https://unity-connect-prd.storage.googleapis.com/20200407/1075fa49-88fa-4640-9d9b-c5dc57efc4e1/Tutorial26_Microphone.zip?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035298612)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In the Add Video and Audio tutorial, we looked at creating Unity Audio Sources that used spatial blend. Now, we’re going to switch gears and focus on a more niche but useful topic: recording speech.

Recording speech for audio notes allows users within virtual reality to leave their thoughts more swiftly than if they were using a keyboard. If you wanted to record your user’s voice as an option for speech input, how would you do that? You’d need access to a (physical) microphone. Remember that the majority of VR headsets have a physical microphone built in.

[Image: image][Image: image]

**Note:**This is a preview of how to record and save audio. When the record button turns red, you can monitor the status of the recording in the console. You can reference the [manual for the microphone here.](https://docs.unity3d.com/Manual/class-Microphone.html?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035298612)

In the example project, users can record audio files at the click of a button from within VR. This is useful since two-tracked controllers don’t allow users to type fast. And, should someone using a non-VR interface want to access the audio notes, they can go through these files with the provided 2D interface.

**What Will You Learn?**

By the end of this tutorial, you will be able to:

1. Add voice note functionality to your project using the Audio Notes component

**What Will You Do?**

1. Set up record and save
2. Create a recording GameObject
3. Setup UI elements to record and play back audio
4. Test your Scene and record a sound clip

[Image: image]Mark step as complete

## 2. Setting Up Record and Save

Q&A (0)

*Create a Play and Record button*

[Image: image]

1. Create two **Buttons**by navigating to **Create > UI > Button**.
2. Now we have our buttons. Switch the Canvas to World Space and resize the Canvas and buttons to suit your needs. For us that was 100 x 100**for the buttons and a Canvas of 500 x 500.
3. Reposition the buttons as you see fit and change their text.

--------------------

**Tip — Duplicate**

You can duplicate the resulting button by selecting it in the Hierarchy and typing **CTRL + D**(Windows) or **Command + D** (Mac).

Mark step as complete

## 3. Create a Recording GameObject

Q&A (0)

*Create a Recording GameObject to house the recording functionality.*

[Image: image]

1. Click **Create > Create Empty**.
2. Rename the GameObject to describe what it does: **RecordingGameObject**.
3. Click on **Add Component > Search**and****search for Record And Serialize Audio.
4. You’ll notice that this will attach an Audio Source to the GameObject. This is because it's an empty Audio Source and it’ll contain the audio you record.

--------------------

**What is the Unity Microphone Class?**

We want to access the (physical) microphone of the device and record our user. Since there’s no component for the Unity Microphone class (scripting), you can access it from a script we’re providing for you.

The functionality of the script is to save clips to file as .wav files.

Mark step as complete

## 4. Attach Button References

Q&A (0)

*Configure the Record and Serialize Audio script so the buttons will activate the component’s functionality.*

[Image: image]

1. Attach buttons to the **Record**and **Serialize Audio**Script.
2. Click on the Recording GameObject that you created previously.
3. Click and drag the play button into the **Play Button**field.
4. Click and drag the record button into the **Record Button**field.

Mark step as complete

## 5. Test Your Recording Functionality

Q&A (0)[Image: image]

1. Click the **Play**button.
2. While in the Game view, click the **Record** button.
3. Test your microphone with noises.
4. While in the Game view, click Record again.
5. While in the Game view, click Play to hear your recording.

**Tip — Use Console for Testing**

You’ll notice that the Console ([one of the Unity windows](https://docs.unity3d.com/Manual/Console.html?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035298612)) displays where on your computer the file was written.

In this case, the messages in the console are set up for you already. It's a more involved topic that requires writing C# code. For now, we want to draw your attention to the console so you can familiarize yourself with the message types and content.

Mark step as complete

## 6. Key Takeaways

Q&A (0)

You've now set up the microphone for your user. By completing this module, you’re now able to:

- Set up your Unity app to use a microphone to record and save audio notes
- Create the components within Unity Editor needed to record and save
- Hook up UI buttons for record and playback

Mark step as complete

## Complete this Tutorial

Mark all steps complete
