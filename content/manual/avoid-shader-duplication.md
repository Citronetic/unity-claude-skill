This version of Unity is unsupported.

Default shader keywords

Control how much memory shaders use

# Troubleshooting shader duplication from AssetBundles

If you use [AssetBundles](AssetBundlesIntro.html), Unity might compile duplicate shaders if you reference one **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) in two or more objects. For example:

- A material in an AssetBundle and a material in a built **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) reference the same shader.

- Multiple AssetBundles contain materials that reference the same shader outside an AssetBundle.

This can increase the memory and storage space shaders use, and break [draw call batching](DrawCallBatching.html).

To avoid this, you can use the following approaches:

- Load an AssetBundle that contains all your shaders first, then load and instantiate AssetBundle assets that reference the shaders. See [AssetBundle Dependencies](AssetBundles-Dependencies.html) for more information.

- Structure your AssetBundles to minimise duplication. See [Asset Duplication](AssetBundles-Preparing.html#asset-duplication) for more information.

You can add materials and [shader variant collections](shader-variant-collections.html) to an AssetBundle to specify which shader variants to include.

If you create a single AssetBundle, some shaders might stay in memory even if they’re no longer needed, because you cannot partially unload an AssetBundle. You can avoid this by creating a separate AssetBundle for each group of shaders you use together, for example a ‘forest’ AssetBundle and a ‘desert’ AssetBundle. See [Managing loaded AssetBundles](AssetBundles-Native.html#managing-loaded-assetbundles), or [Memory management in the Addressables system](https://docs.unity3d.com/Packages/com.unity.addressables@1.21/manual/MemoryManagement.html#understanding-when-memory-is-cleared) if you use Addressables.

Default shader keywords

Control how much memory shaders use
