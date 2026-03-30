This version of Unity is unsupported.

Enable frame timing statistics for release builds

Frame timing API counter reference

# Read frame timing data with ProfilerRecorder

You can use the [`ProfilerRecorder`](../ScriptReference/Unity.Profiling.ProfilerRecorder.html) API to get custom and built-in **Profiler**A window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. [More info](Profiler.html)
See in [Glossary](Glossary.html#Profiler) counter values, and to read `FrameTimingManager` values.

The benefit of this is that when you use the `ProfilerRecorder` API, `FrameTimingManager` only records values when you attach a recorder to a specific counter. This behavior enables you to control which counters collect data and reduces the impact that the `FrameTimingManager` has on performance.

The following example tracks only the CPU Main Thread Frame Time variable with the `ProfilerRecorder` API:

```cs
using Unity.Profiling;
using UnityEngine;

public class ExampleScript : MonoBehaviour
{
    ProfilerRecorder mainThreadTimeRecorder;

    void OnEnable()
    {
        mainThreadTimeRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Internal, "CPU Main Thread Frame Time");
    }

    void OnDisable()
    {
        mainThreadTimeRecorder.Dispose();
    }

    void Update()
    {
        var frameTime = mainThreadTimeRecorder.LastValue;

        // Your code logic here
    }
}
```

## Additional resources

- [Get frame timing data](frame-timing-manager-get-timing-data.html)

- [Adding profiling information to your code](profiler-adding-information-code.html)

Enable frame timing statistics for release builds

Frame timing API counter reference
