This version of Unity is unsupported.



# [SceneManager](SceneManagement.SceneManager.html).GetSceneByBuildIndex




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

public static [SceneManagement.Scene](SceneManagement.Scene.html) GetSceneByBuildIndex(int buildIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| buildIndex | Build index as shown in the Build Settings window. |





### Returns



**Scene**
        A reference to the Scene, if valid. If not, an invalid Scene is returned.





### Description



Get a Scene struct from a build index.





This method will return a valid Scene if a Scene has been added to the build settings at the given build index AND the Scene is loaded. If it has not been loaded yet the SceneManager cannot return a valid Scene.

Additional resources: [SceneManager.GetSceneAt](SceneManagement.SceneManager.GetSceneAt.html), SceneUtility.GetBuildIndexBySceneName.


            
