This version of Unity is unsupported.



# [AsyncReadManagerMetricsFilters](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters.html).SetStateFilter




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

public void SetStateFilter([Unity.IO.LowLevel.Unsafe.ProcessingState](Unity.IO.LowLevel.Unsafe.ProcessingState.html) _state);






## Declaration

public void SetStateFilter(ProcessingState[] _states);






### Parameters



| Parameter | Description |
| --- | --- |
| _state | ProcessingState to filter by. Summary will include reads that have this state only. |
| _states | Array of ProcessingStates to filter by. Summary will include reads that have any of these states. |





### Description



Set [ProcessingState](Unity.IO.LowLevel.Unsafe.ProcessingState.html) filters on an existing SummaryMetricsFilters instance.





This function replaces existing ProcessingState filters on this SummaryMetricsFilters instance. Other filter settings remain unchanged.


            
