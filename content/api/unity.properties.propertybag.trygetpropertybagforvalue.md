This version of Unity is unsupported.



# [PropertyBag](Unity.Properties.PropertyBag.html).TryGetPropertyBagForValue




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

public static bool TryGetPropertyBagForValue(ref TValue value,
out [Unity.Properties.IPropertyBag](Unity.Properties.IPropertyBag.html) propertyBag);






### Parameters



| Parameter | Description |
| --- | --- |
| value | The value type to retrieve a property bag for. |
| propertyBag | When this method returns, contains the property bag associated with the specified value, if the bag is found; otherwise, null. |





### Returns



**bool**

          `true` if the property bag was found for the specified value; otherwise, `false`.





### Description



Gets a property bag for the concrete type of the given value.


            
