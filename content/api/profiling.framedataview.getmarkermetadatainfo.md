This version of Unity is unsupported.



# [FrameDataView](Profiling.FrameDataView.html).GetMarkerMetadataInfo




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

public MarkerMetadataInfo[] GetMarkerMetadataInfo(int markerId);






### Parameters



| Parameter | Description |
| --- | --- |
| markerId | Marker identifier. |





### Returns



**MarkerMetadataInfo[]**
        Returns an array of metadata information structures.





### Description



Gets Profiler marker metadata information for the specific marker identifier.





Use to get name, unit type and value type for the metadata parameters which can be passed together with a Profiler sample associated with the identifier.


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


*System.ArgumentException* if *markerId* is invalid.


            
