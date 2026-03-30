[Image: image]

# Enhance the World

Tutorial

Beginner

+10XP

10 mins

19

(868)

Unity Technologies

[Image: Enhance the World]Summary

You’ve created a world for the player to explore, but it’s a little plain. Now that you’ve created the basics, you can make it more interesting and challenging to explore.

In this tutorial, you’ll:

- Add fences to your house and the wider world
- Add footpaths to guide the player through the world
- Add land features which act as obstacles to the player
- Add animated objects and decorations to make the world more visually interesting

Languages available:

EnglishEnglish日本語한국어简体中文English

## 1. Add fences to your world

Q&A (0)

You can use fences to give your house a garden, or to make the player’s movement through the world a little more challenging.

To add in a fence:

**1.**In the Hierarchy, go to **World > Tilemaps > Fences**. Fences have their own container GameObject.

**2.**In the Tile Palette window, check that the **Active Tilemap**field is now set to **Fences** — it should do this automatically. (If you need to change it manually, use the drop-down menu.)

**3.**In the Tile Palette window, select the **Fence Tile**.

[Image: image]

**4.**In the Scene view, paint in fence tiles to enclose a garden for your house. The fence will try and “snap” to pieces of fence already added to the Tilemap. You can also click and drag in the Scene view, to quickly create longer stretches of fencing.

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

**TIP:**Take care not to box the player character in! If they’re trapped by fences, they won’t be able to freely move around the world. If you need to delete a section of fence, use the **Eraser Tool**.

**5.**Save your Scene.

Now you can enclose any space you like.

Mark step as complete

## 2. Add Footpaths

Q&A (0)

You can also add footpaths to the world. They are only aesthetic (they have no Colliders attached), but can be a very useful way to suggest different paths for players to explore.

To add in a footpath:

**1.**In the Hierarchy, go to **World > Tilemaps > Midground**.

**2.**In the Tile Palette window, set the **Active Tilemap**field to **Midground**.

**3.**In the Tile Palette window, select the green **Footpath Tile**.

[Image: image]

**5.**In the Scene view, paint in Footpath Tiles. You can click to add individual tiles or click and drag to create wider pathways in the direction that you move your mouse.

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

**TIP:**You can also click and drag in the Scene view with the **Eraser Tool** selected, to remove larger sections of path.

**6.**Save your Scene.

Mark step as complete

## 3. Add a Land Feature

Q&A (0)

Next, let’s add a natural land feature. The Tilemap Palette includes a small rock cliff that the player cannot pass.

To add a rock cliff:

**1.**In the Hierarchy, go to **World > Tilemaps > Midground**. Set the **Active Tilemap**field to **Midground**.

**2.**In the **Tilemap Palette window**, select the Rock Cliff tiles.

[Image: image]

**3.**Select the**Paintbrush Tool** and paint the tiles into the Scene view**.**

**4.**In the Hierarchy, select the**Background GameObject.**Set the **Active Tilemap**field to **Background**.

**5.**Paint in the background behind your cliffs, to fill in the transparent space and make any design changes that work better with your adjusted landscape.

**6.**Save your changes to the Scene.

**7.**Enter Play Mode to test your changes — the player character will now need to go around any cliffs that you have added. Remember to leave Play Mode when you're done!

Mark step as complete

## 4. Add Animated Plants

Q&A (0)

This Creator Kit includes a special right-click menu to add the key elements of the game. This menu isn’t normally included in Unity Editor — we‘ve added this so you can focus on worldbuilding and designing gameplay. It works by adding an instance of a Prefab (a reusable GameObject template), which you can adjust for your game.

The first thing you'll add with this menu is an animated tree:

**1.**In the Scene view, right-click the location where you want to add the tree.

**2.**In the context menu that appears, select **Environment >** **Add Animated Tree1 Here**. Your new tree will appear in that location.

It will be automatically added to the**Animated Tree1 Collection**container GameObject:

[Image: image]

**3.**If you need to adjust the tree’s position, select the **Move Tool**in the toolbar. Click the yellow square in the center of your tree and drag it to your chosen location.

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

**4.**Enter Play Mode to test your changes — the tree you have added will already be animated, because it is stored in the correct container.

You can use this process to add three different types of trees and animated leaves. Experiment to see what works best for your world!

**TIP:** Remember, to delete a tree GameObject you have added (or any other GameObject), select the GameObject in the Hierarchy. Then you can either:

- Right-click the GameObject and select **Delete** from the context menu.
- Select the GameObject and press**Del** (Windows) or **Cmd + Backspace** (macOS).

Mark step as complete

## 5. Add Static Decorations

Q&A (0)

Now you’ve added animated objects to your world, but there are more decorations which can add some visual variety.

Let’s start with a non-animated plant:

**1.**In the Hierarchy, select the **Objects** GameObject that you created before adding the roof for your house.

**2.**In the Scene view, right-click the location where you want to add the plant.

**3.**In the context menu that appears, select **Decorations >** **Add Bush0 Here**. The new decoration will appear in that location.

[Image: image]

It will be automatically added as a child of the **Objects** container GameObject.

**4.**If you need to adjust its position, select the **Move Tool**in the toolbar. Click the blue square in the center of the decoration and drag it to your chosen location.

**5.**Save your changes, then test in Play Mode to see what they look like in the game. Remember to leave Play Mode when you’re done!

Mark step as complete

## 6. Add AnimatedClouds

Q&A (0)

Clouds can also give a sense of place to your world, and enhance the tranquil atmosphere of this Creator Kit.

To add some clouds:

**1.**In the Project window, go to **Assets > Creator Kit - RPG > Art > Sprites > Environment**.

**2.**Select one of the three available cloud designs:

[Image: image]

**3.**In the Hierarchy, open the **World** GameObject and find its child **AnimatedClouds**.

**4.**Drag your chosen Cloud Sprite from the Project window to the **AnimatedClouds** GameObject.

**5.**With the **Cloud**GameObject selected, place your cursor over Scene view and press **F**. This will focus the Scene view on the cloud.

**6.**In the Inspector, find the Cloud GameObject’s **Sprite Renderer** component**.** Set the **Order in Layer** parameter to **2000**.

[Image: image]

This will ensure that clouds are on top of everything else in your Scene, including the roof of the house.

**7.**In the Toolbar, select the **Move Tool**icon. In the Scene view, click and drag the cloud until it is in the correct location.

**8.**You can also resize the cloud, if you want to. In the toolbar, select the**Rect Transform Tool**. With your cursor, click and drag a corner of the box around your cloud to resize it.

**9.**Save your changes to the Scene.

Mark step as complete

## 7. Increase the Variety of your Decorations

Q&A (0)

Although the menu only gives you the option to select different types of plant, you can duplicate these GameObjects and change their Sprites to increase the variety of decorations in your world.

Try adding flowers, rocks or a cactus to vary the environment players have to explore!

To duplicate a decoration GameObject:

**1.** In the Hierarchy, find the GameObject you want to duplicate.

**2.**Right-click the GameObject and select **Duplicate**. Alternatively, select the GameObject and use the shortcut **Ctrl + D**(Windows) or **Cmd + D** (macOS).

**3.**In the Inspector, find the duplicate GameObject’s **Sprite Renderer** component.

**4.**Click the circle select button to the right of the **Sprite** field. Select your chosen Sprite for the GameObject.

**5.** If you want to, you can rename the decoration so that it is easier to identify. In the Hierarchy, right-click the GameObject and select **Rename**.

**6.**Save your changes to the Scene.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
