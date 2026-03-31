This version of Unity is unsupported.



# [RawFrameDataView](Profiling.RawFrameDataView.html).GetSampleMetadataAsLong




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

public long GetSampleMetadataAsLong(int sampleIndex,
int metadataIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| sampleIndex | Index of the Profiler sample. |
| metadataIndex | Metadata index. |





### Returns



**long**
        Returns long representation of sample metadata value.





### Description



Gets sample metadata value as long.





Use to obtain additional data associated with the sample. *metadataIndex* must be between 0 and [GetSampleMetadataCount](Profiling.RawFrameDataView.GetSampleMetadataCount.html).


              


```
using System;
using Unity.Collections;
using UnityEditor.Profiling;
using UnityEditorInternal;
using UnityEngine;
using UnityEngine.Profiling;public class Example
{
    public static long GetGCAllocs(int frameIndex)
    {
        long totalGcAllocSize = 0;        int gcAllocMarkerId = FrameDataView.invalidMarkerId;        for (int threadIndex = 0;; ++threadIndex)
        {
            using (RawFrameDataView frameData = ProfilerDriver.GetRawFrameDataView(frameIndex, threadIndex))
            {
                if (!frameData.valid)
                    break;                if (gcAllocMarkerId == FrameDataView.invalidMarkerId)
                {
                    gcAllocMarkerId = frameData.GetMarkerId("GC.Alloc");
                    if (gcAllocMarkerId == FrameDataView.invalidMarkerId)
                        break;
                }                int sampleCount = frameData.sampleCount;
                for (int i = 0; i < sampleCount; ++i)
                {
                    if (gcAllocMarkerId != frameData.GetSampleMarkerId(i))
                        continue;                    long gcAllocSize = frameData.GetSampleMetadataAsLong(i, 0);
                    totalGcAllocSize += gcAllocSize;
                }
            }
        }        return totalGcAllocSize;
    }
}
```


            
