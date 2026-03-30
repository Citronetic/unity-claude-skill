This version of Unity is unsupported.

Customizing the player

Reducing the file size of a build

# Incremental build pipeline

For faster iteration during development, Unity uses an incremental build pipeline that only rebuilds parts of the application if they have changed since the previous build, including build steps such as content building, code compilation, data **compression**A method of storing data that reduces the amount of storage space it requires. See [Texture Compression](texture-choose-format-by-platform.html), [Animation Compression](class-AnimationClip.html#AssetProperties), [Audio Compression](AudioFiles-compression.html), [Build Compression](ReducingFilesize.html).
See in [Glossary](Glossary.html#compression), and signing.

The incremental build pipeline works for both the Mono and **IL2CPP**A Unity-developed scripting back-end which you can use as an alternative to Mono when building projects for some platforms. [More info](./scripting-backends-il2cpp.html)
See in [Glossary](Glossary.html#IL2CPP) [scripting backend](scripting-backends.html)A framework that powers scripting in Unity. Unity supports three different scripting backends depending on target platform: Mono, .NET and IL2CPP. Universal Windows Platform, however, supports only two: .NET and IL2CPP. [More info](scripting-backends.html)
See in [Glossary](Glossary.html#ScriptingBackend), although the output file structure changes depending on which scripting backend your project uses.

By default, Unity uses the incremental build pipeline for both release and **development builds**A development build includes debug symbols and enables the Profiler. [More info](https://docs.unity.com/devops/en/manual/build-target-configurations#Build_target_advanced_settings_overview?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936034331)
See in [Glossary](Glossary.html#DevelopmentBuild). See the [Creating clean builds](#creating-non-incremental-builds) section below for details on how to make clean build instead.

Note: The incremental build pipeline does not apply when building [AssetBundles](AssetBundlesIntro.html). AssetBundles have separate mechanisms for caching and reusing the results from previous builds.

## Platform compatibility

Unity supports the incremental build pipeline for the following platforms:

- Standalone (Windows, Mac and Linux)

- Web

- Xbox One

- Xbox Series X and Xbox Series S

- Android

- iOS

- tvOS

## Creating clean builds

A “clean build” or “non-incremental build” involves completely rebuilding all content and code without relying on cached results from previous builds. Clean builds are especially useful when preparing release builds or troubleshooting issues caused by corrupted or outdated build caches.

In some scenarios, it can be useful or necessary to create builds that don’t use the incremental build pipeline. For example, you should run a clean build when preparing an official build that will be released.

To create a clean, non-incremental, build:

1. Open the **Build Profiles** window (**File** > **Build Profiles**).

2. Next to the **Build** button, select the drop-down.

3. Select **Clean Build**.

A clean build can be created from a build script by passing [BuildOptions.CleanBuildCache](../ScriptReference/BuildOptions.CleanBuildCache.html) in the call to [BuildPipeline.BuildPlayer](../ScriptReference/BuildPipeline.BuildPlayer.html).

In general, if expected changes are not present after an incremental build and you think there is a problem with the incremental build pipeline, create a clean build.

The content step of the build is when Unity serializes **scenes**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) and assets for the target platform. The Incremental Build Pipeline will reuse the entire content output from the previous build if it determines that none of the content has changed since the last successful build. This is always an “all or nothing” decision. This calculation can sometimes be flawed, for example it might reuse content even after you have changed a global settings that influence the output of the build. In this case you should create a clean build.

## Build Callbacks during Incremental Builds

Some build callbacks happen during the content step of a player build:

- Scene callbacks: [IProcessSceneWithReport.OnProcessScene](../ScriptReference/Build.IProcessSceneWithReport.OnProcessScene.html), [PostProcessSceneAttribute](../ScriptReference/Callbacks.PostProcessSceneAttribute.html)

- **Shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) callbacks: [IPreprocessShaders.OnProcessShader](../ScriptReference/Build.IPreprocessShaders.OnProcessShader.html),
[IPreprocessComputeShaders.OnProcessComputeShader](../ScriptReference/Build.IPreprocessComputeShaders.OnProcessComputeShader.html)

When the content is reused from a previous build Unity will not re-trigger those callbacks. They are not invoked because it is presumed that the callbacks were already run on the previous build, so any content change caused by the callback would already be cached in the output from the previous build.

When you change the implementation of a callback, and want to make sure that it is run again, then run a clean build or change the content of one of the scenes or assets that is part of the build.

Other build callbacks that are invoked before or after the content stage of the build may be re-triggered again during an incremental build. In this case the callback implementation should take care that it may be running in the context of a build that already had the callback invoked on it. For example, if the callback adds new entries to an [Android App Manifest](android-manifest.html) then it should be careful to work properly when the file already has those entries in it, to avoid creating an invalid file.

## Forcing a Scripts-only Build

A Scripts-only Build is a build that intentionally reuses the content from the previous build, rather than rebuilding it.

When testing script changes it can be useful to force a Scripts-only Build to avoid the time taken to rebuild the content. This can be useful if you know that there are data changes, but want to quickly test a code change, without applying the pending data changes for this purpose.

This type of build can be created by selecting **Force skip data build** in the Build menu in the [Build Profiles window](build-profiles-reference.html#build-options). Custom build **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts) can pass the [BuildOptions.BuildScriptsOnly](../ScriptReference/BuildOptions.BuildScriptsOnly.html) flag when calling `BuildPipeline.BuildPlayer`.

The incremental build pipeline automates the Scripts Only Build feature, so on platforms that support it, the content from the previous build will automatically be reused, so long as the content hasn’t changed. In that case it is not necessary to explicitly invoke a scripts-only build.

Note: The “Force skip data build” option will not work if there have been any changes in the serialization layout of the scripts in the project. For example when you add a new field to a MonoBehaviour then you must perform a regular or clean player build to serialize the assets to match the new class definition.

## Cache locations

During normal usage it is not necessary to understand where Unity stores the caches and meta-data files related to the Player Build. However in some cases it can be helpful to understand a bit more detail about the cache locations, for example when investigating issues with low disk space or build problems.

Most cached build content is stored in the Project’s Library directory, in particular the `Library/Bee` directory. The content from the build is staged and cached in a platform-specific subdirectory of `Library/PlayerDataCache`.

If the [OnPostBuildPlayerScriptDLLs](../ScriptReference/Build.IPostBuildPlayerScriptDLLs.OnPostBuildPlayerScriptDLLs.html) callback has been implemented in your project then the `Temp/StagingArea/Data/Managed` location is also used during the build to store assemblies.

The content reuse aspect of the incremental build pipeline relies on the files `ScriptsOnlyCache.yaml` and `DataBuildDirtyInfo.json` inside the `Library/PlayerDataCache` directory. These record information about the most recent build of the content, and are required when deciding if that content can be reused. If either of those files are missing Unity will perform a clean build.

The `Library` directory also stores the Shader Cache and the AssetDatabase, both of which cache data and aid in speeding up subsequent Player builds.

The incremental build pipeline also has a machine-level cache that reuses some specific parts of builds (such as non-embedded packages and libIL2CPP artifacts) across different projects. Other parts of the build, such as content building, are project specific and will not see performance improvements from this cache. The location of this cache is set using the `BEE_CACHE_DIRECTORY` environment variable, and defaults to a different location depending on your operating system:

- On Windows, `BEE_CACHE_DIRECTORY` defaults to `%USERPROFILE%\AppData\Local\Unity\Caches\bee`

- On Mac, `BEE_CACHE_DIRECTORY` defaults to `$HOME/Library/Unity/cache/bee`

- On Linux, `BEE_CACHE_DIRECTORY` defaults to `$XDG_CONFIG_HOME/.cache/unity3d/bee` (if `$XDG_CONFIG_HOME` is set) or `$HOME/.cache/unity3d/bee`

Note: Modifying or deleting these files manually (outside of Unity) can lead to unexpected issues during subsequent builds. These locations and filenames are subject to change between versions of Unity. If you experience build problems related to caching, consider performing a clean build.

Customizing the player

Reducing the file size of a build
