This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).ReplacePrefabAssetOfPrefabInstances




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

public static void ReplacePrefabAssetOfPrefabInstances(GameObject[] prefabInstanceRoots,
[GameObject](GameObject.html) prefabAssetRoot,
[InteractionMode](InteractionMode.html) mode);






## Declaration

public static void ReplacePrefabAssetOfPrefabInstances(GameObject[] prefabInstanceRoots,
[GameObject](GameObject.html) prefabAssetRoot,
[PrefabReplacingSettings](PrefabReplacingSettings.html) settings,
[InteractionMode](InteractionMode.html) mode);






### Parameters



| Parameter | Description |
| --- | --- |
| prefabInstanceRoots | The Prefab instance roots that will have their Prefab Asset replaced. |
| prefabAssetRoot | The new Prefab Asset used for the Prefab instances. |
| mode | The interaction mode used. |
| settings | The settings used to control the details of the replacements. |





### Description



Replace the Prefab Asset for an array of Prefab instances that exists in Scenes or for nested Prefab instances inside another Prefab.





This function is similar to the [ReplacePrefabAssetOfPrefabInstance](PrefabUtility.ReplacePrefabAssetOfPrefabInstance.html) method, except it will perform the operation on each of the Prefab instances in the input.


            
