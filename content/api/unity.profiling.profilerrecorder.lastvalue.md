This version of Unity is unsupported.



# [ProfilerRecorder](Unity.Profiling.ProfilerRecorder.html).LastValue




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












                    public long LastValue;






### Description



Gets the last value collected by the ProfilerRecorder.





Use to get the profiler counter value or marker timing capured at the end of the last frame.

The immediate value that [CurrentValue](Unity.Profiling.ProfilerRecorder.CurrentValue.html) provides might be not the final value of a counter when frame ends. For example, rendering might happen after
the logic finished computing the frame. Therefore, it is impossible to get the final value of draw calls until the frame is fully rendered. In such cases,
you can use the LastValue property for quick access to the final metric value in the last frame. The equivalent call is `GetSample(Count - 1).Value`.

**Note:** The property requires that the sample storage is non-zero. If the capacity is 0, then this property returns 0.


              


```
using Unity.Profiling;
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    ProfilerRecorder mainThreadTimeRecorder;    static double GetRecorderFrameAverage(ProfilerRecorder recorder)
    {
        var samplesCount = recorder.Capacity;
        if (samplesCount == 0)
            return 0;        double r = 0;
        unsafe
        {
            var samples = stackalloc ProfilerRecorderSample[samplesCount];
            recorder.CopyTo(samples, samplesCount);
            for (var i = 0; i < samplesCount; ++i)
                r += samples[i].Value;
            r /= samplesCount;
        }        return r;
    }    void OnEnable()
    {
        mainThreadTimeRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Internal, "Main Thread", 15);
    }    void OnDisable()
    {
        mainThreadTimeRecorder.Dispose();
    }    void Update()
    {
        Debug.Log($"Frame Time: {GetRecorderFrameAverage(mainThreadTimeRecorder) * (1e-6f):F1} ms");
    }
}
```





Use *LastValue* to retrieve timings of a code tagged with [ProfilerMarker.Auto](Unity.Profiling.ProfilerMarker.Auto.html).


              


```
using UnityEngine;
using Unity.Profiling;public class Example
{
    static readonly ProfilerMarker k_MyMarker = new ProfilerMarker(ProfilerCategory.Scripts, "MyMarker");    public static void TimeSynchronousMethodWithMarkers()
    {
        using (var recorder = ProfilerRecorder.StartNew(ProfilerCategory.Scripts, "MyMarker"))
        {
            using (k_MyMarker.Auto())
            {
                // ...
            }            recorder.Stop();
            Debug.Log("MyMarker total time, ns: " + recorder.LastValue);
        }
    }
}
```





*LastValue* only becomes readable and non-zero after a frame change or after [Stop](Unity.Profiling.ProfilerRecorder.Stop.html) method call.


            
