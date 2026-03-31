This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).IsAddedGameObjectOverride




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

public static bool IsAddedGameObjectOverride([GameObject](GameObject.html) gameObject);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObject | The GameObject to check. |





### Returns



**bool**
        True if the GameObject is an added GameObject.





### Description



Returns true if the given GameObject is added as a child to a Prefab instance as an override.





Returns true if the GameObject exists in the Prefab instance and not in the Prefab Asset. Returns false if the GameObject exists on the Prefab Asset too, or if it’s a child of a regular GameObject which is not a part of a Prefab instance.


            
