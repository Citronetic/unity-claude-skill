This version of Unity is unsupported.



# [AsyncReadManagerMetricsFilters](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters.html).SetTypeIDFilter




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

public void SetTypeIDFilter(ulong _typeID);






## Declaration

public void SetTypeIDFilter(ulong[] _typeIDs);






### Parameters



| Parameter | Description |
| --- | --- |
| _typeID | TypeID to filter by. Summary will include reads that have this type ID only. |
| _typeIDs | Array of TypeIDs to filter by. Summary will include reads that have any of these Type IDs. |





### Description



Set TypeID filters on an existing SummaryMetricsFilters instance.





This function replaces existing TypeID filters on this SummaryMetricsFilters instance. Other filter settings remain unchanged.


            
