This version of Unity is unsupported.



# ISelectorEngine





interface in
          UnityEditor.SearchService


                  Leave feedback





Implements interfaces:[ISearchEngineBase](SearchService.ISearchEngineBase.html)




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



The base interface for search engines that implement an object select operation.





In an object select operation, the search engine opens a window from which users can select from a list of items returned by a search query. The search engine is responsible for the windowing and the searching. SearchService.ObjectSelector uses this type of search.





### Public Methods



| Method | Description |
| --- | --- |
| SelectObject | This function is called when a window must be opened to perform a search and select operation. |
| SetSearchFilter | This function is called when the initial search text for the object selector window is set. |


            
