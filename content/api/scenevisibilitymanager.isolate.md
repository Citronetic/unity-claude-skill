This version of Unity is unsupported.



# [SceneVisibilityManager](SceneVisibilityManager.html).Isolate




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

public void Isolate([GameObject](GameObject.html) gameObject,
bool includeDescendants);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObject | GameObject to isolate. |
| includeDescendants | Whether to include descendants. |





### Description



Isolates a GameObject and its descendants.





If a GameObject is already in Isolation mode when calling this method, the isolated GameObject is hidden.




---








## Declaration

public void Isolate(GameObject[] gameObjects,
bool includeDescendants);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObjects | Array of GameObjects to isolate. |
| includeDescendants | Whether to include descendants. |





### Description



Isolates an Array of GameObjects and their descendants.





If a GameObject is already in Isolation mode when calling this method, the isolated GameObject is hidden.


            
