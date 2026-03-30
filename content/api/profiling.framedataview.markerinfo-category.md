This version of Unity is unsupported.



# [FrameDataView.MarkerInfo](Profiling.FrameDataView.MarkerInfo.html).category




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












                    public ushort category;






### Description



Marker category.





Use to get the marker category.


              


```
using System;
using System.Collections.Generic;
using UnityEditor.Profiling;
using Unity.Profiling.LowLevel;
using Unity.Profiling.LowLevel.Unsafe;public class Example
{
    public static void GetAllRenderMarkers(FrameDataView frameData, List<int> renderMarkerIds)
    {
        renderMarkerIds.Clear();
        var markers = new List<FrameDataView.MarkerInfo>();
        frameData.GetMarkers(markers);
        foreach (var marker in markers)
        {
            if (marker.category == ProfilerUnsafeUtility.CategoryRender)
                renderMarkerIds.Add(marker.id);
        }
    }
}
```





Additional resources: [ProfilerUnsafeUtility](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.html).


            
