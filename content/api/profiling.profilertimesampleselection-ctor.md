This version of Unity is unsupported.



# ProfilerTimeSampleSelection Constructor




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

public ProfilerTimeSampleSelection(long frameIndex,
string threadGroupName,
string threadName,
ulong threadId,
int rawSampleIndex,
string sampleName);






## Declaration

public ProfilerTimeSampleSelection(long frameIndex,
string threadGroupName,
string threadName,
ulong threadId,
IList<int> rawSampleIndices,
string sampleName);






## Declaration

public ProfilerTimeSampleSelection([Profiling.ProfilerTimeSampleSelection](Profiling.ProfilerTimeSampleSelection.html) selection);






### Parameters



| Parameter | Description |
| --- | --- |
| frameIndex | The 0 based index of the frame the sample exists in. Note that the Profiler Window UI shows the frame index as n+1. When this value is outside of the range described by ProfilerWindow.firstAvailableFrameIndex and ProfilerWindow.lastAvailableFrameIndex, or smaller than 0, Unity will throw an ArgumentOutOfRangeException. |
| threadGroupName | The name of the thread group. An empty string, which means the thread isn't part of a thread group. "Job", "Loading" and "Scripting Threads" are examples of such thread group names. |
| threadName | The name of the thread, e.g. "Main Thread", "Render Thread" or "Worker 0". When this value is null or an empty string, Unity will throw an ArgumentException. |
| threadId | The ID of the thread. When the default value of FrameDataView.invalidThreadId is passed, Unity searches for the sample in the first thread matching the provided threadGroupName and threadName. Specify this threadId if there are multiple threads with the same name. Use a RawFrameDataView.threadId or HierarchyFrameDataView.threadId to retrieve the ID to a specific thread, if you need it to be specific. |
| rawSampleIndex | The raw index of a sample, i.e. the index as if would be used with RawFrameDataView and NOT an Item ID as it would be used with HierarchyFrameDataView. Use HierarchyFrameDataView.ViewMode.MergeSamplesWithTheSameName to get raw sample indices when working with HierarchyFrameDataView. |
| sampleName | The name of the sample. When this value is null or empty, it will be filled by Unity on making a valid selection by passing this object to IProfilerFrameTimeViewSampleSelectionController.SetSelection. |
| rawSampleIndices | A list of sample indices as used with RawFrameDataView and NOT a list of Item ID as would be used with HierarchyFrameDataView. Use HierarchyFrameDataView.ViewMode.MergeSamplesWithTheSameName to get raw sample indices when working with HierarchyFrameDataView. When this list is empty, Unity throws an ArgumentException. |
| selection | An existing selection to make a copy of. When this value is null, Unity throws an ArgumentNullException. |





### Description



Constructs a selection object that can be passed to [IProfilerFrameTimeViewSampleSelectionController.SetSelection](Profiling.IProfilerFrameTimeViewSampleSelectionController.SetSelection.html) to change the selection.





**Throws:**


*System.ArgumentException* if *threadName* or *rawSampleIndices* is empty.
*System.ArgumentNullException* if *threadName* or *selection* is null.
*System.ArgumentOutOfRangeException* if *frameIndex* When this value is outside of the range described by [ProfilerWindow.firstAvailableFrameIndex](ProfilerWindow-firstAvailableFrameIndex.html) and [ProfilerWindow.lastAvailableFrameIndex](ProfilerWindow-lastAvailableFrameIndex.html), or smaller than 0.
*System.ArgumentOutOfRangeException* if *rawSampleIndex* or any index in *rawSampleIndices* is smaller than 0.

Additional resources: [IProfilerFrameTimeViewSampleSelectionController.SetSelection](Profiling.IProfilerFrameTimeViewSampleSelectionController.SetSelection.html).


            
