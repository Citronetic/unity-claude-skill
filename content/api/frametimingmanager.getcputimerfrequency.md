This version of Unity is unsupported.



# [FrameTimingManager](FrameTimingManager.html).GetCpuTimerFrequency




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

public static ulong GetCpuTimerFrequency();






### Returns



**ulong**
        CPU timer frequency for current platform.





### Description



This returns the frequency of CPU timer on the current platform. If the platform does not support returning this value it will return 0.





The following example demonstrates how to use `GetCpuTimerFrequency` to convert timestamps data to seconds.


              


```
using UnityEngine;class Example
{
    public static double TimestampToMilliseconds(ulong timestamp)
    {
         return (timestamp * 1000.0) / FrameTimingManager.GetCpuTimerFrequency();
    }    public static double TimestampToSeconds(ulong timestamp)
    {
         return (timestamp * 1000.0 * 1000.0) / FrameTimingManager.GetCpuTimerFrequency();
    }
}
```


            
