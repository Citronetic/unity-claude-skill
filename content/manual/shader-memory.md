This version of Unity is unsupported.

Troubleshooting shader duplication from AssetBundles

Debugging shaders

# Control how much memory shaders use

In your built application, Unity stores several ‘chunks’ of compressed **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) variant data. Each chunk contains multiple shader variants. When Unity loads a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) at runtime, it loads all the scene’s chunks into CPU memory and decompresses them.

To reduce memory usage on platforms that have limited memory, you can limit the size of chunks and how many decompressed chunks Unity keeps in memory.

To do this, in [Player settings](class-PlayerSettings.html)Settings that let you set various player-specific options for the final game built by Unity. [More info](class-PlayerSettings.html)
See in [Glossary](Glossary.html#PlayerSettings), select **Other Settings** > **Shader Variant Loading** and adjust the following settings:

- Use **Default chunk size (MB)** to set the maximum size of compressed chunks Unity stores in your built application.

- Use **Default chunk count** to limit how many decompressed chunks Unity keeps in memory. The default is `0`, which means there’s no limit.

See [PlayerSettings.SetDefaultShaderChunkCount](../ScriptReference/PlayerSettings.SetDefaultShaderChunkCount.html) for more information.

You can use **Override** to override the values for each platform individually. See [PlayerSettings.SetShaderChunkCountForPlatform](../ScriptReference/PlayerSettings.SetShaderChunkCountForPlatform.html) for more information.

You can also use [Shader.maximumChunksOverride](../ScriptReference/Shader-maximumChunksOverride.html) to override **Default chunk count** at runtime.

Troubleshooting shader duplication from AssetBundles

Debugging shaders
