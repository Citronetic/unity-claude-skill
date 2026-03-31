This version of Unity is unsupported.



# ContentFile





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



This struct acts like a handle for accessing a file loaded by [ContentLoadInterface.LoadContentFileAsync](Unity.Loading.ContentLoadInterface.LoadContentFileAsync.html). You can use it to access the status and results of the load operation.





### Static Properties



| Property | Description |
| --- | --- |
| GlobalTableDependency | This ContentFile can be passed as a dependency to ContentLoadInterface.LoadContentFileAsync or ContentLoadInterface.LoadSceneAsync to indicate that the external file dependencies should be resolved through the global PersistentManager table. For example, this could be used when the ContentFile references a file loaded through the PersistentManager such as "unity default resources". |





### Properties



| Property | Description |
| --- | --- |
| IsValid | Returns true if the ContentFile handle is valid. |
| LoadingStatus | The loading status of the ContentFile. |





### Public Methods



| Method | Description |
| --- | --- |
| GetObject | Used to access objects within the ContentFile by local file identifier. |
| GetObjects | This function can be used to access all the Objects loaded in the ContentFile. |
| UnloadAsync | Begin an asynchronous unload of the ContentFile. |
| WaitForCompletion | Blocks on the main thread until the load operation completes. This function can be slow and so should be used carefully to avoid frame rate stuttering. |


            
