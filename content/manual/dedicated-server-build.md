This version of Unity is unsupported.

Dedicated Server optimizations

Dedicated Server AssetBundles

# Build your application for Dedicated Server

You can create a Dedicated Server build in either of the following ways:

- [Unity Editor](#unity-editor)

- [Scripting](#scripting)

- [Command line](#command-line)

## Unity Editor

To create a Dedicated Server build in the Unity Editor, use the following steps:

1. Open the [Build Profiles](BuildSettings.html)A set of customizable configuration settings to use when creating a build for your target platform. [More info](build-profiles.html)
See in [Glossary](Glossary.html#Buildprofile) window from **File** > **Build Profiles**.

2. Select **Add Build Profile** to open the **Platform Browser** window.

3. Select the type of server to build from the list of available platforms. For example, select **Linux Server** to build a Linux server.

4. If the server type isn’t available, select **Install with Unity Hub** and follow the installation instructions. For information on how to install modules, refer to [Add modules](https://docs.unity3d.com/hub/manual/AddModules.html).

5. Select **Switch Profile** to set the new build profile as the active profile.

6. Click **Build**.

**Tip**: You can further configure the Dedicated Server build in the [Player settings](dedicated-server-player-settings.html)Settings that let you set various player-specific options for the final game built by Unity. [More info](class-PlayerSettings.html)
See in [Glossary](Glossary.html#PlayerSettings).

## Scripting

To create a Dedicated Server build using a script, set `buildPlayerOptions.subtarget` to `(int)StandaloneBuildSubtarget.Server`.

```cs
buildPlayerOptions.target = BuildTarget.StandaloneWindows;
// SubTarget expects an integer.
buildPlayerOptions.subtarget = (int)StandaloneBuildSubtarget.Server;
```

## Command line

To create a Dedicated Server build through the command line, use the `-standaloneBuildSubtarget Server` [argument](CommandLineArguments.html).

```bash
-buildTarget Linux64 -standaloneBuildSubtarget Server
```

## Code sign macOS Dedicated Server builds

Dedicated Server builds that aren’t code signed might display security warnings when deployed on macOS systems. To avoid such warnings, make sure you code sign the build before distribution. For more information, refer to the documentation on [Code sign and notarize your macOS application](macos-building-notarization.html).

## Additional resources

- [macOS build settings reference](macosbuildsettings.html)

- [Windows build settings reference](WindowsStandaloneBinaries.html)

- [Linux build settings reference](Buildsettings-linux.html)

- [Creating and Using Scripts](creating-scripts.html)

Dedicated Server optimizations

Dedicated Server AssetBundles
