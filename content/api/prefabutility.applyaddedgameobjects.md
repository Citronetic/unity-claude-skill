This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).ApplyAddedGameObjects




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

public static void ApplyAddedGameObjects(GameObject[] gameObjects,
string assetPath,
[InteractionMode](InteractionMode.html) action);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObjects | The added GameObjects on the Prefab instance to apply. |
| assetPath | The path of the Prefab Asset to apply to. |
| action | The interaction mode for this action. |





### Description



Applies the added GameObjects to the Prefab Asset at the given asset path.





This method allows you to apply added GameObjects to an existing Prefab. It mirrors the **Apply** functionality in the Editor, as described in the [Apply overrides to the prefab asset](../Manual/PrefabInstanceOverrides.html#apply-overrides-to-the-prefab-asset) documentation. To use this method, you must first add the GameObjects to an existing Prefab instance.

An added GameObject is a type of [Instance Override](../Manual/PrefabInstanceOverrides.html). The act of applying added GameObjects to the Prefab means they will become part of the Prefab Asset, and will no longer be overrides on the Prefab instance.

When applying added GameObjects to a Prefab Asset, you must supply the asset path as a parameter. This is because there are some situations where there are multiple possible targets to apply the change to. For example, if added GameObjects have been added to a GameObject that is part of a [nested Prefab](../Manual/NestedPrefabs.html), you may have the choice of applying the changes to the inner nested Prefab Asset, or to the outer root Prefab Asset. Therefore, by specifying the asset path, you make it clear to Unity which Prefab Asset the change must be applied to.

For more information, refer to [Override prefab instances](../Manual/PrefabInstanceOverrides.html).

Additional resources: [PrefabUtility.ApplyAddedGameObject](PrefabUtility.ApplyAddedGameObject.html), [PrefabUtility.ApplyAddedComponent](PrefabUtility.ApplyAddedComponent.html), [PrefabUtility.ApplyObjectOverride](PrefabUtility.ApplyObjectOverride.html), [PrefabUtility.ApplyPropertyOverride](PrefabUtility.ApplyPropertyOverride.html), [PrefabUtility.ApplyRemovedComponent](PrefabUtility.ApplyRemovedComponent.html), [PrefabUtility.ApplyPrefabInstance](PrefabUtility.ApplyPrefabInstance.html).


            
