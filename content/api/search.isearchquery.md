This version of Unity is unsupported.



# ISearchQuery





interface in
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



This search query interface is used when handling search query objects. These can be either assets saved in the user project or saved in the user preferences.





### Properties



| Property | Description |
| --- | --- |
| creationTime | Indicates the binary long time of when the search query was created. |
| details | Search query description. |
| displayName | Search query display name used in the UI. |
| filePath | Indicates where the search query is saved on disk. |
| guid | Unique GUID of the search query. |
| isSearchTemplate | Indicates if the search query is displayed as a search template in the search view home page. |
| itemCount | Provides a preview of how many results this query might yield if executed. |
| lastUsedTime | Indicates the last time the query was executed. |
| searchText | Search query text. |
| thumbnail | Search query icon thumbnail set by the user if any. |





### Public Methods



| Method | Description |
| --- | --- |
| GetName | Returns the formatted name of the query depending on its source. |
| GetProviderIds | Returns the list of provider ids that search query is executed with. |
| GetProviderTypes | Returns the list of aggregated type ids the search query executes with. |
| GetSearchTable | Returns the query search table configuration if any. |
| GetViewState | Returns the search query view state. |


            
