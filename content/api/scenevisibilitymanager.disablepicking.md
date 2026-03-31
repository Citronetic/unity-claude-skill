This version of Unity is unsupported.



# [SceneVisibilityManager](SceneVisibilityManager.html).DisablePicking




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

public void DisablePicking([GameObject](GameObject.html) gameObject,
bool includeDescendants);






## Declaration

public void DisablePicking(GameObject[] gameObjects,
bool includeDescendants);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObject | GameObject on which to disable picking. |
| includeDescendants | Whether to include descendants. |
| gameObjects | Array of GameObjects on which to disable picking. |





### Description



Disables picking on a GameObject, or an Array of GameObjects, and their descendants.




---








## Declaration

public void DisablePicking([SceneManagement.Scene](SceneManagement.Scene.html) scene);






### Parameters



| Parameter | Description |
| --- | --- |
| scene | Scene containing GameObjects on which to disable picking. |





### Description



Disables picking on all GameObjects in a Scene.


            
