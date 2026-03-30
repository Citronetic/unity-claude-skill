This version of Unity is unsupported.

10. Long running tests

12. Setup and cleanup at build time

# 11. Scene-based tests

## Learning objectives

In this exercise, you will learn how to test content that is stored in a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene).

## Intro and motivation

A useful scenario for our customers is using the test framework for verifying the content of a scene. That could be checking for certain **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject) and MonoBehaviors.

The [EditorSceneManager](../../../ScriptReference/SceneManagement.EditorSceneManager.html) allows for loading and saving scenes. In combination with the test framework, this allows for the implementation of tests that verify a scene.

When changing the state of the Editor in a test, such as loading a scene, it’s good practice to clean up afterward. This can be done in a method with the `[TearDown]` attribute.

## Exercise

Import the [sample](test-framework-general-introduction.html#import-samples) `11_SceneBasedTests`, which contains a scene named `MyGameScene` and an assembly for Edit Mode tests.

The task is to create a test that opens the scene, verifies that the scene contains a game object named `GameObjectToTestFor`.

As cleanup, it should open a new empty scene, which is the default for Edit Mode tests. It is recommended to put that in a `[TearDown]`, which ensures that the cleanup code is run, even if the test fails.

## Hints

- `EditorSceneManager.OpenScene("Assets\\MyGameScene.unity");` loads the scene

- `EditorSceneManager.NewScene(NewSceneSetup.DefaultGameObjects, NewSceneMode.Single);` cleans up by changing back to an empty scene.

## Solution

A full solution is available in the sample `11_SceneBasedTests_Solution`.

The test implementation can look like this:

```cs
public class SceneTests
{
 [SetUp]
 public void Setup()
 {
  EditorSceneManager.OpenScene("Assets\\MyGameScene.unity");
 }
 
 [Test]
 public void VerifyScene()
 {
  var gameObject = GameObject.Find("GameObjectToTestFor");
  
  Assert.That(gameObject, Is.Not.Null);
 }

 [TearDown]
 public void Teardown()
 {
  EditorSceneManager.NewScene(NewSceneSetup.DefaultGameObjects, NewSceneMode.Single);
 }
}
```

## Additional resources

[API reference for `EditorSceneManager`](../../../ScriptReference/SceneManagement.EditorSceneManager.html)

10. Long running tests

12. Setup and cleanup at build time
