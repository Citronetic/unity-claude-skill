This version of Unity is unsupported.



# [SceneVisibilityManager](SceneVisibilityManager.html).IsPickingDisabledOnAllDescendants




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

public bool IsPickingDisabledOnAllDescendants([SceneManagement.Scene](SceneManagement.Scene.html) scene);






### Parameters



| Parameter | Description |
| --- | --- |
| scene | Scene to check. |





### Returns



**bool**
        Returns true if all descendants have picking disabled.





### Description



Checks whether all the descendants of a GameObject have picking disabled.




---








## Declaration

public bool IsPickingDisabledOnAllDescendants([GameObject](GameObject.html) gameObject);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObject | GameObject to check. |





### Returns



**bool**
        Returns true if all root GameObjects of the Scene and all their descendants have picking disabled.





### Description



Checks whether root GameObjects, and all their descendants, have picking disabled in a scene.


            
