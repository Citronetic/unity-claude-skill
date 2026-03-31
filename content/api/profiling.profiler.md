This version of Unity is unsupported.



# Profiler





class in
          UnityEngine.Profiling



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Controls the [Profiler](../Manual/Profiler.html) from script.





You can add custom Profiler sections in your scripts with [Profiler.BeginSample](Profiling.Profiler.BeginSample.html) and [Profiler.EndSample](Profiling.Profiler.EndSample.html).

On standalone platforms, you can save all profiling information to a file, which allows you to inspect it later. To do this, you must specify a [Profiler.logFile](Profiling.Profiler-logFile.html) and set both [Profiler.enabled](Profiling.Profiler-enabled.html) and [Profiler.enableBinaryLog](Profiling.Profiler-enableBinaryLog.html) to `true`.

Because use of the Profiler negatively affects the performance of your app, most of the Profiler API functionality is only available when you enable the `Development Build`. Therefore, you must enable `Developer Build` if you want to use profiler API methods in your built app. Disabling `Development Build` makes your app run faster, but prevents you from using most of the Profiler API methods.

The exception to this are the Profiler API methods relating to memory usage. Because Unity manages most of its system memory at run-time, it can provide that information with no performance penalty; therefore these methods are available even if you don't enable `Development Build`. This applies to all memory-related Profiler API methods except [Profiler.GetAllocatedMemoryForGraphicsDriver](Profiling.Profiler.GetAllocatedMemoryForGraphicsDriver.html) and [Profiler.GetRuntimeMemorySizeLong](Profiling.Profiler.GetRuntimeMemorySizeLong.html), since they require extra profiling data only available in development builds.





### Static Properties



| Property | Description |
| --- | --- |
| areaCount | The number of Profiler Areas that you can profile. |
| enableAllocationCallstacks | Enables the recording of callstacks for managed allocations. |
| enableBinaryLog | Enables the logging of profiling data to a file. |
| enabled | Enables the Profiler. |
| logFile | Specifies the file to use when writing profiling data. |
| maxUsedMemory | Sets the maximum amount of memory that Profiler uses for buffering data. This property is expressed in bytes. |
| usedHeapSizeLong | Returns the number of bytes that Unity has allocated. This does not include bytes allocated by external libraries or drivers. |





### Static Methods



| Method | Description |
| --- | --- |
| AddFramesFromFile | Displays the recorded profile data in the profiler. |
| BeginSample | Begin profiling a piece of code with a custom label. |
| BeginThreadProfiling | Enables profiling on the thread from which you call this method. |
| EmitFrameMetaData | Write metadata associated with the current frame to the Profiler stream. |
| EmitSessionMetaData | Write metadata associated with the whole Profiler session capture. |
| EndSample | Ends the current profiling sample. |
| EndThreadProfiling | Frees the internal resources used by the Profiler for the thread. |
| GetAllCategories | Returns all ProfilerCategory registered in Profiler. |
| GetAllocatedMemoryForGraphicsDriver | Returns the estimated amount of allocated memory for the graphics driver, in bytes. |
| GetAreaEnabled | Returns whether or not a given ProfilerArea is currently enabled. |
| GetCategoriesCount | Returns number of ProfilerCategory registered in Profiler. |
| GetMonoHeapSizeLong | Returns the size of the reserved space for managed-memory. |
| GetMonoUsedSizeLong | Gets the allocated managed memory for live objects and non-collected objects. |
| GetRuntimeMemorySizeLong | Gathers the native-memory used by a Unity object. |
| GetTempAllocatorSize | Returns the size of the temp allocator. |
| GetTotalAllocatedMemoryLong | The total memory allocated by the internal allocators in Unity. Unity reserves large pools of memory from the system; this includes double the required memory for textures because Unity keeps a copy of each texture on both the CPU and GPU. This function returns the amount of used memory in those pools. |
| GetTotalFragmentationInfo | Returns heap memory fragmentation information. |
| GetTotalReservedMemoryLong | The total memory Unity has reserved. |
| GetTotalUnusedReservedMemoryLong | Unity allocates memory in pools for usage when unity needs to allocate memory. This function returns the amount of unused memory in these pools. |
| IsCategoryEnabled | Returns whether or not a given ProfilerCategory is currently enabled. |
| SetAreaEnabled | Enable or disable a given ProfilerArea. |
| SetCategoryEnabled | Enable or disable a given ProfilerCategory. |
| SetTempAllocatorRequestedSize | Sets the size of the temp allocator. |


            
