This version of Unity is unsupported.



# [VFXManager](VFX.VFXManager.html).FlushEmptyBatches




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

public static void FlushEmptyBatches();






### Description



Deallocates all empty batches used in the VFX runtime.





Unity automatically keeps empty batches to reuse. This uses additional memory to avoid multiple allocations or deallocations.
Use this function to force Unity to deallocate empty batches and reclaim memory.

Note: You can configure the amount of time empty batches are kept around in the VFX Project Settings.


            
