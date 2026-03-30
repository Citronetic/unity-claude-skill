This version of Unity is unsupported.

Use UWP plug-ins with IL2CPP

Call and implement native UWP plug-ins

# Use managed UWP plug-ins

Managed **plug-ins**A set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Plug-in) are managed .NET assemblies that are managed outside of Unity and compiled into dynamically-linked libraries (DLLs). For information about how to create and use managed plug-ins, refer to [Managed plug-ins](plug-ins-managed.html)A managed .NET assembly that is created with tools like Visual Studio for use in Unity. [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Managedplug-in).

The **IL2CPP**A Unity-developed scripting back-end which you can use as an alternative to Mono when building projects for some platforms. [More info](./scripting-backends-il2cpp.html)
See in [Glossary](Glossary.html#IL2CPP) **scripting backend**A framework that powers scripting in Unity. Unity supports three different scripting backends depending on target platform: Mono, .NET and IL2CPP. Universal Windows Platform, however, supports only two: .NET and IL2CPP. [More info](scripting-backends.html)
See in [Glossary](Glossary.html#ScriptingBackend) exposes the same .NET API surface as the Unity Editor and standalone Player. As a result, you can use the same plug-ins and you don’t have to compile separate versions to target different .NET APIs for Universal Windows Platform (UWP).

## Additional resources

- [Managed plug-ins](plug-ins-managed.html)

- [Import and configure plug-ins](plug-in-inspector.html)

- [Microsoft documentation on Managed code](https://learn.microsoft.com/en-us/dotnet/standard/managed-code)

Use UWP plug-ins with IL2CPP

Call and implement native UWP plug-ins
