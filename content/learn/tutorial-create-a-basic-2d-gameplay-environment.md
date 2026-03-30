[Image: image]

# Create a basic 2D gameplay environment

Tutorial

Beginner

+0XP

30 mins

16

(121)

Unity Technologies

[Image: Create a basic 2D gameplay environment]Summary

Now the player character can move, it needs an environment to move around in. In this tutorial, you’ll create a placeholder 2D environment that you can use as you continue to work on the character controller.

By the end of this tutorial, you’ll be able to do the following:

- Set up a new tilemap.
- Configure sprites to use as tiles.
- Paint the tilemap.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

You’ve created a moving character, but at the moment it’s moving through empty space. Before you continue to develop the character movement, it’ll be helpful to create a basic environment for your game. Your goal at this stage is to make the environment functional rather than polished — you’ll have the opportunity to refine and enhance it later in the design and development process.

**Note**: For the purposes of this tutorial, we chose to use the Ruby’s Adventure asset set, and the images used in instructions will reflect this. If you chose another asset set, the file names will be the same, but in your corresponding theme folder.

Mark step as complete

## 2. Set up your tilemap and first tile

Q&A (0)

**Sprites** are 2D assets you can use to create the visuals of your game. So far you’ve created a GameObject for your player character using a sprite, but it would take a lot of work to create a game environment one sprite at a time.

Instead, to create your 2D environment you’re going to use Unity’s tilemap system. **Tilemap** components store and handle **tiles**, which are assets that reference a particular sprite. You can use the tilemap system to lay out tiles on a grid, re-using and connecting tiles as needed to create your world. The tilemap system is a much more efficient way to create a game environment!

[Image: A simple placeholder game environment, created with two different tiles: a gray road tile and pink grass tile.]]

