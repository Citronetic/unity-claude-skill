This version of Unity is unsupported.

Collect performance data introduction

Collect performance data in Play mode

# Collect performance data on a target platform

Record performance data with the Unity **Profiler**A window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. [More info](Profiler.html)
See in [Glossary](Glossary.html#Profiler) on a target platform.

You can record the performance of your application on your chosen release platform to discover realistic performance metrics about your application. The Profiler can connect to your application when it’s running on a target device in the following ways:

- Via the local network

- Directly via cable

- Via IP address

**Note**: The Web platform supports profiling only for projects built with **Autoconnect Profiler** enabled and doesn’t support connections via IP address. For background information, refer to [Web performance considerations](webgl-performance.html#profiler).

## Connect your application to the Profiler

To connect your application to the Profiler:

1. Open the **Build Profiles** window (menu: **File > Build Profiles**)

2. Select your application’s target platform

3. Enable the ****Development Build**A development build includes debug symbols and enables the Profiler. [More info](building-introduction.html)
See in [Glossary](Glossary.html#DevelopmentBuild)** setting

4. Optionally enable the **Autoconnect Profiler** setting to automatically connect to the Profiler

5. Optionally enable **Deep Profiling Support** to use [Deep Profiling](profiler-deep-profiling.html)

6. Select **Build and Run**, and make sure your application is running on your target device.

7. Open the Profiler window (menu: **Window** > **Analysis** > **Profiler**). If you enabled the **Autoconnect Profiler** setting, the Profiler automatically collects data.

8. If the **Autoconnect Profiler** setting is disabled, Select the Target Selection dropdown menu, next to the Record icon (⏺), and select the target player from the list.

9. Select the Record icon

[Image: Profiler windows Target Selection dropdown]
Profiler window’s Target Selection dropdown

If you’ve enabled the **Autoconnect Profiler** setting, the Profiler collects data as soon as you open the Profiler window, as long as your application is running. Otherwise, the Profiler window collects data when you select the target from the Target Selection dropdown and select Record.

### Connect to an application via IP address

To connect via IP address:

1. Open the Profiler window (menu: **Window** > **Analysis** > **Profiler**)

2. Select the Target Selection dropdown menu, next to the Record icon (⏺)

3. Select **<Enter IP>** in the dropdown.

4. Enter the IP address in the dialog that appears, and optionally the port of the player you want to connect to.

5. Select the Record icon

## Continuously collect data

To continuously collect data while your application runs:

1. Open Player Settings (menu: **Edit > Project Settings > Player**)

2. Under Resolution and Presentation, enable **Run In Background**

## Additional resources

- [Collecting performance data on an Android device](android-profile-on-an-android-device.html)

- [Collecting performance data on an iOS device](ios-profile-device.html)

- [Collecting performance data in Play mode](profiling-play-mode.html)

- [Collecting performance data about the Unity Editor](profiling-edit-mode.html)

Collect performance data introduction

Collect performance data in Play mode
