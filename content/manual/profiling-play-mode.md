This version of Unity is unsupported.

Collect performance data on a target platform

Collect performance data about the Unity Editor

# Collect performance data in Play mode

Profile in Play mode to quickly test changes and monitor the performance of your application without having to rebuild your application every time.

To profile in Play mode:

1. Open the Profiler (**Window > Analysis > Profiler**)

2. Select the Target Selection dropdown, next to Record

3. Select **Play Mode**

[Image: Profiler windows Target Selection dropdown]
Profiler window’s Target Selection dropdown

Unity **Profiler**A window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. [More info](Profiler.html)
See in [Glossary](Glossary.html#Profiler) minimizes the overhead of profiling the Editor itself and represents any Editor-only activity when profiling Play mode as **EditorLoop** markers.

[Image: Timeline view of Play mode frame]
Timeline view of Play mode frame

**Tip:** Whenever you profile Play mode, open it in a maximized view to run your application at a resolution closer to that of your target device. This directly affects performance issues such as those related to fill rate.

To make sure that windows other than Play mode or the Profiler don’t use up time on the render thread and GPU, which affects performance data, reduce the amount of open Unity Editor windows.

## Additional resources

- [Collect performance data introduction](profiling-collect-data-introduction.html)

- [Collect performance data on a target platform](profiling-target-device.html)

- [Collect performance data about the Unity Editor](profiling-edit-mode.html)

Collect performance data on a target platform

Collect performance data about the Unity Editor
