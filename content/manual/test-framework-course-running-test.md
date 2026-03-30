This version of Unity is unsupported.

General introduction to Unity Test Framework

2. Arrange, Act, Assert

# 1. Running a test in a Unity project

## Learning objectives

This exercise will teach you how to set up a simple Unity project with a test assembly and tests. It will also introduce the structure of unit tests based on NUnit.

## Intro and motivation

At Unity, our main way of testing content is using the Unity Test Framework, which comes as a **default package**Unity automatically pre-installs a select number of *default* packages (for example, the Analytics Library, Unity Timeline, etc.) when you create a new project. This differs from a **bundled package** because you don’t need to install it and it differs from a **built-in package** because it extends Unity’s features rather than being able to enable or disable them.
See in [Glossary](../../Glossary.html#Defaultpackage) in the Unity Editor. Knowing how to set up a basic project with tests can help you get started on your journey.

## Exercise

Import the [sample](test-framework-general-introduction.html#import-samples) `1_RunningTest_Project` into your Unity Editor (version 2019.2 or newer) from the Package Manager window.

**Note:** The project contains one `.cs` file (`MyMath.cs`), which is a simple math implementation. The exercise is to create unit tests for this class.

Open up the Test Runner UI (**Window > General > TestRunner**) and set up a new EditMode test assembly alongside the MyExercise folder. Detailed instructions are available in the [Getting started section](../workflow-create-test-assembly.html). Create a new test inside the new test assembly folder (default name is `Tests`) either from the Test Runner UI or by right-clicking in the Project window and selecting **Create > Testing > C# test script**. Before we do the test, it is also necessary to link up our test assembly with the existing code assembly. Click on the test assembly you created in the Project window to see it in the **Inspector** (Click on the Tests folder > Tests).

In the Assembly Definition References, you will see that `UnityEngine.TestRunner` and `UnityEditor.TestRunner` are already referenced, along with an assembly reference to NUnit. Click the `+` button in the Assembly Definition Reference part to add a new reference. Click on the little circle and select `MyExercise` and click **Apply** in the bottom of the **inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../../UsingTheInspector.html)
See in [Glossary](../../Glossary.html#Inspector) (you might need to scroll down).

Open up the C# solution with your IDE (Visual Studio or Rider) and open up the test file you created. You can delete the method with the `[UnityTest]` attribute, as you won’t be needing that. In the method with `[Test]` attribute, you can add an assert statement, to verify that `MyMath.Add` works correctly. E.g. using `Assert.AreEqual`. Rename the method to be something more descriptive. A good practice is that the method name should describe what is being tested. For example, the class name could be `MyMathTests` and the first test could then be `AddsTwoPositiveIntegers`. If you want to, you can add additional methods that test other number combinations. It is a best practice that each test should have just one check.

Switch back to Unity and go to the **Test Runner**The Test Framework package (formerly called the Test Runner) is a Unity tool that tests your code in both Edit mode and Play mode, and also on target platforms such as Standalone, Android, or iOS. [More info](../../https://docs.unity3d.com/Packages/com.unity.test-framework@latest)
See in [Glossary](../../Glossary.html#TestRunner) UI. Here you should now see a tree structure which includes your test assembly name, the class name and method name. This reflects the general structure of tests with NUnit, which is the framework that Unity Test Framework is built on top of. Each class can have multiple tests and there can be multiple test classes in a namespace / assembly. You can double click on your test name or any of its parents to run the test. You will see a green checkmark if your test code passes and a red cross if your test code failed. Note that if you do not see any tests, remember to check your console log. Any compile error would block all tests from being shown.

You can now go back to your test code and add tests for the `Subtract` method. Note that you will likely see the tests fail, as there is a bug in our `Subtract` method. After you have seen your test fail with a meaningful error (e.g. `Expected 2, but got 6`), you can go to `MyMath.cs` and fix the return value to be just `return a - b;`. Then rerun the test to verify that you fixed the error.

## Hints

- Sometimes the UI for creating a test assembly and creating your first test file can be a bit hard to use. If the Test Runner UI does not register your assembly, try clicking on the folder in the **project window**A window that shows the contents of your `Assets` folder (Project tab) [More info](../../ProjectView.html)
See in [Glossary](../../Glossary.html#Projectwindow) or navigate to the folder with the asmdef.

## Solution

A solution for this exercise can be found in the sample `1_RunningTest_Project_Solution`. The solution contains a `Tests` folder with an `asmdef` file and and one `.cs` file, containing the tests.

## Additional resources

- [Organizing scripts into assemblies](../../assembly-definition-files.html)

General introduction to Unity Test Framework

2. Arrange, Act, Assert
