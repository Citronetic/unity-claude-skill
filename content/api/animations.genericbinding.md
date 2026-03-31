This version of Unity is unsupported.



# GenericBinding





struct in
          UnityEngine.Animations



/



Implemented in:[UnityEngine.AnimationModule](UnityEngine.AnimationModule.html)


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



















### Description



Defines an animatable property on a Unity Component.





[GenericBinding](Animations.GenericBinding.html) and [BoundProperty](Animations.BoundProperty.html) are classes for animating properties on objects in a completely generic way.

See also [GenericBindingUtility](Animations.GenericBindingUtility.html).





### Properties



| Property | Description |
| --- | --- |
| customTypeID | The internal ID for custom animation bindings. |
| isDiscrete | This property is true when the GenericBinding target is an animatable public integer. |
| isObjectReference | This property is True when this GenericBinding target is an animatable Unity object reference, such as a sprite. |
| isSerializeReference | This property is True when this GenericBinding target is a serialized reference property. |
| propertyNameHash | Hash ID that represents the name of the property. |
| scriptEntityId | The EntityId of the script. |
| transformPathHash | Hash ID that represents the transform path. Use this property to locate the component in the transform hierarchy. |
| typeID | The Unity component type ID. |


            
