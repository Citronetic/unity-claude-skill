This version of Unity is unsupported.



# [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html).GetItemMergedSamplesMetadata




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

public string GetItemMergedSamplesMetadata(int id,
int sampleIndex,
int metadataIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| id | Hierarchy item identifier. |
| sampleIndex | Merged sample index. |
| metadataIndex | Metadata index. |





### Returns



**string**
        Returns value of the metadata as string.





### Description



Returns string representation of hierarchy item metadata value.





Use to get a string metadata value of the specific hierarchy view item.


              


```
using System.Text;
using UnityEditor.Profiling;public class Example
{
    public static string GetFormattedMetadata(HierarchyFrameDataView frameDataView, int itemId, int mergedSampleIndex)
    {
        int sampleMetadataCount = frameDataView.GetItemMergedSamplesMetadataCount(itemId, mergedSampleIndex);
        if (sampleMetadataCount == 0)
            return null;        var metadataInfo = frameDataView.GetMarkerMetadataInfo(frameDataView.GetItemMarkerID(itemId));
        var sb = new StringBuilder();
        for (var i = 0; i < sampleMetadataCount; ++i)
        {
            if (metadataInfo != null && i < metadataInfo.Length)
                sb.Append(metadataInfo[i].name);
            else
                sb.Append(i);
            sb.Append(": ");
            sb.Append(frameDataView.GetItemMergedSamplesMetadata(itemId, mergedSampleIndex, i));
            sb.Append('\n');
        }        return sb.ToString();
    }
}
```





**Throws:**


*System.ArgumentException* if *id* is invalid.
*System.IndexOutOfRangeException* if *sampleIndex* is not in the range from 0 to [HierarchyFrameDataView.GetItemMergedSamplesCount](Profiling.HierarchyFrameDataView.GetItemMergedSamplesCount.html).
*System.IndexOutOfRangeException* if *medataIndex* is not in the range from 0 to [HierarchyFrameDataView.GetItemMergedSamplesMetadataCount](Profiling.HierarchyFrameDataView.GetItemMergedSamplesMetadataCount.html).

Additional resources: [HierarchyFrameDataView.GetItemMergedSamplesCount](Profiling.HierarchyFrameDataView.GetItemMergedSamplesCount.html), [HierarchyFrameDataView.GetItemMergedSamplesMetadataCount](Profiling.HierarchyFrameDataView.GetItemMergedSamplesMetadataCount.html), [HierarchyFrameDataView.GetItemMetadata](Profiling.HierarchyFrameDataView.GetItemMetadata.html).


            
