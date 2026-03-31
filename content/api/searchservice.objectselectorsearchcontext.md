This version of Unity is unsupported.



# ObjectSelectorSearchContext





class in
          UnityEditor.SearchService


                  Leave feedback





Implements interfaces:[ISearchContext](SearchService.ISearchContext.html)




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



A search context implementation for ObjectSelector search engines. All methods that are called on an ObjectSelector search engine, and expect a [ISearchContext](SearchService.ISearchContext.html), receive an object of this type.





### Properties



| Property | Description |
| --- | --- |
| allowedInstanceIds | IEnumerable of integers that contains the instanceIds of objects that the search can include in its results. |
| currentObject | Identifies the currently selected object. |
| editedObjects | When the object selector is opened from an Inspector, this property indicates which objects are currently being edited. |
| endSessionModes | Flags describing the different modes that EndSession is in. |
| engineScope | An enum that identifies the scope of the current search. This property is automatically set to SearchService.ObjectSelector.EngineScope. |
| guid | A unique identifier for this search context. |
| requiredTypeNames | An IEnumerable of strings that contains the type name constraints for this search. |
| requiredTypes | An IEnumerable of types that contains the type constraints for this search. |
| visibleObjects | Indicates which categories of objects are visible in the window. For example, GameObjects, Assets, or both. |


            
