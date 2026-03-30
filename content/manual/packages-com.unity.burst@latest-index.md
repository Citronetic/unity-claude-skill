# Burst compiler

Compile compatible sections of your C# code into highly-optimized native CPU code.

Burst is a compiler that works on a subset of C# referred to in the Unity context as [High-Performance C#](csharp-hpc-overview.html) (HPC#). Burst uses [LLVM](https://llvm.org/) to translate .NET [Intermediate Language (IL)](https://learn.microsoft.com/en-us/dotnet/standard/managed-code#intermediate-language--execution) to code that's optimized for performance on the target CPU architecture.

Burst was originally designed for use with Unity's [job system](https://docs.unity3d.com/Manual/JobSystem.html). Jobs are structs that implement the [IJob](https://docs.unity3d.com/ScriptReference/Unity.Jobs.IJob.html) interface and represent small units of work that can run in parallel to make best use of all available CPU cores. Designing or refactoring your project to split work into Burst-compiled jobs can significantly improve the performance of CPU-bound code.

Aside from jobs, Burst can also compile static methods, as long as the code inside them belongs to the supported subset of C#. [Mark code for Burst compilation](compilation-burstcompile.html) by applying the [`[BurstCompile]`](compilation-burstcompile.html) attribute to jobs or to static methods and their parent type.

| Topic | Description |
| --- | --- |
| Get started | Get started with Burst by creating your first simple Burst-compiled example code. |
| C# language support | Check which elements of the C# language belong to the high-performance subset of C# that Burst can compile. |
| Burst compilation | Understand how Burst compiles code in different contexts, mark your code for Burst compilation, and configure aspects of the compilation process. |
| Burst intrinsics | Use low-level intrinsics to get extra performance from Burst if you're writing single instruction, multiple data (SIMD) assembly code. |
| Editor reference | Use the Burst menu and Burst Inspector window in the Unity Editor to configure Burst options and inspect the Burst-compilable jobs in your project. |
| Building your project | Build your project with the appropriate toolchains and Burst Ahead-of-Time (AOT) compilation settings for your target platform and architecture. |
| Optimization | Debug and profile to identify bugs or bottlenecks in Burst-compiled code and configure a range of options to optimize performance. |
| Modding support | Include Burst-compiled code as additional libraries in your mods. |

## Installation

To install the Burst package, follow the instructions in the [Add and remove UPM packages or feature sets](https://docs.unity3d.com/Manual/upm-ui-actions.html) documentation.

If you change the Burst package version (for example, via Update), you need to close and restart the Editor.

## Additional resources

### Videos

Conference presentations given by the Burst team:

- [Getting started with Burst - Unite Copenhagen 2019](https://www.youtube.com/watch?v=Tzn-nX9hK1o)

- [Supercharging mobile performance with ARM Neon and Unity Burst Compiler](https://www.youtube.com/watch?v=7iEUvlUyr4k)

- [Using Burst Compiler to optimize for Android - Unite Now 2020](https://www.youtube.com/watch?v=WnJV6J-taIM)

- [Intrinsics: Low-level engine development with Burst - Unite Copenhagen 2019](https://www.youtube.com/watch?v=BpwvXkoFcp8) ([slides](https://www.slideshare.net/unity3d/intrinsics-lowlevel-engine-development-with-burst))

- [Behind the Burst compiler: Converting .NET IL to highly optimized native code - DotNext 2018](https://www.youtube.com/watch?v=LKpyaVrby04)

- [Deep dive into the Burst compiler - Unite LA 2018](https://www.youtube.com/watch?v=QkM6zEGFhDY)

- [C# to machine code: GDC 2018](https://www.youtube.com/watch?v=NF6kcNS6U80)

- [Using the native debugger for Burst compiled code](https://www.youtube.com/watch?v=nou6AIHKJz0)

### Blogs

Blog posts written by members of the Burst team :

- [Raising your game with Burst 1.7](https://blog.unity.com/technology/raising-your-game-with-burst-17?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774939666426)

- [Enhancing mobile performance with the Burst compiler](https://blog.unity.com/technology/enhancing-mobile-performance-with-the-burst-compiler?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774939666426)

- [Enhanced aliasing with Burst](https://blogs.unity3d.com/2020/09/07/enhanced-aliasing-with-burst/)

- [In parameters in Burst](https://blogs.unity3d.com/2020/11/25/in-parameters-in-burst/)
