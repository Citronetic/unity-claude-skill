This version of Unity is unsupported.



# [ISearchEngine<T0>](SearchService.ISearchEngine_1.html).Search




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

public IEnumerable<T> Search([SearchService.ISearchContext](SearchService.ISearchContext.html) context,
string query,
Action<IEnumerable<T>> asyncItemsReceived);






### Parameters



| Parameter | Description |
| --- | --- |
| context | The search context. |
| query | The query string used for the search. |
| asyncItemsReceived | Callback used to return results asynchronously. |





### Returns



**IEnumerable<T>**
        The initial search results, if any are available. If you want to return results asynchronously, and no results are available yet, return an empty list instead. If you return null, then Unity uses the default implementation.





### Description



This function returns an IEnumerable of items that satisfy the search query.





You can return items synchronously and asynchronously with this function. To return results synchronously, use the returned IEnumerable. To return results asynchronously, use the asyncItemsReceived callback that takes an IEnumerable as a parameter.

To only return results asynchronously, return an empty IEnumerable. If you return null, the default Project search is used instead.


            
