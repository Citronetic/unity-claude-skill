[Image: image]

# Customizing Controls

Tutorial

intermediate

+10XP

15 mins

1

Unity Technologies

[Image: Customizing Controls]Summary

In this tutorial, we’ll go over where to find the script that controls motion in a Scene, as well as how to adjust settings.

Resources

- [CustomizingControls_Resources.zip](https://unity-connect-prd.storage.googleapis.com/20200527/fb89964e-926f-432b-bd0e-6433c9c792ef/CustomizingControls_Resources.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954439447)

Languages available:

EnglishEnglish日本語English

## 1. Introduction

Q&A (0)

The Reflect Viewer uses the standard input system that you would expect to find in a game. Since not everyone is familiar with the WASD or mouse-based movement typical of a 3D Scene navigation system, it’s essential to understand how this system works as well as how to adjust it to your preferences. In this tutorial, we’ll go over where to find the script that controls motion in a Scene, as well as how to adjust settings.

For this tutorial, you will need:

- The Reflect Viewer project downloaded from [Github](https://github.com/Unity-Technologies/com.unity.reflect.viewer)
- A Pro license for the Unity Editor

Mark step as complete

## 2. Understanding the Scene Movement Script

Q&A (0)

**1.** Download and open the Reflect project from Github.

**2.** Open the Reflect scene from **Assets** > **Scenes**.

**3.** Run the project to see how the camera moves in the scene. Close the project when you are done.

**4**. The camera movement is controlled by a settings asset and you can change the settings by selecting the FreeFlyCameraSettings asset under **Assets** > **Settings**.

Selecting this asset will open the settings in the Inspector panel

[Image: image]

The following parameters are available via the script. The movement of the camera is based on a scale to give a more natural movement in the scene. This means that there is a general delay and curve on the movement that is controlled by the setting below.:

- **Max Time To Travel Min**: The maximum time in seconds to travel the entire scene when the camera is at the minimum speed.
- **Max Time to Travel Full**: The maximum time in seconds to travel the entire scene when the camera is at the maximum speed.
- **Max Time to Accelerate**: The maximum time in seconds for the camera to accelerate from minimum to maximum speed.
- **Min Speed Scaling**: The scaling factor on the camera minimum speed.
- **Max Speed Scaling**: The scaling factor on the camera maximum speed.
- **Acceleration Scaling**: Scaling on the camera acceleration.
- **Waiting Deceleration**: Deceleration scaling. A higher value will mean the camera will take longer to go back to minimum speed when not accelerating.

Mark step as complete

## 3. Next Steps

Q&A (0)

This tutorial covered movement options in the Reflect Viewer Scene. You can set the sensitivity of these motions to your own preferences.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
