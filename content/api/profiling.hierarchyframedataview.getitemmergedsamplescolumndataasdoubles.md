This version of Unity is unsupported.



# [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html).GetItemMergedSamplesColumnDataAsDoubles




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

public void GetItemMergedSamplesColumnDataAsDoubles(int id,
int column,
List<double> outValues);






### Parameters



| Parameter | Description |
| --- | --- |
| id | Hierarchy item identifier. |
| column | Column identifier. |
| outValues | The merged samples for the specified hierarchy item, returned as a list of doubles. This list is resized if necessary. |





### Description



Retrieves the merged samples for a specific hierarchy item. Merged samples are returned as a list of doubles through the outValues param.





When HierarchyFrameDataView.ViewMode.MergeSamplesWithTheSameName is active, samples with the same name, and at the same hierarchy level, are merged and represented by a single item. In this case, [HierarchyFrameDataView.GetItemColumnData](Profiling.HierarchyFrameDataView.GetItemColumnData.html) represents an aggregated value.

Use *GetItemMergedSamplesColumnDataAsDoubles* to obtain double values for individual samples in a merged hierarchy.

The resulting list of doubles is written to *outValues*. This list is resized if necessary.

Additional resources: [HierarchyFrameDataView.GetItemColumnData](Profiling.HierarchyFrameDataView.GetItemColumnData.html), [HierarchyFrameDataView.GetItemMergedSamplesCount](Profiling.HierarchyFrameDataView.GetItemMergedSamplesCount.html), [HierarchyFrameDataView.GetItemMergedSamplesColumnData](Profiling.HierarchyFrameDataView.GetItemMergedSamplesColumnData.html).


            
