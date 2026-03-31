This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).ApplyRemovedComponent




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

public static void ApplyRemovedComponent([GameObject](GameObject.html) instanceGameObject,
[Component](Component.html) assetComponent,
[InteractionMode](InteractionMode.html) action);






### Parameters



| Parameter | Description |
| --- | --- |
| instanceGameObject | The GameObject on the Prefab instance which the component has been removed from. |
| assetComponent | The component on the Prefab Asset corresponding to the removed component on the instance. |
| action | The interaction mode for this action. |





### Description



Removes the component from the Prefab Asset which has the component on it.





When a component is removed from a Prefab instance, that modification is a type of [Instance Override](../Manual/PrefabInstanceOverrides.html). The act of applying the change (the removal of the component) to the Prefab means the component is removed from the Prefab Asset itself, and is no longer an override on the Prefab instance.

This method allows you to apply a "removed component" change to an existing Prefab. It mirrors the **Apply** functionality in the Editor, as described in the [Apply overrides to the prefab asset](../Manual/PrefabInstanceOverrides.html#apply-overrides-to-the-prefab-asset) documentation. To use this method, you must first remove a component from an existing Prefab instance.

For more information, refer to [Override prefab instances](../Manual/PrefabInstanceOverrides.html).

Additional resources:  [PrefabUtility.ApplyAddedComponent](PrefabUtility.ApplyAddedComponent.html), [PrefabUtility.ApplyAddedGameObject](PrefabUtility.ApplyAddedGameObject.html), [PrefabUtility.ApplyObjectOverride](PrefabUtility.ApplyObjectOverride.html), [PrefabUtility.ApplyPropertyOverride](PrefabUtility.ApplyPropertyOverride.html), [PrefabUtility.ApplyPrefabInstance](PrefabUtility.ApplyPrefabInstance.html), [PrefabUtility.ApplyRemovedGameObject](PrefabUtility.ApplyRemovedGameObject.html).


            
