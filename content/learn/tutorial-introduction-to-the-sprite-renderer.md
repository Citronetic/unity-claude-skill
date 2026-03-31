[Image: image]

# Introduction to the Sprite Renderer

Tutorial

Beginner

+10XP

15 mins

0

Unity Technologies

[Image: Introduction to the Sprite Renderer]Summary

The Sprite Renderer is very important component to use when developing 2D projects as it determines how the given Sprite is rendered. It’s an essential component for the Tilemap system to work properly as well.

In this tutorial, you'll learn how to add the Sprite Renderer to your Sprite, set various properties, and arrange Sprites to render in layers.

Languages available:

EnglishEnglishEnglish

## 1. What is the Sprite Renderer?

Q&A (0)

This tutorial has been verified using Unity 2019.4.10f1 LTS.

The Sprite Renderer is a very important component to use when developing 2D projects, as it determines how any given Sprite is rendered. It is an essential component for the Tilemap system to work properly as well.

Mark step as complete

## 2. Adding the Sprite Renderer

Q&A (0)

When working in a 2D scene, the Sprite Renderer is important as it lets you display images as Sprites. It is also applicable within a 3D project.

1. Add the component to a GameObject, from the dropdown menu: select **Component** > **Rendering** > **Sprite Renderer**, or with a GameObject selected in the Hierarchy Window, select the **Add Component** button in the Inspector, and search for **Sprite Renderer**.

2. You can also create a GameObject with a Sprite Renderer already attached. From the dropdown menu, select: **GameObject** > **2D Object** > **Sprite**. You will now have a new component attached to the GameObject that will allow you to adjust the settings in order to control how that given GameObject is rendered (**Figure 01**).

3. Add two or more GameObjects to the scene and ensure they both contain a Sprite Renderer.

From here, you will now see two GameObjects in your scene, both containing a Sprite Renderer. We will use the Sprite Renderer to set what Sprites both GameObjects will represent and then go over the additional functionality that the Sprite Renderer has.

[Image: image]Mark step as complete

## 3. Sprite Renderer Properties

Q&A (0)

1. Select one of the Sprite GameObjects we added to the scene. You will see the following properties you can change within the Sprite Renderer.

- **Sprite**: This is the Sprite that will render. Sprite objects can be generated from textures by using the Sprite setting on the Texture Importer or created with the Sprite Editor tool. You will want to add a Sprite you wish to render here.
- **Color**: This will set the vertex color of the rendered Mesh for the Sprite Useful for changing the overall color of the sprite mesh.
- **Flip**: This will flip the Sprite in the X or Y planes, effectively mirroring the sprite.
- **Draw Mode**: This property has three settings within the dropdown menu; **Simple**, **Sliced**, and **Tiled**.  These properties define how the Sprite scales when you change its dimensions.  The properties will be explained in further detail on the next step.
- **Mask Interaction**: When using the Sprite Masking feature, this determines how the Sprite behaves with the Sprite Mask, giving you three possible options: **None**, **Visible Inside Mask**, or **Visible Outside Mask***.* This is important to control if you're using Sprite Masks.
- **Sprite Sort Point**: You can choose between the Sprite’s Center or its Pivot Point when calculating the distance between the Sprite and the camera.
- **Material**: This is the material that will be used to render the Sprite. It is useful in case you have a specific material you wish to use to render the sprite with.
- **Sorting Layer**: This is the Layer that defines the Sprite’s overlay priority during rendering.  You can keep it as **Default**, or **Add Sorting Layer**.
- **Order in Layer**: This gives an overlay priority to the Sprite within its own Layer. Lower numbers are rendered first and subsequent numbers overlay those below. This is useful if you have a particular sprite that should be hidden behind other sprites on the same Layer.

2. Select the **Draw Mode** of your Sprite Renderer to reveal additional properties. We won’t change anything here for now:

- **Simple**: This is the default behavior, the image scales in all directions when its dimensions change.
- **Sliced**: Use this option if you intend to apply a 9-slicing technique to an image and that you want the sections to stretch. In this mode, the corners stay the same size while the top and bottom of the Sprite stretches horizontally. The sides of the Sprite stretch vertically and the center of the Sprite stretches horizontally and vertically to fit the Sprite’s size.
- **Tiled**: Use this option if you intend to apply a 9-slicing technique to an image, and that you want the sections to repeat. In this mode, the Sprite remains the same size and does not scale. Instead the top and bottom of the Sprite repeat horizontally while the sides repeat vertically. The center of the Sprite repeats in a tile formation to fit the Sprite’s size.

