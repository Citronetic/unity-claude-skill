This version of Unity is unsupported.



# VFXSpawnerLoopState





enumeration


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



This enum describes the state of VFXSpawner.





### Properties



| Property | Description |
| --- | --- |
| Finished | If the VFXSpawner is in this state then it has finished and is currently awaiting a Play invocation. This is the default and final state. |
| DelayingBeforeLoop | If the VFXSpawner is in this state, then it is waiting before it starts a loop. |
| Looping | If the VFXSpawner is in this state, then it is currently looping. When in this state, VFXSpawnerState.playing is true. |
| DelayingAfterLoop | If the VFXSpawner is in this state, then it is waiting after a loop has reached the end. |


            
