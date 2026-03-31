This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).GetPropertyModifications




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

public static PropertyModification[] GetPropertyModifications([Object](Object.html) targetPrefab);






### Parameters



| Parameter | Description |
| --- | --- |
| targetPrefab | Can be a Prefab instance in the scene or a Prefab instance in an Prefab Asset (e.g a Variant asset). |





### Description



Returns all modifications that have been applied to a particular prefab instance in a scene or modifications for a prefab instance in an asset.





This method returns an array of [PropertyModification](PropertyModification.html) objects that represent all modifications that have been applied to the given Prefab instance.

For details about the fields of the returned [PropertyModification](PropertyModification.html) objects, refer to [SetPropertyModifications](PrefabUtility.SetPropertyModifications.html) .

Alternatively, use [GetObjectOverrides](PrefabUtility.GetObjectOverrides.html), which has Apply and Revert functionality to get property overrides information for a prefab instance.

GetPropertyModifications has the following limitations:



          - It returns both default and non-default overrides.

          - It returns overrides for all child GameObjects and their components.

          - It returns overrides that are no longer valid.

          - It can return null.







Additional resources:
[GetObjectOverrides](PrefabUtility.GetObjectOverrides.html)
[GetAddedComponents](PrefabUtility.GetAddedComponents.html) [GetRemovedComponents](PrefabUtility.GetRemovedComponents.html) [GetAddedGameObjects](PrefabUtility.GetAddedGameObjects.html)
[GetRemovedGameObjects](PrefabUtility.GetRemovedGameObjects.html).


            
