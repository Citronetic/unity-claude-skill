[Image: image]

# 2.7 Creating and configuring Animation Events

Tutorial

Beginner

+10XP

35 mins

4

(326)

Unity Technologies

[Image: 2.7 Creating and configuring Animation Events]Summary

In this tutorial, you’ll:

- Learn about the relationship between Animation Events and context
- Create and configure Animation Events with and without context

Languages available:

EnglishEnglish日本語한국어English

## 1. Overview

Q&A (0)

Animation Events are points in an Animation Clip that a method in a script is called. In this tutorial, you’ll:

- Learn about the relationship between Animation Events and context
- Create and configure Animation Events with and without context

Mark step as complete

## 2. Before you begin

Q&A (0)

This tutorial uses the Introduction to 3D Animation Systems Unity project. If you haven't already done so, [**download this before continuing**](https://learn.unity.com/tutorial/1-1-welcome-to-the-course#5f3e641cedbc2a002175fe66).

When you’ve downloaded the project:

**1.** Open the project in Unity Editor.

**2.** In the Project window, go to **Assets**> **2.7 - Creating Animation Events** > **Scenes** and double-click **AnimationEventsWithContext**to open the Scene.

**3.**  In the Hierarchy, select the **Ball** GameObject.

**4.** In the top menu, go to **Window** > **Animation** > **Animation**to open the Animation window.

**5.**Dock the Animation window next to the **Asset Store** tab.

Mark step as complete

## 3. Calling methods with Animation events

Q&A (0)

Animation Events call methods in MonoBehaviour scripts. In order for an Animation Event to call a method from a script, the script must be attached to the same GameObject as the Animator component through which the Animation Clip is playing.

Animation Events are invoked and call their methods when both of the following are true:

- The Normalized Time of the Animation Clip in the **previous frame** is **before** the Normalized Time of the Animation Event
- The Normalized Time of the Animation Clip in the **current frame**is **after** the Normalised Time of the Animation Event.

The method does not need to be public and may optionally have a single parameter. This parameter can be either a float, int, string or object.

Mark step as complete

## 4. The relationship between Animation Events and context

Q&A (0)

As you explored in **2.2: Editing Animation Clips**, Animation Clips can be edited in different ways depending on whether or not they have the context of the GameObjects they will be playing through. The same is true when adding Animation Events to Animation Clips.

Animation Events can be added to Animation Clips whether or not they have the context of the GameObjects they will be playing through, but they are created in different ways depending on this.

Regardless of how they are created, Animation Events need two pieces of information:

1. The time at which they should call a method
2. The name of the method they should call

They can also optionally include a parameter to pass to the method being called.

Mark step as complete

## 5. Create an Animation Event with context

Q&A (0)

Let’s explore when an Animation Event can be created with context of the methods it can use and how to create one.

In the Animation window, you currently have the Bounce Animation Clip open, with the context of the GameObject it will be playing through.

[Image: image]

The Ball GameObject has a Particle System component on a child GameObject. You’re going to use this to make some dust puffs appear in the animation as the Ball bounces for the first time.

Let’s get started:

**1.**In the Animation window, select the **Curves**button to switch to Curves mode.

[Image: image]

**2.** Press **Ctrl** + **A** (Windows) or **Cmd** + **A** (macOS) to select all the keyframes for the animation.

**3.** Press **F** to focus on the selected keyframes.

[Image: image]

The green curve is the vertical part of the Ball’s position. It indicates that the Ball will bounce for the first time when the Animation Clip is **10 frames in**.

[Image: image]

**4.**  Move the playhead so it is over the first bounce at 10 frames.

**5.**  Select **Add event** to create the new Animation Event.

[Image: image]Mark step as complete

## 6. Configure an Animation Event with context

Q&A (0)

Next, let’s configure the Animation Event you’ve just created:

**1.** In the Inspector, a dropdown will now be available listing different functions that could be called. Select **PlayParticles** from the list.

[Image: image]

The Animation Event is now finished!

**2.**In the main toolbar, press **Play**to enter Play Mode and test the animation in the Scene.

**3.**Press the **Play**button again to exit Play Mode when you’re done.

#### Review

Let’s review this process against the information that an Animation Event needs:

- The time at which it should call a method: you set this when you created the new Animation Event at a specific keyframe.
- The name of the method it should call: you set this by selecting the **PlayParticles** method from the dropdown.

The optional parameter was unnecessary in this case, because the method being called didn’t have a parameter.

Mark step as complete

## 7. Create an Animation Event without context

Q&A (0)

Next, let’s explore when an Animation Event can be created without the context of the methods it can use and how to create one.

Animation Events can be created without context in two places:

1. In the Animation window, using a process similar to the one you just followed but when the Animation Clip is being viewed as an asset.
2. In the Animation Importer, where there is an option for the Animation Clip to have an Animation Event added.

Remember, both of these cases are when the Animation Clip does not have context of the GameObject it will be playing through.

To create an Animation Event without context:

**1.** In the Project window, go to **2.7 - Creating Animation Events** > **Models**.

**2.**Select the **Ball**model.

**3.** Select the **Animation**tab in the Model Importer’s Inspector.

**4.** Scroll down to the **Events** foldout and expand it.

[Image: image]

**5.** Using the preview pane to scrub through the animation, find the frame on which the ball first bounces. This will be frame 10, as before, because the animations are duplications of each other.

**6.** Select the **Add Event** button to create a new Animation Event without context.

Mark step as complete

## 8. Configure an Animation Event without context

Q&A (0)

Next, let’s configure the Animation Event:

- Enter the name “PlayParticles” in the**Function**field. The name **must exactly match** the name of the method to be called.

[Image: image]

#### Review

Let’s review this process against the information that an Animation Event needs:

1. The time at which it should call a method: you set this when you created the new Animation Event at a specific keyframe.
2. The name of the method it should call: you set this by setting the **Function** field to read **PlayParticles**.

As before, the optional parameter was unnecessary, because the method being called didn’t have a parameter.

Mark step as complete

## 9. Summary

Q&A (0)

In this tutorial, you’ve:

- Explored the relationship between Animation Events and context
- Created and configured Animation Events with and without context

In the next tutorial, [**2.8 Configuring Generic Rigs**,](https://learn.unity.com/tutorial/2-8-configuring-generic-rigs?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa036edbc2a001f65dc69) you’ll start to explore an important part of the model import process. Rigs are a way of defining the structure of the model being imported and are used to define how animations play.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
