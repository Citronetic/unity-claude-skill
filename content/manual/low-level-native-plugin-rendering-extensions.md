This version of Unity is unsupported.

Introduction to native plug-in API

Native plug-in API for shader compiler

# Native plug-in API for graphics and rendering

Use the `IUnityGraphics` interface to give a **plug-in**A set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Plug-in) access to generic graphics device functionality. The interface is defined in the `IUnityGraphics.h` header file, located in the [PluginAPI folder](native-plugin-interface-introduction.html#plugin-api-folder).

The following script uses the `IUnityGraphics` interface to register a callback:

```cpp
#include "IUnityInterface.h"
#include "IUnityGraphics.h"

static IUnityInterfaces* s_UnityInterfaces = NULL;
static IUnityGraphics* s_Graphics = NULL;
static UnityGfxRenderer s_RendererType = kUnityGfxRendererNull;

// Unity plugin load event
extern "C" void UNITY_INTERFACE_EXPORT UNITY_INTERFACE_API
    UnityPluginLoad(IUnityInterfaces* unityInterfaces)
{
    s_UnityInterfaces = unityInterfaces;
    s_Graphics = unityInterfaces->Get<IUnityGraphics>();

    s_Graphics->RegisterDeviceEventCallback(OnGraphicsDeviceEvent);

    // Run OnGraphicsDeviceEvent(initialize) manually on plugin load
    // to not miss the event in case the graphics device is already initialized
    OnGraphicsDeviceEvent(kUnityGfxDeviceEventInitialize);
}

// Unity plugin unload event
extern "C" void UNITY_INTERFACE_EXPORT UNITY_INTERFACE_API
    UnityPluginUnload()
{
    s_Graphics->UnregisterDeviceEventCallback(OnGraphicsDeviceEvent);
}

static void UNITY_INTERFACE_API
    OnGraphicsDeviceEvent(UnityGfxDeviceEventType eventType)
{
    switch (eventType)
    {
        case kUnityGfxDeviceEventInitialize:
        {
            s_RendererType = s_Graphics->GetRenderer();
            //TODO: user initialization code on graphics device initialization.
            For example, D3D11 resource creation.
            break;
        }
        case kUnityGfxDeviceEventShutdown:
        {
            s_RendererType = kUnityGfxRendererNull;
            //TODO: user graphics API code to call on graphics device shutdown.
            break;
        }
        case kUnityGfxDeviceEventBeforeReset:
        {
            //TODO: user graphics API code to call before graphics device reset.
            break;
        }
        case kUnityGfxDeviceEventAfterReset:
        {
            //TODO: user graphics API code to call after graphics device reset.
            break;
        }
    };
}
```

## Plug-in callbacks on the rendering thread

You can use multithreading to render in Unity, if the platform and number of available CPUs allows for it.

**Note**: When you use multithreaded rendering, the rendering API commands run on a separate thread from MonoBehaviour **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts). The communication between the main thread and the render thread means your plug-in might not start rendering immediately, depending on how much work the main thread has pushed to the render thread.

To render from the plug-in, call [`GL.IssuePluginEvent`](../ScriptReference/GL.IssuePluginEvent.html) from your **managed plug-in**A managed .NET assembly that is created with tools like Visual Studio for use in Unity. [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Managedplug-in) script. This causes Unity’s rendering pipeline to call the native function from the render thread, as demonstrated in the following code example. For example, if you call `GL.IssuePluginEvent` from the **Camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera)’s `OnPostRender` function, the function calls a plug-in callback immediately after the camera has finished rendering.

The following example shows the **native plug-in**A platform-specific native code library that is created outside of Unity for use in Unity. Allows you can access features like OS calls and third-party code libraries that would otherwise not be available to Unity. [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Nativeplug-in) code:

```cpp
// Plugin function to handle a specific rendering event
static void UNITY_INTERFACE_API OnRenderEvent(int eventID)
{
    // User rendering code
}

// Freely defined function to pass a callback to plugin-specific scripts
extern "C" UnityRenderingEvent UNITY_INTERFACE_EXPORT UNITY_INTERFACE_API
    GetRenderEventFunc()
{
    return OnRenderEvent;
}
```

The following examples shows the corresponding managed code:

```cs
#if UNITY_IPHONE && !UNITY_EDITOR
[DllImport ("__Internal")]
#else
[DllImport("RenderingPlugin")]
#endif
private static extern IntPtr GetRenderEventFunc();

// Queue a specific callback to be called on the render thread
GL.IssuePluginEvent(GetRenderEventFunc(), 1);
```

The signature for the `UnityRenderingEvent` callback is provided in `IUnityGraphics.h` in the [Native Rendering Plugin sample](https://github.com/Unity-Technologies/NativeRenderingPlugin/tree/master/PluginSource/source/Unity).

## Plug-in using the OpenGL graphics API

There are two kinds of OpenGL objects:

- **Objects shared across OpenGL contexts**, such as texture, buffer, renderbuffer, samplers, query, **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader), and program objects.

- **Per-OpenGL context objects**, such as vertex array, framebuffer, program pipeline, transform feedback, and sync objects.

Unity uses multiple OpenGL contexts. When initializing and closing the Editor and the Player, Unity relies on a master context, but when rendering it uses dedicated contexts. That is, you can’t create per-context objects during `kUnityGfxDeviceEventInitialize` and `kUnityGfxDeviceEventShutdown` events.

## Rendering extensions API

Unity also supports low-level rendering extensions that can receive callbacks when certain events happen. This is mostly used to implement and control low-level rendering in your plug-in and enable it to work with Unity’s multithreaded rendering.

Due to the low-level nature of this extension the plug-in might need to be preloaded before the devices get created. Currently the convention is name-based; the plug-in name must begin with `GfxPlugin`, for example: `GfxPluginMyNativePlugin`.

The rendering extension definition exposed by Unity is in the file `IUnityRenderingExtensions.h`, located in the [PluginAPI folder](native-plugin-interface-introduction.html#plugin-api-folder).

All platforms supporting native plug-ins support these extensions.

To take advantage of the rendering extension, a plug-in should export `UnityRenderingExtEvent` and optionally `UnityRenderingExtQuery`. For more information, refer to the documentation provided inside the header file.

## Plug-in callbacks on the rendering thread

A plug-in gets called via `UnityRenderingExtEvent` whenever Unity triggers one of the built-in events. The callbacks can also be added to CommandBuffers via [`CommandBuffer.IssuePluginEventAndData`](../ScriptReference/Rendering.CommandBuffer.IssuePluginEventAndData.html) or [`CommandBuffer.IssuePluginCustomBlit`](../ScriptReference/Rendering.CommandBuffer.IssuePluginCustomBlit.html) from scripts.

## Additional resources

- [Native plug-in API for shader compiler](low-level-native-plugin-shader-compiler-access.html)

- [Native plug-in API for memory manager](low-level-native-plugin-memory-manager-api.html)

- [Native plug-in API for profiling](LowLevelNativePluginProfiler.html)

- [Native plug-in API for logging](low-level-native-plugin-logging.html)

Introduction to native plug-in API

Native plug-in API for shader compiler
