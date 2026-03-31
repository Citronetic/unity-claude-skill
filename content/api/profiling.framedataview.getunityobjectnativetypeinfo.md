This version of Unity is unsupported.



# [FrameDataView](Profiling.FrameDataView.html).GetUnityObjectNativeTypeInfo




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

public bool GetUnityObjectNativeTypeInfo(int nativeTypeIndex,
out [Profiling.FrameDataView.UnityObjectNativeTypeInfo](Profiling.FrameDataView.UnityObjectNativeTypeInfo.html) info);






### Parameters



| Parameter | Description |
| --- | --- |
| nativeTypeIndex | Native type index. |
| info | Native type information output struct with name and other attributes. |





### Returns



**bool**
        Returns true if type information is available.





### Description



Gets native Unity type intormation.


              


```
using UnityEditorInternal;
using UnityEditor.Profiling;public class Example
{
    public static string GetInstanceName(int frame, int instanceId)
    {
        using (var frameData = ProfilerDriver.GetRawFrameDataView(frame, 0))
        {
            if (!frameData.GetUnityObjectInfo(instanceId, out var info))
                return "N/A";
            return (frameData.GetUnityObjectNativeTypeInfo(info.nativeTypeIndex, out var typeInfo)) ? typeInfo.name + ": " + info.name : info.name;
        }
    }
}
```


            
