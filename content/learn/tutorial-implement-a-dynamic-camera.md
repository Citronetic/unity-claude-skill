[Image: image]

# Implement a dynamic camera

Tutorial

Beginner

+0XP

25 mins

2

(26)

Unity Technologies

[Image: Implement a dynamic camera]Summary

The gameplay area for your game is currently the same size as the camera view. In this tutorial you’ll implement a dynamic camera that will follow the player character as they move around the world that you’ve created.

By the end of this tutorial, you’ll be able to do the following:

- Configure a Cinemachine virtual camera to follow the player character.
- Set camera bounds for the game.
- Create a new layer to address a collision error.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

So far your game has used a static (fixed) camera. This approach doesn’t stop you from creating engaging gameplay, but it does restrict the game world that players can explore to what’s displayed on screen at the start of the game.

A **dynamic camera**that follows the PlayerCharacter around a gameplay area within set bounds means you can expand the scope of the game environment, including hiding things that players will be able to reveal once they fix enemies and move beyond the initial view.

**Note**: For the purposes of this tutorial, we chose to use the **Ruby’s Adventure** asset set, and the images paths used in instructions will reflect this. If you chose another asset set, the file names will be the same, but in your corresponding theme folder.

Mark step as complete

## 2. Unity’s camera modes

Q&A (0)

In 3D applications like Unity, cameras can have****two modes:

- **Perspective:** This camera mimics how the human eye sees. Objects appear smaller as they get farther away, creating a sense of depth.
- **Orthographic:**This camera renders objects without perspective distortion. This means that objects appear the same size regardless of their distance from the camera.

Your game is 2D, so the camera should be in orthographic mode – things in your game shouldn’t get smaller when they’re further away, they should stay the same size. You used the 2D template to create the Unity project you’re working in, which automatically sets the **Main Camera**GameObject to orthographic mode.

Mark step as complete

## 3. Set up Cinemachine for your project

Q&A (0)

