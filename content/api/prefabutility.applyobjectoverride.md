This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).ApplyObjectOverride




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

public static void ApplyObjectOverride([Object](Object.html) instanceComponentOrGameObject,
string assetPath,
[InteractionMode](InteractionMode.html) action);






### Parameters



| Parameter | Description |
| --- | --- |
| instanceComponentOrGameObject | The object on the Prefab instance to apply. |
| assetPath | The path of the Prefab Asset to apply to. |
| action | The interaction mode for this action. |





### Description



Applies all overridden properties on a Prefab instance component or GameObject to the Prefab Asset at the given asset path.





This method allows you to apply modified property values to an existing Prefab. It mirrors the **Apply** functionality in the Editor, as described in the [Apply overrides to the prefab asset](../Manual/PrefabInstanceOverrides.html#apply-overrides-to-the-prefab-asset) documentation. To use this method, you must first modify one or more property values on an existing Prefab instance.

                If you pass a GameObject as the object parameter, only the overrides on the GameObject itself are applied (such as layer, tag, and static flags); not its components or child GameObjects. If you pass a Component as the object parameter, only the overrides on that Component are applied. To apply all overrides of a Prefab, you can use [PrefabUtility.ApplyPrefabInstance](PrefabUtility.ApplyPrefabInstance.html).

Modified property values on a Prefab instance are a type of [Instance Override](../Manual/PrefabInstanceOverrides.html). The act of applying the modified property values to the Prefab means the modifed values become part of the Prefab Asset, and are no longer overrides.

When applying modified property values to a Prefab Asset, you must supply the asset path as a parameter. This is because there are some situations where there are multiple possible targets to apply the change to. For example, if the property values have been modified on a GameObject that is part of a [nested Prefab](../Manual/NestedPrefabs.html), you may have the choice of applying the change to the inner nested Prefab Asset, or to the outer root Prefab Asset. Therefore, by specifying the asset path, you make it clear to Unity which Prefab Asset the change must be applied to.

For more information, refer to [Override prefab instances](../Manual/PrefabInstanceOverrides.html).

Additional resources: [PrefabUtility.ApplyAddedComponent](PrefabUtility.ApplyAddedComponent.html), [PrefabUtility.ApplyAddedGameObject](PrefabUtility.ApplyAddedGameObject.html), [PrefabUtility.ApplyPropertyOverride](PrefabUtility.ApplyPropertyOverride.html), [PrefabUtility.ApplyRemovedComponent](PrefabUtility.ApplyRemovedComponent.html), [PrefabUtility.ApplyPrefabInstance](PrefabUtility.ApplyPrefabInstance.html), [PrefabUtility.ApplyRemovedGameObject](PrefabUtility.ApplyRemovedGameObject.html).


            
