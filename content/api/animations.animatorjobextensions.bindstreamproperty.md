This version of Unity is unsupported.



# [AnimatorJobExtensions](Animations.AnimatorJobExtensions.html).BindStreamProperty




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

public static [Animations.PropertyStreamHandle](Animations.PropertyStreamHandle.html) BindStreamProperty([Animator](Animator.html) animator,
[Transform](Transform.html) transform,
Type type,
string property);






## Declaration

public static [Animations.PropertyStreamHandle](Animations.PropertyStreamHandle.html) BindStreamProperty([Animator](Animator.html) animator,
[Transform](Transform.html) transform,
Type type,
string property,
bool isObjectReference = false);






### Parameters



| Parameter | Description |
| --- | --- |
| animator | The Animator instance that calls this method. |
| transform | The Transform to target. |
| type | The Component type. |
| property | The property to bind. |
| isObjectReference | isObjectReference need to be set to true if the property to bind does animate an Object like SpriteRenderer.sprite. |





### Returns



**PropertyStreamHandle**
        Returns the PropertyStreamHandle that represents the new binding.





### Description



Create a PropertyStreamHandle representing the new binding on the [Component](Component.html) property of a [Transform](Transform.html) already bound to the [Animator](Animator.html).





You can bind a property that doesn't exist yet. For example you can bind a property on a [MonoBehaviour](MonoBehaviour.html) that will be added later dynamically. In this case, you need to manually resolve the handle after adding the [MonoBehaviour](MonoBehaviour.html) on the [GameObject](GameObject.html), using [ResolveAllStreamHandles](Animations.AnimatorJobExtensions.ResolveAllStreamHandles.html).


            
