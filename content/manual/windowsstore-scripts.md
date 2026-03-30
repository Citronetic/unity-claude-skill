This version of Unity is unsupported.

Debug generated C++ code

AppCallbacks class reference

# WinRT API in C# scripts for UWP

Unity includes Windows Runtime (WinRT) support when building for Universal Windows Platform with the [IL2CPP](scripting-backends-il2cpp.html)A Unity-developed scripting back-end which you can use as an alternative to Mono when building projects for some platforms. [More info](./scripting-backends-il2cpp.html)
See in [Glossary](Glossary.html#IL2CPP) scripting backend. Use Windows Runtime support to call into both native system Windows Runtime APIs as well as custom .winmd files directly from managed (C#) **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts) and plugins.

Unity automatically references Windows Runtime APIs such as `Windows.winmd` on Universal Windows Platform. To use custom .winmd files, import them into your Unity project folder together with any accompanying DLLs and configure them. For more information, refer to [Import and configure plug-ins](plug-in-inspector.html).

To use WinRT API in your Unity scripts:

- Your scripts must be written in C#.

- All the code that uses WinRT API must be under the `ENABLE_WINMD_SUPPORT` [directive](platform-dependent-compilation.html). This is necessary because the Editor uses [Mono](scripting-backends-mono.html)A scripting backend used in Unity. [More info](./scripting-backends-il2cpp.html)
See in [Glossary](Glossary.html#Mono), which doesn’t support WinRT APIs.

The following code example gets an advertising ID using WinRT API directly:

```cs
using UnityEngine;
public class WinRTAPI : MonoBehaviour
{
    void Update()
    {
        auto adId = GetAdvertisingId();
        // ...
    }

    string GetAdvertisingId()
    {
        #if ENABLE_WINMD_SUPPORT
            return Windows.System.UserProfile.AdvertisingManager.AdvertisingId;
        #else
            return "";
        #endif
    }
}
```

## Additional resources

- [Windows build settings reference](WindowsStandaloneBinaries.html)

- [Scripting backends](scripting-backends.html)A framework that powers scripting in Unity. Unity supports three different scripting backends depending on target platform: Mono, .NET and IL2CPP. Universal Windows Platform, however, supports only two: .NET and IL2CPP. [More info](scripting-backends.html)
See in [Glossary](Glossary.html#ScriptingBackend)

- [Microsoft documentation on WinRT APIs with Unity for HoloLens](https://learn.microsoft.com/en-us/windows/mixed-reality/develop/unity/using-the-windows-namespace-with-unity-apps-for-hololens)

Debug generated C++ code

AppCallbacks class reference
