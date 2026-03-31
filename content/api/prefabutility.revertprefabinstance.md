This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).RevertPrefabInstance




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













                        **Obsolete**
                        Use the overload that takes an InteractionMode parameter.




## Declaration

public static bool RevertPrefabInstance([GameObject](GameObject.html) go);






## Declaration

public static void RevertPrefabInstance([GameObject](GameObject.html) instanceRoot,
[InteractionMode](InteractionMode.html) action);






### Parameters



| Parameter | Description |
| --- | --- |
| instanceRoot | The root of the Prefab instance. |
| action | The interaction mode for this action. |





### Description



Reverts all overrides on a Prefab instance.





This reverts all property overrides, added and removed components, and added child GameObjects (including added child Prefab instances).

The Transform position and rotation of a root GameObject in a Prefab instance is not cleared, nor are other [default override](PrefabUtility.IsDefaultOverride.html) properties.


            
