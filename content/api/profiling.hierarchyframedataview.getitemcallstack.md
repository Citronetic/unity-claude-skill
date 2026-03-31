This version of Unity is unsupported.



# [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html).GetItemCallstack




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

public void GetItemCallstack(int id,
List<ulong> outCallstack);






### Parameters



| Parameter | Description |
| --- | --- |
| id | Hierarchy item identifier. |
| outCallstack | List filled with callstack pointers as a result of a method call. |





### Description



Gets the callstack associated with the specified hierarchy item.





When the callstack collection mode is enabled for certain profiler markers (such as GC.Alloc), the profiler writes the callstack to the data stream. The callstack refers to the instruction pointer stack.
Instruction pointers can be resolved into function names which you can the use to identify the sample origin in the source code.
*GetItemCallstack* retrieves the callstack as a list of pointers. Each list entry represents a function call.

Use [FrameDataView.ResolveMethodInfo](Profiling.FrameDataView.ResolveMethodInfo.html) to get method name and location information for the instruction pointer.


            
