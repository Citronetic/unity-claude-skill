This version of Unity is unsupported.



# [FrameTiming](FrameTiming.html).firstSubmitTimestamp




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












                    public ulong firstSubmitTimestamp;






### Description



This is the CPU clock time of the time when the first job was submitted to GPU.





Use [FrameTimingManager.GetCpuTimerFrequency](FrameTimingManager.GetCpuTimerFrequency.html) to convert timestamps to seconds.


              


```
using UnityEngine;class Example
{
    static readonly double k_CpuTimerFrequency = FrameTimingManager.GetCpuTimerFrequency();    public static double TimestampToMilliseconds(ulong timestamp)
    {
         return (timestamp * 1000.0) / k_CpuTimerFrequency;
    }
}
```


            
