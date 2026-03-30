This version of Unity is unsupported.

Develop for Meta Quest workflow

Packages and templates for Meta Quest development

# Meta Quest build platform and build profile

Understand how to configure the Meta Quest build platform and build profile.

In Unity 6.1 and later, you can use the Meta Quest build platform and build profile in the [Build Profiles](build-profiles.html)A set of customizable configuration settings to use when creating a build for your target platform. [More info](build-profiles.html)
See in [Glossary](Glossary.html#Buildprofile) window.

By default, the Meta Quest platform shares **Player settings**Settings that let you set various player-specific options for the final game built by Unity. [More info](class-PlayerSettings.html)
See in [Glossary](Glossary.html#PlayerSettings) with the [Android build platform](android-build-settings.html). You can use the Meta Quest build profile to override **project settings**A broad collection of settings which allow you to configure how Physics, Audio, Networking, Graphics, Input and many other areas of your project behave. [More info](comp-ManagerGroup.html)
See in [Glossary](Glossary.html#ProjectSettings) specifically for Meta Quest.

## Prerequisites

- [Android Build Support](android-install-dependencies.html) module for the version of the Editor you’re using.

## Select the Meta Quest build platform

You can use this build platform to configure settings for standalone Meta Quest headsets.

To select the Meta Quest build platform:

1. Go to **File** > **Build Profiles** to open the [Build Profiles](build-profiles-reference.html) window.

2. In the **Platforms** list, select **Meta Quest**.

3. Click the **Switch Platform** button.

4. Install the required packages you’re prompted to.

**Note:** Unity automatically installs the [OpenXR Plugin](https://docs.unity3d.com/Packages/com.unity.xr.openxr@latest) when you select the Meta Quest build platform.

## Create the Meta Quest build profile

To create a Meta Quest build profile:

1. Open the **Build Profiles** window (**File** > **Build Profiles**), and select **Add Build Profile** to open the **Platform Browser** window.

2. Select **Meta Quest** from the list of supported platforms.

3. Select **Add Build Profile** which will create a Meta Quest build profile and install package dependencies.

## Default settings reference

When you create a Meta Quest build profile, Unity pre-configures some specific [Player](class-PlayerSettingsAndroid.html) and [Quality](class-QualitySettings.html) settings.

To access Player settings, click the **Player Settings** button at the top of the **Meta Quest Build Profile** page. The following table outlines the default overridden **Player settings** for the Meta Quest build profile:

| Setting | Default value |
| --- | --- |
| Graphics API | Vulkan |
| Minimal Android API Level | Android 10.0 (API level 29) |
| Target API level | Android 12L (API level 32) |
| Scripting BackendA framework that powers scripting in Unity. Unity supports three different scripting backends depending on target platform: Mono, .NET and IL2CPP. Universal Windows Platform, however, supports only two: .NET and IL2CPP. More infoSee in Glossary | IL2CPP |
| Target Architecture | ARM64 |
| Stereo Rendering PathThe technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. More infoSee in Glossary | Instancing |

To access quality settings, click the **Player Settings** button at the top of the **Meta Quest Build Profile** page and select **Quality** from the left-hand menu. The following table outlines the default overridden **Quality Settings** for the Meta Quest build profile:

| Setting | Default value |
| --- | --- |
| Anisotropic Filtering | Forced On |
| Quality Level | A new Meta Quest (Build Profile) option |

## Customize build profile settings

In the **Meta Quest Build Profile** tab, you can configure the following settings derived from the Meta Quest build target:

- **Platform Settings**: customizable build settings specific for the Meta Quest platform. These settings aren’t shared by the Android build target.

- **Player Settings**, **Graphics Settings**, and **Quality Settings**: shared with the Android build target by default. You can customize and override these settings for the Meta Quest platform. To override these settings, select the relevant override option from the **Player Settings Overrides** section to reveal the override options.

## Meta Quest platform settings

The Meta Quest platform is derived from the Android build platform and shares most of its settings with the Android platform. To learn about the settings available in the Android build platform, refer to [Android build settings reference](android-build-settings.html).

The following table describes settings that are specific to the Meta Quest platform:

| Setting | Description |
| --- | --- |
| Link Time Optimization | Use the precompiled and link time optimized (ThinLTO) Unity engine code (libunity.so) for non-development builds. Use this property for improved runtime performance and reduced memory usage. The options are:

None: The project build uses the default Unity engine code.

Thin: The project build uses precompiled and thin link time optimized (ThinLTO) Unity engine code. For more information, refer to the ThinLTO Documentation.

Note: You can use link time optimized Unity engine code if your project uses IL2CPP scripting backend and Strip Engine Code is disabled. This doesn’t affect IL2CPPA Unity-developed scripting back-end which you can use as an alternative to Mono when building projects for some platforms. More infoSee in Glossary compilation. |

## Additional resources

- [Android build settings reference](android-build-settings.html)

- [Introduction to build profiles](build-profiles.html)

Develop for Meta Quest workflow

Packages and templates for Meta Quest development
