This version of Unity is unsupported.

Profiling tools reference

Introduction to building

# Building and publishing

When you create a build of your application, you create a Player. A Player is the platform-specific runtime application that Unity builds from your project. You can control how Unity creates a build through Unity’s build and player settings.

| Topic | Description |
| --- | --- |
| Introduction to building | Understand the fundamentals of Unity’s build process, including build modes, incremental building, and platform compatibility. |
| Content output of a build | Information about the files that Unity creates when you make a build of your project. |
| Create a build from the Editor | Use build profilesA set of customizable configuration settings to use when creating a build for your target platform. More infoSee in Glossary to build your application for different platforms with unique build configurations. |
| Create a clean build | Rebuild all content from scratch without using cached results to resolve build cache issues. |
| Create a scripts-only build | Build only the scripting assemblies without processing scenesA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary and assets for faster iteration during development. |
| Customize the build pipeline | Create custom scriptsA piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. More infoSee in Glossary and use callbacks to customize the build pipeline and run it from the command line. |
| Include additional files in a build | Use the StreamingAssets folder to include additional files in a build. |
| Reducing the file size of a build | Tips to reduce the size of the build. |
| Deterministic builds | Create consistent, reproducible builds by controlling factors that can cause build variations. |
| Build cache location reference | Reference for where Unity stores build cache files on different operating systems. |

## Additional resources

- [`BuildPipeline` API reference](../ScriptReference/BuildPipeline.html)

- [`BuildReport` API reference](../ScriptReference/Build.Reporting.BuildReport.html)

- [Player settings](class-PlayerSettings.html)Settings that let you set various player-specific options for the final game built by Unity. [More info](class-PlayerSettings.html)
See in [Glossary](Glossary.html#PlayerSettings)

- [Platform-specific Player settings](PlatformSpecific.html)

- [Command line arguments](CommandLineArguments.html)

- [Managing assets at runtime](assets-managing-runtime.html)

- [Unity Build Automation](https://unity.com/solutions/ci-cd?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936640515)A continuous integration service for Unity projects that automates the process of creating builds on Unity’s servers. [More info](https://docs.unity.com/devops/en/manual/unity-build-automation?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936640515)
See in [Glossary](Glossary.html#UnityBuildAutomation)

Profiling tools reference

Introduction to building
