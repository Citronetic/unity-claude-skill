This version of Unity is unsupported.



# [PropertyBag](Unity.Properties.PropertyBag.html).GetPropertyBag




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

public static [Unity.Properties.IPropertyBag](Unity.Properties.IPropertyBag.html) GetPropertyBag(Type type);






### Parameters



| Parameter | Description |
| --- | --- |
| type | The container type to resolve the property bag for. |





### Returns



**IPropertyBag**
        The resolved property bag.





### Description



Gets an interface to the PropertyBag_1 for the given type.





The returned [IPropertyBag](Unity.Properties.IPropertyBag.html) can be used to get the strongly typed generic using the IPropertyBagAccept interface method.




---








## Declaration

public static IPropertyBag<TContainer> GetPropertyBag();






### Returns



**IPropertyBag<TContainer>**
        The resolved property bag, strongly typed.





### Description



Gets the strongly typed PropertyBag_1 for the given `TContainer`.


            
