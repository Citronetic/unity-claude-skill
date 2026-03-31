[Image: image]

# Introduction to the Sprite Atlas

Tutorial

Beginner

+10XP

20 mins

0

Unity Technologies

[Image: Introduction to the Sprite Atlas]Summary

A Sprite Atlas organizes your Sprites onto a sheet to optimize your game's performance. In this tutorial, you'll create and configure a Sprite Atlas.

Languages available:

EnglishEnglishEnglish

## 1. What is a Sprite Atlas?

Q&A (0)

This tutorial has been verified using Unity 2019.4.10f1 LTS - [https://learn.unity.com/tutorial/introduction-to-the-sprite-atlas-2019-3](https://learn.unity.com/tutorial/introduction-to-the-sprite-atlas-2019-3)

Assembling your art on a Sprite Atlas, also known as a Sprite Sheet, greatly helps to optimize your game, but manual layout of a Sprite Sheet is time intensive. Because the layout is more likely to favor human readability than machine efficiency, wasted memory from excessive transparent pixels is another common issue. It’s also extremely likely that you’ll want to update or change your art during the production process, further exacerbating the time requirement.

Using Unity, creating a Sprite Atlas is as fast and easy as creating a Sprite Atlas GameObject and assigning sprite textures for packing. In this context, a texture refers to any image file containing one or more sprites. Import settings for the Sprite Atlas are used rather than those for the source textures. Once textures are assigned to a Sprite Atlas, Unity packs them together onto the Sprite Atlas as one might fill a page with stickers. To streamline the preparation of the Sprite Atlas, and to aid project organization, it’s recommended to sort sprites into folders named by character or purpose. You may find in some cases that a single set of sprites doesn’t completely fill out a Sprite Atlas, but two or more can be combined for more efficient use of space.

Mark step as complete

## 2. Creating a Sprite Atlas

Q&A (0)

For this example, we’ll assume that you want to create a master Sprite Atlas for your player class Barbarian, and that your sprites are stored.

1. From the Assets dropdown, or by right-clicking in the Project window, select **Create**> **Sprite Atlas**, naming it *sa_Player_Barbarian_2048_master*. Click the lock icon in the upper right of the Inspector to lock focus (**Figure 01**).

[Image: image]

2. A Sprite Atlas starts as a Master type, marked for inclusion into the build. There are two types of Sprite Atlas: Master and Variant. A Master Sprite Atlas is one to which you assign objects, and a Variant is a scaled-down version of a Master. You might have variants of multiple sizes, including only what’s necessary to target various platforms. Setting a Sprite Atlas to type Variant adds a slot for the master Sprite Atlas and replaces the Packing settings with a scale multiplier (**Figure 02**).

[Image: image]

3. In the Packing section, you have a few options to further optimize the Sprite Atlas:

- **Allow Rotation** allows Unity to rotate sprites, rather than keeping them in their original orientation.
- **Tight Packing** allows Unity to place the sprites in non-rectangular cells closer to their shapes, similar to a jigsaw puzzle.
- **Padding** is the number of empty pixels between packed sprites.

4. A Sprite Atlas will use the texture settings as shown in the Inspector rather than those of the source sprites.

5. At the bottom of the Inspector, click **+** under Objects for Packing (**Figure 03**).

[Image: image]

6. In the search bar of the Select Object window, type *t:Folder Player Barbarian* or *Player Barbarian t:folder* (**Figure 04**).

[Image: image]

7. Double click the *Player Barbarian* folder in the results list to add it to the Sprite Atlas. Back in the Inspector, click **Pack Preview**. The Sprite Atlas is assembled and a preview appears below the Inspector.

8. Your Sprite Atlas is complete. Try adding and removing other folders and textures, remembering to click **Pack Preview** after any changes.

Mark step as complete

## 3. Conclusion

Q&A (0)

Sprites that have been packed do not require any special handling, and Sprite Atlases are an easy way to (potentially) dramatically optimize your game’s performance.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
