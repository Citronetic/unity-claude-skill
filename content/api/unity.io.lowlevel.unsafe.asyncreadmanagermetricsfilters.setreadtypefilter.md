This version of Unity is unsupported.



# [AsyncReadManagerMetricsFilters](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters.html).SetReadTypeFilter




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

public void SetReadTypeFilter([Unity.IO.LowLevel.Unsafe.FileReadType](Unity.IO.LowLevel.Unsafe.FileReadType.html) _readType);






## Declaration

public void SetReadTypeFilter(FileReadType[] _readTypes);






### Parameters



| Parameter | Description |
| --- | --- |
| _readType | FileReadType to filter by. Summary will include reads that had this read type only. |
| _readTypes | Array of FileReadTypes to filter by. Summary will include reads that have any of these read types. |





### Description



Set [FileReadType](Unity.IO.LowLevel.Unsafe.FileReadType.html) filters on an existing SummaryMetricsFilters instance.





This function replaces existing ReadType filters on this SummaryMetricsFilters instance. Other filter settings remain unchanged.


            
