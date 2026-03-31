This version of Unity is unsupported.



# GarbageCollector





class in
          UnityEngine.Scripting



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



API to control the garbage collector on the Mono and IL2CPP scripting backends.





See [GarbageCollector.GCMode](Scripting.GarbageCollector.GCMode.html) for how to change the global garbage collector operation mode.





### Static Properties



| Property | Description |
| --- | --- |
| GCMode | Set and get global garbage collector operation mode. |
| incrementalTimeSliceNanoseconds | The target duration of a collection step when performing incremental garbage collection. |
| isIncremental | Reports whether incremental garbage collection is enabled. |





### Static Methods



| Method | Description |
| --- | --- |
| CollectIncremental | Perform an on-demand incremental garbage collection for a maximum duration specified by the nanoseconds parameter. |





### Events



| Event | Description |
| --- | --- |
| GCModeChanged | Subscribe to this event to get notified when GarbageCollector.GCMode changes. |


            
