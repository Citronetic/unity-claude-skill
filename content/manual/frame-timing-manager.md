This version of Unity is unsupported.

Collect frame timing data

Get frame timing data

# Frame timing manager introduction

You can use the [`FrameTimingManager` class](../ScriptReference/FrameTimingManager.html) to capture high level timing data about individual frame performance in an application. You can then use this data to assess whether your application meets performance targets.

You can use the `FrameTimingManager` class in the following situations:

- You need to monitor performance at a frame-by-frame level.

- Your application uses the [Dynamic Resolution](DynamicResolution-landing.html)A Camera setting that allows you to dynamically scale individual render targets to reduce workload on the GPU. [More info](DynamicResolution-landing.html)
See in [Glossary](Glossary.html#dynamicresolution) feature.

- Your application uses the [Adaptive Performance](https://docs.unity.cn/Packages/com.unity.mobile.adaptiveperformance@0.1/manual/index.html) package.

Frame timings don’t replace data from the [Profiler](Profiler.html)A window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. [More info](Profiler.html)
See in [Glossary](Glossary.html#Profiler). After you record high level metrics of your application with `FrameTimingManager`, you can use the Profiler to then investigate specific details.

**Note:** `FrameTimingManager` might decrease GPU performance when it records data on OpenGL ES, so it can’t produce an accurate measurement of how your application performs.

To use the data you collect from `FrameTimingManager` refer to [Get frame timing data](frame-timing-manager-get-timing-data.html).

## FrameTimingManager data availability

`FrameTimingManager` provides results with a set delay of four frames. This is for the following reasons:

- CPU timing results aren’t immediately available at the end of each frame.

- Unity reads GPU timing results with three frames delay.

**Note:** The four frame delay doesn’t guarantee accurate timing results, because the GPU might not have any available resources to return the results, or might fail to return them correctly.

For a detailed description of available timings, refer to [Get frame timing data](frame-timing-manager-get-timing-data.html).

`FrameTimingManger` changes how it produces a `FrameTimeComplete` timestamp under the following circumstances:

- If the GPU supports GPU timestamps, the GPU provides a `FrameTimeComplete` timestamp.

- If the GPU doesn’t support GPU timestamps but returns a [GPU time](ProfilerHighlights.html#gpu-time), `FrameTimingManager` calculates a value for `gpuFrameTime`. The value is the sum of the reported GPU time and the `FirstSubmitTimestamp` values.

- If the GPU doesn’t support GPU timestamps and doesn’t return GPU time, `FrameTimingManager` sets the value of `PresentTimestamp` as the value of `FrameTimeComplete`.

## Platform support

`FrameTimingManager` is supported on the following platforms and graphics APIs:

| Platform | Graphics | Supported |
| --- | --- | --- |
| Android | OpenGL ES | Yes |
| Android | Vulkan | Yes |
| iOS | Metal | Yes |
| Linux | OpenGL | Partial: GPU Frame Time measurement is unsupported. |
| Linux | Vulkan | Yes |
| macOS | Metal | Yes |
| tvOS | Metal | Yes |
| WebGLA JavaScript API that renders 2D and 3D graphics in a web browser. The Unity Web build option allows Unity to publish content as JavaScript programs which use HTML5 technologies and the WebGL rendering API to run Unity content in a web browser. More infoSee in Glossary | WebGL | Partial: GPU Frame Time measurement is unsupported. |
| Windows | DirectX 11 | Yes |
| Windows | DirectX 12 | Yes |
| Windows | OpenGL | Yes |
| Windows | Vulkan | Yes |
| XRAn umbrella term encompassing Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR) applications. Devices supporting these forms of interactive applications can be referred to as XR devices. More infoSee in Glossary | OpenGL ES | Partial: CPU Render Thread Frame Time and GPU Frame Time measurement is unsupported. |
| XR | Vulkan | Partial: CPU Render Thread Frame Time and GPU Frame Time measurement is unsupported. |

### Compatibility with tile-based deferred rendering GPUs

For GPUs that use tile-based deferred rendering architecture, such as Metal GPUs in Apple devices, the reported GPU time might be larger than the reported frame time.

This can happen when the GPU is under heavy load, or when the GPU pipeline is full. In these cases, the GPU might defer execution of some rendering phases. Because `FrameTimingManager` measures the time between the beginning and end of the frame rendering, any gaps between phases increase the reported GPU time.

In the following example, no GPU resources are available, because the GPU passes a job from the vertex queue to the fragment queue. The GPU’s graphics API therefore defers the execution of the next phase. When this happens, the GPU time measurement includes phase work time and any gap in between. The result is that `FrameTimingManager` reports a higher GPU time measurement than expected.

[Image: Diagram showing how the discrepancy in reported GPU time can happen in the Metal API]
Diagram showing how the discrepancy in reported GPU time can happen in the Metal API

## Additional resources

- [`FrameTimingManager` API](../ScriptReference/FrameTimingManager.html)

- [Profiler overview](Profiler.html)

- [Dynamic resolution](DynamicResolution-landing.html)

- [`FrameTiming` API](../ScriptReference/FrameTiming.html)

Collect frame timing data

Get frame timing data
