[Image: image]

# Challenge — VR Interaction

Tutorial

Beginner

+10XP

30 mins

3

(6)

Unity Technologies

[Image: Challenge — VR Interaction]Summary

In this challenge, we will practice using a Touchpad Interaction script by rotating a car model. Rotating models gives the user new perspectives on the car, which is important when reviewing automotive designs.

Resources

- [Tutorial19_InteractionChallenge.zip](https://unity-connect-prd.storage.googleapis.com/20200406/ea664c60-27c2-4359-89b7-3c3bf7f2675b/Tutorial19_InteractionChallenge.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952701747)

Languages available:

EnglishEnglishEnglish

## 1. Object Interaction with Controller Input

Q&A (0)

In this challenge, we'll practice using the Touchpad Interaction script by rotating a car model. Rotating  models gives the user new perspectives on the car, which is important when reviewing automotive designs.

As a review, this simple interaction is a straightforward technique made possible by the Vive controller  touchpads and requires very little effort from the user to operate at runtime. Connecting a scene’s object directly to controller input means we can manipulate that object quickly, repeatedly, and efficiently.

In the context of the Example Project, we need to be able to see the car from multiple directions and angles, making object rotation very important. You will solidify your understanding of using button input to modify the surrounding objects by linking a specific GameObject to a script for button input.

[Image: image]

**What Will You Do?**

In this challenge, you will add and configure the rotation script to manipulate the Scene’s object. To do so, you will:

1. Add the Rotation Script component to each controller
2. Link the car model to each controller as a direct reference

Mark step as complete

## 2. Add a VR Camera

Q&A (0)

*Replace the Scene’s camera with a VR camera (CameraRig).*

[Image: image]

1. In the **Hierarchy**, find and delete the **Camera**.
2. In the Assets window, find the **CameraRig** Prefab.
3. Add the Prefab to the Hierarchy to replace the Main Camera.
4. Delete the **Main Camera**GameObject (**Note:** You can find the CameraRig Prefab within the Prefabs folder. However, this Prefab is typically found in the SteamVR package, in the Assets folder.)

**Tip — Assets Window Search Bar**

Quickly find your desired Asset by using the Asset window search bar.

[Image: image]Mark step as complete

## 3. Add the Car Model

Q&A (0)

*Add the car model to your Scene so we can manipulate it.*

[Image: image]

1. In the **Project** window, locate the car model called **Car Placeholder** Prefab and add it to the Scene.
2. Be sure to place it on top of the center pad.

Mark step as complete

## 4. Add and Configure the Rotation Script

Q&A (0)

*Add the Touchpad Rotation Script to the controller of your choice and set the car model as the direct reference so we can rotate it with our touchpad input.*

[Image: image]

1. In the Inspector, add the **Touchpad Rotation**script to a controller of your choice (within CameraRig).
2. Add the **Touchpad Rotation**script to the controller you will use to control the car. We recommend using only one controller, as this will keep the other touchpad open for other functionality.
3. Select the controller and add the car model in the **Main Object**parameter.
4. Click **Play** and test it out. That’s it for this challenge. Be sure to try out your Scene in your HTC Vive and check out your latest work. You now have the ability to manipulate your model with trackpad input.

Mark step as complete

## 5. Key Takeaways

Q&A (0)

You've now added the Rotation Script into the module, thus implementing your first interaction pattern. You can now rotate objects with your controllers. This is a very helpful script for displaying, analyzing, or examining objects in VR.

By completing this module, you’re now able to:

- Display an object in the Scene and control its rotation
- Add images and text to a 3D Scene

Mark step as complete

## Complete this Tutorial

Mark all steps complete
