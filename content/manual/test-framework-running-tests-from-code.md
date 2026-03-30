This version of Unity is unsupported.

Run tests from the command line

Specify which tests to run

# Running tests from code

You can invoke Unity Test Framework’s **test runner**The Test Framework package (formerly called the Test Runner) is a Unity tool that tests your code in both Edit mode and Play mode, and also on target platforms such as Standalone, Android, or iOS. [More info](../https://docs.unity3d.com/Packages/com.unity.test-framework@latest)
See in [Glossary](../Glossary.html#TestRunner) from code with the [`TestRunnerAPI`](https://docs.unity3d.com/Packages/com.unity.test-framework@latest/index.html?subfolder=/api/UnityEditor.TestTools.TestRunner.Api.TestRunnerApi.html) class, which lets you control which tests are run and retrieve test data and results.

| Topic | Description |
| --- | --- |
| Specify which tests to run | Compose Filter objects for the TestRunnerAPI to determine which tests to include in a test run. |
| Retrieving test results | Register to receive callbacks from the test runner at the start or finish of an active test run or individual test. |
| Retrieve the list of tests | Retrieve the test tree for a given test mode (Edit mode or Play mode) from the test runner. |

## Additional resources

- [Run tests in the Test Runner window](workflow-run-test.html)

- [Run tests from the command line](run-tests-from-command-line.html)

Run tests from the command line

Specify which tests to run
