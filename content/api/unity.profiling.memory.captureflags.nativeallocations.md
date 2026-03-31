This version of Unity is unsupported.



# [CaptureFlags](Unity.Profiling.Memory.CaptureFlags.html).NativeAllocations




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



Specifies that the Native Memory used by any Native Allocation made by Unity should be captured.





This information allows the Memory Profiler to show not just the native size of Unity Objects, but also their graphics sizes. Additionally, this also includes information on native memory used by Unity's different subsystems, allocations made via [UnsafeUtility.Malloc](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.Malloc.html), NativeArray_1 or other native collections, as well as how much memory is used by Unity's different [native allocators](../Manual/performance-native-allocators.html) and how much is just reserved. Without this flag, there will be no data recorded for [CaptureFlags.NativeAllocationSites](Unity.Profiling.Memory.CaptureFlags.NativeAllocationSites.html) or [CaptureFlags.NativeStackTraces](Unity.Profiling.Memory.CaptureFlags.NativeStackTraces.html) either as it is reported in relation to each native alloation.

                Corresponds to the NativeAllocations, NativeMemoryRegions, NativeRootReferences, and NativeMemoryLabels fields in a Memory Snapshot.


            