3. Select the Tiled option from the list, you get a few more properties you can set, for now we won’t change anything here but it is good to get familiar with the settings (**Figure 02**).

[Image: image]

- **Size**: Use this to change the horizontal and vertical size of the Sprite. You have to use this property to change the size of the Sprite if you want the 9-slicing technique to work.
- **Tile Mode**: Use this to control how the sections repeat when the dimensions of the Sprite change.

**Tile Mode** has two additional properties that become available to configure: **Continuous**, and **Adaptive**,

- **Continuous**: This is the default option.  When the Sprite changes size, the Sprite repeats evenly.
- **Adaptive**: The repeating sections of the Sprite only repeat when the dimensions of the Sprite reach the Stretch Value.
- **Stretch Value**: This slider is between 0 and 1. 1 represents an image resized to twice its original dimensions.  If the value is 1, the section repeats when the image is stretched to twice its original value (**Figure 03**).

[Image: image]Mark step as complete

## 4. Sprite Renderer Materials

Q&A (0)

A Sprite Renderer uses the texture supplied in the Sprite property but uses the Shader and other properties from the Material property. This means you can use the same material to render different Sprites without worrying about what texture is assigned on the material. The Sprite is then rendered on a mesh that uses position, color and UV at each vertex but doesn’t use a normal vector. If you require the use of normal vectors, you can calculate them using a vertex Shader. There are two default Shaders used for Sprites:

- **Sprites / Default**: This is a simple alpha blended Shader that does not interact with the lights in the scene (**Figure 04**).
- **Sprites / Diffuse**: This is a simple alpha blended surface Shader that does interact with the lights in the scene. This Shader generates a front-facing normal vector.

[Image: image]Mark step as complete

## 5. Flipping The Sprites

Q&A (0)

Let’s flip the Sprites we have in our scene:

1. Take your second sprite and make it a child of your first.

2. Select the parent sprite and assign it a -1 for its Scale in the X direction (**Figure 05**).

3. Notice this has a side effect of also flipping any and all child GameObjects.

4. Set the Scale back to 1.

5. Ensure you have the Parent Sprite selected then select Flip X option. The Sprites flipping property provides a lightweight alternative that doesn’t affect any other components of GameObjects attached to the Sprite (**Figure 06**). This will enable us to flip Sprites individually, regardless of if they are parents or children of other GameObjects.

[Image: image][Image: image]Mark step as complete

## 6. Sorting Layers with Sprites

Q&A (0)

Next let’s take a look at Sorting Layers and see how they can benefit you. Sorting Layers help determine the order in which Sprites are rendered. When you have an image set on a ‘lower’ Sorting Layer, it will be rendered first, such as an article of clothing underneath a character’s head as a background object (**Figure 07**).  Conversely, if the character’s clothing is moved to a higher Sorting Layer, it will be overlayed in front of the character avatar’s head, to simulate a foreground object (**Figure 08**).

1. Create two Sorting Layers, name the first one you create Background and the second one you create Foreground.

2. Select your first Sprite and add it to the Background Sorting Layer.

3. Take the second Sprite and add it to the Foreground Sorting Layer.

4. Put these two sprites in the same position. You will notice the Foreground Layer will overlap the Background.

5. Flip the Sprites’ Layers and you will see that the Sprites reverse which one is overlapping the other.

[Image: image][Image: image]

In 2D games, the visual illusion of “depth” is achieved through the usage of layering.  It is important to have a method to determine the overlay priority of different Sprites to help simulate “depth”. This is why **Sorting Layers** is essential to 2D projects.  It allows you to divide Sprites into groups for overlay priority.  Furthermore, you can assign overlay priorities with the **Order in Layer** options for Sprites that exist in the same layer. The use of this overlay technique should be conducted in a specific way.  For example, the Character’s head Sprite and his clothing Sprite could both exist on the same Sorting Layer.  Let’s say we want the character’s head Sprite to have more importance over the clothing Sprite, we would assign the character’s head Sprite a higher priority in the **Order in Layer** property. Doing so will tell the renderer to overlay the character’s head Sprite last, such that it appears in the foreground, (**Figure 07**).

Mark step as complete

## 7. Conclusion

Q&A (0)

It is important to understand how the Sprite Renderer works, as it can give you much needed control over your 2D projects. How the sprites behave, depends on when they are rendered to the screen. Gaining mastery over the Sprite Renderer will come naturally as you work with your 2D project.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
