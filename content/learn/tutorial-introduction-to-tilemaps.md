[Image: image]

# Introduction to Tilemaps

Tutorial

Beginner

+10XP

20 mins

0

Unity Technologies

[Image: Introduction to Tilemaps]Summary

Unity’s Tilemap system makes it easy to create and iterate level design cycles within Unity. It allows artists and designers to rapidly prototype when building 2D game worlds. In this tutorial, you'll create a Tilemap and explore the Tilemap system including Tilemap settings, and you'll use the Tile Palette to edit your Tilemap.

Languages available:

日本語English日本語日本語

## 1. What is Tilemap?

Q&A (0)

*Verified with Unity 2019 LTS and 2D Tilemap Editor 1.0.0.*

Unity’s Tilemap system makes it easy to create and iterate level design cycles and allows artists and designers to rapidly prototype when building 2D game worlds. The Tilemap Editor is installed via the Package Manager.

A Tilemap consists of a grid overlay and a number of other components working together. The entire system allows you to paint levels using tiles and brush tools and define rules for how tiles behave. With Tilemaps, you can create platforms with dynamic edges, animated tiles, randomized tile placements, and more. Unity’s Tilemap system is perfect for 2D projects that contain gameplay levels as it allows the user to prototype levels that can be immediately tested within the game engine.

In this tutorial, we’ll explore the different parts of the Tilemap system.

ステップを完了としてマーク

## 2. Installing the Tilemap Editor

Q&A (0)

**1.** From the Window drop-down, select Package Manager (**Figure 01**).

[Image: image]

**2.**  In the left column of the Package Manager, click 2D Tilemap Editor, then click Install in the lower right corner (**Figure 02**).

[Image: image]ステップを完了としてマーク

## 3. Create a Tilemap

Q&A (0)

**1.** Right-click in the Hierarchy View and select **2D Objects > Tilemap**. If you’re already familiar with the classes of Tilemap, you can instead create a specific one. This will create a Tilemap in the Scene (**Figure 03**).

[Image: image]ステップを完了としてマーク

## 4. About the Tilemap system

Q&A (0)

A Tilemap consists of two things: a grid and the actual Tilemap. The Tilemap editor works in a one-to-many relationship; there’s only one grid in the Scene, but there can be several Tilemaps. The grid creates the layout for the Scene that the Tilemaps rely on. Selecting the grid in your Hierarchy will open the grid properties in the Inspector (**Figure 04**).

[Image: image]

Looking at the Inspector, there are four things you can directly change about how the grid organizes and displays the tiles. Aside from Cell Layout, you’ll normally want to leave these settings at their default values:

- **Cell Size**: This determines the size of each square of the grid. This change applies to all Tilemaps within the grid.
- **Cell Gap**: This determines the space between each square on the grid. Much like Cell Size, this applies to all Tilemaps within the grid.
- **Cell Layout**: This determines the layout of the tiles on the grid. Options include Rectangle, Hexagonal, Isometric, and Isometric Z as Y.
- **Cell Swizzle**: This determines which direction the grid is facing. The directions you can select are XYZ, XZY, YXZ, YZX, ZXY, and ZYX.

ステップを完了としてマーク

## 5. Configuring the Tilemap

Q&A (0)

Next, select the Tilemap underneath the grid in the Hierarchy. It will display two components:

- Tilemap (**Figure 05**)
- Tilemap Renderer (**Figure 06**)

[Image: image]

With the Tilemap component, you can change how the Tilemap behaves and how the tiles within it work. Below is a quick breakdown of Tilemap settings:

- **Animation Frame Rate**: This affects the speed of any animated tiles in the Tilemap.
- **Color**: You can set not only color, but also transparency values for the tiles. This is particularly useful with tiles like clouds or water.
- **Tile Anchor**: This is where each tile will be anchored in the grid. By default, it’s set so the tiles are anchored to the center of each grid space.
- **Orientation**: Similar to Grid Direction, this controls the direction the tiles will be facing. This is useful when you’re working within a 3D environment and not 2D.

[Image: image]

You’ll also notice the Tilemap Renderer, which allows you to change how each tile is rendered and its sorting order.

- **Sort Order**: You can change the sorting order of the tiles by selecting which ones are rendered first. You have the following options: Bottom Left, Bottom Right, Top Left, and Top Right.
- **Mode**: Sets the render mode of the tiles. Options are Chunk (the default) or Individual.

