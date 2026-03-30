This version of Unity is unsupported.



# [GenericBindingUtility](Animations.GenericBindingUtility.html).BindProperties




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

public static void BindProperties([GameObject](GameObject.html) rootGameObject,
NativeArray<GenericBinding> genericBindings,
out NativeArray<BoundProperty> floatProperties,
out NativeArray<BoundProperty> discreteProperties,
[Unity.Collections.Allocator](Unity.Collections.Allocator.html) allocator);






### Parameters



| Parameter | Description |
| --- | --- |
| rootGameObject | The root GameObject. |
| genericBindings | The list of GenericBinding to bind. See GenericBindingUtility.GetAnimatableBindings, GenericBindingUtility.GetCurveBindings. |
| floatProperties | Returns the list of float bound properties for all valid generic binding. If there is an invalid binding, this param returns BoundProperty.Null. |
| discreteProperties | Returns the list of discrete bound properties for all valid generic bindings. If there is an invalid binding, this param returns BoundProperty.Null |
| allocator | Allocator for allocating NativeArray memory. |





### Description



Retrieves the list of [BoundProperty](Animations.BoundProperty.html) defined by the list of [GenericBinding](Animations.GenericBinding.html).





BoundProperty allocates resources that must be unallocated. See [GenericBindingUtility.UnbindProperties](Animations.GenericBindingUtility.UnbindProperties.html).

This method throws an ArgumentException if the genericBindings NativeArray is not created.


            
