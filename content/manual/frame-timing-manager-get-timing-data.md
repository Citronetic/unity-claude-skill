This version of Unity is unsupported.

Frame timing manager introduction

Enable frame timing statistics for release builds

# Get frame timing data

You can get frame timing data from the `FrameTiming` API in the following ways:

- [Use a custom Profiler module](#use-a-custom-profiler-module)

- [Use the `FrameTiming` API](#use-the-frametiming-api)

To get frame timing data from release builds, you must first enable the [Frame Timing Stats property](frame-timing-manager-enable.html).

## Use a custom Profiler module

To view frame timing data in a [custom Profiler module](profiler-creating-custom-modules.html) perform the following steps:

1. Create a custom **profiler**A window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. [More info](Profiler.html)
See in [Glossary](Glossary.html#Profiler) module according to the instructions on [Creating a custom profiler module](profiler-creating-custom-modules.html).

2. Open the **Profiler** window (**Window** > **Analysis** > **Profiler**)

3. Open the **Profiler Module Editor** (**Profler Modules** dropdown > gear icon) and select your custom Profiler module.

4. In the **Available Counters** panel, select **Unity**.

5. Select **Render** to open the submenu that contains **Profiler counters**Placed in code with the ProfilerCounter API to track metrics, such as the number of enemies spawned in your game. [More info](https://docs.unity3d.com/Packages/com.unity.profiling.core@latest/index.html?subfolder=/manual/profilercounter-guide.html)
See in [Glossary](Glossary.html#Profilercounter) related to memory usage, which includes those that the `FrameTimingStats` property enables. You can then click on the relevant counters in the submenu to add them to your custom module.

For a list of available counters, refer to [Profiler counters reference](profiler-counters-reference.html).

The [Highlights Profiler module](ProfilerHighlights.html) uses `FrameTiming` to determine whether a frame is CPU or GPU bound.

## Use the FrameTiming API

Use the `FrameTiming` API to access timestamp information. In each variable, `FrameTimingManager` records the time a specific event happens during a frame.

The following table contains the values available through the API, in the order that Unity executes them during a frame:

| Property | Description |
| --- | --- |
| frameStartTimestamp | The CPU timestamp time when the frame begins. |
| firstSubmitTimestamp | The CPU timestamp time when Unity submits the first job to the GPU during this frame. |
| cpuTimePresentCalled | The CPU timestamp time when Unity calls the Present() function for the current frame. |
| cpuTimeFrameComplete | The CPU timestamp time when the GPU finishes rendering the frame and interrupts the CPU. |

Use [`FrameTimingManager.GetCpuTimerFrequency`](../ScriptReference/FrameTimingManager.GetCpuTimerFrequency.html) API to convert the timestamp to seconds.

## Additional resources

- [Enable frame timing statistics for release builds](frame-timing-manager-enable.html)

- [Frame timing API counter reference](frame-timing-manager-counter-reference.html)

Frame timing manager introduction

Enable frame timing statistics for release builds
