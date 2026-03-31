[Image: image]

# Lab 4 - Creating Basic Gameplay

Tutorial

Beginner

+10XP

90 mins

1

(20)

Unity Technologies

[Image: Lab 4 - Creating Basic Gameplay]Summary

**Overview:**

In this lab, you will work with all of your non-player objects in order to bring your project to life with its basic gameplay. You will give your projectiles, pickups, or enemies their basic movement and collision detection, make them into prefabs, and have them spawned randomly by a spawn manager. You will learn more about integration testing and test if different units or modules you are creating work well together. By the end of this lab, you should have a glimpse into the core functionality of your game.

**Project Outcome:**

Non-player objects are spawned at appropriate locations in the scene with basic movement. When objects collide with each other, they react as intended, by either bouncing or being destroyed.

Languages available:

EnglishEnglishEnglish

## 1. Introduction

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

## 2. Give objects basic movement

Q&A (0)

> Before you spawn objects into your scene, they should move the way you want.

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

1. If relevant, add **Rigidbody** components to your non-player objects
2. Create a **new script**(s) for the objects that will be instantiated during gameplay and attach them to their respective objects (including projectiles or pickups)
3. Program the **basic movement**for your objects and test that they work

By the end of this step, all objects should basically move the way they should in the game.

Mark step as complete

## 3. Destroy objects off-screen

Q&A (0)

> To make sure our hierarchy doesn’t get too cluttered, let’s make sure these objects get destroyed when they leave the screen.

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

1. Either create a new script or add code to your existing script to make sure objects are destroyed when they leave the screen

By the end of this step, objects should be removed from the hierarchy when they are no longer in play.

Mark step as complete

## 4. Handle object collisions

Q&A (0)

> Now that you have all these moving objects, they’re bound to start colliding with each other - we need to program what should happen when everything collides.

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

1. If relevant, edit the **Rigidbody mass** of your objects
2. If relevant, to change the way your objects collide, create a new **Physics material** for your objects
3. Add **tags** to your objects so you can accurately test for which objects are colliding with which
4. Use ***OnCollisionEnter()***(for Rigidbody collisions) or ***OnTriggerEnter()*** (for trigger-based collisions) to **Destroy** or **Log** messages to the console what should happen when certain collisions occur

By the end of this step, objects should destroy, bounce, or do nothing based on collisions.

Mark step as complete

## 5. Make objects into prefabs

Q&A (0)

> Now that the objects are basically behaving the way they should, if they’re going to be instantiated during gameplay, they need to be prefabs

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

1. In the Assets directory, create a new **Folder** called “Prefabs”
2. **Drag** in each object to create a **new prefab** for it
3. After all objects have been turned into prefabs, **delete** them from the scene
4. **Test** the objects’ behavior by dragging them from the Prefabs folder into the scene while the game is running

By the end of this step, all objects that will be spawned during gameplay should be prefabs and should no longer be in your scene.

Mark step as complete

## 6. Make SpawnManager spawn Prefabs

Q&A (0)

> Now that we have all of our prefabs set up, we can create a spawn manager to spawn them at intervals and, if we want, in random locations.

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

1. Create an Empty “Spawn Manager” object and attach a new SpawnManager.cs script to it
2. Create individual **GameObject** **or GameObject array**variables for your prefabs, then **assign** them in the inspector
3. Use the ***Instantiate()***, ***Random.Range()***, and the ***InvokeRepeating()*** methods to spawn objects at intervals (random objects, random locations, or both)
4. Right-click on your *Assets folder > **Export Package*** then save a new version in your **Backups** folder

By the end of this step, objects should be spawned automatically from the appropriate location.

Mark step as complete

## 7. Integration Testing

Q&A (0)

As in Lab #3, continue to use your database. Since your personal project is starting to come together now, we can begin to start Integration Testing. This level of testing verifies that the different units or modules used by an application work well together. For example, it can be testing the interaction with the database or making sure that, in this case, game mechanics start to work together as expected. Typically, when testing software, these types of tests may be more expensive to run as they require multiple parts of the application to be up and running.

This exercise is simplistic, compared to what real integration testing entails, but thinking of your project at this point in terms of integration testing will allow you to see if the game you're building is starting to function as a whole.

Using the database you created, complete a combination of test scripts - exploratory testing and bug reporting. Either by yourself or by a fellow learner, do simple integration testing making sure the pieces of your game are beginning to function as a whole. Capture any and all bugs in your database, tagging and prioritizing them appropriately.

Mark step as complete

## 8. Recap

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

New functionality

- Non-player objects prefabs have basic movement
- Objects are destroyed when they leave the screen
- Collisions between objects are handled appropriately
- Objects are spawned at the appropriate locations on time-based intervals

New concepts & skills:

- Creating basic gameplay for a project independently
- Integration testing

Mark step as complete

## Complete this Tutorial

Mark all steps complete
