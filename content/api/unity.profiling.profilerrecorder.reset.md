This version of Unity is unsupported.



# [ProfilerRecorder](Unity.Profiling.ProfilerRecorder.html).Reset




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

public void Reset();






### Description



Stops data collection and clears collected samples.





Sets [Count](Unity.Profiling.ProfilerRecorder.Count.html) to 0 and [WrappedAround](Unity.Profiling.ProfilerRecorder.WrappedAround.html) to false and stops collection.


              


```
using Unity.Profiling;
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    ProfilerRecorder recorder;    void OnEnable()
    {
        recorder = new ProfilerRecorder("MyMarker", 1);
        recorder.Start();
    }    void OnDisable()
    {
        recorder.Dispose();
    }    void Update()
    {
        recorder.Reset();
        recorder.Start();
    }    void LateUpdate()
    {
        Debug.Log("MyMarker costs between Update and LateUpdate, ms: " + recorder.CurrentValue);
    }
}
```





**Note:**



If *Reset* is used every frame, the [LastValue](Unity.Profiling.ProfilerRecorder.LastValue.html) and [LastValueAsDouble](Unity.Profiling.ProfilerRecorder.LastValueAsDouble.html) properties will be 0.


            
