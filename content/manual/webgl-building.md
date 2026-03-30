This version of Unity is unsupported.

Web build settings reference

AssetBundles in Web

# Web Build folder

When you build your Web application, Unity creates a `Build` folder with all files necessary to run your application in a web browser.

## Build folder structure

The `Build` folder has the name you specify in the ****Build Profiles**A set of customizable configuration settings to use when creating a build for your target platform. [More info](build-profiles.html)
See in [Glossary](Glossary.html#Buildprofile)** window. The folder contains the following files, where `[ExampleBuild]` represents the name of the target build folder.

| File name | Description |
| --- | --- |
| [ExampleBuild].loader.js | The JavaScript code that the web page needs to load the Unity content. |
| [ExampleBuild].framework.js | JavaScript runtime and plug-insA set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). More infoSee in Glossary. |
| [ExampleBuild].wasm | WebAssembly binary. |
| [ExampleBuild].mem | A binary image to initialize the heap memory for your Player. Unity generates this file for multithreaded WebAssembly builds only. |
| [ExampleBuild].data | Asset data and ScenesA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary. |
| [ExampleBuild].symbols.json | Debug symbol names necessary to demangle an error stack trace. This file is only generated for Release builds when you enable the Debug Symbols option (File > Build Profiles > Player Settings.) |
| [ExampleBuild].jpg | A background image, which displays while the build is loading. This file is only generated when a Background Image is available in the Player Settings (File > Build Profiles > Player Settings > Splash Image). For more information, refer to Splash Screen. |

### File extensions

If you enable a ****Compression**A method of storing data that reduces the amount of storage space it requires. See [Texture Compression](texture-choose-format-by-platform.html), [Animation Compression](class-AnimationClip.html#AssetProperties), [Audio Compression](AudioFiles-compression.html), [Build Compression](ReducingFilesize.html).
See in [Glossary](Glossary.html#compression) Method** for your build, Unity identifies the extension that corresponds with the compression method and adds this extension to the names of the files inside the Build sub folder. If you enable **Decompression Fallback**, Unity appends the extension `.unityweb` to the build file names. Otherwise, Unity appends the extension `.gz` for the Gzip compression method, or `.br` for the Brotli compression method.

For more information, refer to [Compressed builds and server configuration](webgl-deploying.html).

### Name files as hashes

If you enable **Name Files As Hashes** in the ****Player Settings**Settings that let you set various player-specific options for the final game built by Unity. [More info](class-PlayerSettings.html)
See in [Glossary](Glossary.html#PlayerSettings)**, Unity uses the hash of the file content instead of the default file name. This applies to each file in the build folder. This option allows you to upload updated versions of the game builds into the same folder on the server, and only upload the files which have changed between build iterations.

**Note**: Opening a Player directly from the file system might not work in some browsers. This is due to security restrictions applied to local file URLs.

## Additional resources

- [Web Player settings](class-PlayerSettingsWebGL.html)

- [Web build settings](web-build-settings.html)

- [Build and distribute a Web application](webgl-building-distribution.html)

- [Deploy a Web application](webgl-deploying.html)

- [Web](webgl.html)

Web build settings reference

AssetBundles in Web
