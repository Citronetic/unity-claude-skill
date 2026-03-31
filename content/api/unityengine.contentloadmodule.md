This version of Unity is unsupported.



# UnityEngine.ContentLoadModule




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



The ContentLoad module implements the ContentLoadInterface class and related APIs to load data from ContentFiles.





### Classes



| Class | Description |
| --- | --- |
| ContentLoadInterface | API Interface for loading and unloading Content files. |





### Structs



| Struct | Description |
| --- | --- |
| ContentFile | This struct acts like a handle for accessing a file loaded by ContentLoadInterface.LoadContentFileAsync. You can use it to access the status and results of the load operation. |
| ContentFileUnloadHandle | A handle that can be used to track the progress of an unload operation. This is returned from ContentFile.UnloadAsync. |
| ContentSceneFile | The handle returned from ContentLoadInterface.LoadSceneAsync. You can use this handle to access the status and results of the load operation. |
| ContentSceneParameters | This struct collects all the ContentLoadInterface.LoadSceneAsync parameters in to a single place. |





### Enumerations



| Enumeration | Description |
| --- | --- |
| LoadingStatus | The loading status of a ContentFile. |
| SceneLoadingStatus | The loading status of a ContentSceneFile. This is accessed by ContentSceneFile.Status. |


            
