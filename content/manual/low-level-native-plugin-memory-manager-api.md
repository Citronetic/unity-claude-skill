This version of Unity is unsupported.

Native plug-in API for shader compiler

IUnityMemoryManager API reference

# Native plug-in API for memory management

The `IUnityMemoryManager` memory manager API allows you to use Unity’s memory management and memory profiling in native **plug-ins**A set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Plug-in) written in C or C++.

This API enables you to:

- Access Unity’s memory manager through a memory allocator.

- Track your plug-in’s memory use through Unity’s Memory **Profiler**A window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. [More info](Profiler.html)
See in [Glossary](Glossary.html#Profiler) package.

These features make it easier to manage and profile your plug-in’s memory allocations when compared to the equivalent C++ memory management methods.

The plug-in API is provided by the `IUnityMemoryManager` interface, which is declared in the `IUnityMemoryManager.h` header file, located in the [PluginAPI folder](native-plugin-interface-introduction.html#plugin-api-folder).

For more information, refer to the documentation provided as code comments in the header file.

You should be familiar with the following concepts to use this API effectively:

- [C++ Pointers](https://learn.microsoft.com/en-us/cpp/cpp/pointers-cpp?view=msvc-170)

- [Memory in Unity](performance-memory-overview.html)

- [The Memory Profiler package](https://docs.unity3d.com/Packages/com.unity.memoryprofiler@latest)

- [Memory allocator customization](memory-allocator-customization.html)

- [Predefined macros](https://learn.microsoft.com/en-us/cpp/preprocessor/predefined-macros?view=msvc-170)

## Track memory use in Unity

To track your plug-in’s memory usage, use the [Memory Profiler package](https://docs.unity3d.com/Packages/com.unity.memoryprofiler@latest) to take a snapshot, then open the snapshot in the [All Of Memory tab](https://docs.unity3d.com/Packages/com.unity.memoryprofiler@latest/index.html?subfolder=/manual/all-memory-tab.html). When you use the `IUnityMemoryManager` to allocate memory, the Memory Profiler displays the plug-in’s memory allocations under the area and object name you assigned when you created each allocator.

The following screenshot shows the Memory Profiler package window displaying memory used by a native plug-in with memory allocated with the `IUnityMemoryManager` API. In this example, the method **CreateAllocator** was called, with “MyNativePlugin” as the areaName parameter, and “MyPluginAllocator” as the objectName parameter. For more information, refer to [IUnityMemoryManager API reference](low-level-native-plugin-memory-manager-api-reference.html).

[Image: The Memory Profiler package window displaying the memory used by a user-defined allocator named Plugin Backend Allocator.]
The Memory Profiler package window displaying the memory used by a user-defined allocator named Plugin Backend Allocator.

For more information, refer to [Snapshots](https://docs.unity3d.com/Packages/com.unity.memoryprofiler@latest/index.html?subfolder=/manual/snapshots.html).

## Memory management limitations

This API enables you to use Unity’s memory management system when you develop native plug-ins. This has major benefits as described above, but there are still limitations. Unity’s memory management system:

- Isn’t automatically managed; you need to allocate and deallocate the memory yourself.

- Isn’t tracked and cleaned up by a garbage collector.

Since memory in native C++ isn’t managed, you need to keep track of any memory requirements your application has. This includes choosing the correct amount of memory to allocate and making sure you deallocate it when it’s no longer needed.

The `IUnityMemoryManager` API impacts performance because each allocation requires a virtual call. To minimize this performance impact, use the API to allocate larger blocks of memory less frequently. To handle smaller and more frequent allocations, use this API to allocate a single larger block, then write your own code to manage the memory within this block. Don’t use this API for frequent small allocations.

## Additional resources

- [Native Plug-in interface](native-plugin-interface.html)

- [Native plug-ins](plug-ins-native.html)A platform-specific native code library that is created outside of Unity for use in Unity. Allows you can access features like OS calls and third-party code libraries that would otherwise not be available to Unity. [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Nativeplug-in)

- [Memory in Unity introduction](performance-memory-overview.html)

- [Customizing native memory allocators](memory-allocator-customization.html)

Native plug-in API for shader compiler

IUnityMemoryManager API reference
