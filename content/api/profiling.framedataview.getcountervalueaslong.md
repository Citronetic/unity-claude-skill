This version of Unity is unsupported.



# [FrameDataView](Profiling.FrameDataView.html).GetCounterValueAsLong




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

public long GetCounterValueAsLong(int markerId);






### Parameters



| Parameter | Description |
| --- | --- |
| markerId | Marker identifier. |





### Returns



**long**
        Returns the counter value as *long*.





### Description



Gets the last value of a counter marker in the frame as a long data type.





Use to retrieve the last data sample of a marker with [MarkerFlags.Counter](Unity.Profiling.LowLevel.MarkerFlags.Counter.html) flag.


              


```
using UnityEditor.Profiling;class Example
{
    static unsafe long ExtractMyCounterValue(FrameDataView frameData, string counterName)
    {
        var counterMarkerId = frameData.GetMarkerId(counterName);
        return frameData.GetCounterValueAsLong(counterMarkerId);
    }
}
```





**Note:**


If no data was produced for the counter in the frame, the return value is 0.

Additional resources: [HasCounterValue](Profiling.FrameDataView.HasCounterValue.html), [GetCounterValuePtr](Profiling.FrameDataView.GetCounterValuePtr.html).


            
