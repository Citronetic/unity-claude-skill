This version of Unity is unsupported.

Diagnostics

Time

# Tags and Layers

The **Tags and Layers** settings (main menu: **Edit** > **Project Settings**A broad collection of settings which allow you to configure how Physics, Audio, Networking, Graphics, Input and many other areas of your project behave. [More info](comp-ManagerGroup.html)
See in [Glossary](Glossary.html#ProjectSettings), then select the **Tags and Layers** category) allows you to set up [Tags](#Tags)A reference word which you can assign to one or more GameObjects to help you identify GameObjects for scripting purposes. For example, you might define and “Edible” Tag for any item the player can eat in your game. [More info](Tags.html)
See in [Glossary](Glossary.html#Tag), [Sorting Layers](#SortingLayers) and [Layers](#Layers)Layers in Unity can be used to selectively opt groups of GameObjects in or out of certain processes or calculations. This includes camera rendering, lighting, physics collisions, or custom calculations in your own code. [More info](Layers.html)
See in [Glossary](Glossary.html#Layer).

[Image: The Tags and Layers Manager, before any custom tags or layers have been defined]
The Tags and Layers Manager, before any custom tags or layers have been defined

## Tags

**Tags** are marker values that you can use to identify objects in your Project (see documentation on [Tags](Tags.html) for further details). To add a new Tag, click the plus button (+) at the bottom-right of the list, and name your new Tag.

[Image: Adding a new Tag]
Adding a new Tag

Note that once you have named a Tag, you cannot rename it. To remove a Tag, click on it and then click the minus (-) button at the bottom-right of the list.

[Image: The tags list showing four custom tags]
The tags list showing four custom tags

## Sorting Layers

Sorting Layers are used in conjunction with [Sprite](sprite/sprite-landing.html)A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](sprite/sprite-landing.html)
See in [Glossary](Glossary.html#Sprite) graphics in the 2D system. *Sorting* refers to the overlay order of different Sprites.

[Image: Adding a new Sorting Layer]
Adding a new Sorting Layer

To add and remove Sorting Layers, use the plus and minus (+/-) buttons at the bottom-right of the list. To change their order, drag the handle at the left-hand side of each Layer item.

[Image: The Sorting Layers list, showing four custom sorting layers]
The Sorting Layers list, showing four custom sorting layers

## Layers

Use Layers throughout the Unity Editor as a way to create groups of objects that share particular characteristics (see documentation on [Layers](Layers.html) for further details). Use Layers primarily to restrict operations such as raycasting or rendering, so that they are only applied to the relevant groups of objects. Layers marked as **Builtin Layer** are default layers used by Unity, which you cannot edit. You can customise layers marked as **User Layer**.

[Image: Adding a new Layer]
Adding a new Layer

To customise **User Layers**, type a custom name into the text field for each one you wish to use. Note that you can’t add to the number of Layers but, unlike Tags, you can rename Layers.

## Rendering Layers

If your project uses the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) (URP) or the High Definition Render Pipeline (HDRP), this section lists the names of Rendering Layers. Use Rendering Layers to configure which lights or decals affect which **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject). Refer to the following for more information:

- [Rendering Layers in URP](urp/features/rendering-layers.html)

- [Rendering Layers in HDRP](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@17.0/manual/Rendering-Layers.html)

The Built-In Rendering Pipeline doesn’t support Rendering Layers.

TagManager

Diagnostics

Time
