This version of Unity is unsupported.



# [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html).GetItemMergedSamplesColumnData




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

public void GetItemMergedSamplesColumnData(int id,
int column,
List<string> outStrings);






### Parameters



| Parameter | Description |
| --- | --- |
| id | Hierarchy item identifier. |
| column | Column identifier. |
| outStrings | List filled with values of merged samples as a result of a method call. |





### Description



Use to retrieve a values of merged samples of a hierarchy item.





When HierarchyFrameDataView.ViewMode.MergeSamplesWithTheSameName is active, multiple samples with the same name at the same hierarchy level are merged together and are represented by a single item. Respectively [HierarchyFrameDataView.GetItemColumnData](Profiling.HierarchyFrameDataView.GetItemColumnData.html) in this case represents an aggregated value.

*GetItemMergedSamplesColumnData* allows to obtain values of individual samples in merged hierarchy.

The result is written to *outStrings* list which is resized if necessary.

Additional resources: [HierarchyFrameDataView.GetItemColumnData](Profiling.HierarchyFrameDataView.GetItemColumnData.html), [HierarchyFrameDataView.GetItemMergedSamplesCount](Profiling.HierarchyFrameDataView.GetItemMergedSamplesCount.html).


            
