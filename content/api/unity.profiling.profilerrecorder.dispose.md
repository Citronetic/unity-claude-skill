This version of Unity is unsupported.



# [ProfilerRecorder](Unity.Profiling.ProfilerRecorder.html).Dispose




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

public void Dispose();






### Description



Releases unmanaged instance of the ProfilerRecorder.





When you no longer need to use the ProfilerRecorder always use this method to safely release the instance of it.


              


```
using Unity.Profiling;
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    ProfilerRecorder systemMemoryRecorder;
    ProfilerRecorder gcMemoryRecorder;
    ProfilerRecorder mainThreadTimeRecorder;    void OnEnable()
    {
        systemMemoryRecorder = new ProfilerRecorder(ProfilerCategory.Memory, "System Used Memory", 1, ProfilerRecorderOptions.Default | ProfilerRecorderOptions.StartImmediately);
        gcMemoryRecorder = new ProfilerRecorder(ProfilerCategory.Memory, "GC Reserved Memory", 1, ProfilerRecorderOptions.Default | ProfilerRecorderOptions.StartImmediately);
        mainThreadTimeRecorder = new ProfilerRecorder(ProfilerCategory.Internal, "Main Thread", 15);
        mainThreadTimeRecorder.Start();
    }    void OnDisable()
    {
        systemMemoryRecorder.Dispose();
        gcMemoryRecorder.Dispose();
        mainThreadTimeRecorder.Dispose();
    }
}
```


            
