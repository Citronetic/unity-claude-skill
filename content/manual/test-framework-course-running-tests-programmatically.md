This version of Unity is unsupported.

16. Custom attributes

Testing Lost Crypt

# 17. Running tests programmatically

## Learning objectives

This section will introduce the TestRunnerApi, teaching you how to trigger a test run programmatically.

## Intro and motivation

A recent new feature in the test framework is the addition of the `TestRunnerApi`. This api allows for interactions with the test framework programmatically, such as listing tests, running tests and receiving test results.

For details and examples, see the TestRunnerApi documentation.

## Exercise

The [sample](test-framework-general-introduction.html#import-samples) `17_RunningTestsProgrammatically` contains a mono behavior script called `MyMonoBehaviour`, which has a property for whether it has been configured. The project also contains a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene) with multiple game objects with `MyMonoBehaviour` on them.

The task is to create a set of scene validation tests, which verifies that the scene MyScene.unity:

- The scene contains precisely 5 game objects with `MyMonoBehaviour` on them.

- All game objects with `MyMonoBehaviour` must have `IsConfigured` set to true

After these tests have been created, implement a MenuItem, which can trigger the test run of the scene validation tests, using the `TestRunnerApi` and report the result to the console log.

It is recommended to give your scene validation test a category, so it is easier to make a filter that runs those exclusively.

## Hints

- Remember to include the test mode in the filter provided to `Execute`

## Solution

A full example solution for the excersise is available in the sample `17_RunningTestsProgrammatically_Solution`.

16. Custom attributes

Testing Lost Crypt
