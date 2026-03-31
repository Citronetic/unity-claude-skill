This version of Unity is unsupported.



# [ProfilerRecorder](Unity.Profiling.ProfilerRecorder.html).GetSample




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

public [Unity.Profiling.ProfilerRecorderSample](Unity.Profiling.ProfilerRecorderSample.html) GetSample(int index);






### Description



Gets sample data.





Use to obtain sample data.


              


```
using Unity.Profiling;
using UnityEngine;public class FrameTimeScript : MonoBehaviour
{
    ProfilerRecorder frameTimeRecorder;    void OnEnable()
    {
        frameTimeRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Internal, "Main Thread", 30);
    }    void OnDisable()
    {
        frameTimeRecorder.Dispose();
    }    double CalculateAverageFromSampleValuesPerFrame(ProfilerRecorder r)
    {
        int count = r.Count;
        double acc = 0;
        for (var i = 0; i < count; ++i)
        {
            acc += r.GetSample(i).Value;
        }
        return count > 0 ? acc / count : 0;
    }    void OnGUI()
    {
        GUI.TextArea(new Rect(10, 30, 350, 20), $"Frame time: {CalculateAverageFromSampleValuesPerFrame(frameTimeRecorder) * 1e-6:0.00}ms");
    }
}
```


            
