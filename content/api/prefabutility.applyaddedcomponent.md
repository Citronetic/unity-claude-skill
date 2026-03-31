This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).ApplyAddedComponent




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

public static void ApplyAddedComponent([Component](Component.html) component,
string assetPath,
[InteractionMode](InteractionMode.html) action);






### Parameters



| Parameter | Description |
| --- | --- |
| action | The interaction mode for this action. |
| assetPath | The path of the Prefab Asset to apply to. |
| component | The added component on the Prefab instance to apply. |





### Description



Applies the added component to the Prefab Asset at the given asset path.





This method allows you to apply an added component to an existing prefab. It mirrors the **Apply** functionality in the Editor, as described in the [Apply overrides to the prefab asset](../Manual/PrefabInstanceOverrides.html#apply-overrides-to-the-prefab-asset) documentation. To use this method, you must first add a component to an existing prefab instance.

An added component is a type of [Instance Override](../Manual/PrefabInstanceOverrides.html). The act of applying the added component to the prefab means the component becomes part of the prefab asset, and is no longer an override on the prefab instance.

You must provide the asset path because nested prefabs might offer multiple targets for applying changes. For example, a component added to a GameObject in a [nested Prefab](../Manual/NestedPrefabs.html) could be applied to either the inner nested prefab asset or the outer root prefab asset. The asset path specifies which prefab asset receives the change.

To get the asset path of the prefab that contains the component, use [PrefabUtility.GetPrefabAssetPathOfNearestInstanceRoot](PrefabUtility.GetPrefabAssetPathOfNearestInstanceRoot.html). This method returns the path to the prefab asset file that corresponds to the nearest prefab instance root in the Hierarchy.

For more information, refer to [Override prefab instances](../Manual/PrefabInstanceOverrides.html).

Additional resources: [PrefabUtility.ApplyAddedGameObject](PrefabUtility.ApplyAddedGameObject.html), [PrefabUtility.ApplyObjectOverride](PrefabUtility.ApplyObjectOverride.html), [PrefabUtility.ApplyPropertyOverride](PrefabUtility.ApplyPropertyOverride.html), [PrefabUtility.ApplyRemovedComponent](PrefabUtility.ApplyRemovedComponent.html), [PrefabUtility.ApplyPrefabInstance](PrefabUtility.ApplyPrefabInstance.html), [PrefabUtility.ApplyRemovedGameObject](PrefabUtility.ApplyRemovedGameObject.html).


            
