This version of Unity is unsupported.



# IProfilerFrameTimeViewSampleSelectionController





interface in
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



This Interface defines an [IProfilerFrameTimeViewSampleSelectionController](Profiling.IProfilerFrameTimeViewSampleSelectionController.html) object that you can use to control the selection in [Profiler modules](../Manual/ProfilerWindow#modules.html) that display timing information of Profiler samples, such as the [CPU Usage module](../Manual/ProfilerCPU.html) and the [GPU Usage Profiler module](../Manual/ProfilerGPU.html).





Use [ProfilerWindow.GetFrameTimeViewSampleSelectionController](ProfilerWindow.GetFrameTimeViewSampleSelectionController.html) to retrieve such an object.





### Properties



| Property | Description |
| --- | --- |
| focusedThreadIndex | The index of the the thread selected to be displayed in the Profiler module. |
| sampleNameSearchFilter | This filters the samples displayed in Hierarchy view to only include the names that include this string. |
| selection | Get the current selection in a frame time sample based Profiler modules, such as the CPU Usage module and the GPU Usage Profiler module. |





### Public Methods



| Method | Description |
| --- | --- |
| ClearSelection | Call this method to clear the current selection in this frame time view based Profiler module. |
| SetSelection | Set the current selection in a frame time sample based Profiler Module, such as the CPU Usage module and the GPU Usage Profiler module. |





### Events



| Event | Description |
| --- | --- |
| selectionChanged | Calls the methods in its invocation list when the selection in this Profiler module changes. The first parameter contains the Profiler module the selection change occurred in, the second parameter is the new selection. |


            
