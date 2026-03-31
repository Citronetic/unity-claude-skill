This version of Unity is unsupported.



# [EditorSceneManager](SceneManagement.EditorSceneManager.html).SceneSavingCallback




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

public delegate void SceneSavingCallback([SceneManagement.Scene](SceneManagement.Scene.html) scene,
string path);






### Parameters



| Parameter | Description |
| --- | --- |
| scene | The Scene to be saved. |
| path | The path to which the Scene is saved. |





### Description



Callbacks of this type which have been added to the [sceneSaving](SceneManagement.EditorSceneManager-sceneSaving.html) event are called just before the Scene is saved.


            
