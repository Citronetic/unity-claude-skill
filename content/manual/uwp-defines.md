This version of Unity is unsupported.

Connect the profiler to UWP

IL2CPP scripting backend for UWP

# UWP scripting symbols

Unity has a range of built-in scripting symbols which represent options that you can use in your **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts) to selectively include or exclude portions of code from compilation. For more information on conditional compilation, refer to [Conditional compilation](platform-dependent-compilation.html).

**Note:** You can also refer to scripting symbols can as define symbols, preprocessor defines, or defines.

Unity automatically defines these scripting symbols for Universal Windows Platform (UWP):

| Scripting symbol | Description |
| --- | --- |
| UNITY_WINRT | Defined on all scripts. |
| UNITY_WSA | Defined on all scripts. |
| UNITY_WINRT_10_0 | Defined on all scripts. |
| UNITY_WSA_10_0 | Defined on all scripts. |
| ENABLE_IL2CPP | Defined on all scripts when using IL2CPPA Unity-developed scripting back-end which you can use as an alternative to Mono when building projects for some platforms. More infoSee in Glossary scripting backendA framework that powers scripting in Unity. Unity supports three different scripting backends depending on target platform: Mono, .NET and IL2CPP. Universal Windows Platform, however, supports only two: .NET and IL2CPP. More infoSee in Glossary. |
| WINDOWS_UWP | Defined on all scripts when building for UWP. |
| ENABLE_WINMD_SUPPORT | Defined on all scripts when building for UWP. |

## Additional resources

- [Conditional compilation](platform-dependent-compilation.html)

- [Custom scripting symbols](custom-scripting-symbols.html)

- [Microsoft documentation on C# preprocessor directives](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/preprocessor-directives)

Connect the profiler to UWP

IL2CPP scripting backend for UWP
