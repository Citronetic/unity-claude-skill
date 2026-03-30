[Image: image]

# Create decorative objects using sprites

Tutorial

Beginner

+0XP

20 mins

4

(68)

Unity Technologies

[Image: Create decorative objects using sprites]Summary

In this tutorial, you’ll work with sprites to decorate your game environment.

By the end of this tutorial, you’ll be able to do the following:

- Customize the way that Unity renders sprites.
- Create a prefab asset.
- Add decorative objects to your game scene.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

Your game has a tilemap environment, but it’s currently empty. Before you set up the physics for your game, it will be helpful to have at least a few decorations in your game apart from the player character. In this tutorial, you’ll add decorations and configure them so they’re rendered correctly.

**Note**: For the purposes of this tutorial, we chose to use the **Ruby’s Adventure**asset set, and the images used in instructions will reflect this. If you chose another asset set, the file names will be the same, but in your corresponding theme folder.

Mark step as complete

## 2. Create a decoration for your game environment

Q&A (0)

Your tilemap does a lot of work to establish a sense of place for your game, but you can also add decorative objects to the scene to develop this further. These decorations can be part of the environment itself (like trees or rocks) or objects that have been placed within the environment (such as statues or mysterious boxes).

As you work through this course, you’ll give some decorative objects practical functions, such as collectible objects to increase the player character’s health and objects that can damage it.

To create a first decoration for your game, follow these instructions:

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

**1.** In the **Project** window, navigate to **Assets** > **_2DAdventureGame**> **Art** > **[Your Chosen Project]**>**Environment**.

**2.**Select one of the decoration sprites, then drag it from the **Project** window and release it over the **Hierarchy**window to create a new GameObject.

**3.** In the **Scene** view, position the decoration using the **Move Tool**.

If you want to, you can also resize the decoration using the **Rect Tool**.
**4.** Save your changes.

**5.** Select the **Play** button to enter Play mode and test your game. Try to move over and around the decoration.

Now that you’ve placed all your elements where you want them to be, you’ll need to adjust some properties of the decoration GameObjects to make their interaction with the **PlayerCharacter** GameObject feel more realistic.****Currently, there are two main issues:

- The player character moves right through the decorations, sometimes appearing either completely on top of or beneath them, which looks inconsistent and choppy.
- Some decoration sprites might have been stretched or deformed while positioning them in the scene.

In the next series of steps, you’ll learn how to fix these problems.

**Important**: Remember to exit Play mode when you’ve finished testing — changes that you make in this mode will not be saved.

Mark step as complete

## 3. Draw sprites based on their y-axis position

Q&A (0)

The first issue you’ll fix is the sorting inconsistency of the decoration GameObjects when the **PlayerCharacter** GameObject passes over them. You previously fixed an ordering problem by changing the Tilemap’s **Order in Layer** property so that it’s always drawn before the **PlayerCharacter** GameObject and anything else in the scene. The same solution won’t work here — you don’t need to have the **PlayerCharacter** GameObject always drawn on top of all the decorations; instead, you need to simulate the top-down perspective of the game. Players will expect the character to be drawn first when it is in front of another GameObject and last when it is behind a GameObject.

[Image: image]

You can achieve this effect by instructing****Unity to draw GameObjects in order of their y-coordinate (on the vertical axis): a GameObject that is lower on the screen (with a small y-coordinate) should be drawn after a GameObject higher on the screen (with a larger y-coordinate). This approach means that the correct GameObject will always be drawn on top to maintain the game’s perspective.

To change the order in which Unity draws GameObjects, follow these instructions:

**1.** In the **Project** window, navigate to the **Settings** folder and select the**Renderer2D** asset.

[Image: image]

**2.** In the **Inspector**window, use the foldout (triangle) to expand the **General** section and set the **Transparency Sort Mode** property to **Custom Axis**.

[Image: image]

**3.** Check the **Transparency Sort Axis** property values are the following:

- **X** = **0**
- **Y** = **1**
- **Z** = **0**

Unity will now draw GameObjects and their sprites based on their position on the y-axis.

**4.** Test your changes again.

Now the player character will be drawn behind the decoration when the player character is higher on the y-axis, and in front of the decoration when it is lower on the axis.

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

Your fix is good, but it’s not perfect — the moment where the character is drawn behind the decoration instead of in front looks like it’s happening too early. To improve this, you’ll need to first adjust the sprites’ **Pivot** property.

