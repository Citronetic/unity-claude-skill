This version of Unity is unsupported.

13. Domain reload

15. Test cases

# 14. Preserve test state

## Learning objectives

This section will cover how to let variables and information in your tests survive domain reloads using serialization.

## Intro and motivation

When a domain reload happens, all **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](../../creating-scripts.html)
See in [Glossary](../../Glossary.html#Scripts) are reloaded. That also means that most data in members of the test class are lost. In some cases that is an issue, as you might want to retain some information during a domain reload.

The solution to that is serialization. If you add a `[SerializeField]` attribute to the field in question, then it will retain its value. Note that there are some limitations to serialization in Unity, see [Unity Serialization](https://docs.unity3d.com/Manual/script-Serialization.html).

## Exercise

The [sample](test-framework-general-introduction.html#import-samples) `14_PreserveTestState` contains the solution for the previous assignment, with one exception; the file name is now a guid.

This means that in order to clean up correctly, the `TearDown` method needs to know the filename.

Currently, when running the test for the first time, the `TearDown` will fail because it’s not given a file name. On subsequent runs of the test, it will fail due to duplicate files with the same C# script in it.

The task is to fix this loss of the file name info by using serialization.

## Solution

The solution is simple. Just add a `[SerializeField]` attribute to the filename field. The solution is included as sample `14_PreserveTestState_Solution.`

13. Domain reload

15. Test cases
