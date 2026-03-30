This version of Unity is unsupported.

C# compiler

Garbage collection

# C# reflection overhead

Mono and **IL2CPP**A Unity-developed scripting back-end which you can use as an alternative to Mono when building projects for some platforms. [More info](./scripting-backends-il2cpp.html)
See in [Glossary](Glossary.html#IL2CPP) internally cache all C# reflection (`System.Reflection`) objects and by design, Unity doesn’t garbage collect them. The result of this behavior is that the garbage collector continuously scans the cached C# reflection objects during the lifetime of your application, which causes unnecessary and potentially significant garbage collector overhead.

To minimize the garbage collector overhead, avoid methods such as [Assembly.GetTypes](https://docs.microsoft.com/en-us/dotnet/api/system.reflection.assembly.gettypes) and [Type.GetMethods()](https://docs.microsoft.com/en-us/dotnet/api/system.type.getmethods) in your application, which create a lot of C# reflection objects at runtime. Instead, you should scan assemblies in the Unity Editor for the required data and serialize and/or codegen it for use at runtime.

## Additional resources

- [.NET Profile Support](dotnet-profile-support.html).

- [C# compiler](csharp-compiler.html).

- [Garbage collector overview](performance-garbage-collector.html).

C# compiler

Garbage collection
