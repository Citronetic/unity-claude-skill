[Image: image]

# Get started with animation

Tutorial

Beginner

+10XP

20 mins

3

(33)

Unity Technologies

[Image: Get started with animation]Summary

In this tutorial you’ll learn about the role and responsibilities of animators and set up your project to begin animating.

By the end of this tutorial, you'll be able to:

- Define the different rig types and their uses.

Resources

- [CreativeCore_Animation_U6.3.zip](https://storage.googleapis.com/learn-platform-bucket-production/tutorial/c2eb3091-8660-4579-a9d5-d88b9f392e76/versions%5B_key==%22339c5698e0ba%22%5D.materials%5B_key==%2220e3c75cb1ba%22%5D.file/CreativeCore_Animation_U6.3_20251205_180708.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955817893)

Languages available:

EnglishEnglishEspañol日本語English

## 1. Overview

Q&A (0)

Whether used as a gameplay mechanic, to help tell a story, or simply as a way to transition between UI panels, animation is an important part of making any Unity project come to life. There are two major types of animation that you’ll work with in Unity: animations that you import from another program, and animations that you create within the Editor itself. In this project you’ll learn about both, and how they can be applied to your own personal projects.

Mark step as complete

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

**1.**[Install **Unity 6**](https://learn.unity.com/tutorial/project-setup-processes#60ed7a3fedbc2a001f71f1aa), if you haven’t already done so.

**2.** Download and unzip [the project](https://storage.googleapis.com/learn-platform-bucket-production/tutorial/c2eb3091-8660-4579-a9d5-d88b9f392e76/versions%5B_key==%22339c5698e0ba%22%5D.materials%5B_key==%2220e3c75cb1ba%22%5D.file/CreativeCore_Animation_U6.3_20251205_180708.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955817893) for this learning experience from Tutorial Materials.

**3.**  Identify a suitable location on your computer and unzip the project folder there. Remove the Unity project folder from its empty parent folder.

**4.** [Add the Unity project to the Unity Hub](https://learn.unity.com/tutorial/project-setup-processes#6273ee10edbc2a0232556f15).

**5.**  Open the project from the Unity Hub.

**6.**  In the Unity Editor’s Project window, locate the Scenes folder, and then open the scene **TutorialScene_Animation_Outdoor.**

**7.**Open the Animation editor by navigating to the Window drop down and going to **Animation** > **Animation.**

**8.** Drag the Animation editor down next to the Project window to dock it in the lower half of the editor.

[Image: image]

Your project is now ready for use!

Mark step as complete

## 3. Welcome to Creative Core: Animation

Q&A (0)

What is the goal of Creative Core: Animation?

The goal of this learning experience is to introduce you to the most common ways that animation is used in Unity for various interactive experiences. You’ll be able to use what you learn here to apply animation to your own projects whether you’re a hobbyist or aspiring professional creator in any discipline.

What will I do in this learning experience?

As you work your way through these tutorials, you’ll create your first in-editor animations, following the same exercises that have been used to teach traditional animation for years. You'll also learn how to integrate animations into interactive experiences by creating objects that animate differently depending on user input. In addition to creating animations from scratch, you’ll also learn how to configure and work with imported animations that were created in external digital content creation tools, such as Maya. You’ll finish the experience by creating your own animated scene.

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

What will my learning outcomes be?

By the end of this learning experience, you’ll have worked with all of the major common components involved in creating animations in Unity. You'll be able to implement basic animation sequences in your project.

You’ll be able to apply these skills to animate parts of your selected guided project and your independent project (if you are completing the Creative Core pathway), or any other real-time experience created with Unity.

Mark step as complete

## 4. What does an animator do in Unity?

Q&A (0)

Background

Unity animators are responsible for animating objects for the interactive experience, ranging from characters and set pieces to cutscenes and even interfaces. Practically anything in Unity can be animated!

Typically, highly complicated objects or in-depth animations are created in external **Digital Content Creation** (DCC) applications, like Autodesk Maya or Blender. These DCCs have robust suites of animation tools to help simplify the creation process for the animator. These generally include tools for creating **rigs** (the underlying skeletal-like structure for animating characters), dynamics such as hair and fur, saved poses, and more.

It’s for this reason that in-editor animation is saved for more simple objects, or when the animation is tied to a specific scene; for example, a platform moving between two points in a game level. It’s extremely common for both externally and internally created animations to be used in the same project.

Take a moment to hear from some of our creators about what kind of mindset you need to be a successful animator in Unity:

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

Responsibilities

Much like other roles, what an animator does in Unity is largely dependent on the team that they’re on. They may spend much of their time working outside of Unity in other programs, or they might work entirely in Unity itself.

Depending on the team, a Unity animator may need to be familiar with importing and configuring animation in the Editor, and they might even need to know how to set up Animator Controllers, which are the components that determine when one animation transitions to another. For these reasons, it’s helpful for an animator to have a strong knowledge of all of the animation components in Unity, and it can be especially useful for them to have some very basic scripting knowledge as well. An animator is less likely to need to write scripts to make their animations run, but will often implement scripts written for them by programmers on the team.

Tools

In addition to Unity, animators often use other software to produce animations, which may include:

- [Autodesk Maya](https://www.autodesk.com/products/maya/features): Long considered the industry standard for animation creation in film, TV, animated features, and games. Maya is a robust digital art creation tool that can be used for many purposes outside of animation as well, including model generation and visual effects.
- [Autodesk 3ds Max](https://www.autodesk.com/products/3ds-max/overview): Similar to Maya, 3ds Max is a multifunctional digital art creation tool and was historically the software of choice for the games industry.
- [Blender](https://www.blender.org/): Completely free and open source, Blender has long been a popular choice for creators in the indie community, but is beginning to gain serious traction in professional markets as well. Like Max and Maya, Blender is a multipurpose tool that features a robust collection of animation tools.

Mark step as complete

## 5. Why is animation important?

Q&A (0)

Animation is sometimes referred to as the illusion of life. There’s an energy to living things, and this is often translated into some form of controlled motion. Birds fly, people dance, cheetahs run—and recreating all of these actions digitally can be accomplished through the use of animation.

Animation isn’t necessarily just movement, as movement can be accomplished through other methods, like using physics. A rock falling to the ground doesn’t need animation to get from point A to point B—a physics system can mathematically calculate gravitational force to accomplish that goal. Instead, it’s movement with intention where animation comes into play: physics can’t simulate the process of a person walking.

Check out the video below to learn about the importance of animation from creators in the industry today!

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

Mark step as complete

## 6. Next steps

Q&A (0)

In this tutorial, you set up your project and learned about the role an animator plays in a production. In the next tutorial, you’ll create your first 3D animation!

Mark step as complete

## Complete this Tutorial

Mark all steps complete
