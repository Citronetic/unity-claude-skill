This version of Unity is unsupported.



# [EditorSceneManager](SceneManagement.EditorSceneManager.html).SceneClosingCallback




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

public delegate void SceneClosingCallback([SceneManagement.Scene](SceneManagement.Scene.html) scene,
bool removingScene);






### Parameters



| Parameter | Description |
| --- | --- |
| scene | The Scene that is going to be closed. |
| removingScene | Whether or not the Scene is also going to be removed from the Scene Manager after closing. If true the Scene is removed after closing. |





### Description



Callbacks of this type which have been added to the [sceneClosing](SceneManagement.EditorSceneManager-sceneClosing.html) event are called just before a Scene is closed.


            
