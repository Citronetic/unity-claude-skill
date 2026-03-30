[Image: image]

# Challenge: Create a Firework Effect using a GPU Event

Tutorial

intermediate

+10XP

20 mins

5

(37)

Unity Technologies

[Image: Challenge: Create a Firework Effect using a GPU Event]Summary

In this challenge, you will create a Firework Effect using a GPU Event in the VFX Graph

Languages available:

EnglishEnglishEnglish

## 1. Create a Rocket Effect using the VFX Graph

Q&A (0)[Image: image]

**1.**To Spawn the rockets randomly, configure a Periodic Burst Block

**2.**Initialize the particles with the following Blocks
    **a.**Set Lifetime Random
    **b.**Position (Line)
**c.**Add Velocity
    **d.**Set Color

**3.**To create realistic looking projectile flight add the Gravity Block in the Update context

**4.**Configure the Output Context to be a simple Output Particle Point

[Image: image]Mark step as complete

## 2. Use a GPU event to trigger a new set of particles

Q&A (0)[Image: image]

**1.**Enable Experimental Operators / Blocks in the Preferences

**2.**Add a Trigger Event on Die block to the Update Context

**3.**Configure the Trigger Event on Die block to create a new particle system

**4.**Setup the new particle system to simulate a firework’s explosion

[Image: image]Mark step as complete

## Complete this Tutorial

Mark all steps complete
