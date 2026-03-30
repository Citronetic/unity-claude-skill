[Image: image]

# Challenge 2: Create a NavMesh Agent

Tutorial

Beginner

+10XP

30 mins

4

(140)

Unity Technologies

[Image: Challenge 2: Create a NavMesh Agent]Summary

- *Configure a NavMesh Agent to move around the scene’s NavMeshes*
- *Customize the movement settings (slope, height, radius, step height)*

Languages available:

日本語English日本語日本語

## 1. Configure a NavMesh Agent

Q&A (0)

1. Select the Player GameObject in the Scene and in the Inspector add the NavMeshAgent Component and set the Base Offset value to 1 to compensate for the gap between the floor and the bottom of the Player’s mesh.

[Image: image][Image: image]

2. Create a new C# script called “PlayerController” and open it in your code editor.

[Image: image]

3. Add the following logic to the script so that mouse clicks update the Agent’s target position

[Image: image]

4. Back in the Unity Editor add your newly created PlayerController to the Player GameObject and configure the Serialized Values

[Image: image][Image: image]

5. Click Play and click around the Scene to see the NavMeshAgent move

[Image: image]ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
