This version of Unity is unsupported.



# [ProfilerCounterOptions](Unity.Profiling.ProfilerCounterOptions.html).ResetToZeroOnFlush




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



Specifies that the counter's current value should be reset to zero each time it is reported to the Unity Profiler.





If the counter has also been configured with [ProfilerCounterOptions.FlushOnEndOfFrame](Unity.Profiling.ProfilerCounterOptions.FlushOnEndOfFrame.html), then this will cause the counter's value to be reset to zero at the end of every frame. Otherwise, it will be reset to zero every time it is manually reported via its `Sample` method.


            
