This version of Unity is unsupported.



# SearchMonitor





class in
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



The search monitor is responsible to track any changes that occurs in Unity in order to update search indexes or other search data structure at runtime.





### Static Properties



| Property | Description |
| --- | --- |
| pending | Indicates if the changes still need to be processed by the search backend. |





### Static Methods



| Method | Description |
| --- | --- |
| GetDiff | Returns the assets that changed since a point in time. |
| GetView | Returns a SearchMonitorView to access Search's main PropertyDatabases. |
| RaiseContentRefreshed | Mark content to be refreshed. |
| Reset | Reset the search property database content, invalidating all caches. |





### Events



| Event | Description |
| --- | --- |
| contentRefreshed | Event invoked when some content has changed. |
| documentsInvalidated | Event raised when documents get invalidated. |
| objectChanged | Event raised when an UnityEngine.Object changed. |
| sceneChanged | Event raised when the current loaded scene changes that might affect search results. |


            
