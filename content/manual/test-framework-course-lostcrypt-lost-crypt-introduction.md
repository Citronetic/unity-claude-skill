This version of Unity is unsupported.

17. Running tests programmatically

1. Setting up LostCrypt

# Testing Lost Crypt

Welcome to the this training material for the Unity Test Framework (UTF).

The training is structured with a selection of exercises, starting with more basic topics and then expanding on that knowledge.

Each section has a Learning Objectives section, which can help you pick what exercises will teach you new things. The exercises are grouped thematically and their difficulty varies.

**This course focus on testing an actual game. Our candidate is the [LostCrypt](https://assetstore.unity.com/packages/essentials/tutorial-projects/lost-crypt-2d-sample-project-158673?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774938155615) example project.**

## Course outline

| Topic | Description |
| --- | --- |
| Setting up | Set up a simple Unity 2D project and import a sample project (LostCrypt). |
| Running a test in LostCrypt | Set up a simple Play mode test for LostCrypt. |
| Moving character | Use the Unity InputSystem package to have a generic way of moving your character programmatically in tests. |
| Reach wand test | Perform assertions on your character position and behavior. |
| Collision test | Check for collisionsA collision occurs when the physics engine detects that the colliders of two GameObjects make contact or overlap, when at least one has a Rigidbody component and is in motion. More infoSee in Glossary and make sure that LostCrypt does not have bugs that allow your character to move outside the map. |
| Asset change test | Use a common pattern in game testing to verify if assets change over time. |
| Scene validation test | Test the sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary for the presence of specific game objects and make this test use all scenes as fixtures. |
| Performance tests | Extend Unity Test Framework with performance tests. |

## Additional resources

[General Introduction course](../welcome)

17. Running tests programmatically

1. Setting up LostCrypt
