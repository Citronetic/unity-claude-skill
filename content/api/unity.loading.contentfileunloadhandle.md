This version of Unity is unsupported.



# ContentFileUnloadHandle





struct in
          Unity.Loading



/



Implemented in:[UnityEngine.ContentLoadModule](UnityEngine.ContentLoadModule.html)


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



A handle that can be used to track the progress of an unload operation. This is returned from [ContentFile.UnloadAsync](Unity.Loading.ContentFile.UnloadAsync.html).





### Properties



| Property | Description |
| --- | --- |
| IsCompleted | Returns true if the unload operation has completed. |





### Public Methods



| Method | Description |
| --- | --- |
| WaitForCompletion | Blocks on the main thread until the unload operation completes. This function can be slow and so should be used carefully to avoid frame rate stuttering. |


            
