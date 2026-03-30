This version of Unity is unsupported.

Include additional files in a build

Deterministic builds

# Reducing the file size of a build

Keeping the file size of your built application to a minimum is important to ensure that it doesn’t take up too much space on the end device, or to meet size requirements when submitting your application to online stores.

## Suggestions for reducing build size

The following settings and features impact the size of a build:

| Feature | Resolution |
| --- | --- |
| Compressed texture formatsA file format for handling textures during real-time rendering by 3D graphics hardware, such as a graphics card or mobile device. More infoSee in Glossary | Refer to Choose a GPU texture format by platform. |
| Compressed meshes | Refer to Configure mesh compression. |
| Compressed animation clipsAnimation data that can be used for animated characters or simple animations. It is a simple “unit” piece of motion, such as (one specific instance of) “Idle”, “Walk” or “Run”. More infoSee in Glossary | Refer to Animation properties. |
| Strip unreferenced code | Refer to Configure managed code stripping. |
| .NET library size | Using .NET Standard as the API Compatibility Level restricts you to a smaller subset of the .NET API, which can help keep size down. |

## Tools to analyze build size

Unity has the following tools for analyzing the size of a build.

### Build Report Inspector

Use the [Build Report Inspector package](https://docs.unity3d.com/Packages/com.unity.build-report-inspector@latest) to add an **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) to the BuildReport file that Unity generates when it creates a build. The build report file is located at `Library/LastBuild.buildreport`. The package uses the [`BuildReport`](../ScriptReference/Build.Reporting.BuildReport.html) API to create the Inspector window. It displays information such as the build steps, and assets in the build.

### Editor logs

You can inspect the Editor log after you perform a build to determine which assets were the largest in the build. To open the log:

1. Open the [**Console** window](Console.html) (**Window** > **General** > **Console**Abbreviation of **game console**
See in [Glossary](Glossary.html#console)).

2. Select the More menu (⋮) and select **Open Editor Log**.

[Image: The Editor log just after a build]
The Editor log just after a build

The Editor log provides a summary of assets broken down by type, and then lists all the individual assets in order of size contribution. Typically, assets like textures, sounds, and animations take up the most storage. **Scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts), **scenes**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene), and **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) usually have the smallest impact. The **File headers** in the list are extra data added to asset files to store references and settings. The headers normally make very little difference to asset size, but the value might be large if you have many large assets in the [Resources folder](LoadingResourcesatRuntime.html).

The Editor Log helps you to identify assets that you might want to remove or optimize, but consider the following before you start:

- Unity re-codes imported assets into its own internal formats, so the choice of source asset type isn’t relevant. For example, if you have a multi-layer texture `.psd` file in the project, Unity flattens and compresses it before building. Exporting the texture as a `.png` file doesn’t make any difference to build size.

- Unity [includes assets that are referenced](assets-direct-reference.html) in your project and strips any unused assets during the build process, so you don’t need to manually remove assets from the project. The only assets that aren’t removed are assets in the [`Resources` folder](LoadingResourcesatRuntime.html). Unity includes all assets in the `Resources` folder in a build, so it’s important to ensure that all assets in the `Resources` folder are ones used in your application.

## Additional resources

- [Include additional files in a build](StreamingAssets.html)

- [Customizing the Player](BuildPlayerPipeline.html)

- [Build Report Inspector package](https://docs.unity3d.com/Packages/com.unity.build-report-inspector@latest)

Include additional files in a build

Deterministic builds
