This version of Unity is unsupported.



# [GenericBindingUtility](Animations.GenericBindingUtility.html).GetAnimatableBindings




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

public static GenericBinding[] GetAnimatableBindings([GameObject](GameObject.html) targetObject,
[GameObject](GameObject.html) root);






### Parameters



| Parameter | Description |
| --- | --- |
| targetObject | The target GameObject to extract the bindings from. |
| root | A GameObject ancestor of targetObject. Use the ancestor to locate the targetObject within a transform hierarchy. |





### Returns



**GenericBinding[]**
        Returns an array of [GenericBinding](Animations.GenericBinding.html). Returns an empty array if the targetObject has no animatable properties.





### Description



Retrieves the animatable bindings for a specific GameObject.


            
