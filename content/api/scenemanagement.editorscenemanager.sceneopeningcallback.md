This version of Unity is unsupported.



# [EditorSceneManager](SceneManagement.EditorSceneManager.html).SceneOpeningCallback




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

public delegate void SceneOpeningCallback(string path,
[SceneManagement.OpenSceneMode](SceneManagement.OpenSceneMode.html) mode);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Path of the Scene to be opened. This is relative to the Project path. |
| mode | Mode that is used when opening the Scene. |





### Description



Callbacks of this type which have been added to the [sceneOpening](SceneManagement.EditorSceneManager-sceneOpening.html) event are called just before opening a Scene.


            
