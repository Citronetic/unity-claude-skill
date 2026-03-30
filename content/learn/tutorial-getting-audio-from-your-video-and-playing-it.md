[Image: image]

# Getting Audio from your Video and Playing It

Tutorial

Beginner

+10XP

10 mins

189

(48)

Unity Technologies

[Image: Getting Audio from your Video and Playing It]Summary

In this tutorial, you will learn how to output the audio from your 360 video. Firstly you will learn how to do it with flat 2D audio, and then you will learn how to use spatialization to improve the audio experience.

Languages available:

EnglishEnglishEnglish

## 1. Introduction

Q&A (0)

*This tutorial has been verified using Unity 2019 LTS*

When using 360 Video, there are various techniques you can employ to hear audio in your project. In some instances, you may want to play 2D, flat audio directly from the video. In others, you may want to play asynchronous audio clips from 3D or spatialized audio sources and place them around the Scene (**Figure 01**).

[Image: image]

Why would you use 2D instead of 3D audio sources? If you use 2D audio sources, then all of the audio clips will sound flat to the user. The user won’t be able to identify where different sounds are coming from, since the audio completely encircles the user. Alternatively, 3D audio uses the audio source’s position as a central source of emission. This means the user will be able to tell where the audio is coming from. This is helpful when playing sound effects, or specific audio files relative to certain Models and objects in the Scene (e.g., birds in the trees, a train rushing by).

Mark step as complete

## 2. How to play 2D audio from a video clip

Q&A (0)

1. If you do not already have a Video Player in the Scene, add a new Video Player and a video clip to its Video Clip property. **Note:**The video file must have audio in it.

2. In the Hierarchy, select the Video Player to reveal its Inspector.

3. In the Inspector, ensure the Audio Output Mode is set to Direct. This setting sends audio samples directly to the audio output hardware (e.g., headphones, VR goggles), bypassing Unity’s audio processing.

Mark step as complete

## 3. How to play 3D audio for a video clip

Q&A (0)

To apply Unity’s audio processing effects to an audio clip, such as Spatial Blend, you must use an audio source.

4. In the Hierarchy, create a new Audio Source.

5. Change the Audio Source’s Spatial Blend to 3D, and position the Audio Source in the Scene relative to where the sound should emit from. This creates the illusion of the sound emitting from a particular area in your Scene.

6. In the Hierarchy, select the Video Player to reveal it in the Inspector.

7. Change its Audio Output Mode to Audio Source.

8. Drag the Audio Source (from earlier) into the Audio Source reference (**Figure 02**).

[Image: image]

9. Enter Play Mode and try it out.

Mark step as complete

## 4. Conclusion

Q&A (0)

And that’s it! You now know how to play audio directly from your Audio Clip in addition to playing Audio Clips through Audio Sources. To review, if you would like to play 360 2D audio, then it’s easiest to play audio clips directly from the Video Player. However, if you would like to play an Audio Clip from a particular position, you must use Spatial Blend to regionalize the sound emission. This requires you to play the Audio Clip from an Audio Source and change the Video Player’s Audio Output Mode to Audio Source.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
