This version of Unity is unsupported.



# ReadCommandArray





struct in
          Unity.IO.LowLevel.Unsafe



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



An array of [ReadCommand](Unity.IO.LowLevel.Unsafe.ReadCommand.html) instances to pass to [AsyncReadManager.Read](Unity.IO.LowLevel.Unsafe.AsyncReadManager.Read.html) and [AsyncReadManager.ReadDeferred](Unity.IO.LowLevel.Unsafe.AsyncReadManager.ReadDeferred.html).





To create a ReadCommandArray object, use [UnsafeUtility.Malloc](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.Malloc.html) to allocate an array of ReadCommands (or allocate a NativeArray) and populate it with the commands to perform.
You must set [CommandCount](Unity.IO.LowLevel.Unsafe.ReadCommandArray.CommandCount.html) to the number of commands in the array. Failure to do so is dangerous and could lead to buffer overruns or skipping the read commands at the end.





### Properties



| Property | Description |
| --- | --- |
| CommandCount | The number of individual entries in the array of ReadCommands pointed to by ReadCommands. |
| ReadCommands | Pointer to a NativeArray of ReadCommands. |


            
