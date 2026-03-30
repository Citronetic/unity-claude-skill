# 2D Sprite Shape

## Overview

The **Sprite Shape** is a flexible and powerful world building Asset that features Sprite tiling along a shape's outline that automatically deforms and swaps Sprites based on the angle of the outline.  Additionally, you can assign a Fill texture to a Sprite Shape to create filled shapes with tiled textures as backgrounds or other large level-building props.

The following are examples of Sprite Shapes used to construct different parts of various levels.

[Image: This image shows a level created with the Sprite Shape tool. This shows a 2D side-scrolling platform level with multiple platforms made of tiled red brick sprites. The platforms are all of different lengths. The background is made of tiled purple bricks made to resemble castle walls. The different level elements are curved to show that their geometry follows the spline of the Sprite Shape tool.]

[Image: This image shows a level created with the Sprite Shape tool. This shows a 2D side-scrolling platform with purple rounded geometry of random shapes. The random shapes make up both the floor and ceiling of a platforming level, with a character sprite to the left.]

[Image: This image shows a level created with the Sprite Shape tool. This shows a 2D side-scrolling platform level with its floor made of tiled grass and rock tiles. Trees and plants decorate the level, which are made of tiled sprites with the Sprite Shape tool.]

Sprite Shapes comprise of two parts - the [Sprite Shape Profile](SSProfile.html) Asset, and the [Sprite Shape Controller](SSController.html) component. The Sprite Shape Profile contains the angle settings and Sprites used by the Sprite Shape, and you edit the Sprite Shape's outline with the Sprite Shape Controller component.

## Importing Sprites for Sprite Shapes

When importing Sprites, use the following [property settings](https://docs.unity3d.com/Manual/TextureTypes.html#Sprite) to ensure that the Sprites are compatible for use with Sprite Shape:

1. [Texture Type](https://docs.unity3d.com/Manual/TextureTypes.html#Sprite) - Set this to ‘Sprite (2D and UI)’. Other Texture types are not supported for Sprite Shapes.

2. **Sprite Mode** - Set this to ‘Single’ if the Texture contains only a single Sprite.

3. **Mesh Type** - This must be set to **Full Rect** for the Sprite to be used with Sprite Shape.

In addition, if the Sprites used for the Sprite Shape are part of a Sprite Atlas, disable both **Allow Rotation** and **Tight Packing** options under the Sprite Atlas’ properties so that the Sprites can be used by the Sprite Shape.

## Creating a Sprite Shape general workflow

Create **Sprite Shapes** with the following steps:

1. Create a **Sprite Shape** GameObject from the main GameObject menu (menu: **GameObject > 2D Object > Sprite Shape**) and select from the two available options:

- [Open Shape](SSProfile.html#open-shape)

- [Closed Shape](SSProfile.html#closed-shape)

2. Edit the outline of the Sprite Shape with the [Sprite Shape Controller](SSController.html) component settings.

3. Enable [Physics 2D](https://docs.unity3d.com/Manual/class-Physics2DManager.html) interactions for your Sprite Shapes by attaching a [Collider](SSCollision.html) component.

To further customize the shape and outline of a **Sprite Shape**:

1. Create a **Sprite Shape Profile** from the main menu (menu: **Assets > Create > 2D > Sprite Shape Profile**).

2. Create [Angle Ranges](SSProfile.html#creating-angle-ranges) and [assign Sprites](SSProfile.html#assigning-sprites) in the **Sprite Shape Profile**.

3. Assign the **Sprite Shape Profile** to a **Sprite Shape Controller**'s **Profile** settings. The same Profile can be used by multiple Sprite Shapes.

## Placing an Object along the Spline

Place an object along with the spline with the following steps.

1. Select the desired GameObject and add [Sprite Shape Object Placement](SSObjectPlacement.html) component from Add Component in Inspector.

2. Select and assign the source SpriteShapeController in the Inspector.

3. Adjust the ratio, start and end points to position the GameObject along the spline.

4. Toggle Set Normal to adjust the GameObject to rotate along the direction of the SpriteShapeController.
