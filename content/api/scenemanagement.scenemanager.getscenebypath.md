This version of Unity is unsupported.



# [SceneManager](SceneManagement.SceneManager.html).GetSceneByPath




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

public static [SceneManagement.Scene](SceneManagement.Scene.html) GetSceneByPath(string scenePath);






### Parameters



| Parameter | Description |
| --- | --- |
| scenePath | Path of the Scene. Should be relative to the project folder. Like: "Assets/MyScenes/MyScene.unity". |





### Returns



**Scene**
        A reference to the Scene, if valid. If not, an invalid Scene is returned.





### Description



Searches all Scenes loaded for a Scene that has the given asset path.


            
