This version of Unity is unsupported.



# [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html).GetItemRawFrameDataViewIndices




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

public void GetItemRawFrameDataViewIndices(int id,
List<int> outSampleIndices);






### Parameters



| Parameter | Description |
| --- | --- |
| id | Hierarchy item identifier. |
| outSampleIndices | List filled with all profiler sample indices represented by the hierarchy item. |





### Description



Retrieves the raw indices of all samples associated with this Hierarchy item identifier.





When HierarchyFrameDataView.ViewMode.MergeSamplesWithTheSameName is active, Unity merges multiple samples with the same name at the same hierarchy level together in a single item.

As a result of this behavior, and the hierarchical structure of the samples in *HierarchyFrameDataView*, the **Hierarchy item identifiers** that *HierarchyFrameDataView* uses, do not correspond to the **sample indices** that [RawFrameDataView](Profiling.RawFrameDataView.html) uses. Use *GetItemRawFrameDataViewIndices* to get the sample indices in a format that works with [RawFrameDataView](Profiling.RawFrameDataView.html)

The result is written to *outSampleIndices* list which is resized if necessary.

If you you only want to confirm that an item in the *HierarchyFrameDataView* corresponds to a particular **sample index** you can use [HierarchyFrameDataView.ItemContainsRawFrameDataViewIndex](Profiling.HierarchyFrameDataView.ItemContainsRawFrameDataViewIndex.html) instead.

**Throws:**

*System.ArgumentException* if *id* is invalid.
*System.ArgumentNullException* if *outSampleIndices* is null.

Additional resources: [HierarchyFrameDataView.GetItemMergedSamplesCount](Profiling.HierarchyFrameDataView.GetItemMergedSamplesCount.html), [HierarchyFrameDataView.ItemContainsRawFrameDataViewIndex](Profiling.HierarchyFrameDataView.ItemContainsRawFrameDataViewIndex.html)  [RawFrameDataView](Profiling.RawFrameDataView.html).


            
