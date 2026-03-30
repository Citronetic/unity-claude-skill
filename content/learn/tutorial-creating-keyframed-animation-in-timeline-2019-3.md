[Image: image]

# Creating Keyframed Animation in Timeline

Tutorial

Beginner

+10XP

20 mins

112

(172)

Unity Technologies

[Image: Creating Keyframed Animation in Timeline]Summary

When you wish to make a simple, basic animation of an object within your scene, changing its position, size, or simply rotating it can all be done easily through the Timeline Editor window using keyframe animation. In this tutorial, you'll create a basic animation by recording the changing properties of a GameObject as keyframes in Timeline.

Languages available:

EnglishEnglish日本語English

## 1. Creating Keyframed Animation in Timeline

Q&A (0)

Verified: 2019.4 & Timeline 1.2.x

Verified: 2019.3 - [https://learn.unity.com/tutorial/creating-keyframed-animation-in-timeline-2019-3](https://learn.unity.com/tutorial/creating-keyframed-animation-in-timeline-2019-3)

In the Timeline window, you can easily record animations and set keyframes. You do this with what’s called an Infinite clip. An Infinite clip is a clip that contains basic keyframe animation recorded through the Timeline Editor window. When you wish to make a simple, basic animation of an object within your scene, changing its position, size, or simply rotating it can all be done easily through the Timeline Editor window using keyframe animation. Keyframe animation records the state of the object and then interpolates between the changes of each keyframe. This ends up being a useful tool for quickly making animations without having to import a custom animation clip or open the Unity Animation Editor window.

Mark step as complete

## 2. Open the Timeline Window

Q&A (0)

To open the Timeline window:

1. Click the **Window**dropdown on the main Editor window.

2. Click **Sequence**> **Timeline**.

3. A new window will open; this is the Timeline Editor window. (**Figure 01**)

4. Hit the **Create**Button in order to create a new timeline asset.

[Image: image]Mark step as complete

## 3. Setting Up to Record

Q&A (0)

Before you can begin recording a keyframed animation, you must add an animation track to the Timeline Editor window. To do so, click on the + dropdown on the left, just below the play controls, and select Animation Track. Once you’ve added a track, you’ll notice a red circle on the right side of the track. (**Figure 02**)

[Image: image]

This is the Record button on the track. Clicking it will enable Record mode for the selected track. When a track is in Record mode, the clip area of the track is drawn in red with the “Recording…” message displayed in the track and the Record button blinking. (**Figure 03**)

[Image: image]

When you are in Record mode, any modification to an animatable property of the GameObject sets a key at the location of the Timeline Playhead, for example if you are recording on a GameObject and you change its position, a key will automatically be set with the changes you made. Animatable properties include Transforms and the animatable properties for all components added to the GameObject.

Mark step as complete

## 4. Recording a Basic Animation

Q&A (0)

To begin recording a basic animation through Timeline:

1. Move the Timeline Playhead to where you wish to set the first key.

2. In the Inspector window, right-click the name of the property you wish to key.
(**Figure 04**)

[Image: image]

3. Click **Add Key** from the context menu. This will add an animation key for the property without changing its value. A white diamond will appear in the clip to show the position of the key on your playhead. Whenever you create a key, it will always appear on your playhead’s position. (**Figure 05**)

[Image: image]

You can also set the animation keyframe in two other ways:

- In the Inspector window, change the value of the animatable property of the GameObject. This automatically adds an animation key for the property with its changed value.
- In the Scene view, move, rotate, or scale the GameObject to add a key. This automatically adds a key for the properties that you change.

To continue animating, move the playhead to a different position on the timeline and add a new keyframe. Keep doing this until you have the animation desired. When you finish the animation, click the blinking Record button to disable Record mode. This will stop the recording and make the Infinite clip appear as an animation track in the Timeline Editor window. (**Figure 06**)

[Image: image]Mark step as complete

## 5. Conclusion

Q&A (0)

Although you can’t edit the keyframes in the Timeline Editor window, it’s useful to be able to create basic animations when you’re working on larger projects. This allows you to quickly add animations when needed without having to go through a whole different window to record and animate.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
