[Image: image]

# Cameras and lighting primer

Tutorial

foundational

+0XP

40 mins

1

Unity Technologies

[Image: Cameras and lighting primer]Summary

This primer shows you how to spruce up your game with simple and effective camera and lighting tricks.

Click [here](https://docs.google.com/document/d/1TA3aHaRB70SSHbJ4wvENeA8od18R25GvoA6HxMJTYQo/copy) to access a Google Doc version of the activities below.

Languages available:

EnglishEnglishEnglish

## Overview Video

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

Optional Step

## 1. Key terms

Q&A (0)

- *Camera*- A device through which the player views the world.
- *Screen space point*- A point on the screen. This point is defined in pixels. The bottom-left of the screen is (0,0); the right-top is (pixelWidth, pixelHeight). The z position is in world units from the Camera.
- *Viewport space point* - A point on the screen. This point is normalized and relative to the Camera. The bottom-left of the Camera is (0,0); the top-right is (1,1). The z position is in world units from the Camera.
- *World space point*- A point in the scene. This point is defined in global coordinates.
- *Skybox -*A special kind of material used to represent skies or large open areas.
- *Depth*  - The camera’s position in the draw order.
- *Culling Mask* - A system used to determine whether toInclude or omit layers of objects to be rendered by the Camera.
- *Direct lighting*  - Light that is emitted, hits a surface once and is then reflected directly into a sensor
- *Indirect lighting* - All other light that is ultimately reflected into a sensor, including light that hits surfaces several times, and sky light.
- *Real-time lighting* - Lighting that is calculated at runtime.
- *Baked lighting* - Lighting calculations calculated in advance. The results of baked lighting are saved as lighting data and then applied at runtime.
- *Point light* - A Light that is located at a point in the Scene which emits light in all directions equally.
- *Spot light* - A Light that is located at a point in the Scene which emits light in a cone shape.
- *Directional* - A Light that is located infinitely far away which emits light in one direction only.
- *Area light*- A Light that is defined by a rectangle in the Scene which emits light in all directions uniformly across its surface area but only from one side of the rectangle.

Mark step as complete

## 2. Explore activities

Q&A (0)

*1. Camera*Create a “video feed” of your player moving around by using another camera and a render texture to “record” your player’s movement. (*Hint: you can create a render texture by going to your Project tab and right clicking Create > Render Texture)*

*2. As time goes by*Create a simple “room” made out of cubes and take three screenshots of the room at different times of the day (i.e. morning, midday, evening). Experiment with the directional light to show different time periods of the day.

Mark step as complete

## 3. Deeper dive activities

Q&A (0)

*3. Camera view*Create a camera in your scene. Change its settings so that the physical camera is set to on. What differences do you notice? What happens if you set it to orthographic? What differences do you notice between orthographic and perspective?

*4. In a dark room*Create a fully enclosed room made out of cubes so that no outside light reaches in. Use the various types of lighting other than directional to showcase a room fully lit, semi-lit, and dim. Take screenshots of your room in different lighting. In the darker sections, how might you adjust things to make sure your players would still see the character that they are controlling?

Mark step as complete

## Complete this Tutorial

Mark all steps complete
