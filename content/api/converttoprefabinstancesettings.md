This version of Unity is unsupported.



# ConvertToPrefabInstanceSettings





class in
          UnityEditor


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



















### Description



Settings controlling the behavior of [PrefabUtility.ConvertToPrefabInstance](PrefabUtility.ConvertToPrefabInstance.html).





### Properties



| Property | Description |
| --- | --- |
| changeRootNameToAssetName | Change the name of the root GameObject to match the name of the Prefab Asset used when converting. |
| componentsNotMatchedBecomesOverride | If a Component is not matched up then it can become an added Component on the new Prefab instance. This property is only used when used together with ObjectMatchMode.ByHierarchy. |
| gameObjectsNotMatchedBecomesOverride | If a GameObject is not matched up then it can become an added GameObject on the new Prefab instance. This property is only used when used together with ObjectMatchMode.ByHierarchy. |
| logInfo | Enables logging to the console with information about which objects were matched when converting a plain GameObject to a Prefab instance. |
| objectMatchMode | Use this property to control how GameObjects and Components are matched up or not when converting a plain GameObject to a Prefab instance. |
| recordPropertyOverridesOfMatches | When a Component or GameObject is matched with objects in the Prefab Asset then existing values can be recorded as overrides on the new Prefab instance if this property is set to true. |


            
