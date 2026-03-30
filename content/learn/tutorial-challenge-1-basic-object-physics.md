[Image: image]

# Challenge 1: Basic Object Physics

Tutorial

Beginner

+10XP

30 mins

2

(100)

Unity Technologies

[Image: Challenge 1: Basic Object Physics]Summary

In this tutorial, learners will:

- Simulate gravity and basic collider interactions in Unity.
- Understand the difference between trigger colliders and non trigger colliders

Languages available:

EnglishEnglish日本語English

## 1. Project Setup

Q&A (0)

The project relies on the Cinemachine package to assist in camera movements. To install the Cinemachine Package, Open the Package Manager (**Window**>**Package Manager**), search for and install the Cinemachine Package.

[Image: image]Mark step as complete

## 2. Configure the Small and Medium Spheres to use Gravity

Q&A (0)

1.  Press play and notice the Sphere_Small GameObject remains stationary in the scene.

[Image: image]

2. Select the Sphere_Small GameObject and in the Inspector click Add Component, search for and select the RigidBody component.

[Image: image]

3. Press play in the scene. Notice how the sphere is now affected by gravity.

[Image: image]

4. Select the Sphere_Medium GameObject and in the Inspector click Add Component, search for and Select the RigidBody component. Increase the mass to 10.

[Image: image]

5. Press play and you should now see both sphere GameObjects affected by gravity.

[Image: image]

6. To change the collision characteristics of the ramp, create a Physics Material by right clicking in the Project window, clicking create, and Physic Material. Name it “Ramp” or another name of your choosing.

[Image: image]

7. Adjust the Physics Material properties as follows:

[Image: image]

8. Apply the physics material to the ramp GameObject’s MeshCollider component.

[Image: image]

9. Press play to see the sphere bounce on the surface of the ramp.

[Image: image]Mark step as complete

## Complete this Tutorial

Mark all steps complete
