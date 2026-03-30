[Image: image]

# Challenge: Rocket Orbit

Tutorial

Beginner

+10XP

15 mins

8

(44)

Unity Technologies

[Image: Challenge: Rocket Orbit]Summary

In this exercise, you will capture the second cutscene as the rocket leaves orbit and travels into space. You will use Timeline Signals to change the scene’s Skybox, Activation Tracks to add the Earth and deactivate the mountainous terrain, and you will use a Virtual Camera to “look at” the rocket as it passes you in space.

Languages available:

日本語English日本語日本語

## 1. Animate the rocket out of orbit

Q&A (0)

- Create a new Timeline and call it "OrbitTimeline". Add it to the Master Timeline.
- Activate the Earth GameObject, by adding *OrbitGameObjects*to an Activation Track.
- Duplicate the Saturn V rocket, and rename it to "SaturnV_Orbit".
- Add the SaturnV_Orbit GameObject to an Activation Track, so the second SaturnV activates during the second stage of the Timeline sequence.
- Add the OrbitObjects GameObject to an Activation Track, so the earth model activates during the Orbit sequence.
- Add the OrbitParticles gameobject to an Activation Track, and deactivate the gameobject as the rocket passes the camera

[Image: image]ステップを完了としてマーク

## 2. Create the Timeline Signal so we swap Skyboxes

Q&A (0)

- Add a Timeline Signal track to the OrbitTimeline.
- Create a new Signal Asset.
- Drag in the Environment Manager, and set the method value to *EnvironmentManager.SwapSkyboxMilkyWay*, so the skybox swaps to the MilkyWay at the beginning of the Timeline.
- Add the FadeOutFadeIn Clip Track between both the OrbitTimeline and the RocketTakeOffTimeline timelines, so it masks the skybox swap.

ステップを完了としてマーク

## 3. Set up the camera angles as the rocket moves through space

Q&A (0)

- Add another Virtual Camera, and set its Look At parameter to the rocket
- Position the camera in front of the rocket, so the rocket appears to move towards and then past the Virtual Camera.
- Add a Cinemachine Track to the OrbitTimeline, and add the new Virtual Camera to the Track.
- Add a second Virtual Camera angled so it looks at the right side of the ship.
- Set its Follow parameter to the ship, so it moves with the rocket through space.
- Add the FadeOutFadeIn between the two virtual cameras, after adding them both to the Cinemachine Track. Be sure to adjust their lengths to an appropriate size.

[Image: image]ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
