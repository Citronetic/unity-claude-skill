This version of Unity is unsupported.



# SceneSearchContext





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



A search context implementation for Scene search engines. All methods that are called on a Scene search engine, and expect a [ISearchContext](SearchService.ISearchContext.html), receive an object of this type.





### Properties



| Property | Description |
| --- | --- |
| engineScope | An enum that identifies the scope of the current search. This property is automatically set to SearchService.Scene.EngineScope. |
| guid | A unique identifier for this search context. |
| requiredTypeNames | An IEnumerable of strings that contains the type name constraints for this search. |
| requiredTypes | An IEnumerable of types that contains the type constraints for this search. |
| rootProperty | The root HierarchyProperty on which the search is started. |


            
