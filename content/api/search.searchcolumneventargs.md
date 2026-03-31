This version of Unity is unsupported.



# SearchColumnEventArgs





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



Search column event arguments are used by [SearchColumn.getter](Search.SearchColumn-getter.html), [SearchColumn.drawer](Search.SearchColumn-drawer.html) and [SearchColumn.setter](Search.SearchColumn-setter.html) delegates.





### Properties



| Property | Description |
| --- | --- |
| column | Search column being handled by the current event. |
| context | Search context being used for the current event. |
| focused | Indicates if the search column cell is currently focused. |
| item | Search item currently being used for the event. |
| multiple | Indicates if multiple search results are currently selected when processing the current event. |
| rect | UnityEngine.Rect used to indicate the drawing boudaries of the SearchColumn.drawer event. |
| selected | Indicates if the search result is currently selected. |
| value | Value obtained from SearchColumn.getter before calling SearchColumn.drawer. |


            
