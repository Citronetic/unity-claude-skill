This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).IsPartOfPrefabAsset




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

public static bool IsPartOfPrefabAsset([Object](Object.html) componentOrGameObject);






### Parameters



| Parameter | Description |
| --- | --- |
| componentOrGameObject | The object to check. Must be a component or GameObject. |





### Returns



**bool**
        True if the object is part of a Prefab Asset.





### Description



Returns true if the given object is part of a Prefab Asset.





Returns false if the object is part of a Prefab instance in a scene. To check if an object is part of a Prefab instance in a scene, use [PrefabUtility.IsPartOfNonAssetPrefabInstance](PrefabUtility.IsPartOfNonAssetPrefabInstance.html).

It also returns false for prefab contents loaded in prefab editing mode, since these prefab contents are loaded into a preview scene and are not part of an asset while being edited in prefab editing mode. To check if an object is part of the prefab's contents in prefab editing mode, use [PrefabStage.IsPartOfPrefabContents](SceneManagement.PrefabStage.IsPartOfPrefabContents.html).


            
