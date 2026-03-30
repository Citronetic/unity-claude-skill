This version of Unity is unsupported.

1. Setting up LostCrypt

3. Moving character

# 2. Running a test in a LostCrypt

## Learning Objectives

Set up a simple Play Mode test for LostCrypt.

## Exercise

1. Go to the `Assets/Scripts` directory, and spend some time exploring the **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](../../../creating-scripts.html)
See in [Glossary](../../../Glossary.html#Scripts) necessary for LostCrypt to work properly.

2. Create a new directory `Assets/Tests`.

3. In the **Test Runner**The Test Framework package (formerly called the Test Runner) is a Unity tool that tests your code in both Edit mode and Play mode, and also on target platforms such as Standalone, Android, or iOS. [More info](../../../https://docs.unity3d.com/Packages/com.unity.test-framework@latest)
See in [Glossary](../../../Glossary.html#TestRunner) window click **Create PlayModeTest Assembly Folder** and name a new folder `PlayModeTests`. You should end up with `Assets/Tests/PlayModeTests`.

4. Open the newly created folder and click **Create Test Script in current folder** in the Test Runner window.

5. Name the file `SceneSetupTests.cs`.

6. Write your first test that asserts that after loading the Main **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../../CreatingScenes.html)
See in [Glossary](../../../Glossary.html#Scene) the current time is day.

## Hints

- In order to load scenes, please refer to [UnityEngine.SceneManagement](https://docs.unity3d.com/ScriptReference/SceneManagement.SceneManager.html) documentation.

- Inside `Scenes/Main.unity` [look for GameObject](https://docs.unity3d.com/ScriptReference/GameObject.Find.html) **FX - Day**.

## Solution

`SceneSetupTests.cs`

```cs
using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using UnityEngine.SceneManagement;

public class SceneSetupTests
{
    [UnityTest]
    public IEnumerator MainScene_LoadsCorrectlyAndItsDaytime()
    {
        SceneManager.LoadScene("Assets/Scenes/Main.unity", LoadSceneMode.Single);
        yield return null;

        var fxDay = GameObject.Find("FX - Day");

        Assert.IsTrue(fxDay != null, "should find the 'FX - Day' object in the scene");
    }
}
```

1. Setting up LostCrypt

3. Moving character