Mark step as complete

## 4.  Adjust the Sprite’s Pivot property

Q&A (0)

A **pivot** is a special point, which you can manually define, that acts as the anchor for a sprite. The pivot affects the following 2D GameObject properties:

- **Rotation**: When you rotate a sprite, it rotates around its pivot.
- **Position**: The pivot is the point of the sprite that is drawn at the position set by the GameObject’s **Transform** component. For example, you set the player character’s position to (0,0) and its feet are the pivot, the feet will be drawn at (0,0). If you set the character’s head as the pivot, the head will be drawn at (0,0) instead.

To further improve the sprite’s sorting appearance, you need to first adjust the pivots of both the **PlayerCharacter** GameObject and the decoration GameObjects.

First, you need to change the pivot for a single sprite. To do this, follow these instructions:

**1.** In the **Project** window, go to **Assets** > **_2DAdventureGame**>**Art**> **[Your Chosen Project]**>**Environment**and select the sprite of your previously chosen decoration.

**2.** In the **Inspector** window, open the **Pivot** property dropdown and select **Bottom**.

[Image: image]

This change places the pivot at the bottom of the sprite instead of at its center. The bottom of the decoration will now be the first thing that is drawn.

**3.** Select **Apply**.

[Image: image]

**4.** Repeat this process for the other decoration GameObjects in your scene.

Define their pivot points, but be mindful of where each GameObject’s pivot point would be in real life — it’s not always located at the bottom!

Mark step as complete

## 5. Change pivots using the Sprite Editor

Q&A (0)

The process you just followed only works for one sprite at a time. However, there’s an alternative approach that can change multiple pivots at once — though you’re just going to use it for the **PlayerCharacter** sprite now.

Follow these instructions to use the **Sprite** **Editor** to change pivots:

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

**1.** In the **Project** window, go to **Assets** > **_2DAdventureGame**>**Art**> **[Your Chosen Project]**, and select the **PlayerCharacter** sprite.

**2.** In the **Inspector** window, select the **Open Sprite Editor** button.

**3.** In the **Sprite Editor** window, find the blue circle icon in the center of the sprite and click on it.

This icon represents the current pivot position.

You can either drag that circle icon manually to change the pivot or use the **Sprite** **settings** overlay to make more precise adjustments.

**4.** Set the **Custom Pivot** to the following values:

- **X** = **0.5**
- **Y** = **0**

As the **Pivot Unit Mode** is set to **Normalized**, **0** is the minimum value (left for the x-axis and bottom for the y-axis), **1** is maximum value (right for x-axis, top for y-axis), and **0.5** is the middle value.

**5.** Select **Apply** then close the **Sprite Editor**window.

**6.** In the **Project** window go to **Assets** > **_2DAdventureGame**,****create a new****folder and name it “Prefabs”**,** then turn your decoration into a prefab.

**Note:** Turn your decoration into a prefab by dragging the **Decoration_1** GameObject into the **Prefabs** folder.

**7.** Test your changes — everything should now be displayed as expected.

Mark step as complete

## 6. Configure the player character’s Sprite Renderer component

Q&A (0)

The reason you needed to redefine the pivot points of your GameObjects in the scene is to take advantage of the **Sprite Renderer** component, which includes a property called **Sprite Sorting Point**. This property determines which part of the sprite is used as the reference point for sorting.

