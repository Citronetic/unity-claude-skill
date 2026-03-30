This version of Unity is unsupported.

Unity Test Framework learning materials

1. Running a test in a Unity project

# General introduction to Unity Test Framework

Welcome to the Unity Test Framework general introduction course.

This course consists of different exercises to help you learn fundamental Unity Test Framework concepts through practical examples. Each exercise has a **Learning Objectives** section to help you identify the skills you will learn. The exercises are grouped thematically, and their difficulty varies.

After completing an exercise, you can check your solution against the one provided. Note that many of the exercises can be solved in several possible ways.

## Import samples

Project files for each exercise and its accompanying solution are provided as samples with the Unity Test Framework package. To import an exercise or solution to your Unity Editor:

1. Go to **Window > Package Manager** and, in the [packages list view](https://docs.unity3d.com/Manual/upm-ui-list.html), selct Unity Test Framework.

2. In the package [details view](https://docs.unity3d.com/Manual/upm-ui-details.html), find the **Samples** section.

3. Find the exercise or solution you want to import and click the import button.

[Image: The Package Manager window with the expanded list of package samples available for import.]
The Package Manager window with the expanded list of package samples available for import.

**Note**: You can import an exercise and its solution or multiple exercises at the same time, but since several of the exercises use the same naming pattern this will likely result in compilation errors that prevent you running tests or building your project. The recommended workflow is to import and work on one exercise at a time. If you import additional exercises or solutions for reference, you can delete them again before running your main exercise.

## Course outline

| Topic | Description |
| --- | --- |
| Running a test in a Unity project | Set up a simple Unity project with a test assembly and tests and run them from the Test RunnerThe Test Framework package (formerly called the Test Runner) is a Unity tool that tests your code in both Edit mode and Play mode, and also on target platforms such as Standalone, Android, or iOS. More infoSee in Glossary window. |
| Arrange, act, assert | Use the core unit testing principle of AAA (Arrange, Act, Assert) to structure your unit tests. |
| Semantic test assertion | Use Assert.That to test whether conditions are true. |
| Custom comparison | Use the Unity Test Framework’s custom equality comparers to check for value equality of Unity types. |
| Asserting logs | Test and verify code that writes to the console log. |
| Setup and teardown | Use the NUnit attributes [SetUp] and [TearDown] to reduce code duplication in your tests. |
| Play mode tests | Create and run Play mode tests. |
| Play mode tests in a player | Run Play mode tests in a standalone platform Player. |
| Using the UnityTest attribute | Use the [UnityTest] to write tests that run across multiple frames. |
| Long-running tests | Write long-running tests that can instruct the Editor to wait for a defined period of time. |
| Scene-based tests | Test content that is stored in a sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary. |
| Setup and cleanup at build time | Perform work before and after the Player build phase. |
| Domain reload | Invoke and wait for domain reload from your tests. |
| Preserve test state | Make data in your tests survive domain reloads using serialization. |
| Test cases | Work with NUnit’s [TestCase] attribute in Unity tests. |
| Custom attributes | Implement custom NUnit attributes, which can be used to alter test execution. |
| Running tests programmatically | Run tests from code using the TestRunnerAPI. |

## Additional resources

- [Testing Lost Crypt](LostCrypt/lost-crypt-introduction.html)

Unity Test Framework learning materials

1. Running a test in a Unity project
