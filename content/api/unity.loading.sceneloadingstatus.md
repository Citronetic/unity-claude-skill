This version of Unity is unsupported.



# SceneLoadingStatus





enumeration


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



The loading status of a [ContentSceneFile](Unity.Loading.ContentSceneFile.html). This is accessed by [ContentSceneFile.Status](Unity.Loading.ContentSceneFile.Status.html).





### Properties



| Property | Description |
| --- | --- |
| InProgress | The scene load is in progress. |
| WaitingForIntegrate | The asynchronous part of the scene loading is complete. You can now safely call ContentSceneFile.IntegrateAtEndOfFrame when you are ready to activate the scene. |
| WillIntegrateNextFrame | The scene will integrate at the end of the current frame. |
| Complete | The scene has been loaded and integrated successfully. |
| Failed | A failure occured in the scene loading process. See log for details.
Be sure to still call ContentSceneFile.UnloadAtEndOfFrame to release internal resources. |


            