To fix the small issue encountered at the end of [**Step 2.2.3. Draw sprites based on their y-axis position**,](https://learn.unity.com/course/2D-adventure-robot-repair/unit/game-environment-and-physics/tutorial/create-decorative-objects-using-sprites?version=6.3#6932cf7ed5bfab44ab132cc2) you’ll change this setting for the **PlayerCharacter**GameObject, so Unity uses its pivot as the reference point for sorting when comparing it with the pivot points of other GameObjects in the scene.

To configure the **Player Character**’s **Sprite Renderer**component, follow these steps:

**1.** In the **Hierarchy**window, select the **PlayerCharacter** GameObject.

**2.** In the **Inspector**window, find the **Sprite Renderer** component and expand it if necessary.

[Image: image]

Currently, the**Sprite Sort Point** property is set to **Center**, which means that the center point of the **PlayerCharacter** GameObject’s sprite is used to determine whether it should be drawn in front or behind another GameObject.

**3.**Open the **Sprite** **Sort** **Point** property dropdown and select **Pivot**.

[Image: image]

With this change, you’ve successfully configured your sprites to render correctly on top of each other, creating a more realistic layering effect. This makes the **PlayerCharacter**GameObject’s movement and its interaction with the environment feel more natural.

In the next step, you’ll fix the issue related to sprites stretching and losing their original shape.

Mark step as complete

## 7. Tile sprites to avoid stretching

Q&A (0)

Lastly, you’re going to learn how to resize certain types of assets so they don’t get deformed. Most sprites in the **Adventure Game: Robot Repair**asset packs work as single sprites, but some of them can actually be used to cover a larger area of the environment rather than adding multiple decoration GameObjects. The **DamageZone** sprite created for each asset pack is a good example.

You can use the [**Rect Transform**tool](https://docs.unity3d.com/Manual/PositioningGameObjects.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954174796) in the **Scene** view’s **Tools**overlay to position and scale GameObjects that render sprites. However, if you try to resize the **DamageZone** GameObject, then the sprite just stretches. Distorted sprites don’t make a great player experience!

[Image: image]

To set the sprite to tile when you resize the GameObject, follow these instructions:

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

**1.** Create a new GameObject using the **DamageZone**sprite, then turn the **DamageZone** GameObject into a prefab.

**2.** In the **Hierarchy** window, select the **DamageZone**GameObject.

**3.** In the **Inspector** window, go to the **Transform** component and confirm that the **Scale**property is set to **X** = **1**, **Y** = **1**, and **Z** = **1**.

**4.** In the **Sprite Renderer** component, open the **Draw Mode** property dropdown and select **Tiled**.

You’ll get a warning dialog that says the sprite is not appropriately configured for this draw mode. You’ll fix this in a moment.

**5.** Open the **Tile Mode** property dropdown and select **Adaptive**.

**6.** In the **Project** window, navigate to **Assets**> **Art**> **[Your Chosen Project]**>**Environment**and select the **DamageZone**sprite.

**7.** In the **Inspector** window, open the **Mesh Type** property dropdown and select **Full Rect**, then select **Apply**.

**8.** In the **Hierarchy** window, select the **DamageZone** GameObject.

The warning will no longer be displayed in the **Sprite Renderer** component.

Now when you resize the**DamageZone** GameObject with the **Rect Transform** tool, it will stretch until it can fit another sprite, and then multiple sprites will be tiled to fit the size that you choose.

Mark step as complete

## 8. More things to try

Q&A (0)

If you want to further develop your skills, explore new concepts, or improve your project, check out some of the optional activities below. Each one is tagged as either Easy, Medium, or Difficult, so you can choose the level of challenge.

These activities are entirely optional, so if you’re not interested, no problem — just skip this step. We do recommend attempting at least one of them in order to get the most out of this learning experience. Good luck!

### Easy: Populate your game world with more decorations

Now that you’ve set up some decorational GameObjects for your game, have fun and use the assets we’ve provided or others that you find online to make your game world feel more engaging for players.

### Medium: Use 9-slicing technique to preserve a texture

The tilesets that you’re working with from the **2D Adventure Game: Robot Repair** asset packs don’t need to remain in proportion, but sometimes you’ll want to rescale a sprite and preserve a pattern rather than stretch the sprite — a patterned rug is a good example of this behavior.

You can preserve the proportions of a sprite by using **9-slicing**, a 2D technique that splits an image asset into nine sections that work as tiles and remain in proportion. **Note**: 9-slicing is not the same as the tileset slicing that you completed in the previous tutorial.

As you continue your journey as a creator, you’ll need to develop your comfort at reviewing documentation and trying new things independently. You have a great opportunity to do that here.

If you’d like to try working with 9-sliced assets, follow these high-level instructions:

**1.** Find or create a patterned rug sprite asset, or an alternative object where you’d need to constrain the proportions for it to display correctly in your game.

**2.** [Review the documentation on 9-slicing sprites](https://docs.unity3d.com/6000.0/Documentation/Manual/sprite/9-slice/9-slicing.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954174796) and configure your assets appropriately.

**3.** Try to resize the 9-sliced rug or other decoration in your game!

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

## 9.  Next steps

Q&A (0)

Now that there are decorations in your world, you can set up the basic physics for your game. In the next tutorial, you’ll configure your player character and decorations so they collide.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
