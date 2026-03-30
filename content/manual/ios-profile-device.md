This version of Unity is unsupported.

Device Simulator for iOS

Managed stack traces on iOS

# Collecting performance data on an iOS device

Use the [Profiler](profiler-introduction.html)A window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. [More info](Profiler.html)
See in [Glossary](Glossary.html#Profiler) to collect performance data about your application. You can [collect performance data while in Play mode](profiling-play-mode.html) in the Unity Editor. However, to get the most accurate data about your application, you can connect the Profiler directly to an iOS device that’s on your network.

## Prerequisites

If you’re using a firewall, open ports `54998` to `55511` in your firewall’s outbound rules. These are the ports Unity uses for remote profiling.

## Enabling remote profiling

To enable remote profiling, follow these steps:

1. Connect the device to your WiFi network. The Profiler uses a local WiFi network to send profiling data from your device to the Unity Editor.

2. Attach your device to your computer via cable.

3. Open the **Build Profiles** window (menu: **File > Build Profiles**).

4. Enable the ****Development Build**A development build includes debug symbols and enables the Profiler. [More info](building-introduction.html)
See in [Glossary](Glossary.html#DevelopmentBuild)** setting.

5. Enable the **Autoconnect Profiler** setting.

6. Select **Build & Run**.

7. When the application launches on the device, open the Profiler window in the Unity Editor (menu: **Window > Analysis > Profiler**).

After you open the Profiler window, it populates with data from your application. If the Editor doesn’t connect to the device automatically, select the Target Selection dropdown menu in the Profiler window and choose the appropriate device to start the Profiler connection manually.

You can also plug the target device directly into your computer to avoid network or connection issues.

## Additional resources

- [Profiler introduction](profiler-introduction.html)

- [Using the Profiler window](ProfilerWindow.html)

- [Optimize performance for iOS](iphone-performance.html)

- [Collect performance data in Play mode](profiling-play-mode.html)

Device Simulator for iOS

Managed stack traces on iOS
