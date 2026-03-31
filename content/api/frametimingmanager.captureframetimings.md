This version of Unity is unsupported.



# [FrameTimingManager](FrameTimingManager.html).CaptureFrameTimings




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















## Declaration

public static void CaptureFrameTimings();






### Description



This function triggers the FrameTimingManager to capture a snapshot of FrameTiming's data, that can then be accessed by the user.





The FrameTimingManager tries to capture as many frames as the platform allows but will only capture complete timings from finished and valid frames so the number of frames it captures may vary. This will also capture platform specific extended frame timing data if the platform supports more in depth data specifically available to it.


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
		var ret = FrameTimingManager.GetLatestTimings((uint)m_FrameTimings.Length, m_FrameTimings);
		if (ret > 0)
		{
			// Your code logic here
		}
	}
}
```


            