**Important**: In this tutorial you’ll set up a basic placeholder tilemap with individual sprite tiles — you’ll learn how to work with sprite sheets in the second unit, [**Game environment and physics**.](https://learn.unity.com/course/2D-adventure-robot-repair/unit/game-environment-and-physics?version=6.3)

To set up a new tilemap and first tile for your game, follow these instructions:

**1.** Right-click in the**Hierarchy**window and select **2D Object**>**Tilemap** > **Rectangular**.

This creates two new GameObjects:

- **Grid**, which you will use to lay out tiles evenly. The grid will appear in the **Scene** view when this GameObject is created.
- **Tilemap**, a child GameObject of the **Grid** GameObject, which you’ll use to render (display) the tiles that you set up.

**2.** In the **Project** window, go to **Assets**>**_2DAdventureGame**> **Art**>**[Your Chosen Project]**and create a new folder called “Tiles”, then open the **Tiles**folder.

**3.** Right-click inside the **Tiles** folder and select **Create**>**2D** > **Tiles**> **Rule Tile**. Name your new tile “FirstTile”.

**4.** Select the **FirstTile** asset.****In the**Project** window, go to **Assets**>**_2DAdventureGame**> **Art**>**[Your Chosen Project]**and drag the **Tile1** sprite asset to the **Default Sprite** property’s **Select Sprite**box.

This sets the **Tile1** as the sprite that the tile will reference.

[Image: image]Mark step as complete

## 3. Set up your tile palette

Q&A (0)

Just as a painter arranges the colors they plan to paint with on a palette, the **tile palette** is a tool that you will use to organize your tiles and apply them to your tilemap’s grid cells.

To set up a tile palette and add your first tile, follow these instructions:

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

**1.** From the main menu, select **Window**>**2D**>**Tile Palette**.

**Note**: Left-click and drag the **Tile Palette**window next to the **Inspector** window to dock it.

**2.** Open the **[Your Chosen Project] Tilemap** dropdown, then select **Create New Tile Palette**.

**3.** Name your palette “Game Palette”, then select **Create**.

A dialog will appear so you can choose where to save your new palette.

**4.** Select the **Tiles** folder you created previously in this tutorial and continue.

**5.** Drag the **FirstTile**asset from the **Project** window and release it over the center of the tile palette area.

The tile will appear in a single cell of a grid.

**6.** Save your changes.

### Add another tile to the palette

In this tutorial, you’ll create a very basic environment that you’ll iterate on later. For now, you can use two different tile designs to define your level layout. This will help you test and visualize character movement before you create the full environment for your game.

Set up a new tile called “SecondTile” using the **Tile2** sprite and add it to your palette before you continue.

Mark step as complete

## 4. Paint a placeholder tilemap

Q&A (0)

Now that you’ve set up two tiles, you’re ready to create a placeholder environment for your game. Placing tiles on the tilemap grid is called **painting**.

To paint a placeholder environment, follow these instructions:

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

**1.** In the **Tile Palette**window, select **FirstTile** and then select the **Paint with active bush**tool.

**2.** To paint a tile on the **Scene**view grid, select the cells that you want to paint.

Your tilemap will look a little strange for now because the tile sprite is currently smaller than the grid cell size — you’ll fix this in the next step.

**3.** Switch between the two tiles and paint all the grid cells within the camera bounding box.

You can create a simple path or any other tile pattern that you like.

**Note**: To erase a tile, select the **Erase with active brush**tool or hold **D**and select the cell with the tile that you want to remove.

**4.** Save your changes.

Mark step as complete

## 5. Fit your tiles to the grid

Q&A (0)

You’ve painted a basic tilemap, but it doesn’t look quite right at the moment. Each tile sprite has a space around it rather than filling the whole cell; this is because the sprites are smaller than the grid cells.

To fit your tiles to the grid, follow these instructions:

**1.** In the **Hierarchy**window, select the **Grid** GameObject.

**2.**In the**Inspector**window, go to the **Grid** component and find the **Cell Size** property.

Both its **X**and **Y-values** are set to **1**. That means each cell is one unit in width and one unit in height.

[Image: Image showing the Grid component with a callout on the Cell Size property]

**3.** In the **Project** window, go to **Assets**> **_2DAdventureGame** > **Art**> **[Your Chosen Project]**, and select the **Tile1**sprite.

**4.** In the **Inspector**window, find the **Pixels Per Unit** property, which is set to **100**.

Pixels Per Unit (PPU)****tells Unity how to size the****sprite, by defining how many pixels should fit inside one unit – in this case, it’s 100 pixels per unit.

[Image: Screenshot of the Inspector window with a callout for the Pixels per Unit property]

**5.** At the bottom of the **Inspector** window, find the preview image of the sprite.

The sprite size is listed there as**64 x 64 pixels**. This shows that the sprite is too small to fit into a grid cell which is **100 x 100 pixels**.You now have two choices. You can do either one of the following options:

- Set the sprite **Pixels Per Unit** to **64**(or the appropriate scale for your own sprite asset), then select **Apply**. This approach will make the sprite fit one Unity unit, which is the size of one grid cell.
- Select the **Grid**GameObject in the **Hierarchy** window, and in its **Grid** component, adjust both **Cell Size** values (**X** and **Y**) to **0.64**.

For this example, we updated the **Pixels Per Unit** value.

**6.** Set the **Pixels Per Unit** to **64**, then select the **Apply**button. Then, repeat this process for **Tile 2**.

Now all of your tiles should neatly fit the grid cells!

[Image: image]Mark step as complete

## 6. Set the tilemap Order in Layer

Q&A (0)

There’s one more thing that you need to adjust for your tilemap before you can continue to set up the rest of your game: the draw order.

The **draw order**is the order that the different visual elements of your game are rendered (displayed) on the user’s screen. At the moment, both the player character and your tilemap have the same z-axis (depth) position value of **0**. Both GameObjects are also in the same default layer (**0**).

This shared depth value and layer could result in the tilemap being drawn over the character, which would make your game impossible to play. A better way to organize the things that will be rendered in your game is to explicitly tell Unity the correct order to draw them.

To set the draw order for the tilemap, follow these instructions:

**1.** In the **Hierarchy**window, select the **Tilemap** GameObject.

**2.** In the **Inspector** window, under the **Tilemap Renderer**component, locate the **Order in Layer** property.

This property defines the order in which GameObjects in the same layer are drawn.

[Image:  Screenshot showing the component with a callout for the Order in Layer property]

The GameObject with the lowest order value is drawn first; the higher a GameObject’s **Order in Layer** value, the later it is drawn. For Unity to correctly render both the **PlayerCharacter** and **Tilemap** GameObjects, you need to make sure that the **PlayerCharacter** GameObject’s value (**0**) is higher than the **Tilemap** GameObject’s value.

**3.** Set the **Order in Layer** property to **-10**.

The tilemap will now be drawn before any GameObject that has a higher value for this property.

**4.** In the **Hierarchy**window, select the **PlayerCharacter**GameObject.

**5.** In the **Inspector**window, under the **Sprite Renderer** component, confirm that the **Order in Layer** property is set to **0**.

**Note:** You can use negative values for background elements instead of increasing the value of the **PlayerCharacter** GameObject to keep your layering system clean and scalable — background GameObjects can stay below **0**, while gameplay and UI elements use positive values.

**6.** Save your changes.

Mark step as complete

## 7. More things to try

Q&A (0)

If you want to further develop your skills, explore new concepts, or improve your project, check out some of the optional activities below. Each one is tagged as either Easy, Medium, or Difficult, so you can choose the level of challenge.

These activities are entirely optional, so if you’re not interested, no problem — just skip this step. We do recommend attempting at least one of them in order to get the most out of this learning experience. Good luck!

### Medium: Change the tilemap cell shape

In the **Grid** component, you can use the **Cell Layout** property to choose from a range of different cell shapes and arrangements:

- **Rectangle**
- **Hexagon**
- **Isometric** (rhombus-shaped)

Try importing sprites created for the different shape options and using those tiles to create the tilemap.

### Medium: Plan your environment

Now that you’ve started to work with a placeholder environment, you have a better idea of how you’re going to create your final game environment. Take some time now to think about the layout that you want to use for your game. You might find it helpful to sketch a plan on paper or in a digital tool, or just to write some notes to help you later.

As you do, reflect on the following considerations for your game:

- How will you use the paths to guide the player through your environment? Will there be a benefit to staying on them or moving away from them?
- As you go through this course, you’re going to add a friendly NPC, who gives the player an initial instruction, and patrolling enemies. Where might you place these characters, relative to the player’s starting position?
- You’re going to add static damage zones and health collectibles — where might be good locations for these?

[Image:  Image showing a sketch of a level design ]Mark step as complete

## 8. Next steps

Q&A (0)

Now that you’ve created a basic environment, you’re ready to implement movement for the player character based on player input. This is a key requirement for your game, and player input will be critical to the interactions and mechanics that you’ll set up later in the development process.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
