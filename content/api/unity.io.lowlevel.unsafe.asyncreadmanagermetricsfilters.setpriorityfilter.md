This version of Unity is unsupported.



# [AsyncReadManagerMetricsFilters](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters.html).SetPriorityFilter




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

public void SetPriorityFilter([Unity.IO.LowLevel.Unsafe.Priority](Unity.IO.LowLevel.Unsafe.Priority.html) _priorityLevel);






## Declaration

public void SetPriorityFilter(Priority[] _priorityLevels);






### Parameters



| Parameter | Description |
| --- | --- |
| _priorityLevel | Priority level to filter by. Summary will include reads that had this priority level only. |
| _priorityLevels | Array of priority levels to filter by. Summary will include reads that have any of these priority levels. |





### Description



Set Priority filters on an existing SummaryMetricsFilters instance.





This function replaces existing Priority filters on this SummaryMetricsFilters instance. Other filter settings remain unchanged.


            
