This version of Unity is unsupported.

Get frame timing data

Read frame timing data with ProfilerRecorder

# Enable frame timing statistics for release builds

[`FrameTimingManager`](../ScriptReference/FrameTimingManager.html) is disabled by default for [release builds](building-introduction.html) due to the GPU measurement overhead on some platforms and graphics APIs such as OpenGL ES.

`FrameTimingManager` is always active in **development builds**A development build includes debug symbols and enables the Profiler. [More info](building-introduction.html)
See in [Glossary](Glossary.html#DevelopmentBuild) and the Unity Editor.

To enable frame timing statistics for release builds:

1. Go to **Edit** > **Project Settings** > **Player**.

2. Go to **Other Settings** > **Rendering**.

3. Enable the **Frame Timing Stats** property.

**Tip:** If you [use `ProfilerRecorder`](frame-timing-manager-record-timing-data.html) to collect data, then you don’t need to enable the **Frame Timing Stats** property.

If you use the OpenGL platform, you also need to enable the **OpenGL: **Profiler**A window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. [More info](Profiler.html)
See in [Glossary](Glossary.html#Profiler) GPU Recorders** property to measure GPU usage. To do this:

1. Go to **Edit** > **Project** > **Settings** > **Player**.

2. Go to **Other Settings** > **Rendering**.

3. Enable the **OpenGL: Profiler GPU** property.

## Additional resources

- [Get frame timing data](frame-timing-manager-get-timing-data.html)

- [Read frame timing data with ProfilerRecorder](frame-timing-manager-record-timing-data.html)

Get frame timing data

Read frame timing data with ProfilerRecorder