- In Chunk Mode, Sprites on a Tilemap are rendered in batches, with each batch being treated as a single sort item in the 2D Transparent Queue. The number of draw calls is reduced, resulting in improved performance, but other renderers cannot be layered or rendered in between any part of the Tilemap, which prevents interweaving of other Sprites with the Tilemap. Chunk Mode is ideal for a terrain base layer or any map that sits at a single depth in the Scene.
- In Individual Mode, Sprites are sorted based on their position in the Tilemap and the Sort Order, and rendered in a way that allows for interweaving of Sprites. This allows a character to go behind other Sprites, such as between trees in a forest.
- **Detect Chunk Culling**: The Tilemap Renderer can detect the Chunk bounds automatically, or bounds can be manually set in the next options.
- **Chunk Culling Bounds**: This allows for extension of bounds for culling in Chunk Mode.
- **Mask Interaction**: The Tilemap can optionally be visible only inside or outside a Sprite Mask.
- **Material**: You can change the Material that’s used to render each tile.
- **Sorting Layer**: This is the Layer that defines the Sprites’ overlay priority during rendering.
- **Order in Layer**: Use this option when you have more than one object in a Sorting Layer. It helps determine which Layer is rendered first. This is useful for rendering clouds over trees.

ステップを完了としてマーク

## 6. Exploring the Tile Palette

Q&A (0)

When using the Tilemap system, you’ll most likely be using the Tile Palette tool to assist with creating, modifying, or editing Tilemaps. In the Tile Palette, there are several tools to aid you in this process.

Open the Tile Palette window by going to **Window > Tile Palette** in your project
(**Figure 07**).

[Image: image]

**1.**From left to right, the Tile Palette has several tools you’ll want to take note of:

**Selection**: Allows you to select a tile in the Tile Palette window to see the tile’s settings.

[Image: image]

**Move**: Allows you to move the tiles around the Scene view.

[Image: image]

**Brush**: Allows you to paint in the Scene view with the tile you selected in the Tile Palette window.

[Image: image]

**Fill Selection**: Allows you to define an area to fill with a selected tile.

[Image: image]

**Tile Sampler**: Allows you to pick tiles from the Scene; it works like any eyedropper in image manipulation software.

[Image: image]

**Eraser**: Erases tiles in the Scene view.

[Image: image]

**Fill**: Allows you to fill an area with a selected tile without having to define the area you wish to fill. It works by filling out all adjacent vacant grid squares, so it’s best used for areas surrounded by other existing tiles. If you’re not careful, you can fill the entire Scene with the selected tile, which can tax the computer.

[Image: image]ステップを完了としてマーク

## 7. Using the Tile Palette

Q&A (0)

There is one more button in this window: the Active Tile Palette drop-down. This allows you to select an existing Tile Palette or create a new one.

**1.**  Select **Active Tilemap** and select **Create New Tile Palette** (**Figure 15**). Or, select a pre-existing Tile Palette.

[Image: image]

**2.**  Name your new palette and leave the other settings alone. This will create a new Tile Palette for you to use.

[Image: image]

The Active Tilemap drop-down determines which of the Tilemaps you’re painting on. When you have multiple Tilemaps within your Scene, it’s important to keep an eye on the one you’re currently working on. Not doing so can lead to issues like overlapping tiles or tiles that won’t animate properly.

The Tile Palette has a few more features to note: Selected Palette, the Edit button, and the Default Brush (**Figure 16**).

- Use **Selected Palette** to choose which Tile Palette you wish to use/edit.
- The **Edit button** is a toggle to edit your Tile Palette.
- **Default Brush** is a drop-down that allows you to choose from a variety of brushes to paint your Scene.

ステップを完了としてマーク

## 8. Using Tilemap Collider 2D

Q&A (0)[Image: image]

**1.**  Go to your Tilemap Renderer.

**2.**  Add an additional component called **Tilemap Collider 2D**, which will prevent objects from passing through the tiles.

ステップを完了としてマーク

## 9. Conclusion

Q&A (0)

The Tilemap system is a robust tool that will help speed up the process of creating 2D levels and allow for rapid prototyping. The system removes a lot of redundant and repetitive work, allowing you to quickly build 2D levels without having to worry about going back over your work to implement the boundaries, rules, and animations by hand.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
