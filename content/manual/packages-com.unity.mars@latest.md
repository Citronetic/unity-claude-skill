[Image: Unity MARS Overview]

## Introduction

Unity MARS is a Unity extension that adds new functionality to support augmented and mixed reality content creation.

Augmented Reality has revealed that the tools we use to author 3D content are just a piece of a larger puzzle.
The canvas has morphed from being a strictly controlled and known digital environment to one intertwined with the real world.
Content authored for this new medium is not consumed in isolation anymore.
Instead, it has to be reactive and work with the world and other apps in ways never required before.

MARS is a Unity extension and a set of companion apps that provide the ability to address real-world objects and events as GameObjects.
It comes with a new UI and controls for this dynamic content.
MARS  includes an entirely new Simulation mode which lets you test your content in different real-world mockups with an incredibly tight iteration time, and helps you author content in the context of a real-world environment.

Most importantly, Unity MARS responds to real-world and other AR content by default.
Reality is your build target.
Think big, design to match, and start making content to change the world!

In the [building to a device with Unity MARS](BuildingToADeviceWithMARS.html) section, you can find a step-by-step tutorial that will guide you through how to install the Unity MARS package and build to your device.

[Getting started](GettingStarted.html) is a guide for new users. It takes you through how to write a small but complete application that reacts to the environment.

This documentation contains the following in-depth guides for each section of Unity MARS:

- [Unity MARS UI overview](UIOverview.html) - Overview of the different MARS windows.

- [Overview of core Unity MARS concepts](MARSConcepts.html) - Commonly used terms and concepts across MARS.

- **Working with Unity MARS:** Choose one approach or the other (Manual workflow/Rules); either of them will achieve the same goal.

- [Manual workflow](WorkingWithMARS.html) - Basic workflows for creating AR apps with MARS.

- [Rules workflow](Rules.html) - Use plain-language description of the expected real world environment and AR content to describe your app. Great starting point for new users.

- [MARS Templates](Templates.html) - Pre-built scenes that contain various specific applications

- **Basic app creation:**

- [Basic face tracking](FaceTracking.html) - Tracking faces in MARS and attaching virtual objects to face features.

- [Body tracking](BodyTracking.html) - Track bodies and follow poses or attach accessories to tracked bodies.

- [Image marker tracking](Markers.html) - Creating and working with images and tracking them.

- [Forces for tuning alignment](Forces.html) - Creating and working with Forces to configure alignment regions and spatial orientations.

- **Unity MARS Simulation:**

- [Creating Simulation environments](SimulationEnvironments.html) - Set up custom synthetic environments and recordings to quickly preview how your content behaves with found surfaces and other world data, using environments that are relevant to your project.

- [Session Recordings](SessionRecordings.html) - Record data from real and simulated MR sessions for later testing on your  MARS app.

- **Developer topics:**

- [Landmarks](Landmarks.html) - Working with spatial data such as points, edges, polygons that break data from the real world into useful parts for anchoring or aligning virtual content.

- [Traits](Traits.html) - Pieces of data that represent how information is stored and how conditions, actions, and providers manipulate them inside MARS.

- [Priority](Priority.html) - Specifying the relative importance of different parts of your Scene's content.

- [Software development guide](SoftwareDevelopmentGuide.html) - Writing your own custom behaviors and extending MARS.

For a list of new features and deprecations, see the [Unity MARS Changelog](../changelog/CHANGELOG.html).

The [FAQ](FAQ.html) answers many common questions about design, implementation, and use of Unity MARS.

To quickly understand the terminology used across this documentation, see the [Glossary](Glossary.html) for definitions of common keywords.

## Requirements

The current version of Unity MARS is compatible with the following versions of the Unity Editor:

- 2019.4.15f1 or later

- Unity MARS uses the `.NET 4.x Equivalent` runtime and is incompatible with the legacy scripting runtime.

## Known limitations

Unity MARS version 1.4.0 includes the following known limitations:

- Compile errors related to `IModuleBuildCallbacks`, `NewSceneSetup`, or other missing references to the UnityEditor assembly can occur when compiling MARS when the scripting API updater modifies code during Player builds. You can generally work around this issue by clicking Build a second time, once the API updater has made its modifications. This may occur as a result of adding the latest Universal Render Pipeline package (10.2.2) to your project in Unity 2020.2, which triggers an API upgrade in AR Foundation (4.0.12).

## MARS Components reference guide

- [Conditions](ReferenceGuideConditions.html)

- [Traits](ReferenceGuideTraits.html)

- [Actions](ReferenceGuideActions.html)

- [Forces](ReferenceGuideForces.html)

- [Visualizers](ReferenceGuideVisualizers.html)

- [Synthetic Data](ReferenceGuideSyntheticData.html)

- [Simulation Environment](ReferenceGuideSimulationEnvironmentComponents.html)
