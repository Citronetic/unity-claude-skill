[Image: image]

# Challenge — Optimizing with Light Baking and Reflections

Tutorial

Beginner

+10XP

30 mins

1

(17)

Unity Technologies

[Image: Challenge — Optimizing with Light Baking and Reflections]Summary

In this challenge, you will be baking the lighting in the dinosaur Scene.

Resources

- [Tutorial23_BakingChallenge.zip](https://unity-connect-prd.storage.googleapis.com/20200409/6b030eef-8ca0-4805-a5dc-91364802c279/Tutorial23_BakingChallenge.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952533206)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In this challenge, you will continue to add lighting to the dinosaur Scene to add realism and depth. And you'll increase the quality and performance of these lights by baking them. This will improve runtime performance, which is important since we're targeting mobile devices that have less computing power.

[Image: image]

In this challenge, you will bake the lighting in the dinosaur Scene. To do this, you'll need to:

1. Change the stationary GameObjects to static
2. Determine which lights can be baked and set them up for light baking

Mark step as complete

## 2. Change Stationary GameObjects to Static

Q&A (0)

*Change the island’s environment GameObjects to static*

1. Select the **Island GameObjects** in the Hierarchy.
2. In the Inspector window, check the static checkbox.
3. When asked if you want to apply these changes to children, go ahead and do so.

(**Hint:**Think about which objects in the Scene will remain stationary the entire time. Since these objects won’t move, they are the objects you should convert to Static. The dinosaur, for example, is animated to move around and therefore should not be made static.)

Mark step as complete

## 3. Bake the Lava Glow Lights

Q&A (0)

*Change the Lava lights from realtime to baked so that your application can run more efficiently on mobile devices.*

[Image: image]

1. Select the four lava lights in the Hierarchy.
2. In the Inspector, change the light mode from Realtime**to **Baked**.

(**Hint:** The lava glow does not need to be realtime as it only emits light onto stationary objects. Because of this, change the light to Baked to save performance.)

Mark step as complete

## 4. Key Takeaways

Q&A (0)

You've now add realtime lighting to the Scene.

By completing this module, you’re now able to improve the performance of your Scene while maintaining the desired look and feel.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
