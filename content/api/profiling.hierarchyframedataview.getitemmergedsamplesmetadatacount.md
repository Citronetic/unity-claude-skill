This version of Unity is unsupported.



# [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html).GetItemMergedSamplesMetadataCount




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

public int GetItemMergedSamplesMetadataCount(int id,
int sampleIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| id | Hierarchy item identifier. |
| sampleIndex | Merged sample index. |





### Returns



**int**
        Returns metadata count.





### Description



Returns metadata count associated with hierarchy item.


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

Additional resources: [HierarchyFrameDataView.GetItemMergedSamplesMetadata](Profiling.HierarchyFrameDataView.GetItemMergedSamplesMetadata.html), [HierarchyFrameDataView.GetItemMergedSamplesMetadataAsLong](Profiling.HierarchyFrameDataView.GetItemMergedSamplesMetadataAsLong.html).


            
