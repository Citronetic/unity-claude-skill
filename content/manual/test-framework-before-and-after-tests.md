This version of Unity is unsupported.

Writing tests

Setting up and tearing down tests

# Performing actions before and after tests

Write reliable tests by performing the appropriate pre-test setup and post-test cleanup work to ensure your tests run in the right state. Unity Test Framework has a range of APIs that allow you to perform work at defined stages before and after a test run.

| Topic | Description |
| --- | --- |
| Setting up and tearing down tests | Use Unity Test Framework APIs for test setup and tear down. |
| Performing actions before setup or after tear down | Use the IOuterUnityTestAction API to do work outside the test before setup and after tear down. |
| Setting up and cleaning up at build time | Make changes to Unity or the file system before building tests and then clean up these changes after the test run. |
| Execution order of test actions | Understand the order in which test actions run relative to one another. |

## Additional resources

- [Setup and teardown](course/setup-teardown.html)

- [Setup and cleanup at build time](course/build-setup-cleanup.html)

Writing tests

Setting up and tearing down tests
