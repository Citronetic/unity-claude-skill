[Image: image]

# Challenge: Use a GPU event to spawn the rocket trails

Tutorial

intermediate

+10XP

15 mins

3

(22)

Unity Technologies

[Image: Challenge: Use a GPU event to spawn the rocket trails]Summary

In this tutorial, you will create trails for the rockets using the VFX graph.

Languages available:

EnglishEnglishEnglish

## 1. Use a GPU event to spawn the rocket trails

Q&A (0)

**1.**Add a Trigger AlwaysEvent

**a.**Add a Trigger Event Always to the Update Context of the main rocket System

**b.**Configure the Trigger Event Always to trigger a new Rocket Trail system

**2.**Configure the Rocket Trails to inherit the position of the Rocket to create the trail effect

[Image: image]

**a.**Set the Lifetime

**b.**Set the Position to use the inherited position (plus some simple math to randomize the inherited velocity)

[Image: image]

**c.**Randomize the rotation

**d.**Use the default vector field to create some random movement of the trail during its lifetime

**e.**Render the trail using the Output Particle Trail

[Image: image]Mark step as complete

## Complete this Tutorial

Mark all steps complete
