This version of Unity is unsupported.



# [DisposeSentinel](Unity.Collections.LowLevel.Unsafe.DisposeSentinel.html).Create(AtomicSafetyHandle,DisposeSentinel,int)




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



















### Parameters



| Parameter | Description |
| --- | --- |
| safety | The AtomicSafetyHandle to control access to the data related to the newly created DisposeSentinel. |
| sentinel | The new DisposeSentinel. |
| callSiteStackDepth | The stack depth where to extract the logging information from. |





### Description



Creates a new `AtomicSafetyHandle` and a new `DisposeSentinel`, to be used to track safety and leaks on native data.





When `DisposeSentinel` is created, the call stack is stored in it to log a descriptive error when a memory leak is detected.


            
