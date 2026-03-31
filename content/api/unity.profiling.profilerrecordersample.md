This version of Unity is unsupported.



# ProfilerRecorderSample





struct in
          Unity.Profiling



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



ProfilerRecorder sample data structure.





Use to get a value of the specific sample and count of subsamples for accumulated values.


              


```
using Unity.Profiling;
using UnityEngine;public class FrameTimeScript : MonoBehaviour
{
    ProfilerRecorder gcAllocCountPerFrameRecorder;    void OnEnable()
    {
        gcAllocCountPerFrameRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Memory, "GC.Alloc",
            // Set recorder buffer size
            30,  // Collect 30 values
            // Set buffer behavior to be round-robin
            ProfilerRecorderOptions.WrapAroundWhenCapacityReached | // 30 values become last 30 values
            // All samples in a frame will be summed up and put into a buffer as a single value
                ProfilerRecorderOptions.SumAllSamplesInFrame); // 30 last values become 30 last frame values of accumulated per-frame GC.Collect samples on all threads
    }    void OnDisable()
    {
        // Always dispose recorder when not needed to avoid memory leak and additional calculations
        gcAllocCountPerFrameRecorder.Dispose();
    }    double CalculateAverageCountPerFrame(ProfilerRecorder r)
    {
        int count = r.Count;
        double acc = 0;
        for (var i = 0; i < count; ++i)
        {
            // Get the number of GC.Count samples that were accumulated per frame
            acc += r.GetSample(i).Count;
        }
        return count > 0 ? acc / count : 0;
    }    void OnGUI()
    {
        GUI.TextArea(new Rect(10, 30, 350, 20), $"GC.Alloc count: {CalculateAverageCountPerFrame(gcAllocCountPerFrameRecorder)}");
    }
}
```





Additional resources: [ProfilerRecorder](Unity.Profiling.ProfilerRecorder.html), [ProfilerRecorder.GetSample](Unity.Profiling.ProfilerRecorder.GetSample.html).





### Properties



| Property | Description |
| --- | --- |
| Count | Sample count. |
| Value | Raw sample value. |


            
