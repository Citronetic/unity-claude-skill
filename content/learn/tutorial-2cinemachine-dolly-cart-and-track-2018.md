[Image: image]

# Cinemachine Dolly Cart and Track

Tutorial

Beginner

+10XP

30 mins

90

(184)

Unity Technologies

[Image: Cinemachine Dolly Cart and Track]Summary

In cinematography, the term “tracking shot” refers to a scene where the camera moves alongside whatever it’s filming. To get the shot, the camera is mounted on a dolly that’s then placed on a track. As the scene is being filmed, the camera moves along the track.

In this tutorial, you'll set up a Cinemachine camera to make a tracking shot.

Languages available:

EnglishEnglishEnglish

## 1. What is Dolly Cart and Track?

Q&A (0)

This tutorial has been verified using Unity 2019 LTS and *Cinemachine v2.3.4*.

In cinematography, the term “tracking shot” refers to a Scene where the camera moves alongside whatever it’s filming. To get the shot, the camera is mounted on a dolly that’s then placed on a track. As the Scene is being filmed, the camera moves along the track.

The ability to create a tracking shot using a dolly cart and track is one of the options in Unity’s Cinemachine package. Cinemachine is a unified automatic camera system that can be used for in-game cameras, cinematics and cutscenes, film pre-visualization, and virtual cinematography eSports solutions.

Cinemachine’s Track and Dolly feature allows you to track targets in scenes by setting path waypoints that virtual cameras move between. (**Figure 01**)

Like other Cinemachine camera features, you create a virtual camera to provide a control for the Scene’s main cameras. Instead of moving the virtual camera directly, you assign it to follow a dolly cart, which follows a waypoint-based track around your Scene.

You can keyframe the camera down the track, or you can use the Cinemachine Auto Dolly feature, which keeps the camera a set distance from the subject no matter what the subject does. This can be very useful in pre-production, allowing you to set up the shot and then modify the subject’s performance, or in games where you want to follow objects at variable speeds.

[Image: image]Mark step as complete

## 2. Adding Cinemachine

Q&A (0)

1. In the Menu Bar, go to Windows > Package Manager.

2. Wait for all the packages to load and select Cinemachine from the list, then click Install.

Mark step as complete

## 3. Adding a Cinemachine Brain

Q&A (0)

The Cinemachine Brain acts as the hub for all other Cinemachine components. It takes control of the main camera and allows users to create and control a number of different Virtual Cameras.

1. Select the Main Camera in the Scene.

2. In the Inspector, click Add Component.

3. Select Cinemachine > Cinemachine Brain. **(Figure 02)**

[Image: image]Mark step as complete

## 4. Adding a Cinemachine Virtual Camera

Q&A (0)

Virtual Cameras are the key to creating certain camera behaviors and camera shots using Timeline. A Virtual Camera’s behavior, when viewed through the Game view, can be adjusted using the Dead Zone and Soft Zone bounds. If the target enters the Dead Zone, the camera will not rotate in this range. In the Soft Zone, the camera will gradually re-align to the target. These bounds can be adjusted using the Virtual Camera parameters.

1. In the Menu Bar, select **Cinemachine > Create Virtual Camera**.

2. Select the Virtual Camera and assign a GameObject to the LookAt parameter.
(**Figure 03**)

[Image: image]

3. Select the Game view so you can see the zones and adjust the Dead Zone bounds in the Inspector.

4. Adjust the Soft Zone bounds. (**Figure 04**)

[Image: image]

5. Modify the Lens parameters.

6. Adjust the Damping parameters.

By adjusting the Dead Zone and Soft Zone, the camera will not track the target until the target begins to go outside the Dead Zone. The camera will track the target inside the Soft Zone depending on the dampening parameters set up on the camera. Dampening determines how loose or rigid the camera is when tracking the target.

Mark step as complete

## 5. Adding a Cinemachine Dolly Cart and Track

Q&A (0)

The Virtual Camera can be assigned to follow the cart, and a cart can be assigned to follow a track. You can create a track with as many waypoints as necessary, and provide the Vector 3 position of each point.

1. From the Cinemachine dropdown, select Create Dolly Track and Cart.

2. Select the Virtual Camera and assign the Dolly Cart to the Follow parameter. (**Figure 05**)

[Image: image]

3. Select the Dolly Cart in the Hierarchy window and make sure the Dolly Track is assigned to the Path parameter.

4. Adjust the Dolly Cart’s parameters in the Update Method, Speed, and Position on the track. (**Figure 06**)

[Image: image]

5. Select the Dolly Track in the Hierarchy window.

6. Click the **+** button in the Waypoints field to add as many new Waypoints as you need.

7. Adjust the Waypoint values to set their Vector 3 location and Roll value for angle. (**Figure 07**)

[Image: image]

8. You can set the track’s smoothness with Resolution.

9. Checking Looped will loop the last Waypoint back to the first Waypoint position.

With Cinemachine and the Dolly Track and Cart feature, you can quickly and easily create an immersive cinematic experience for your audience. You can create multiple tracks and assign the Virtual Camera to follow different tracks via Timeline.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
