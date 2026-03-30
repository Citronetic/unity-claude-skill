This version of Unity is unsupported.

Script compilation

Introduction to scripting back ends

# Scripting back ends

In Unity, the scripting back end is the runtime technology that compiles and executes your C# **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts). It determines how your code is turned into executable instructions and what runtime manages it on target platforms.

| Topic | Description |
| --- | --- |
| Introduction to scripting back ends | Understand the available scripting backends and their effects on your project. |
| Mono scripting back end | Mono is a stable, mature .NET runtime that provides a managed environment for the just-in-time (JIT) compilation of your C# code. |
| IL2CPP scripting back end | IL2CPPA Unity-developed scripting back-end which you can use as an alternative to Mono when building projects for some platforms. More infoSee in Glossary is Unity’s ahead-of-time (AOT) pipeline that converts C# intermediate language (IL) to C++, then compiles to native code. It’s required on several platforms where Mono and JIT are not supported. |

## Additional resources

- [Unity .NET features](overview-of-dot-net-in-unity.html)

- [Build profiles](BuildSettings.html)A set of customizable configuration settings to use when creating a build for your target platform. [More info](build-profiles.html)
See in [Glossary](Glossary.html#Buildprofile)

Script compilation

Introduction to scripting back ends
