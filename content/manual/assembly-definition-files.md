This version of Unity is unsupported.

Test conditional compilation

Introduction to assemblies in Unity

# Organizing scripts into assemblies

Assemblies are individual units of compiled code that group types and resources together. Organizing **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts) into assemblies has important advantages, especially as your codebase grows.

Assemblies help you think clearly about the architecture of your code and about managing dependencies. By exercising fine-grained control over references, you can reduce unnecessary recompilation time and make your code easier to debug.

| Topic | Description |
| --- | --- |
| Introduction to assemblies in Unity | Understand the fundamentals of how assemblies work in Unity and why using them to organize your scripts is beneficial. |
| Creating assembly assets | Create various kinds of assembly assets to customize your assemblies. |
| Referencing assemblies | Set up references between assemblies, override the default references and understand the limitations Unity places on references. |
| Conditionally including assemblies | Use scripting symbols to conditionally include or exclude assemblies from compilation. |
| Assembly metadata and compilation details | Define metadata for your assemblies. |
| Assembly Definition Inspector window reference | Inspector-editable properties of assembly defintion assets and their meaning. |
| Assembly Definition Reference Inspector window reference | Inspector-editable properties of assembly defintion reference assets and their meaning. |
| Assembly Definition file format reference | Assembly definition file format reference. |
| Predefined assemblies reference | Unity’s predefined assemblies and the order in which Unity compiles them. |

## Additional resources

- [Special folders and script compilation order](script-compile-order-folders.html)

- [Scripting backends](scripting-backends.html)A framework that powers scripting in Unity. Unity supports three different scripting backends depending on target platform: Mono, .NET and IL2CPP. Universal Windows Platform, however, supports only two: .NET and IL2CPP. [More info](scripting-backends.html)
See in [Glossary](Glossary.html#ScriptingBackend)

Test conditional compilation

Introduction to assemblies in Unity
