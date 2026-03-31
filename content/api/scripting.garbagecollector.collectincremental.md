This version of Unity is unsupported.



# [GarbageCollector](Scripting.GarbageCollector.html).CollectIncremental




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

public static bool CollectIncremental(ulong nanoseconds);






### Parameters



| Parameter | Description |
| --- | --- |
| nanoseconds | The maximum duration in nanoseconds for the garbage collection operation. When set to 0 (the default), no garbage collection is performed. |





### Returns



**bool**
        Returns true if additional garbage collection work remains when the method returns and false if garbage collection is complete. Also returns false if incremental garbage collection is not enabled or is not supported on the current platform.





### Description



Perform an on-demand incremental garbage collection for a maximum duration specified by the `nanoseconds` parameter.





If incremental garbage collection is enabled, then `CollectIncremental` runs the incremental garbage collector for up to the specified number of nanoseconds. The method returns when either the specified amount of time has elapsed, or there is no more garbage collection work to be done. Note that the garbage collector uses the underlying platform timer, which can have a resolution as low as a few microseconds. In other words, changing the value by a few nanoseconds might have no effect.

Use this method when you know you have a certain amount of time to wait for something to happen, and want to use this time to let the garbage collector run.

If incremental garbage collection is not enabled, this method does nothing and returns `false`. Enable incremental garbage collection in the [PlayerSettings](PlayerSettings.html) for a project. You can check whether incremental garbage collection is enabled with [GarbageCollector.isIncremental](Scripting.GarbageCollector-isIncremental.html).

If no value is specified for the `nanoseconds` parameter, the value defaults to `0` and no incremental garbage collection is performed.

**Note**:  The `nanoseconds` parameter specifies the maximum total time for which to perform an on-demand incremental garbage collection and should not be confused with [GarbageCollector.incrementalTimeSliceNanoseconds](Scripting.GarbageCollector-incrementalTimeSliceNanoseconds.html) which specifies the target duration of the individual collection steps that incremental garbage collection is split across. For example, if [GarbageCollector.incrementalTimeSliceNanoseconds](Scripting.GarbageCollector-incrementalTimeSliceNanoseconds.html) has its default value of 3000000 nanoseconds (3 ms) and you call `GarbageCollector.CollectIncremental(10000000)`, the garbage collector can run for a maximum of 10 ms and therefore can perform a maximum of three (but likely no more than two) 3 ms long incremental collection steps in the time available.

Additional resources: [incrementalTimeSliceNanoseconds](Scripting.GarbageCollector-incrementalTimeSliceNanoseconds.html).


            
