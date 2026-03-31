This version of Unity is unsupported.



# [SceneManagerAPI](SceneManagement.SceneManagerAPI.html).GetSceneByBuildIndex




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

protected [SceneManagement.Scene](SceneManagement.Scene.html) GetSceneByBuildIndex(int buildIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| buildIndex | Build index as returned by SceneManagement.SceneManagerApi.GetNumScenesInBuildSettings. |





### Returns



**Scene**
        A reference to the Scene, if valid. If not, an invalid Scene is returned.





### Description



Override for customizing the behavior of the [SceneManager.GetSceneByBuildIndex](SceneManagement.SceneManager.GetSceneByBuildIndex.html) function.


            
