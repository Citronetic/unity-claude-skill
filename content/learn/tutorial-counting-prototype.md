[Image: image]

# Counting Prototype

Exercise

Beginner

+60XP

120 mins

2959

Unity Technologies

[Image: Counting Prototype]SummarySkills

In this exercise, you'll build a prototype of your own design that uses a provided counting functionality.

Resources

- [CountingPrototype.zip](https://unity-connect-prd.storage.googleapis.com/20241220/b3b6c2d0-5c92-4199-8415-de48fd7fe0c6/CountingPrototype.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954050877)

Languages available:

EnglishEnglishEspañol日本語한국어English

## 1. Overview

Q&A (0)

In this mission, you expanded your foundational programming skills and built four new projects. Your skills have grown, and the time is right for you to begin developing different concepts for your personal portfolio. You might find that sometimes coming up with an initial idea can be challenging, and you may feel like you don’t know where to start. To help you practice developing your own ideas, you’ll begin this exercise with an existing project as a starting point, and you’ll build a new concept on top of it.

Mark step as complete

## 2. Download the provided assets and import them into a new Unity project

Q&A (0)

To begin this challenge, you must first download the challenge assets and import them into a new Unity project:

**1.**  Download [**CountingPrototype.zip**](https://unity-connect-prd.storage.googleapis.com/20241220/b3b6c2d0-5c92-4199-8415-de48fd7fe0c6/CountingPrototype.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954050877).

**2.** To unzip the contents of the folder, right-click the folder and select **Extract All** (macOS: double-click the zipped folder). Inside you will find Counter.unitypackage.

**Note:**While it is possible to view the contents of a folder while it’s still zipped, the data is still compressed. Attempting to import the contents of the **CountingPrototype**folder while it’s still zipped will result in an error message in Unity. Ensure that you have unzipped the folder before proceeding to the next step.

**3.**[Create a new Unity project](https://learn.unity.com/tutorial/65f8a6e3edbc2a545fc44bd3?uv=2022.3#65f8a6e3edbc2a545fc44bda) using the 3D template —  remember to use one of the supported versions of Unity, such as 2022.3 LTS or 6000.0 LTS.

**4.** [Import](https://learn.unity.com/tutorial/65f8a6e3edbc2a545fc44bd3?uv=2022.3#65f8a6e3edbc2a545fc44be2) **Counter.unitypackage** into your new 3D template project.

Mark step as complete

## 3. Observe the default scene functionality

Q&A (0)

Before you start coming up with ideas to extend the existing project, take some time to explore what it can currently do. The imported package will contain four components: A script, a scene, and two materials.

**1.**  Open the scene and enter Play mode to observe the default behavior.

The scene contains a simple UI counter, a box, and several spheres placed above it. All of the spheres have Rigidbody components attached. When you play the scene, the spheres drop, and the UI counter updates to show how many of them landed in the box.

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

A script named **Counter.cs** is applied to the box mesh, which has a Box Collider set as a trigger. This trigger is scaled to the exact size of the interior of the box. **Counter.cs** has a public text variable for the UI counter.

**2.**  Open the **Counter.cs** script and explore its functionality.

Mark step as complete

## 4. Create a design document

Q&A (0)

The project provided to you is very basic, but there are a lot of opportunities to turn it into a variety of interesting prototypes! Take some time to think about what kind of application you’d like to make and write up a design document describing the application’s functionality. This concept phase is part of the overall exercise, so spend as much time as you need to come up with something interesting.

There are only two requirements for your new prototype:

- The prototype must still count something.
- There must be a UI element displaying that count.

Everything else is up to you! Here are a few suggestions for inspiration:

- A hoops style game: Toss a basketball into the net as many times as possible in the allotted time.
- A pachinko game: Drop several small balls down a pegboard and have each section at the bottom have a different point value.
- A stock counter: Different objects get sorted into their own spaces and then the total count is displayed for each.
- A neighborhood planner: Items found in a neighborhood, such as streets, sidewalks, houses, and streetlights, are contained in drag-and-drop style UI boxes. Users can drag out the items and plan their neighborhood design, and the UI tracks how many of each item they’ll need to build it in the real world.

Mark step as complete

## 5. Create the prototype application

Q&A (0)

Once you're confident about your concept, build out the prototype in Unity! You can work directly from the files you imported for this exercise, and add anything you need to complete the prototype. Remember that if you’d like to use additional assets, there are plenty available for free on the [Unity Asset Store](https://assetstore.unity.com/).

Mark step as complete

## 6. Optional: Create a WebGL build of your prototype

Q&A (0)

To complete this exercise, you’ll only need to upload your design document and a video showing your prototype in action.

However, if you want to, you can create and [publish a WebGL build](https://learn.unity.com/tutorial/publish-to-webgl-1#) of your prototype and upload it to Unity Play, and include the link to it in your submission description.

Mark step as complete

## 7. Criteria

Q&A (0)

You’ll know you’re successful if you’ve met these criteria:

- Your design document describes the functionality of a prototype based on the supplied base project.
- Your new prototype counts something.
- Your prototype has a UI component that displays that count.
- Your prototype in Unity has the functionality described in your design document.
- OPTIONAL: You created a WebGL build of your prototype and uploaded it to Unity Play.

Mark step as complete

## 8. Next steps

Q&A (0)

As your programming skills grow, so too will the complexity of your portfolio pieces. It might be tempting to wait to develop portfolio pieces until you’re a more experienced programmer — but a great deal of knowledge and experience can be gained while working on the portfolio itself. There’s no such thing as a project that’s too simple, as long as it represents your current programming skill set. Just remember to do your best, and that you’ll be replacing simpler projects with more complex ones in no time!

Mark step as complete

## 9. Submission

Q&A (0)

Once you have completed this exercise, please submit your design document and a video of your prototype in action to the submission upload below. If you have a WebGL build of your prototype on Unity Play, please include the link in the submission description.

#### Please login to submit

Login

## Complete this Tutorial

Mark all steps complete

Submission Gallery

[[Image: Beat the dungeon]

Beat the dungeon

Beat the dungeon gate before the gate arrives till you by making your score equal to the required score by the dungeon gate!

Iinhuman_xo100](https://learn.unity.com/submission/69c68d9cedbc2a03b801cbed)[[Image: CounterProject]

CounterProject

CounterProject

Ssujal_sahu140](https://learn.unity.com/submission/69c4f441edbc2a09b7fd4c32)[[Image: PuffCatch]

PuffCatch

Just catch the cheese puffs with nice vibes.

KKeneron321](https://learn.unity.com/submission/69c2db7aedbc2a03c7093ca5)[[Image: Fps trainer]

Fps trainer

Click spheres, dont miss.

Zzul-nugget160](https://learn.unity.com/submission/69c26a92edbc2a025e368378)[[Image: Basket Blitz - Counting Prototype]

Basket Blitz - Counting Prototype

Put your aiming skill to the test by challenging yourself to score as much goals as possible in a limited time.

AAntonio_unity_00](https://learn.unity.com/submission/69bec506edbc2a239cdb4ff8)[[Image: Volcano Alley - Simple Counting Game]

Volcano Alley - Simple Counting Game

A small game for counting. The local volcano is erupting, can you catch 10 rocks before the timer is up? If you can catch all 10, you win. Good luck, you have 15 seconds. Oh, and don't miss 3 times!

GGeekyGirl_CGY00](https://learn.unity.com/submission/69bc791dedbc2a1bea44bc3e)Load More
