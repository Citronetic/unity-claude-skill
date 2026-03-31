This version of Unity is unsupported.



# [FrameDataView](Profiling.FrameDataView.html).GetMarkerCategoryIndex




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

public ushort GetMarkerCategoryIndex(int markerId);






### Parameters



| Parameter | Description |
| --- | --- |
| markerId | Marker identifier. |





### Returns



**ushort**
        Returns Profiler category index.





### Description



Gets Profiler marker category for the specific marker identifier.





Use to filter samples data by a specific Profiler category.

The category index is represented by *ushort* value and refers to one of the following constants in [ProfilerUnsafeUtility](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.html) class:



          - [ProfilerUnsafeUtility.CategoryRender](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryRender.html),

          - [ProfilerUnsafeUtility.CategoryScripts](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryScripts.html),

          - [ProfilerUnsafeUtility.CategoryGUI](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryGUI.html),

          - [ProfilerUnsafeUtility.CategoryPhysics](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryPhysics.html),

          - [ProfilerUnsafeUtility.CategoryAnimation](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryAnimation.html),

          - [ProfilerUnsafeUtility.CategoryAi](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryAi.html),

          - [ProfilerUnsafeUtility.CategoryAudio](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryAudio.html),

          - [ProfilerUnsafeUtility.CategoryVideo](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryVideo.html),

          - [ProfilerUnsafeUtility.CategoryParticles](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryParticles.html),

          - [ProfilerUnsafeUtility.CategoryLighting](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryLighting.html),

          - [ProfilerUnsafeUtility.CategoryNetwork](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryNetwork.html),

          - [ProfilerUnsafeUtility.CategoryLoading](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryLoading.html),

          - [ProfilerUnsafeUtility.CategoryOther](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryOther.html),

          - [ProfilerUnsafeUtility.CategoryVr](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryVr.html),

          - [ProfilerUnsafeUtility.CategoryAllocation](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryAllocation.html),

          - [ProfilerUnsafeUtility.CategoryVr](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryVr.html),

          - [ProfilerUnsafeUtility.CategoryInput](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.CategoryInput.html).





**Throws:**


*System.ArgumentException* if *markerId* is invalid.

Additional resources: [GetMarkerId](Profiling.FrameDataView.GetMarkerId.html), [ProfilerUnsafeUtility](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.html).


            
