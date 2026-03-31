This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).IsAddedComponentOverride




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

public static bool IsAddedComponentOverride([Object](Object.html) component);






### Parameters



| Parameter | Description |
| --- | --- |
| component | The component to check. |





### Returns



**bool**
        True if the component is an added component.





### Description



Returns true if the given component is added to a Prefab instance as an override.





Returns true if the component exists on the Prefab instance and not on the Prefab Asset. Returns false if the component exists on the Prefab Asset too, or if it’s a component on a regular GameObject which is not part of a Prefab instance.


            
