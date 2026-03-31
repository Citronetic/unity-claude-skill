This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).ConvertToPrefabInstance




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

public static void ConvertToPrefabInstance([GameObject](GameObject.html) plainGameObject,
[GameObject](GameObject.html) prefabAssetRoot,
[ConvertToPrefabInstanceSettings](ConvertToPrefabInstanceSettings.html) settings,
[InteractionMode](InteractionMode.html) mode);






### Parameters



| Parameter | Description |
| --- | --- |
| plainGameObject | The GameObject that will be converted to a Prefab instance. |
| prefabAssetRoot | The Prefab Asset used to create the Prefab instance from. |
| settings | Settings to control the conversion. |
| mode | Using UserAction will record undo and show dialogs if needed. |





### Description



Convert the plain GameObject to a Prefab instance using the provided Prefab Asset root object.





This function will keep the root GameObject position, rotation and scale in the Scene but merge the contents from the new Prefab Asset. When using [ObjectMatchMode.ByName](ObjectMatchMode.ByName.html) object matching is performed. When a match is found references to this object will survive the conversion. Note that matching cannot be performed for GameObjects with duplicate names in each of the input GameObject hierarchies.

Additional resources: [ConvertToPrefabInstances](PrefabUtility.ConvertToPrefabInstances.html), [ReplacePrefabAssetOfPrefabInstance](PrefabUtility.ReplacePrefabAssetOfPrefabInstance.html).


            
