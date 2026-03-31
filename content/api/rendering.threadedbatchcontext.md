This version of Unity is unsupported.



# ThreadedBatchContext





struct in
          UnityEngine.Rendering



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



Thread-safe and Burst-safe API for interacting with a [BatchRendererGroup](Rendering.BatchRendererGroup.html) from Burst jobs.





### Properties



| Property | Description |
| --- | --- |
| batchRendererGroup | An internal handle to the BatchRendererGroup object that created this threaded context. |





### Public Methods



| Method | Description |
| --- | --- |
| AddBatch | Thread-safe alias for BatchRendererGroup.AddBatch. |
| RemoveBatch | Thread-safe alias for BatchRendererGroup.RemoveBatch. |
| SetBatchBuffer | Change the GraphicsBuffer associated with the given batch. Thread-safe alias for BatchRendererGroup.SetBatchBuffer. |


            
