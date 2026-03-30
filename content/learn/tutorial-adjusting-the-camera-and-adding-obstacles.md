[Image: image]

# Adjusting the Camera and Adding Obstacles

Tutorial

Beginner

+10XP

30 mins

282

(191)

Unity Technologies

[Image: Adjusting the Camera and Adding Obstacles]Summary

You will make the camera follow the player’s movements and add obstacles that the player can interact with in the game

**Tutorial Outcome**

By the end of this tutorial, you will be able to

- Make camera follow the player
- Add obstacles to a game
- Make player interact with obstacles

**Key concepts:**

- Camera Follow Script
- Polygon Collider 2D

**Challenge Ideas:**

- Add more than one obstacle in the game by adding more asteroids (remember you can find them in Project > Images > Asteroids)

Languages available:

EnglishEnglish한국어English

## 1. Adjusting the Camera

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

[Image: image]

*You’ll tweak the view frame and make the camera follow an object by adding the Camera Follow script*

1. Select the Main Camera in the Hierarchy and in the Inspector window, change the Frame Size value until you’re happy with how it appears on the screen
2. While still selecting the Main Camera on the Hierarchy, Go to Inspector and Click Add Camera Follow Script
3. Drag and drop the SpaceshipRed from the Hierarchy into the Inspector > Camera Follow (Script) > Object to follow > Target > empty box
4. Press play and notice how the camera now follows the red spaceship when you move it

[Image: image]

Did you know?

- When you use Playground, the Unity Interface is simplified and made easier to read for beginners. If you ever want to use the original Unity interface, you can go to the top left hand screen and click Playground > Turn Playground Off

Mark step as complete

## 2. Add Obstacles

Q&A (0)[Image: image]

*Have fun with physics and collisions and add obstacles into your game*

1. Go to Project > Images > Asteroids and select any asteroid and drag it onto Hierarchy
2. In the Inspector, click on Add Component and add a Rigidbody 2D and set the Gravity to 0 and the Friction to 1 to ensure that the asteroid will stop moving after a short distance
3. To allow the spaceship and the asteroid to be able to push each other, add the Polygon Collider 2D to *both* the asteroid and the spaceship

Mark step as complete

## Complete this Tutorial

Mark all steps complete
