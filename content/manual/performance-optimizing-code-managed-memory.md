This version of Unity is unsupported.

Custom NativeContainer example

Reference type management

# Optimizing your code for managed memory

C#’s automatic memory management reduces the risk of memory leaks and other programming errors, in comparison to other programming languages like C++, where you must manually track and free all the memory you allocate.

Automatic memory management allows you to write code quickly and with few errors. However, this convenience might have performance implications. To optimize your code for performance, you must avoid situations where your application triggers the [garbage collector](performance-garbage-collector.html) a lot. This section outlines some common issues and workflows that affect when your application triggers the garbage collector.

| Topic | Description |
| --- | --- |
| Reference type management | Optimize how you use reference types in your code. |
| Creating reusable code | Reuse code to optimize the performance of your application. |
| Optimizing arrays | Optimize when and how you use arrays in your code. |

## Additional resources

- [Managed memory introduction](performance-managed-memory-introduction.html)

- [Garbage collector introduction](performance-garbage-collector.html)

Custom NativeContainer example

Reference type management
