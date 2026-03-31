This version of Unity is unsupported.



# ContentSceneFile





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



The handle returned from [ContentLoadInterface.LoadSceneAsync](Unity.Loading.ContentLoadInterface.LoadSceneAsync.html). You can use this handle to access the status and results of the load operation.





### Properties



| Property | Description |
| --- | --- |
| IsValid | Returns true if the ContentSceneFile handle is valid. A handle becomes invalid after the file is unloaded. |
| Scene | The Scene object being loaded. This is accessible both before and after the load operation completes. |
| Status | The loading status of the scene. |





### Public Methods



| Method | Description |
| --- | --- |
| IntegrateAtEndOfFrame | Calling this will cause the scene to integrate at the end of the frame. |
| UnloadAtEndOfFrame | Will trigger the scene to unload at the end of the frame. |
| WaitForLoadCompletion | Blocks on the main thread until the load operation completes. This function can be slow and so should be used carefully to avoid frame rate stuttering. |


            
