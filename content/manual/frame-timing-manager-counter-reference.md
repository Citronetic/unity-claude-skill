This version of Unity is unsupported.

Read frame timing data with ProfilerRecorder

Rendering Profiler module reference

# Frame timing API counter reference

The following table describes the purpose of the counters that [the `FrameTiming` API](../ScriptReference/FrameTiming.html) provides.

| FrameTiming API field | ProfilerA window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. More infoSee in Glossary counter | Description |
| --- | --- | --- |
| cpuFrameTime | CPU Total Frame Time | The total CPU frame time, in milliseconds. Unity calculates this as the time between the ends of two frames, including any overheads or time spent waiting in between frames. |
| cpuMainThreadFrameTime | CPU Main Thread Frame Time | Active main thread work time. This is the PlayerLoop time without the time the main thread was waiting for the VSync or render thread to finish its work, calculated as follows: cpuMainThreadFrameTime = PlayerLoop - GfxDevice.WaitForRenderThread - Gfx.WaitForPresentOnGfxThread - WaitForTargetFPS |
| cpuMainThreadPresentWaitTime | N/A | The CPU time spent waiting for the frame presentation or VSync during the frame, calculated as follows: cpuMainThreadPresentWaitTime = Gfx.WaitForPresentOnGfxThread + WaitForTargetFPS. |
| cpuRenderThreadFrameTime | CPU Render Thread Frame Time | Active Render Thread work time without Unity calling the Present() function, calculated as follows: cpuRenderThreadFrameTime = RenderLoop - Gfx.PresentFrame. |
| gpuFrameTime | GPU Frame Time | The time difference between the beginning and the end of the GPU rendering a single frame. |

The following diagram visualizes the relationships between **FrameTiming** and [the Profiler](Profiler.html) frame data.
[Image: Diagram showing relation of FrameTiming API to Profiler data]

## Additional resources

- [Get frame timing data](frame-timing-manager-get-timing-data.html)

- [Record frame timing data](frame-timing-manager-record-timing-data.html)

Read frame timing data with ProfilerRecorder

Rendering Profiler module reference
