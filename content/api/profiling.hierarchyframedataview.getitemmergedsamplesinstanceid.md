This version of Unity is unsupported.



# [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html).GetItemMergedSamplesInstanceID




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

public void GetItemMergedSamplesInstanceID(int id,
List<int> outInstanceIds);






### Parameters



| Parameter | Description |
| --- | --- |
| id | Hierarchy item identifier. |
| outInstanceIds | List filled with InstanceID values of merged samples as a result of a method call. |





### Description



Retrieves the instanceID of the merged samples corresponding to a hierarchy item.





When HierarchyFrameDataView.ViewMode.MergeSamplesWithTheSameName is active, multiple samples with the same name at the same hierarchy level are merged together and are represented by a single item. Respectively [HierarchyFrameDataView.GetItemColumnData](Profiling.HierarchyFrameDataView.GetItemColumnData.html) in this case represents an aggregated value.

*GetItemMergedSamplesColumnData* allows to obtain values of individual samples in merged hierarchy.

The result is written to *outInstanceIds* list which is resized if necessary.

Additional resources: [HierarchyFrameDataView.GetItemInstanceID](Profiling.HierarchyFrameDataView.GetItemInstanceID.html).


            
