This version of Unity is unsupported.



# SearchMonitorView





struct in
          UnityEditor.Search


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



Scoped search monitor view.





This struct provides a view on Search's main [PropertyDatabases](Search.PropertyDatabase.html). Search offers some convenient [PropertyDatabases](Search.PropertyDatabase.html) to cache data. If this data comes from scenes or assets, those will be invalidated automatically whenever the scene or asset changes. If it comes from another source, you need to manage the invalidation process yourself with [Invalidate](Search.SearchMonitorView.Invalidate.html) and [InvalidateDocument](Search.SearchMonitorView.InvalidateDocument.html).





### Public Methods



| Method | Description |
| --- | --- |
| Invalidate | Mark a document property to be invalided. |
| InvalidateDocument | Mark a document to be invalidated. |
| StoreAlias | Store a property alias in the property string table. |
| StoreProperty | Store a property value. |
| TryLoadAlias | Gets a property alias if any. |
| TryLoadProperty | Loads a property if any. |


            
