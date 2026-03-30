This version of Unity is unsupported.

Collect performance data in Play mode

Build Profiles Profiler settings

# Collect performance data about the Unity Editor

Profile the Unity Editor process to understand the performance of the Editor itself or how the Editor process affects your application in Play mode.

To profile the Editor:

1. Open the Profiler (**Window > Analysis > Profiler**)

2. Select the Target Selection dropdown, next to Record

3. Select Edit

[Image: Profiler windows Target Selection dropdown]
Profiler window’s Target Selection dropdown

When Editor profiling is enabled every **Profiler**A window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. [More info](Profiler.html)
See in [Glossary](Glossary.html#Profiler) frame corresponds to one Editor tick which is represented by the **Application.Tick** sample. However, during Play mode profiling, the Profiler aligns its frames with a player frame, so that you can inspect the composition of **EditorLoop** markers and compare Play mode frames with or without Editor profiling enabled.

[Image: Timeline view of Edit mode frame]
Timeline view of Edit mode frame

**Tip:** To reduce the impact that the Profiler window has on Editor performance, open the Profiler window in its own process with the [Standalone Profiler](profiler-standalone-process.html). The Standalone Profiler is useful because the Profiler window itself uses resources that might skew the performance data.

## Profile the Editor’s startup times

To profile the Editor’s startup times, start the Editor with the command line option `-profiler-enable`. Refer to [Profiler command line arguments](profiler-command-line-arguments.html) for more information.

## Additional resources

- [Collect performance data introduction](profiling-collect-data-introduction.html)

- [Collect performance data on a target platform](profiling-target-device.html)

- [Collect performance data in Play mode](profiling-play-mode.html)

Collect performance data in Play mode

Build Profiles Profiler settings
