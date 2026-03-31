This version of Unity is unsupported.



# PropertyVisitor





class in
          Unity.Properties



/



Implemented in:[UnityEngine.PropertiesModule](UnityEngine.PropertiesModule.html)


                  Leave feedback





Implements interfaces:[ICollectionPropertyVisitor](Unity.Properties.ICollectionPropertyVisitor.html), [IDictionaryPropertyBagVisitor](Unity.Properties.IDictionaryPropertyBagVisitor.html), [IDictionaryPropertyVisitor](Unity.Properties.IDictionaryPropertyVisitor.html), [IListPropertyBagVisitor](Unity.Properties.IListPropertyBagVisitor.html), [IListPropertyVisitor](Unity.Properties.IListPropertyVisitor.html), [IPropertyBagVisitor](Unity.Properties.IPropertyBagVisitor.html), [IPropertyVisitor](Unity.Properties.IPropertyVisitor.html), [ISetPropertyVisitor](Unity.Properties.ISetPropertyVisitor.html)




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



Base class for implementing algorithms using properties. This is an abstract class.





### Public Methods



| Method | Description |
| --- | --- |
| AddAdapter | Adds an adapter to the visitor. |
| RemoveAdapter | Removes an adapter from the visitor. |





### Protected Methods



| Method | Description |
| --- | --- |
| IsExcluded | Called before visiting each property to determine if the property should be visited. |
| VisitCollection | Called when visiting any non-specialized collection property. |
| VisitDictionary | Called when visiting a specialized dictionary property. |
| VisitList | Called when visiting a specialized list property. |
| VisitProperty | Called when visiting any leaf property with no specialized handling. |
| VisitSet | Called when visiting a specialized set property. |


            
