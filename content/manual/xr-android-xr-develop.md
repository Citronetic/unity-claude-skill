This version of Unity is unsupported.

XR Plug-in Management settings

Develop for Meta Quest workflow

# Develop for Android XR workflow

Unity supports development for headsets running Android **XR**An umbrella term encompassing Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR) applications. Devices supporting these forms of interactive applications can be referred to as XR devices. [More info](XR.html)
See in [Glossary](Glossary.html#XR).

The following sections outline Unity’s resources and packages to develop for Android XR devices.

## Android XR build profile

In Unity 6.1 and later, you can use the Android XR platform and build profile in the [Build Profiles](build-profiles.html)A set of customizable configuration settings to use when creating a build for your target platform. [More info](build-profiles.html)
See in [Glossary](Glossary.html#Buildprofile) window.

By default, the Android XR platform shares **player settings**Settings that let you set various player-specific options for the final game built by Unity. [More info](class-PlayerSettings.html)
See in [Glossary](Glossary.html#PlayerSettings) with the [Android build platform](android-build-settings.html). You can use the Android XR build profile to override **project settings**A broad collection of settings which allow you to configure how Physics, Audio, Networking, Graphics, Input and many other areas of your project behave. [More info](comp-ManagerGroup.html)
See in [Glossary](Glossary.html#ProjectSettings) specifically for Android XR.

### Add the Android XR build profile

To create a Android XR build profile:

1. Open the **Build Profiles** window (**File** > **Build Profiles**), and select **Add Build Profile** to open the **Platform Browser** window.

2. Select **Android XR** from the list of supported platforms.

3. Select **Add Build Profile**, which creates a Android XR build profile and installs existing package dependencies.

### Customize build profile settings

In the **Android XR Build Profile** tab, you can configure the following settings derived from the Android XR build platform:

- **Platform Settings**: customizable build settings specific for the Android XR platform. These settings aren’t shared by the Android build platform.

- **Player Settings**, **Graphics Settings**, and **Quality Settings**: shared with the Android build platform by default. You can customize and override these settings for the Android XR platform. To override these settings, select the relevant override option from the **Player Settings Overrides** section to reveal the override options.

Refer to [Android build platform](android-build-settings.html) for details on these options.

### Android XR platform settings

- The Android XR build profile adds a new **Android XR (Build Profile)** [Quality level](class-QualitySettings.html) (**Project Settings** > **Quality Settings**). You can modify the quality settings.

- You may need to disable **HDR**high dynamic range
See in [Glossary](Glossary.html#HDR) and post processing in the URP assets.

- When you first switch to the Android XR build target or build profile, Unity [enables the Android XR features](https://docs.unity3d.com/Packages/com.unity.xr.androidxr-openxr@1.0/manual/get-started/project-setup.html#enable-unity-openxr-android-xr) and [Foveated Rendering](https://docs.unity3d.com/Packages/com.unity.xr.androidxr-openxr@1.0/manual/features/foveated-rendering.html). These features remain enabled for the Android XR build target or build profile when you swap to a different build target.

## Packages

You can install the following packages from the [Package Manager](upm-ui-install.html):

- The [Unity OpenXR plug-in](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.15/manual/index.html) integrates core OpenXR features for all [XR runtimes](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.15/manual/index.html#runtimes), including Android XR.

- The [Android XR](https://docs.unity3d.com/Packages/com.unity.xr.androidxr-openxr@1.0/manual/index.html) package integrates Android XR-specific extensions to provide additional Android XR-specific features.

**Tip:** You can use the Unity OpenXR **plug-in**A set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Plug-in) and the Android OpenXR package together to develop a cross-platform application that has additional features tailored for Android XR devices.

To learn more about the packages Unity provides for XR development, refer to [XR packages](xr-support-packages.html).

### Google packages

Google also provides packages to develop for Android XR in Unity. Refer to Google’s documentation for [Android XR Developers](https://developer.android.com/xr) to learn about the packages Google provides.

**Note:** These packages and related documentation are maintained by Google.

## Templates

You can use the following templates as a starting point for your Android XR project:

- [Mixed Reality template](https://docs.unity3d.com/Packages/com.unity.template.mixed-reality@2.0)

- [VR Template](https://docs.unity3d.com/Packages/com.unity.template.vr@9.0)

- [VR Multiplayer template](https://docs.unity3d.com/Packages/com.unity.template.vr-multiplayer@2.0)

- [Mixed Reality multiplayer tabletop template](https://docs.unity3d.com/Packages/com.unity.template.mr-multiplayer@1.0/manual/index.html)

Refer to [Create an XR project](xr-create-projects.html) to understand how to use templates as a starting point for your project.

XR Plug-in Management settings

Develop for Meta Quest workflow
