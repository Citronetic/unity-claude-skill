This version of Unity is unsupported.



# [RawFrameDataView](Profiling.RawFrameDataView.html).GetSampleChildrenCountRecursive




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

public int GetSampleChildrenCountRecursive(int sampleIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| sampleIndex | Index of the Profiler sample. |





### Returns



**int**
        Returns amount of direct and indirect child samples.





### Description



Gets amount of direct and indirect child samples for the specific sample.





Use to quickly advance to the next sibling sample.


              


```
using UnityEditor.Profiling;public class Example
{
    public static int SkipAllChildren(RawFrameDataView frameData, int sampleIndex)
    {
        return frameData.GetSampleChildrenCountRecursive(sampleIndex) + sampleIndex + 1;
    }
}
```


            
