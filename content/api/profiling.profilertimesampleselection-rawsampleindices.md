This version of Unity is unsupported.



# [ProfilerTimeSampleSelection](Profiling.ProfilerTimeSampleSelection.html).rawSampleIndices




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












                    public ReadOnlyCollection<int> rawSampleIndices;






### Description



A sample selected in Hierarchy view might correspond to multiple samples in [RawFrameDataView](Profiling.RawFrameDataView.html). This is a list of all of these sample indices.





Note: When [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html) uses HierarchyFrameDataView.ViewMode.MergeSamplesWithTheSameName mode, Unity merges multiple samples with the same name at the same hierarchy level together in a single item.

As a result of this behavior, and the hierarchical structure of the samples in [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html), the **Hierarchy item identifiers** that [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html) uses, do not correspond to the **sample indices** that [RawFrameDataView](Profiling.RawFrameDataView.html) uses.
When working with [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html), use [HierarchyFrameDataView.GetItemRawFrameDataViewIndices](Profiling.HierarchyFrameDataView.GetItemRawFrameDataViewIndices.html) to get the sample indices in a format that works with [ProfilerTimeSampleSelection](Profiling.ProfilerTimeSampleSelection.html) and use [HierarchyFrameDataView.ItemContainsRawFrameDataViewIndex](Profiling.HierarchyFrameDataView.ItemContainsRawFrameDataViewIndex.html) to check if a selected sample index corresponds to a HierarchyFrameDataView item..

Additional resources: [rawSampleIndex](Profiling.ProfilerTimeSampleSelection-rawSampleIndex.html), [RawFrameDataView](Profiling.RawFrameDataView.html), [HierarchyFrameDataView.GetItemRawFrameDataViewIndices](Profiling.HierarchyFrameDataView.GetItemRawFrameDataViewIndices.html) and [HierarchyFrameDataView.ItemContainsRawFrameDataViewIndex](Profiling.HierarchyFrameDataView.ItemContainsRawFrameDataViewIndex.html).


            
