This version of Unity is unsupported.

File Access Profiler module reference

Play mode and Editor profile samples

# Running the Profiler in its own process

To get better **Profiler**A window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. [More info](Profiler.html)
See in [Glossary](Glossary.html#Profiler) data when you target the Unity Editor or Play mode, use the Standalone Profiler, which launches the Profiler in its own dedicated process. The Standalone Profiler reduces overhead, because the Profiler isn’t profiling itself or sharing a process with your application or the Editor. The functionality and controls of the Profiler remain the same as when you run the Profiler in the same process as the Editor.

## Use the Standalone Profiler

To use the Standalone Profiler:

1. Go to **Window > Analysis > Profiler (Standalone process)**

2. Unity opens the Profiler outside of the Editor’s process in its own window

The Standalone Profiler takes longer to start up than opening it in the same process as the Editor. You can’t dock any Editor windows that are connected to the separate process to the main process’s windows.

When you restart the Editor, Unity doesn’t re-open the windows in the out-of-process Profiler.

## Additional resources

- [Profiler window reference](ProfilerWindow.html)

- [Collect performance data in Play mode](profiling-play-mode.html)

- [Collect performance data about the Unity Editor](profiling-edit-mode.html)

File Access Profiler module reference

Play mode and Editor profile samples
