This version of Unity is unsupported.



# [EditorSceneManager](SceneManagement.EditorSceneManager.html).NewSceneCreatedCallback




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

public delegate void NewSceneCreatedCallback([SceneManagement.Scene](SceneManagement.Scene.html) scene,
[SceneManagement.NewSceneSetup](SceneManagement.NewSceneSetup.html) setup,
[SceneManagement.NewSceneMode](SceneManagement.NewSceneMode.html) mode);






### Parameters



| Parameter | Description |
| --- | --- |
| scene | The Scene that was created. |
| setup | The setup mode used when creating the Scene. |
| mode | The mode used for creating the Scene. |





### Description



Callbacks of this type which have been added to the [newSceneCreated](SceneManagement.EditorSceneManager-newSceneCreated.html) event are called after a new Scene has been created.


            
