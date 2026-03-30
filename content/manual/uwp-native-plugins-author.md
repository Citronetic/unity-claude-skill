This version of Unity is unsupported.

Call and implement native UWP plug-ins

Use P/Invoke

# Author native UWP plug-ins

To author native Universal Windows Platform (UWP) **plug-ins**A set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Plug-in), you need to know how to create native plug-ins for Unity. For more information about native plug-ins and their uses, refer to [Native plug-ins](plug-ins-native.html)A platform-specific native code library that is created outside of Unity for use in Unity. Allows you can access features like OS calls and third-party code libraries that would otherwise not be available to Unity. [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Nativeplug-in).

To author native UWP plug-ins, you can use either a precompiled dynamic-link library (DLL) or the C++ source code.

## Precompiled native plug-ins

To P/Invoke into precompiled native plug-ins, you need to:

1. Load the DLL at runtime.

2. Find the function entry point.

3. Call the plug-in.

You need to [compile the DLLs](plug-ins-managed.html) against the appropriate Windows SDK for the target CPU architecture. You also need to [configure the DLLs](plug-ins-managed.html) in the Plug-in **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) when you add them to a Unity project.

## C++ source code native plug-ins

You can add C++ (.cpp) code files directly into a Unity project, which will act as a plug-in in the Plug-in Inspector. If you [configure the plug-ins](plug-in-inspector.html) to be compatible with UWP and the **IL2CPP**A Unity-developed scripting back-end which you can use as an alternative to Mono when building projects for some platforms. [More info](./scripting-backends-il2cpp.html)
See in [Glossary](Glossary.html#IL2CPP) **scripting backend**A framework that powers scripting in Unity. Unity supports three different scripting backends depending on target platform: Mono, .NET and IL2CPP. Universal Windows Platform, however, supports only two: .NET and IL2CPP. [More info](scripting-backends.html)
See in [Glossary](Glossary.html#ScriptingBackend), Unity compiles these C++ files together with the C++ code that it generates from managed assemblies.

## Additional resources

- [Native plug-ins](plug-ins-native.html)

- [Import and configure plug-ins](plug-in-inspector.html)

- [Call and implement native UWP plug-ins](uwp-native-plugins-call.html)

Call and implement native UWP plug-ins

Use P/Invoke