You can use Unity’s [Cinemachine package](https://docs.unity3d.com/Packages/com.unity.cinemachine@3.1/manual/index.html?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775034961467) to automatically control the camera in your project without using code to configure virtual cameras for camera movement and cuts between different views of the scene. The **Cinemachine Brain**component (that you’ll attach to the **Main Camera** GameObject later in this tutorial) will copy the settings of the active virtual camera to render your desired visuals of the scene

In this case, you’ll configure a **2D Camera** that will follow a target – the **PlayerCharacter** GameObject. Cinemachine also includes functionality to constrain the camera to bounds that you can set.

**Important:**Before you begin, in the main menu located at the top of the Editor, go to **Window** > **Package Management** > **Package Manager**, and make sure that **Cinemachine** is listed as an installed package. If not, follow these instructions on how to [**install a package via the Package Manager**](https://learn.unity.com/tutorial/set-up-the-unity-editor#688b68d3edbc2a0585fd367d), then install the **Cinemachine** package via the Package Manager.

To set up Cinemachine cameras for your scene, follow these instructions:

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

**1.** In the **Hierarchy**window, right-click and select **Cinemachine** > **Targeted Camera**>**2D Camera**. Rename the new camera “Follow 2D Camera”.

**2.** Select the **Main Camera** GameObject in the Hierarchy window.

Notice that it now has a **Cinemachine Brain** component.

**Note:** The **Cinemachine Brain**component acts as a controller that blends between virtual cameras like the **Follow 2D Camera**. This component allows the **Main Camera**GameObject to follow instructions from any **Cinemachine Camera**. The**Live Camera** property shows which virtual camera is currently controlling the view; this should now be the **Follow 2D Camera**.

In the**Game**view, the camera will now seem further away than it previously did when you were testing the game. This change is because the **Main Camera**GameObject is now using the **Virtual Camera** GameObject’s default settings, which you need to fix.

**4.** In the **Hierarchy**window, select the **Follow 2D Camera**GameObject.

**5.** In the **Inspector**window, in the**Transform**component,****change the**Z Position**to**-10.**

**6.** In the **Inspector**window, under the **Cinemachine Camera** component, set the **Lens**property to **5**.

**7.** Save your changes.

Mark step as complete

## 4. Configure the Virtual Camera to follow the player character

Q&A (0)

To configure the **Follow** **2D Camera** GameObject to follow the **PlayerCharacter** GameObject, follow these instructions:

**1.** In the **Hierarchy**window, select the **Follow 2D Camera** GameObject.

**2.**In the**Inspector** window, under the **Cinemachine Camera** component, locate the **Tracking Target**property.

**3.**Click and drag the **PlayerCharacter** GameObject from the **Hierarchy** window into the **Tracking Target** property box.

**4.** Enter Play mode to test the camera functionality.

Now the camera should follow the player character around the environment.

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

**Note:**You might have noticed many other settings you didn't use; feel free to explore them to create your own camera style. If you're curious to learn more, check out Unity’s [Cinemachine package documentation](https://docs.unity3d.com/Packages/com.unity.cinemachine@3.1/manual/index.html?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775034961467) or the [**Creative Core Pathway: Cameras**](https://learn.unity.com/pathway/creative-core/unit/creative-core-cameras) course.

Mark step as complete

## 5. Set camera bounds for the game

Q&A (0)

Now that you’ve resized and positioned your camera correctly, you might notice that the tilemap environment you created feels too small. If that’s the case, extend it to give the player character a larger area to explore.

### Define the environment's bounds

Once you’ve defined the full environment, it’s important to add a visual cue that marks the limits of your level. A simple and effective way to do this is by placing **water tiles** around the edges of the map to create a clear border.

Since you previously configured the water tiles with colliders when you created your level, the player character won’t be able to walk over them.

[Image:  Level scene with Ruby character, robot enemy, NPC, water pools, strawberries collectible,damage zones and a box decoration.]

When you test the scene, you’ll also be able to see the space beyond the tilemap. You can set camera bounds to make sure that the camera doesn’t display anything beyond the tilemap that you’ve created.

### Define the camera's bounds

To set bounds for the virtual camera, follow these instructions:

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

**1.** In the **Hierarchy**window, select the **Follow 2D Camera** GameObject.

**2.** In the **Inspector**window, under the **Cinemachine Camera** component, open the **Add** **Extension** property dropdown and select **CinemachineConfiner2D**.

This will add a new**Cinemachine Confiner 2D**component to the**Follow 2D Camera**GameObject. You can find it at the bottom of the **Inspector** window.

**4.** In the **Hierarchy**window, create a new empty GameObject and name it “Camera Confiner”.

**5.** In the **Inspector**window, add a **Box Collider 2D** component to the **Camera Confiner** GameObject.

**6.** Select the **Edit Collider**button and move the four points of the collider to resize it so that it covers the playable area – ending right at the edge of the water tiles you just placed, without extending beyond them.

**Note:**Remember to select the **Edit Collider** button again when you’re done.

**7.** In the **Hierarchy**window, select the **Follow 2D Camera**GameObject.

**8.** In the **Inspector**window, under the **Cinemachine Confiner 2D**component, select the **Bounding Shape 2D** property picker (⊙) and select the **Camera Confiner** GameObject.

**9.** Enter Play mode.

You’ll notice the player gets pushed out of the game environment and the projectiles don’t work – don’t worry, you’ll fix that in the next step.

### Fix undesired behavior with the collider

When you enter Play mode, you’ll notice that the player character gets pushed to the edge of the map and the projectiles don’t behave correctly. This happens because the entire level is now surrounded by a solid collider – the physics system tries to keep the character out and projectiles get destroyed as soon as they’re fired.

To resolve this issue, follow these steps:

**1.** Select the **Camera Confiner** GameObject. In the **Inspector** window, do the following changes:

- In the **Box Collider 2D** component, enable the **Is Trigger** property so objects can pass through it without colliding.
- Set the **CameraConfiner** GameObject to the **Projectiles** layer.

**2.** Enter Play mode again.

Everything now works correctly and the camera is limited by the shape of the **Camera Confiner**collider.

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

## 6. More things to try

Q&A (0)

If you want to further develop your skills, explore new concepts, or improve your project, check out some of the optional activities below. Each one is tagged as either Easy, Medium, or Difficult, so you can choose the level of challenge.

These activities are entirely optional, so if you’re not interested, no problem – just skip this step. We do recommend attempting at least one of them in order to get the most out of this learning experience. Good luck!

### Easy: Configure additional virtual camera setting

If you want to, you can further customize the virtual camera that follows the player character. Explore the **Follow 2D Camera**GameObject’s different components and experiment with their properties to achieve the movement and framing you prefer. You can refer to the [Cinemachine documentation](https://docs.unity3d.com/Packages/com.unity.cinemachine@3.1/manual/index.html?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775034961467) for detailed guidance on how each setting affects your camera’s behavior.

**Important:** Take note of the default configuration so you can revert back to the previous values if you’re not happy with your changes.

### Easy: Extend the gameplay area

If you want to, you can now create a much larger space for the player to explore. Think about how your design impacts player experience:

- Are you using space to engage the player and encourage them to explore?
- Do you need to adjust your design to make the most of this functionality? For example, you could position something where it will only be visible after the player character has moved past an enemy.

Mark step as complete

## 7. Next steps

Q&A (0)

Now that you’ve added a dynamic camera to your game, next you’ll implement something that will have a transformational impact on the player experience: game audio.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
