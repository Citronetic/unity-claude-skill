This version of Unity is unsupported.



# [ProfilerUnsafeUtility](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.html).SingleSampleWithMetadata




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

public static void SingleSampleWithMetadata(IntPtr markerPtr,
int metadataCount,
void* metadata);






### Parameters



| Parameter | Description |
| --- | --- |
| markerPtr | Profiler marker handle. |
| metadataCount | Metadata parameters count. |
| metadata | Unsafe pointer to the ProfilerMarkerData array. |





### Description



Creates profiling sample with a custom name that the *markerPtr* handle and metadata parameters has defined.





Sample created with [SingleSampleWithMetadata](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.SingleSampleWithMetadata.html) shows up as a sample with zero duration in the Profiler hierarchy.
In the Timeline view of the Profiler Window the provided *metadata* is available in the tooltip message.
Use [HierarchyFrameDataView.GetItemMetadata](Profiling.HierarchyFrameDataView.GetItemMetadata.html) to retrieve metadata programmatically.

If *markerPtr* points to a marker with [MarkerFlags.Counter](Unity.Profiling.LowLevel.MarkerFlags.Counter.html) defined, the metadata value can be retrieved with [FrameDataView.GetCounterValueAsInt](Profiling.FrameDataView.GetCounterValueAsInt.html) methods.

**Note:**  [SingleSampleWithMetadata](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.SingleSampleWithMetadata.html) is thread safe and can be used in jobified code.

The low level Profiler API is included in a Release Build.


            
