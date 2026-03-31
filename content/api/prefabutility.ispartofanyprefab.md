This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).IsPartOfAnyPrefab




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

public static bool IsPartOfAnyPrefab([Object](Object.html) componentOrGameObject);






### Parameters



| Parameter | Description |
| --- | --- |
| componentOrGameObject | The object to check. Must be a component or GameObject. |





### Returns



**bool**
        True if the object is part of a Prefab.





### Description



Returns true if the given object is part of a Prefab Asset or Prefab instance.





For prefab contents loaded in prefab editing mode, this method doesn't check the prefab asset the loaded contents are loaded from, since these prefab contents are loaded into a preview scene and are not part of an asset while being edited in prefab editing mode. This means that for prefab contents in prefab editing mode, the method only returns true for objects that are part of a prefab instance. To check if an object is part of the prefab's contents in prefab editing mode, use [PrefabStage.IsPartOfPrefabContents](SceneManagement.PrefabStage.IsPartOfPrefabContents.html).


            
