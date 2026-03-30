This version of Unity is unsupported.



# [IFilterEngine<T0>](SearchService.IFilterEngine_1.html).Filter




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

public bool Filter([SearchService.ISearchContext](SearchService.ISearchContext.html) context,
string query,
T objectToFilter);






### Parameters



| Parameter | Description |
| --- | --- |
| context | The search context. |
| query | The query string used for the search. |
| objectToFilter | The element to test against the search query. |





### Returns



**bool**
        True if the element satisfies the search query, false otherwise.





### Description



This function checks whether or not the specified element satisfies the search query.


            
