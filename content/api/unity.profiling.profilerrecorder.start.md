This version of Unity is unsupported.



# [ProfilerRecorder](Unity.Profiling.ProfilerRecorder.html).Start




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

public void Start();






### Description



Start data collection.





Newly constructed recorder is not collecting samples unless [ProfilerRecorderOptions.StartImmediately](Unity.Profiling.ProfilerRecorderOptions.StartImmediately.html) option is specified.
Use Start to attach ProfilerRecorder to the Profiler metric and start data collection.

**Note:** Starting recorder which has 0 [Capacity](Unity.Profiling.ProfilerRecorder.Capacity.html) throws InvalidOperationException.


              


```
using Unity.Profiling;
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    ProfilerRecorder mainThreadTimeRecorder;    void OnEnable()
    {
        mainThreadTimeRecorder = new ProfilerRecorder(ProfilerCategory.Internal, "Main Thread", 15);
        mainThreadTimeRecorder.Start();
    }    void OnDisable()
    {
        mainThreadTimeRecorder.Dispose();
    }
}
```





When you don't need data to be collected use [Stop](Unity.Profiling.ProfilerRecorder.Stop.html) to detach recorder from counter or marker. And [Dispose](Unity.Profiling.ProfilerRecorder.Dispose.html) to free unmanaged resources.


            
