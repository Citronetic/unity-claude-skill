This version of Unity is unsupported.

Override the mipmap level of a texture

Analyze mipmap streaming

# Preload mipmap levels

If you enable a **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) at runtime, mipmap streaming needs time to stream the mipmap levels into memory.

You can use texture preloading to prevent this. Do the following:

1. Add a **Streaming Controller** component to the disabled camera. For more information about this component, refer to [Configure mipmap streaming](TextureStreaming-configure.html).

2. Call the [StreamingController.SetPreloading](../ScriptReference/StreamingController.SetPreloading.html) API on the camera to preload the mipmap levels.

Use [StreamingController.CancelPreloading](../ScriptReference/StreamingController.CancelPreloading.html) to cancel preloading.

You can use the following APIs after you enable preloading:

- [StreamingController.IsPreloading](../ScriptReference/StreamingController.IsPreloading.html) to check if the camera is preloading.

- [Texture.streamingTextureLoadingCount](../ScriptReference/Texture-streamingTextureLoadingCount.html) and [Texture.streamingTexturePendingLoadCount](../ScriptReference/Texture-streamingTexturePendingLoadCount.html) to check how many textures Unity is still loading mipmap levels for.

If these APIs return values that indicate Unity has finished preloading, you might need to wait a few frames before you enable the camera to make sure preloading has finished.

Override the mipmap level of a texture

Analyze mipmap streaming
