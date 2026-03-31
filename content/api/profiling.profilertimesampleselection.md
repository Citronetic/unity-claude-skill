This version of Unity is unsupported.



# ProfilerTimeSampleSelection





class in
          UnityEditor.Profiling


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



















### Description



An object describing a selection made in a frame time sample based [Profiler module](../Manual/ProfilerWindow#modules.html).





Use [ProfilerWindow.GetFrameTimeViewSampleSelectionController](ProfilerWindow.GetFrameTimeViewSampleSelectionController.html) to get a frame time sample based Profiler module, then use [IProfilerFrameTimeViewSampleSelectionController.selection](Profiling.IProfilerFrameTimeViewSampleSelectionController-selection.html) to get an object describing the current selection.
You can create a selection object and set the current selection in a frame time sample based Profiler module via [IProfilerFrameTimeViewSampleSelectionController.SetSelection](Profiling.IProfilerFrameTimeViewSampleSelectionController.SetSelection.html).





### Properties



| Property | Description |
| --- | --- |
| frameIndex | The 0 based frame index. Note that the Profiler Window UI shows the frame index as n+1. |
| markerNamePath | A list of the names of all ProfilerMarkers that make up the Sample Stack of this selection. Unity populates this list on a selection object if it was passed to IProfilerFrameTimeViewSampleSelectionController.SetSelection and was accepted as a valid selection. |
| markerPathDepth | A shorthand for _markerNamePath.Count. When _markerNamePath is null, this value is 0. |
| rawSampleIndex | The raw index of a sample, i.e. the index as if would be used with RawFrameDataView and NOT an Item ID as it would be used with HierarchyFrameDataView. |
| rawSampleIndices | A sample selected in Hierarchy view might correspond to multiple samples in RawFrameDataView. This is a list of all of these sample indices. |
| sampleDisplayName | The name of the Sample as it is displayed in the Profiler Window. This might be a shorter version than the last item in _markerNamePath. |
| threadGroupName | The name of the group of the thread this sample resides in. When the thread is not part of a thread group, this value is string.empty. |
| threadId | The ID of the thread this sample resides in. |
| threadName | The name of the thread this sample resides in. |





### Constructors



| Constructor | Description |
| --- | --- |
| ProfilerTimeSampleSelection | Constructs a selection object that can be passed to IProfilerFrameTimeViewSampleSelectionController.SetSelection to change the selection. |


            
