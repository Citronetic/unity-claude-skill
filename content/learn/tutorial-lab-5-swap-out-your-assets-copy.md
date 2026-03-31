[Image: image]

# Lab 5 - Swapping out Assets

Tutorial

Beginner

+10XP

90 mins

1

(19)

Unity Technologies

[Image: Lab 5 - Swapping out Assets]Summary

**Overview:**

In this lab, you will finally replace those boring primitive objects with beautiful dynamic ones. You will either use assets from the provided course library or browse the asset store for completely new ones to give your game exactly the look and feel that you want. Then, you will go through the process of actually swapping in those new assets in the place of your placeholder primitives. Finally you will use functional testing to test that your game performs the required outputs you defined in your game design document and test scripts. By the end of this lab, your project will be looking a *lot* better.

**Project Outcome:**

All primitive objects are replaced by actual 3D models, retaining the same basic gameplay functionality.

Resources

- [Course Library - Asset Store](http://u3d.as/1wXg)
- [Course Library - Direct Download.zip](https://unity-connect-prd.storage.googleapis.com/20191004/c58a411d-1c2f-45f1-a194-0c0fac0cef82/Course%20Library%20-%20Direct%20Download.zip?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035270490)

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

## 2. Import and browse the asset library

Q&A (0)

> If we are going to swap out our primitive shapes with cool new assets, we need to import those assets first.

1. Click on the **link**to download the **Course Library** asset files, then **import** them into your project
2. **Close** the **Asset Store**window
3. Browse through the library to find the assets you would like to replace your Player and non-player objects with

Mark step as complete

## 3. Replace player with new asset

Q&A (0)

> Now that we have the assets ready to go, the first thing we’ll do is replace the Player object

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

1. **Drag** the Player object into the “Prefabs” folder to make it a prefab, then **double-click** on it to open the prefab editor
2. **Drag** the asset you want into the**hierarchy** to make it a nested prefab of the Player, then **scale** and **position** it so that it is around the same size and location
3. On the parent **Player** object itself, either **Edit** the collider to be the size of the new asset or **replace** it with a different type of collider (e.g. Box)
4. **Test** testing to make sure it works, then **uncheck** the **Mesh Renderer**component of the primitive

Mark step as complete

## 4. Browse the Asset store

Q&A (0)

> Even though we have a really great asset library, there may be certain assets you want that aren’t in there. In that case, it might be good to try and find assets in the Unity Asset Store.

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

1. From the top menu, click  *Window > **Asset Store*** to open the Asset Store window in Unity, then right-click on the tab and **Maximize** it to make it easier to browse
2. In the **Publisher** filter, search for “Synty Studios”, then browse some of their asset packs
3. In the **Pricing** filter, drag the right handle back to only view “Free” assets, **remove**the Synty Studios filter, and search for “Low Poly”
4. If you see something you want to include in your project, **download** and **import** it into your project
5. **Drag** the imported assets into a new folder called **“**Asset Store**”**, then browse through the imported assets

Mark step as complete

## 5. Replace all non-player primitives

Q&A (0)

> Now that we know the basic concept of our project, let’s figure out how we’re going to get it done.

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

1. Repeat the process you used to replace the player prefab with your other non-player objects
2. Test to make sure everything is working as expected

Mark step as complete

## 6. Replace the background texture

Q&A (0)

> Now that our dynamic objects have a new look, we should update the ground / background too.

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

1. From the *Course Library **> Textures***, (or from a Unity Asset Store package), drag a new material onto the Ground / Background object
2. To adjust the material’s **resolution**, in the Material properties (with the sphere next to it), change the Main Map **Tiling** X and Y values
3. To make the material less shiny, in the Material properties, **uncheck** the “Specular highlights” and “Reflections” settings

Mark step as complete

## 7. Functional Testing

Q&A (0)

Now that you've swapped out assets and you think everything is running smoothly, you should ideally run functional tests of your build up to this point. As a reminder, **Functional Testing**focuses on the business requirements of an application. They only verify the output of an action and do not check the intermediate states of the system when performing that action. There is sometimes a confusion between integration tests and functional tests as they both require multiple components to interact with each other. The difference is that an integration test may simply verify that you can destroy an object while a functional test would expect that when you destroy the object the game score increases as defined by the game design document and test scripts.

Using your database, and the lens of functional testing, begin to test that your game performs the required outputs you defined in your game design document and test scripts. If and where it doesn't, catalog, tag and prioritize the bugs using your bug reporting database. Again it is highly recommended, that you try to find a fellow learner to test your project, you will learn so much more about the functionality of your project, your coding, and what it takes to be a good QA tester.

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

New Functionality

- Primitive objects replaced with new assets that function the same way

New concepts & skills:

- Art workflow
- High vs. Low Poly
- Asset Store
- Nested Prefabs
- Material properties
- Functional Testing

Mark step as complete

## Complete this Tutorial

Mark all steps complete
