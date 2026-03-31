This version of Unity is unsupported.



# [AsyncReadManagerMetricsFilters](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters.html).SetSubsystemFilter




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

public void SetSubsystemFilter([Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem](Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem.html) _subsystem);






## Declaration

public void SetSubsystemFilter(AssetLoadingSubsystem[] _subsystems);






### Parameters



| Parameter | Description |
| --- | --- |
| _subsystem | AssetLoadingSubsystem to filter by. Summary will include reads that have this subsystem tag only. |
| _subsystems | Array of AssetLoadingSubsystems to filter by. Summary will include reads that have any of these subsystem tags. |





### Description



Set [AssetLoadingSubsystem](Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem.html) filters on an existing SummaryMetricsFilters instance.





This function replaces existing AssetLoadingSubsystem filters on this SummaryMetricsFilters instance. Other filter settings remain unchanged.


            
