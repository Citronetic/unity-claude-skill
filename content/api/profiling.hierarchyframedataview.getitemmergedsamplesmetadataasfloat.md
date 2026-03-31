This version of Unity is unsupported.



# [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html).GetItemMergedSamplesMetadataAsFloat




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

public float GetItemMergedSamplesMetadataAsFloat(int id,
int sampleIndex,
int metadataIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| id | Hierarchy item identifier. |
| sampleIndex | Merged sample index. |
| metadataIndex | Metadata index. |





### Returns



**float**
        Returns value of the metadata as float.





### Description



Returns float representation of hierarchy item metadata value.





**Throws:**


*System.ArgumentException* if *id* is invalid.
*System.IndexOutOfRangeException* if *sampleIndex* is not in the range from 0 to [HierarchyFrameDataView.GetItemMergedSamplesCount](Profiling.HierarchyFrameDataView.GetItemMergedSamplesCount.html).
*System.IndexOutOfRangeException* if *medataIndex* is not in the range from 0 to [HierarchyFrameDataView.GetItemMergedSamplesMetadataCount](Profiling.HierarchyFrameDataView.GetItemMergedSamplesMetadataCount.html).

Additional resources: [HierarchyFrameDataView.GetItemMergedSamplesCount](Profiling.HierarchyFrameDataView.GetItemMergedSamplesCount.html), [HierarchyFrameDataView.GetItemMergedSamplesMetadataCount](Profiling.HierarchyFrameDataView.GetItemMergedSamplesMetadataCount.html), [HierarchyFrameDataView.GetItemMetadataAsFloat](Profiling.HierarchyFrameDataView.GetItemMetadataAsFloat.html).


            
