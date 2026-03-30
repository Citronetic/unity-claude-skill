[Image: image]

# Get acquainted with DOTS

Tutorial

intermediate

+10XP

15 mins

0

Unity Technologies

[Image: Get acquainted with DOTS]Summary

By the end of this tutorial, you’ll be able to do the following:

- Understand the parts of Unity's Data-Oriented Technology Stack (DOTS).
- Identify use cases where DOTS is beneficial.

Languages available:

EnglishEnglish한국어English

## 1. Overview

Q&A (0)

CPU and memory performance are critical considerations when it comes to building applications that give users immersive and responsive experiences. Unity's data-oriented technology stack (DOTS) is a software architecture that allows Unity developers to make the best use of hardware characteristics and constraints.

DOTS is a combination of technologies that represent a new way of working with Unity. It's a different approach to thinking about code and data that uses data-oriented design (DOD) as opposed to the object-oriented programming (OOP) approach. DOTS lets you take advantage of multicore processors to parallelize data processing. With DOTS, you can make your applications more performant and better suited to your target hardware.

This tutorial is for learners in both non-technical and technical roles who are new to DOTS, to provide a foundational understanding of DOTS and address common questions that you or your team may have in the primary stages of your DOTS learning.

#### Features and packages

Unity’s Data-Oriented Technology Stack (DOTS) is a set of features and packages that facilitate writing high-performance CPU code:

- The **C# Job System** provides an easy and safe way to write multithreaded code, allowing you to take advantage of the many cores in today’s CPUs.
- The **Burst compiler** is an optimizing C# compiler that often generates much faster code than Mono or even ILCPP.
- The **Unity.Mathematics** package provides a math library that is specially optimized when used in Burst-compiled code.
- The **Unity.Collections**package provides common collection types, like lists and hashmaps. Unlike normal C# collections, these collections are unmanaged and so can be used in Burst-compiled code. These collections also support safety checks that help ensure they are used safely in jobs.
- The **Unity.Entities** package provides a form of Entity Component System (ECS) architecture. In brief, *entities* are a lighter-weight, more efficient alternative to GameObjects, and they are processed by units of code called *systems*.
- The **Unity.Entities.Graphics** package renders entities using URP (the Universal Rendering Pipeline) or HDRP (the High-Definition Rendering Pipeline).

Some other packages are built on top of Entities and the rest of the DOTS core:

- The **Unity.Physics** package provides a deterministic rigid body dynamics system and spatial query system.
- The **Unity.Netcode** package (also known as **Netcode for Entities**) provides networked multiplayer with an authoritative server and client-side prediction.

Currently, Unity has no entity-based solution for animation, audio, or UI, so an entities-based project must fall back on GameObjects or other alternatives for these features. For example, if you make an entities-based game with animated monsters, you can represent the monsters as entities in the simulation logic but render them as GameObjects. This necessitates syncing state between each monster entity and its GameObject representation, but this overhead may be totally acceptable at small to medium scales.

Mark step as complete

## 2. Key concepts of DOTS

Q&A (0)

The videos below provide a quick introduction to the most essential concepts of DOTS:

#### The C# Job system (11 minutes - [YouTube](https://www.youtube.com/watch?v=jdW66hA-Qu8))

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

#### ECS Entities and components (10 minutes - [YouTube](https://www.youtube.com/watch?v=jzCEzNoztzM))

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

#### ECS Systems (7 minutes - [YouTube](https://www.youtube.com/watch?v=k07I-DpCcvE))

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

## 3. Should my project use DOTS?

Q&A (0)

Any project with CPU bottlenecks in user code should consider re-implementing the slow code as Burst-compiled jobs. Not only will Burst-compiled code often run multiple times faster than the Mono-compiled or even IL2CPP-compiled equivalent, jobs allow you to split workloads across all cores of the CPU.

The good news is that Burst-compiled jobs can usually be integrated into an existing project with relative ease, even if the project otherwise makes no use of DOTS. You may need to copy data into and out of the Unity.Collections types, but otherwise, adding Burst-compiled jobs generally requires no serious code restructuring.

This is much less true for the Entities package. While it is sometimes possible to selectively integrate entities to implement just specific features, ECS architecture imposes its own code structure and so generally is meant to form the foundation of your whole project.

Here are four good reasons to build your new project using Entities:

- Your project will have many static elements, such as for rendering a large, detailed environment. The Megacity sample, for example, demonstrates a complex environment made out of entities ([Watch a video](https://www.youtube.com/watch?v=KgcU2HBOXAw) of the Megacity project).
- Your project will have many dynamic elements, possibly with computationally heavy behaviors. A Real Time Strategy game, for example, often needs to compute pathfinding for hundreds or thousands of units.
- You prefer the ECS way of structuring data and code, which is arguably easier to reason about and maintain than the more common OOP alternative.
- You are making a competitive multiplayer game with fast action, such as a shooter, and so you require authoritative servers and client-side prediction for a good player experience. (These features are supported in Netcode for Entities but not Netcode for GameObjects

Mark step as complete

## 4. The tutorials of this course

Q&A (0)

The three tutorials of this course cover basic usage of Entities and the job system.

The first tutorial, “Get started with Unity’s job system”, demonstrates how to use the C# job system, Burst, Unity.Collections, and Unity.Mathematics to create a high-performance solution for a problem that involves heavy computation on the CPU.

The second tutorial, “Learn entities with HelloCube”, walks through very basic examples of creating and manipulating entities.

The third tutorial, “Entities in action: Tanks”, walks through a very simple simulation of cannons moving and firing cannonballs.

Mark step as complete

## 5. More resources

Q&A (0)

To learn more about DOTS, refer to the [DOTS page on the Unity.com website](https://unity.com/dots).

Mark step as complete

## Complete this Tutorial

Mark all steps complete
