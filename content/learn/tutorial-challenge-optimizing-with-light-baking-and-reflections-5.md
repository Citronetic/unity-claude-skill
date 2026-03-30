[Image: image]

# Challenge — Optimizing with Light Baking and Reflections

Tutorial

Beginner

+10XP

0 mins

0

(7)

Unity Technologies

[Image: Challenge — Optimizing with Light Baking and Reflections]Summary

This challenge covers a few common techniques to improve the realism of your Unity Scene while keeping performance in mind. You will practice a couple of the key lighting techniques discussed in the previous tutorial, namely Reflection Probes and light baking to improve the visual fidelity.

Resources

- [Tutorial27_BakingChallenge.zip](https://unity-connect-prd.storage.googleapis.com/20200409/742ac7b4-7988-43bf-be3f-22f68f620121/Tutorial27_BakingChallenge.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952542758)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

This challenge reviews a few common techniques to improve the realism of your Unity Scene while keeping performance in mind. You will practice a couple of the key lighting techniques, namely Reflection probes and light baking, to improve the visual fidelity of the Scene.

When working with the HoloLens, proper lighting can help emphasize an object's depth and placement in the Scene. However, lighting can also reduce the headset’s performance (due to computationally expensive calculations). By incorporating light baking, you can increase the lighting quality without diminishing performance. This is especially important on the HoloLens due to its hardware constraints.

**Before**:****

[Image: image]

**After**:****

[Image: image]

In this challenge, you will add a Reflection Probe and prepare the Scene for light baking. In order to complete this challenge, you will:

1. Add a Reflection Probe to the Scene
2. Change the lights from realtime to baked
3. Make the Rover static

Mark step as complete

## 2. Add a Reflection Probe

Q&A (0)

*Add a Reflection Probe to the Scene and position it inside the Rover. Change the light type to Baked to increase the accuracy of the Rover’s reflections and optimize the Scene’s performance.*

[Image: image][Image: image]

1. Create a **Reflection Probe**(**Create > Lighting > Reflection Probe** )
2. Position it inside the Rover.
3. In the Inspector, increase the resolution to improve the reflection quality.

--------------------

**Tip — Positioning the Reflection Probe**

You can quickly place an object at the center of another object by making it a child of the object, making its position (0,0,0), and then unparenting the object.

[Image: image]Mark step as complete

## 3. Change the Lights from Realtime to Baked

Q&A (0)

*Change the lights in the Scene from Realtime to Baked to allow Unity to pre-generate the lighting data.*

[Image: image]

1. Locate the lights in the Unity Scene.
2. In each of the light’s Inspectors, change the **Light Mode** from Realtime to **Baked**.

--------------------

**Tip — Multi-Select**

Hold Shift or Ctrl (Windows)/Command (Mac) to select multiple objects in the Hierarchy. With multiple objects selected, you can change any components they have in common at the same time.

Mark step as complete

## 4. Make the Rover Static

Q&A (0)

*To allow the pre-generated baked light to affect the Rover, change the Rover and its child GameObjects to Static.*

[Image: image]

1. Select the **Rover GameObject** from the Hierarchy.
2. In the Inspector, check the **Static**box****to make the Rover and its children Static.
3. When asked if you would like to apply changes to the children, select **Yes**.

Mark step as complete

## 5. Key Takeaways

Q&A (0)

You've now added a Reflection Probe and optimized the Scene lighting.

By completing this module, you’re now able to:

- Add and configure a Reflection Probe
- Bake any Unity lights in your Scene

Mark step as complete

## Complete this Tutorial

Mark all steps complete
