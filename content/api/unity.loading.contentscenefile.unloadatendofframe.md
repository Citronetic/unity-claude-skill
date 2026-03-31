This version of Unity is unsupported.



# [ContentSceneFile](Unity.Loading.ContentSceneFile.html).UnloadAtEndOfFrame




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

public bool UnloadAtEndOfFrame();






### Returns



**bool**
        True if successful. False if the scene is not in a state that can be unloaded.





### Description



Will trigger the scene to unload at the end of the frame.





This must be called on a [ContentSceneFile](Unity.Loading.ContentSceneFile.html) even if the status is [SceneLoadingStatus.Failed](Unity.Loading.SceneLoadingStatus.Failed.html) in order to release internal resources.

The call will fail if the scene is not in an unloadable state. For example, it is actively being loaded or unloaded.


            
