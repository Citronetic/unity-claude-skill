[Image: image]

# Challenge - Bake the Scene Lighting

Tutorial

intermediate

+10XP

15 mins

17

(31)

Unity Technologies

[Image: Challenge - Bake the Scene Lighting]Summary

In this tutorial, you will bake the scenes lighting to increase performance of the project.

Languages available:

EnglishEnglishEnglish

## 1. Profiling the Scene

Q&A (0)

**1.**Use the Profiler to identify an issue with Batching
    **a.**Open the Profiler in Unity, by going to **Window**> **Analysis** > **Profiler**.
    **b.**Play the game and observe the performance profile
    **c.**Use the Rendering Profiler and the GPU Profiler to identify areas for optimization

[Image: image]

**d.**Record the profile data to use as a baseline (never optimize without a baseline)

[Image: image]Mark step as complete

## 2. Setting up Batching and Light Baking

Q&A (0)

**1.** Configure Static Batching and Light Baking
    **a.**Configure Static and Dynamic batching in Player Settings

[Image: image]

**b.** Mark stationary objects Static. All of the Module GameObjects can be marked static

[Image: image]

**c.** Configure the scene lights for Baking.

[Image: image]

**Pro Tip:** You can use the Light inspector to quickly find and manipulate all of the lights in the scene. ( **Window > Rendering > Light Explorer**)

[Image: image]

**d.** Use the Lighting Window to bake the scene’s lighting

[Image: image]Mark step as complete

## 3. Comparing the Result

Q&A (0)

**1.** Use the Profiler to analyze the results
    **a.**Open the Profiler in Unity, by going to **Window**> **Analysis** > **Profiler**.
    **b.**Play the game and observe the performance profile|
    **c.**Compare to your benchmark

Mark step as complete

## Complete this Tutorial

Mark all steps complete
