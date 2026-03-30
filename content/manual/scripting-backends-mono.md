This version of Unity is unsupported.

Introduction to scripting back ends

IL2CPP scripting back end

# Mono scripting back end

The Mono scripting back end is Unity’s [fork](https://github.com/Unity-Technologies/mono) of the open source [Mono project](https://www.mono-project.com/). Mono is a mature, cross-platform .NET runtime that powers Unity’s Editor and Players on compatible platforms. It offers fast iteration and good tooling, but has lower runtime performance than [IL2CPP](scripting-backends-il2cpp.html)A Unity-developed scripting back-end which you can use as an alternative to Mono when building projects for some platforms. [More info](./scripting-backends-il2cpp.html)
See in [Glossary](Glossary.html#IL2CPP) and isn’t aligned with the newest .NET features.

Mono uses just-in-time (JIT) compilation to convert your C# code into machine code at runtime. Mono manages the lifecycle of managed objects, handles code reload, and performs automatic garbage collection of out-of-scope objects with the [Boehm-Demers-Weiser](https://www.hboehm.info/gc/) garbage collector. The garbage collector’s behavior can be configured to some extent. For more information, refer to [Garbage collection modes](performance-incremental-garbage-collection.html).

Mono supports the debugging of managed code. For more information, refer to [Debugging C# code in Unity](managed-code-debugging.html).

## Building a project with Mono

To start the build process, open the **Build Profiles** window (Menu: **File** > **Build Profiles**) and select **Build**.

You can change the scripting back end Unity uses to build your application in one of two ways:

- Through the ****Player Settings**Settings that let you set various player-specific options for the final game built by Unity. [More info](class-PlayerSettings.html)
See in [Glossary](Glossary.html#PlayerSettings)** menu in the Editor. Perform the following steps to change the scripting back end through the **Player Settings** menu:

1. Go to **Edit** > **Project Settings**.

2. Click on the **Player Settings** button to open the [**Player**](class-PlayerSettings.html) settings for the current platform in the [**Inspector**](UsingTheInspector.html).

3. Navigate to the **Configuration** section heading under the **Other Settings** sub-menu.

4. Click on the ****Scripting Backend**A framework that powers scripting in Unity. Unity supports three different scripting backends depending on target platform: Mono, .NET and IL2CPP. Universal Windows Platform, however, supports only two: .NET and IL2CPP. [More info](scripting-backends.html)
See in [Glossary](Glossary.html#ScriptingBackend)** dropdown menu, then select **Mono**.

You can also open the **Player Settings** menu from the **Build Profiles** window; go to **File** > **Build Profiles** and click on the **Player Settings** tab.

- Through the Editor scripting API. Use the [`PlayerSettings.SetScriptingBackend`](../ScriptReference/PlayerSettings.SetScriptingBackend.html) property to change the scripting back end that Unity uses.

[Image: The Configuration section of the Player settings]
The **Configuration** section of the **Player** settings

Both the Mono and IL2CPP scripting back ends require a new build for each platform you want to target. For example, to support both the Android and iOS platforms, you need to build your application twice and produce two binary files, one for Android and one for iOS.

## Domain reload

The Unity Editor embeds Mono, so your C# code is managed by Mono and is subject to Mono’s constraints when running in the Editor’s Play mode. A key aspect of this is that entering and exiting Play mode or recompiling **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts) trigger [AppDomain](https://learn.microsoft.com/en-us/dotnet/api/system.appdomain?view=net-9.0) reloads, which resets static state. You can [configure how Unity enters Play mode](configurable-enter-play-mode.html) and turn off domain reloading to speed up iteration, but then your code must handle the reset of static state. For more information, refer to [Enter Play mode with domain reload disabled](domain-reloading.html).

## Optimizing Mono builds

Mono and IL2CPP use the same base .NET class library so many performance issues and best practices are applicable to both. However, in the Mono context consider the following:

- The JIT compilation of Mono means that it can have lower runtime performance and longer startup time in large codebases compared to the **AOT compilation**Ahead of Time (AOT) compilation is an optimization method used by all platforms except iOS for optimizing the size of the built player. . [More info](iphone-playerSizeOptimization.html)
See in [Glossary](Glossary.html#AOTCompilation) of IL2CPP. Always profile with [Unity Profiler](Profiler.html) to spot GC and JIT hotspots. The [Project Auditor](project-auditor/project-auditor) tool can also help you identify and fix common performance issues. For more information, refer to [Optimization](analysis.html).

- Certain coding practices, such as those that cause a lot of allocation at runtime, can increase the garbage collector overhead and degrade performance. For guidance on writing performant managed code in Unity, refer to [Optimizing your code for managed memory](performance-optimizing-code-managed-memory.html). For information on tracking and reducing garbage collector overhead, refer to [Managed memory](performance-managed-memory.html).

- Unity APIs are generally not thread-safe, which means they need to be called from Unity’s main thread. Avoid using .NET `Task` with Unity APIs.

- When dealing with inherently asynchronous and long-running operations, Unity provides the `Awaitable` class as a more efficient alternative to .NET `Task`. For more information refer to [Asynchronous programming with the Awaitable class](async-await-support.html).

- For shorter-lived but more compuationally-intensive parallelized work, Unity provides the [job system](job-system.html), which can be [Burst compiled](script-compilation-burst.html). For more information, refer to [Write multithreaded code with the job system](job-system.html).

- Mono’s implementations of [`DateTime`](https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-9.0), [`TimeZoneInfo`](https://learn.microsoft.com/en-us/dotnet/api/system.timezoneinfo?view=net-9.0), and [`CultureInfo`](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo?view=net-9.0) can differ from Windows .NET behavior. Make sure to test globalized, culture-specific code on target platforms.

## Optimizing runtime performance with Burst

In suitable projects, you can improve the runtime performance of your project by using the Burst compiler alongside Mono to compile compatible sections of your code to highly optimized machine code. For more information, refer to [Burst compilation](script-compilation-burst.html).

## Additional resources

- [Unity .NET features](overview-of-dot-net-in-unity.html)

- [Build profiles](BuildSettings.html)A set of customizable configuration settings to use when creating a build for your target platform. [More info](build-profiles.html)
See in [Glossary](Glossary.html#Buildprofile)

Introduction to scripting back ends

IL2CPP scripting back end
