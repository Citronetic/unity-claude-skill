This version of Unity is unsupported.



# [FrameDataView](Profiling.FrameDataView.html).GetUnityObjectInfo




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

public bool GetUnityObjectInfo(int instanceId,
out [Profiling.FrameDataView.UnityObjectInfo](Profiling.FrameDataView.UnityObjectInfo.html) info);






### Parameters



| Parameter | Description |
| --- | --- |
| instanceId | UnityEngine.Object instance identifier. |
| info | UnityEngine.Object information output struct with name and other attributes. |





### Returns



**bool**
        Returns true if instanceId exists in the frame and object information is available.





### Description



Gets the UnityEngine.Object information for a given Instance ID.





Obtains information about the UnityEngine.Object instance in the profiler capture.

The Profiler sample can be associated with an instance of an object instance that represents an Asset, a GameObject, or anything that is derived from UnityEngine.Object.

This information is available as a part of sample metadata. To get this metadata you can use [RawFrameDataView.GetSampleMetadataAsInt](Profiling.RawFrameDataView.GetSampleMetadataAsInt.html) or [HierarchyFrameDataView.GetItemInstanceID](Profiling.HierarchyFrameDataView.GetItemInstanceID.html).


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





Additional resources: [RawFrameDataView.GetSampleMetadataAsInt](Profiling.RawFrameDataView.GetSampleMetadataAsInt.html), [HierarchyFrameDataView.GetItemInstanceID](Profiling.HierarchyFrameDataView.GetItemInstanceID.html), [Object.GetInstanceID](Object.GetInstanceID.html).


            
