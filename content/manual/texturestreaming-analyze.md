This version of Unity is unsupported.

Preload mipmap levels

Sparse Textures

# Analyze mipmap streaming

The ****Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene)** view has a Debug Draw Mode that helps you visualize and debug [mipmap streaming](TextureStreaming.html) in your scene. To enable it, follow these steps:

1. Select **Debug Draw Mode** in the [Scene view Draw Modes and View Options overlays](ViewModes.html).

2. Select **Texture Mipmap Streaming**.

The Debug Draw Mode tints **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) the following colours:

- Green if a texture uses fewer mipmap levels.

- Red if a texture uses fewer mipmap levels because mipmap streaming doesn’t have enough resources to load them all.

- Blue if a texture that doesn’t use mipmap streaming, or there’s no renderer calculating the mipmap levels.

**Note:** If you use the [MainTexture](../ScriptReference/Material-mainTexture.html) API to set a main texture, the texture won’t display in the Debug Draw Mode.

If your project uses a scriptable **render pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline), use the following to analyze mipmap streaming instead:

- [Rendering Debugger in URP](urp/features/rendering-debugger.html)

- [Rendering Debugger in HDRP](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@17.0/manual/rendering-debugger-window-reference)

## Get mipmap streaming information in a script

To get information about texture memory, use the following properties:

- [Texture.currentTextureMemory](../ScriptReference/Texture-currentTextureMemory.html)

- [Texture.desiredTextureMemory](../ScriptReference/Texture-desiredTextureMemory.html)

- [Texture.totalTextureMemory](../ScriptReference/Texture-totalTextureMemory.html)

- [Texture.targetTextureMemory](../ScriptReference/Texture-targetTextureMemory.html)

- [Texture.nonStreamingTextureMemory](../ScriptReference/Texture-nonStreamingTextureMemory.html)

To get information about the number of textures or renderers that mipmap streaming affects, use the following properties:

- [Texture.streamingMipmapUploadCount](../ScriptReference/Texture-streamingMipmapUploadCount.html)

- [Texture.nonStreamingTextureCount](../ScriptReference/Texture-nonStreamingTextureCount.html)

- [Texture.streamingTextureCount](../ScriptReference/Texture-streamingTextureCount.html)

- [Texture.streamingRendererCount](../ScriptReference/Texture-streamingRendererCount.html)

To get information about the mipmap levels for a texture, use the following properties:

- [Texture2D.desiredMipmapLevel](../ScriptReference/Texture2D-desiredMipmapLevel.html)

- [Texture2D.loadingMipmapLevel](../ScriptReference/Texture2D-loadingMipmapLevel.html)

- [Texture2D.loadedMipmapLevel](../ScriptReference/Texture2D-loadedMipmapLevel.html)

Preload mipmap levels

Sparse Textures
