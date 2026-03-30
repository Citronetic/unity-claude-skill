[Image: image]

# Challenge 3: Create a projectile using Add Force

Tutorial

Beginner

+10XP

25 mins

3

(42)

Unity Technologies

[Image: Challenge 3: Create a projectile using Add Force]Summary

In this tutorial, learners will:

- Create a C# script that uses Add Force to launch projectile objects

Languages available:

日本語English日本語日本語

## 1. Create a Projectile Launcher Script

Q&A (0)

1. Right click in the Project Window, click create, and select C# Script. Name the Script “ProjectileLauncher”.

2. Double click on the new script to open it in the code editor.

[Image: image]

3. Add the following code to the script:

[Image: image]

4. Back in the Unity Editor add the ProjectileLauncher script component to the Cannon GameObject using the Add Component button.

[Image: image]

5. Turn the Sphere_Small GameObject into a prefab by dragging it into the Project window.

[Image: image]

6. Add the newly create Sphere_Small GameObject to the Projectile Launcher Component’s Projectile Prefab field.

7. Adjust the Launch Power to 2000. Note if you modify the Projectile Prefab’s RigidBody component you may need to adjust the Launch Power to compensate.

8. Add the ProjectileSpawnPoint to the Cannon’s Projectile Launcher component’s projectile spawn location field

[Image: image]

9. To trigger the Launch method, select the target object (Cannon > Target) and in the Target Collision component, click the + button to a new event.

[Image: image]

10. Configure the new event by dragging the Cannon GameObject into the event field, and selecting the ProjectileLauncher.Launch method. This will call the Launch method when a collision occurs.

[Image: image]

11. Press Play to see the complete scene!

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
