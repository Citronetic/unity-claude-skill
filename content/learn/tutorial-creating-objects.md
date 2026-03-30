[Image: image]

# Creating Objects

Tutorial

Beginner

+10XP

30 mins

535

(196)

Unity Technologies

[Image: Creating Objects]Summary

You will create a new GameObject  that allows the player to destroy obstacles

**Tutorial Outcome**

By the end of this tutorial, you will be able to

- Add a (trigger) Capsule Collider 2D to keep track of when objects touch or intersect
- Add a Bullet attribute script to keep track of points
- Create a prefab
- Create an empty GameObject
- Add the Object Shooter script
- Insert a Prefab as a Prefab to Spawn for the Object Shooter script

**Key concepts:**

- Capsule Collider 2D
- Trigger Colliders
- Bullet Attribute script
- Prefab
- Object Shooter script

**Challenge Ideas:**

- What would happen if the laser was not turned into a Prefab? Would the lasers still work in the same way? Why or not?
- What would happen if the player could gain points for destroying asteroids? How would it change the way the game ends?

Languages available:

EnglishEnglish한국어English

## 1. Create a Laser Prefab

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

[Image: image][Image: image]

*You’ll introduce health so that objects can damage each other on collision*

1. Go to Project > Assets > Images > Projectiles and drag LasersMid into the Hierarchy
2. In the Inspector of LasersMid, click on Add Component and add Capsule Collider 2D and change the Direction to Vertical. Tweak the Size until it just covers the projectile. Now, tick off the check mark next to Is Trigger
3. Also add Rigidbody 2D to allow the projectile to move and make the Gravity 0 as you did for the other Rigidbody 2D components
4. Now add the Bullet Attribute script to keep track of who shoots the laser so that the game knows to whom to assign points to
5. Now that all of the necessary components have been added to the laser, you will make it a prefab by dragging LasersMid from the Hierarchy into Project > Assets > Prefabs. Once you’ve checked that LasersMid has been transformed into a prefab, delete LasersMid from the Hierarchy

[Image: image]

Definitions

- Bullet Attribute script: holds a reference to which player initially shot it
- Prefab: a “master copy” to generate GameObjects from

Did you know?

- Trigger colliders are used when you need to detect when two objects touch or intersect each other without the components applying a push or resistance

Mark step as complete

## 2. Create a Laser Shooter

Q&A (0)[Image: image][Image: image]

*You’ll introduce health so that objects can damage each other on collision*

1. Click on SpaceshipRed in the Hierarchy and then right click and click on Create Empty to create an empty GameObject. Right click on it and rename it LaserShooter
2. While clicking LaserShooter in the Hierarchy, go to the Inspector > Add Component > add Object Shooter script. Next, drag and drop the LasersMid Prefab that you created in Step 1.1 and into Prefab to Spawn. Feel free to change Key to Press (the key that will be pressed to trigger the laser) to something else
3. After the script has been added, you will notice a green arrow and circle appears in the game window. Move this to the front tip of the ship
4. Now, click on the asteroid in the Hierarchy. In its Inspector window add the Destroy for Points script so that the asteroid will be destroyed on collision with the laser. Change the value of Points Worth from 1 to 0 because the purpose of this game is not to gain points for destroying the asteroids
5. Press play to test the game and notice that you can destroy the asteroids

[Image: image]

Definitions

- Object Shooter script: creates copies of a Prefab and shoots them out
- Destroy for Points script: removes an object on collision and awards the Player points

Mark step as complete

## Complete this Tutorial

Mark all steps complete
