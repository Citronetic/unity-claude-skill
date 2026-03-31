[Image: image]

# Introduction to Particle Systems

Tutorial

Beginner

+10XP

15 mins

722

(1649)

Unity Technologies

[Image: Introduction to Particle Systems]Summary

Unity features a robust Particle System where you can simulate moving liquids, smoke, clouds, flames, magic spells, and a whole slew of other effects. In this tutorial, you'll get a high level overview of the Particle System and its features, so that you can start getting ideas for your own projects.

Languages available:

EnglishEnglish日本語简体中文English

## 1. Introduction to Particle Systems

Q&A (0)

Verified: 2019.4

The Particle System in Unity is a robust particle effect system where you can simulate moving liquids, smoke, clouds, flames, magic spells, and a whole slew of other effects. The system makes it possible to represent effects that are normally difficult to portray, using meshes or Sprites since they often represent effects that are fluid and intangible in nature.

The Particle System is a very robust, in depth system in Unity and could cover many pages worth of explanations for every module it contains and what each module is capable of doing on its own. This document will focus on a high level overview of the Particle System and its features.

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

Mark step as complete

## 2. Adding a Particle System

Q&A (0)

There a several ways to add a particle system to your project:

1. From the top menu dropdown, select: **GameObject**> **Effects** > **Particle System**.

2. To add a Particle System to an existing GameObject, select that GameObject, and in the Inspector window, select the **Add Component** button, and type Particle System in the search field.

Once the particle system has been added, you will see the Particle System properties in the Inspector tab (**Figure 01**).

[Image: image]Mark step as complete

## 3. Particle System Properties

Q&A (0)

You will see the Particle System as a game object in the Hierarchy window.  In the Scene window, you will observe particle Sprites populate into the Scene randomly in the upward direction.

1. You can select this Particle System either by selecting it within the Scene or using the Hierarchy (**Figure 02**).

[Image: image]

You’ll begin to see how large the System actually is. The Particle System has some base settings that you can configure (**Figure 01**). You will also notice a large selection of tabs within the Particle System Inspector, these are called Modules (**Figure 03**).

[Image: image]

These Modules contain further settings for the Particle System. The main properties that are expanded by default is known as the Main Module (**Figure 01**).

2. Select the Emission and Shape Modules to expand it and show their settings
(**Figure 04**).

[Image: image]

With these Modules, you can further customize your effects. But for now, we will focus on the Main Module which contains the most common particle settings.

- **Duration**: If Looping isn’t checked, this determines how long the Particle will play.
- **Looping**: Determines if the Particle loops or plays only once.
- **Prewarm**: Only used when looping is enabled. The Particle System will act if it's already completed a full cycle on startup.
- **Start Delay**: The delay in seconds before the particle system starts emitting.
- **Start Lifetime**: The initial lifetime in seconds for the particles. The particle is destroyed after this elapsed time.
- **Start Speed**: The initial speed of the particles. The greater the speed of the particles, the more spread out they will be.
- **3D Start Size**: Changes Start Size from a constant to a vector.
- **Start Size**: The initial size of the particles.
- **3D Start Rotation**: Changes Start Rotation from a Constant to a Vector.
- **Start Rotation**: The initial rotation angle of the particles.
- **Flip Rotation**: Setting the value to 1 flips the rotation angle along the horizontal axis.
- **Start Color**: The initial color of the particles.
- **Gravity Modifier**: Scales the Gravity value set in Unity’s Physics Manager window. If it’s set to 0, the gravity will be turned off.
- **Simulation Space**: Move the particles in Local Space along with the Particle System. World Space particles move freely once emitted.
- **Simulation Speed**: Affects the speed of the simulation of the particles.
- **Delta Time**: Changes the Delta Time from Scaled to Non-Scaled. Scaled time is the time passed in relation to the frames, so it will only count while the game is running. Non- Scaled is time passing since the start of the game, useful for playing effects while the game is paused.
- **Scaling Mod**e: Changes the scaling mode from Local, Shape or Hierarchy.
- **Play on Awake**: Starts emitting immediately when enabled. If this is turned off, you will have to manually activate the particle system with a script or Animation system.
- **Emitter Velocity**: Allows you to change the velocity of the emitter from Rigidbody to Transform.
- **Max Particles**: The upper limit of how many particles can be alive at a once for the given Particle System. It will not emit any more particles after the limit has been reached.
- **Auto Random Seed**: Enables the spawning to be auto seeded to give a more random creation of the particles.
- **Stop Action**: Determines if the Particle System will disable or destroy itself when the Particle System is stopped and all particles have died.
- **Culling Mode**: Choose whether to pause the Particle System simulation when particles are offscreen. Culling when offscreen is an efficient strategy when considering performance, especially if there are many particle effects in your scene.
- **Ring Buffer Mode**: Keeps particles alive until they reach the Max Particles count, at which point new particles recycle the oldest ones, instead of removing particles when their lifetimes elapse.

Mark step as complete

## 4. Particle System Scripting

Q&A (0)

With each Module there are additional settings that pertain to that particular Module. With the Particle System in Unity you’ll also be able to access, modify, disable Particle Systems via scripts. Much like the Particle System it offers a robust and versatile way to affect Particle Systems through code. Once a Particle System has been added to a GameObject you can retrieve the Particle System (**Figure 05**).

[Image: image]

Then you can dig into the ParticleSystem variable to have access to all the other methods and functions available. You can also play or stop the Particle System via code (**Figure 06**).

[Image: image]Mark step as complete

## 5. Conclusion

Q&A (0)

The Particle System in Unity is a versatile, robust system with many options and configurable settings that help you create an unlimited amount of effects that are highly customizable. These effects could range from fire to water, to fluid simulations or cartoon explosions. The system allows beginners and experts the same amount of control with robust capabilities, in being able to create exactly what you want.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
