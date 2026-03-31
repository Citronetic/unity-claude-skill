This version of Unity is unsupported.



# [ContentSceneFile](Unity.Loading.ContentSceneFile.html).IntegrateAtEndOfFrame




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

public void IntegrateAtEndOfFrame();






### Description



Calling this will cause the scene to integrate at the end of the frame.





It's unnecessary to call this if you set the Unity.Loading.ContentSceneParameters.AutoIntegrate property to true.
This should only be called when the [ContentSceneFile.Status](Unity.Loading.ContentSceneFile.Status.html) is [SceneLoadingStatus.WaitingForIntegrate](Unity.Loading.SceneLoadingStatus.WaitingForIntegrate.html).


            
