[Image: image]

# Importing 2D Assets into Unity

Tutorial

Beginner

+10XP

20 mins

587

(392)

Unity Technologies

[Image: Importing 2D Assets into Unity]Summary

In this tutorial, you'll import 2D assets into Unity to create Sprites, both one at a time and from Sprite Sheets (Sprite Atlases) containing multiple assets that you will configure in the Sprite Editor.

Languages available:

EnglishEnglishEnglish

## 1. Preparing 2D assets for import into Unity

Q&A (0)

*This tutorial has been verified using Unity 2019.4.10f1 LTS - [https://learn.unity.com/tutorial/importing-2d-assets-into-unity-2019-3](https://learn.unity.com/tutorial/importing-2d-assets-into-unity-2019-3)*

Importing 2D assets, known as Sprites, into Unity is a relatively quick and easy process.

There are a few steps you can take to make importing, finding, and using Sprites in Unity easier. Though you can store them anywhere in the main Assets folder, we recommend that you create a folder inside Assets just for Sprites and, in that folder, create subfolders organized by scene, character, or whatever organizational structure suits your project.

Name your assets so that their purpose is clear. A name like Title_Screen_Background will make an asset easier to distinguish than a name like New Image 27 or Untitled3. If a Sprite is part of an animation, a good practice is to give each frame in the animation the same name, numbering each so that they appear in order in the Project window. For example, you might have 12 Sprites named Player_Barbarian_Walk_North_00 to Player_Barbarian_Walk_North_11.

Unity can import 2D assets either as individual files, where each UI element or frame of an animation is an individual file, or many assets grouped together in a single image (often referred to as a Sprite Sheet, or Sprite Atlas). One way to automate the naming of long sequences of animation frames is to store the frames together, in order, on a Sprite Sheet containing only that animation. In the example above, you’d name the image Player_Barbarian_Walk_North_ and use the Sprite Editor, covered later in this workflow, to automatically slice and name the Sprites. Most animation tools are capable of exporting Sprite Sheets, and their careful organization and naming can automate Sprite setup in Unity. Another case where you might store separate elements on a single sheet is when arranging Sprites for Tilemaps. For more information on Tilemaps, see Introduction to Tilemaps.

Mark step as complete

## 2. Importing a Single Sprite

Q&A (0)

When importing a single Sprite, Unity will name that Sprite after the image file. For example, Hamburger.png becomes Hamburger. Create or open a 2D project in Unity, and drop a Sprite (**Figure 01**) into your Project window, or somewhere inside Assets using Windows Explorer (or Finder on a Mac).

[Image: image]

Click the newly imported Sprite in the Project window to open the Inspector for its import settings. (**Figure 02**)

[Image: image]

For most purposes, the important options here are:

**Pixels Per Unit**: This determines how many Unity units the Sprite is in size. Typically, this number will be the same across all Sprites in a project. In most cases, you’ll decide on this number before production of your assets, as it determines Sprites’ relative scale to each other, the world, and the orthographic camera.

For projects using high-resolution artwork or not targeting a specific resolution, aspect ratio, or visual style (such as a certain retro game console or computer) this number is largely arbitrary. This setting is useful if you’re building a tile-based game world; setting Pixels Per Unit to the size of one world unit makes it easy to quickly build worlds by holding Ctrl (Command on a Mac) to move them one unit at a time.

One more point to consider when setting Pixels Per Unit is how much of your world you want to be visible on screen. This is where Pixels Per Unit comes into play with your (orthographic) camera’s size. For a retro style action adventure, you might make your sprites 16x16, setting your Pixels Per Unit to 16. Orthographic camera size is one-half of the vertical screen size in Unity units. To make your game world 224 pixels tall on the screen, divide half of 224 (112) by 16 to get your orthographic camera size (7 in this case).

**Pivot**: The pivot can be thought of as your Sprite’s attachment point. To have a stalactite hang from the ceiling, you’d set its pivot to Top and its position to the ceiling. For any character or decor element that’s meant to stand on the ground, it’s common to set the pivot to Bottom. There are 10 options for pivot: any of three horizontal positions (center and edges) combined with any of three vertical positions, or a custom pivot, specified in the 0-1 range in both dimensions. Center is the default, and is fine for many purposes.

**Filter Mode**: This determines the visual quality of your Sprites. The options are Point (no filter), Bilinear, and Trilinear. In Point mode, rather than interpolating between source pixels, pixels are repeated or skipped to make a Sprite appear larger or smaller. Bilinear is 2D smoothing, useful for high-resolution or photo-based 2D elements. Trilinear blends between mipmaps, which are not typically used for 2D elements.

Mark step as complete

## 3. Importing and configuring multiple sprites on a single image using the Sprite Editor

Q&A (0)

Importing multiple Sprites on a single image isn’t much different than importing a single Sprite. Rather than the base Inspector, you’ll use the Sprite Editor to slice and name your Sprites and place their pivots.

Create or download an image with multiple Sprites and import it into your project. (**Figure 03**)

[Image: image]

1. Click the image in the Project view to open its Inspector.

2. Set the Sprite Mode to Multiple. (**Figure 04**)

[Image: image]

3. Set Pixels Per Unit and Filter Mode to your chosen values and click Apply.

4. Click on Sprite Editor (**Figure 05**) to open the Sprite Editor window. (**Figure 06**) If you have not already installed the 2D Sprite package, which includes the Sprite Editor, you will be prompted to do so.

[Image: image][Image: image]

5. The first thing we need to do is slice our image into Sprites. Click Slice in the upper left corner of the Sprite Editor. (**Figure 07**)

[Image: image]

Options for Slice Type are:

**Automatic**: The Sprite Editor detects areas surrounded by transparency and designates those as Sprites.

**Grid By Cell Size**: The grid is uniformly sliced, with the user specifying the size of each cell. This is the most common option when building tile-based projects, or projects where most or all of the Sprites on the sheet are the same size (such as icons or other uniform interface elements, or world-building blocks).

**Grid By Cell Count**: The grid is uniformly sliced, with the user specifying the number of rows and columns of Sprites. You might use this instead of Grid By Cell Size if your Sprite Sheet was generated by a program where you’ve already specified the number of rows and columns.

**Cell Size** is specified either by Pixel Size or Column and Row count, depending on which non-Automatic option you choose.

**Offset** lets you mark the starting (upper left) corner of your Sprite Sheet, and is useful in situations where your Sprites are separated by a grid.

**Padding** lets you specify a buffer between Sprites, Again, it’s useful for Sprites separated by a grid.

**Keep Empty Rects** defines a Sprite even where there is no image in the automatically generated region, when slicing by cell size or count.

**Pivot** defines the handle of the Sprite. For example, a Sprite with its Pivot set to Center (the default), will be centered around the origin when its position is set to 0,0,0.

6. Set your options and click Slice.

7. By default, all Sprite names are a combination of the original image file and the Sprite’s position in the sequence of Sprites (assuming a left-to-right, top-to-bottom reading order), starting with 0.

8. Click a Sprite to select it. From here, you can rename it, adjust its position and size, and add borders (for 9-Slicing). To learn more about 9-Slicing, see Using 9-Slicing for Scalable Sprites.

9. To create a new Sprite without using the slice tool (or after you’ve used it), click somewhere in your image (starting outside of any existing Sprites, otherwise you’ll end up selecting and moving that Sprite) and drag to create a Sprite.

10. Once selected, you can also delete a designated Sprite. Note that this doesn’t delete that portion of the image. You can also drag the Sprite’s edges to resize it. Hold Ctrl/Command while dragging to adjust the Sprite’s borders. In our example image, we deleted the Sprites for the center and bottom portion of the column. We then dragged the bottom edge of the top Sprite down to the bottom of the Sprite Sheet to make all of the column one large Sprite. (**Figure 08**)

[Image: image]

11. When you’re done, click Apply and close the Sprite Editor window. (**Figure 09**)

[Image: image]

That’s all there is to importing 2D assets into Unity. The settings you choose will depend largely on your project, and with experience, you’ll find what best suits your needs.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
