This version of Unity is unsupported.

Native memory

Native memory allocators

# Native memory introduction

The Unity engine’s internal C/C++ core has its own memory management system, called native memory. In most situations, you can’t directly access or modify this memory type.

Native memory isn’t automatically managed or subject to [garbage collection](performance-garbage-collector.html). This means it’s difficult to profile and handle in a way that doesn’t cause memory leaks.

Unity uses different memory allocator types, which all use different algorithms to organize memory. Unity’s memory manager uses these allocator types in different areas to organize the memory in your application effectively.

To get greater control over how Unity allocates native memory, you can adjust the size of each allocation for each area. You can adjust the size of allocations either through the [Player settings](class-PlayerSettings.html)Settings that let you set various player-specific options for the final game built by Unity. [More info](class-PlayerSettings.html)
See in [Glossary](Glossary.html#PlayerSettings) window in the Unity Editor, or through the command line. For more information, refer to [Customizing allocators](memory-allocator-customization.html).

## Additional resources

- [Memory in Unity introduction](performance-memory-overview.html)

- [Native allocators introduction](performance-native-allocators.html)

- [Customizing allocators](memory-allocator-customization.html)

Native memory

Native memory allocators
