This version of Unity is unsupported.

Create a sprite mask

Sprite mask reference

# Apply a mask to a sprite

The **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../sprite/sprite-landing.html)
See in [Glossary](../../Glossary.html#Sprite) to be used as a mask needs to be assigned to the **Sprite Mask**A texture which defines which areas of an underlying image to reveal or hide. [More info](../../sprite/mask/mask-landing.html)
See in [Glossary](../../Glossary.html#SpriteMask) Component.

The Sprite Mask **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject) itself will not be visible in **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene), only the resulting interactions with sprites. To view Sprite Masks in the scene, select the Sprite Mask option in the Scene Menu.

[Image: Scene view with Sprite Mask view turned on in the scene]
Scene view with Sprite Mask view turned on in the scene

Sprite Masks are always in effect. sprites to be affected by a Sprite Mask need to have their Mask Interaction set in the **Sprite Renderer**A component that lets you display images as Sprites for use in both 2D and 3D scenes. [More info](../../sprite/renderer/renderer-landing.html)
See in [Glossary](../../Glossary.html#SpriteRenderer).

[Image: The character sprites Mask Interaction is set to Visible Under Mask thus only parts of the sprite that are in the mask area are visible]
The character sprites Mask Interaction is set to Visible Under Mask thus only parts of the sprite that are in the mask area are visible

By default a Sprite Mask will affect any sprite in the scene that has their Mask Interaction set to Visible or Not Visible Under Mask. Quite often we want the mask to only affect a particular sprite or a group of sprites.

[Image: The character sprites are interacting with masks on both the cards]
The character sprites are interacting with masks on both the cards

One method of ensuring the mask is interacting with particular sprites is to use a Sorting Group Component.

[Image: Sorting Group Component added to the Parent GameObject ensures the mask will affect only children of that Sorting Group]
Sorting Group Component added to the Parent GameObject ensures the mask will affect only children of that Sorting Group

An alternative method of controlling the effect of the mask is to use the Custom Range Settings of a Sprite Mask.

[Image: A Sprite Mask with a Custom Range setting ensures the mask will affect only sprites in the specified Sorting Layer or Order in Layer range]
A Sprite Mask with a Custom Range setting ensures the mask will affect only sprites in the specified Sorting Layer or Order in Layer range

The Range Start and Range End provides the ability to selectively mask sprites based on their Sorting Layer or Order in Layer.

[Image: Effect of Sprite Mask Range Start and Range End properties on an example of layered sprites.]
Effect of Sprite Mask Range Start and Range End properties on an example of layered sprites.

---

SpriteMask

Create a sprite mask

Sprite mask reference
