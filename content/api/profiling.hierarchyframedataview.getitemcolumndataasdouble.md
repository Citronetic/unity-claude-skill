This version of Unity is unsupported.



# [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html).GetItemColumnDataAsDouble




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

public double GetItemColumnDataAsDouble(int id,
int column);






### Parameters



| Parameter | Description |
| --- | --- |
| id | Hierarchy item identifier. |
| column | Column identifier. |





### Returns



**double**
        Value of the correspnding column as double.





### Description



Returns double representation of hierarchy item value associated with the column.





Use to retrieve value with high precision for columns such as [HierarchyFrameDataView.columnStartTime](Profiling.HierarchyFrameDataView-columnStartTime.html) which represents sample start time in milliseconds.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.Profiling;
using UnityEditorInternal;class Example
{
    static List<int> childrenIdCache = new List<int>();    static int FindChildItemByFunctionName(HierarchyFrameDataView frameData, int parentId, string functionName)
    {
        frameData.GetItemChildren(parentId, childrenIdCache);
        foreach (var childId in childrenIdCache)
        {
            var name = frameData.GetItemName(childId);
            if (name == functionName)
                return childId;
        }        return HierarchyFrameDataView.invalidSampleId;
    }    static double GetSampleStartTime(string sampleName)
    {
        using (var frameData = ProfilerDriver.GetHierarchyFrameDataView(ProfilerDriver.lastFrameIndex, 0, HierarchyFrameDataView.ViewModes.Default, HierarchyFrameDataView.columnDontSort, false))
        {
            var sampleId = FindChildItemByFunctionName(frameData, frameData.GetRootItemID(), sampleName);
            if (HierarchyFrameDataView.invalidSampleId == sampleId)
                return 0;            double startTime = frameData.GetItemColumnDataAsDouble(sampleId, HierarchyFrameDataView.columnStartTime);
            return startTime;
        }
    }
}
```





Additional resources: [HierarchyFrameDataView.GetItemColumnData](Profiling.HierarchyFrameDataView.GetItemColumnData.html), [HierarchyFrameDataView.GetItemColumnDataAsFloat](Profiling.HierarchyFrameDataView.GetItemColumnDataAsFloat.html).


            
