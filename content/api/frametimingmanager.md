This version of Unity is unsupported.



# FrameTimingManager





class in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel



















### Description



The FrameTimingManager provides frame-level CPU and GPU time measurements.





The FrameTimingManager collects only the most important frame stats with a much lower performance overhead compared to Unity Profiler and is designed for use in Players.

Use FrameTimingManager to:



          - Debug or monitor a frame-by-frame performance level in game.

          - Determine whether CPU or GPU affects the framerate.

          - Adapt your computations or graphics quality based on the CPU or GPU bottleneck. (E.g. [Dynamic Resolution](../Manual/DynamicResolution-landing.html) feature uses on the FrameTimingManager).





**Note:** The FrameTimingManager is always active on Development Player builds. However, to use this feature in Release Player builds, go to **Edit** > **Project Settings** > **Player** and enable the **Frame Timing Stats** property. If you enable the feature in settings, it’ll remain active whether or not you need it at a specific point in time.

You can access all of FrameTimingManager data with [GetLatestTimings](FrameTimingManager.GetLatestTimings.html) API. Alternatively you can use [ProfilerRecorder](Unity.Profiling.ProfilerRecorder.html) to retrive the information about individual metrics.

In both cases the results are returned with a fixed **delay of four frames** (no data for the current frame).

This is because GPU timing results aren’t immediately available at the end of each frame on most platforms, so the FrameTimingManager waits to get synchronized CPU and GPU data for the frame. However the delay doesn’t guarantee GPU data available for all frames, because the GPU may not have any available resources to return the results, or might fail to return them correctly. In that case the GPU timings are reported as zero.


              


```
using Unity.Profiling;
using UnityEngine;public class ExampleScript : MonoBehaviour
{
	FrameTiming[] m_FrameTimings = new FrameTiming[10];	void Update()
	{
		// Instruct FrameTimingManager to collect and cache information
		FrameTimingManager.CaptureFrameTimings();		// Read cached information about N last frames (10 in this example)
		// The returned value tells how many frames are actually returned
		// Element 0 of the returned array contains the data for the last fully finished frame.
		var ret = FrameTimingManager.GetLatestTimings((uint)m_FrameTimings.Length, m_FrameTimings);
		if (ret > 0)
		{
			// Your code logic here
		}
	}
}
```





When [ProfilerRecorder](Unity.Profiling.ProfilerRecorder.html) is used the FrameTimingManager is enabled automatically including in Release builds. Unity only takes measurements when you attach a `ProfilerRecorder` to the counter, giving you dynamic control over the feature and its overhead. This is the recommended method if you want to explicitly control collection of GPU timings.


              


```
using Unity.Profiling;
using UnityEngine;public class ExampleScript : MonoBehaviour
{
	ProfilerRecorder mainThreadTimeRecorder;	void OnEnable()
	{
		// Create ProfilerRecorder and attach it to a counter
		mainThreadTimeRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Internal, "CPU Main Thread Frame Time");
	}	void OnDisable()
	{
		// Recorders must be explicitly disposed after use
		mainThreadTimeRecorder.Dispose();
	}	void Update()
	{
		var frameTime = mainThreadTimeRecorder.LastValue;
		// Your code logic here
	}
}
```





The Frame Timing Manager supports all platforms that are supported by Unity with the following exceptions:



          - On **Linux** platforms when the **OpenGL** API is used, no GPU time is provided.

          - On the **WebGL** platform, no GPU time is provided.

          - On **iOS and macOS** when the Metal API is used GPU time might report a larger GPU time measurement than the total frame time due to the behavior of tile-based deferred rendering GPUs.





Additional resources: [Introduction to the Frame Timing Manager](../Manual/frame-timing-manager.html).





### Static Methods



| Method | Description |
| --- | --- |
| CaptureFrameTimings | This function triggers the FrameTimingManager to capture a snapshot of FrameTiming's data, that can then be accessed by the user. |
| GetCpuTimerFrequency | This returns the frequency of CPU timer on the current platform. If the platform does not support returning this value it will return 0. |
| GetGpuTimerFrequency | This returns the frequency of GPU timer on the current platform. Currently always 1000000000. |
| GetLatestTimings | Allows the user to access the currently captured FrameTimings. |
| GetVSyncsPerSecond | This returns the number of vsyncs per second on the current platform, used to interpret timing results. If the platform does not support returning this value it will return 0. |
| IsFeatureEnabled | Check if frame timing statistics are enabled. |


            
