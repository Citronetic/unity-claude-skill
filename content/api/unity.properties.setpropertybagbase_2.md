This version of Unity is unsupported.



# SetPropertyBagBase<T0,T1>





class in
          Unity.Properties



/



Inherits from:[Unity.Properties.PropertyBag_1](Unity.Properties.PropertyBag_1.html)



/



Implemented in:[UnityEngine.PropertiesModule](UnityEngine.PropertiesModule.html)


                  Leave feedback





Implements interfaces:[ICollectionPropertyBag<T0,T1>](Unity.Properties.ICollectionPropertyBag_2.html), [ICollectionPropertyBagAccept<T0>](Unity.Properties.ICollectionPropertyBagAccept_1.html), [IKeyedProperties<T0,T1>](Unity.Properties.IKeyedProperties_2.html), [IPropertyBag](Unity.Properties.IPropertyBag.html), [IPropertyBag<T0>](Unity.Properties.IPropertyBag_1.html), [ISetPropertyAccept<T0>](Unity.Properties.ISetPropertyAccept_1.html), [ISetPropertyBag<T0,T1>](Unity.Properties.ISetPropertyBag_2.html), [ISetPropertyBagAccept<T0>](Unity.Properties.ISetPropertyBagAccept_1.html)




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



A IPropertyBag_1 implementation for a generic set of elements using the ISet_1 interface.





### Public Methods



| Method | Description |
| --- | --- |
| TryGetProperty | Gets the property associated with the specified name. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| InstantiationKind | Implement this property and return true to provide custom type instantiation for the container type. |






### Public Methods

| Method | Description |
| --- | --- |
| Accept | Accepts visitation from a specified ITypeVisitor. |
| CreateInstance | Creates and returns a new instance of TContainer. |
| GetProperties | Implement this method to return a PropertyCollection_1 that can enumerate through all properties for the TContainer. |
| TryCreateInstance | Tries to create a new instance of TContainer. |



### Protected Methods

| Method | Description |
| --- | --- |
| Instantiate | Implement this method to provide custom type instantiation for the container type. |







            
