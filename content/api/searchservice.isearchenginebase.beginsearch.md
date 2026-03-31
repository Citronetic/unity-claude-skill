This version of Unity is unsupported.



# [ISearchEngineBase](SearchService.ISearchEngineBase.html).BeginSearch




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

public void BeginSearch([SearchService.ISearchContext](SearchService.ISearchContext.html) context,
string query);






### Parameters



| Parameter | Description |
| --- | --- |
| context | The search context. |
| query | The query string used for the search. |





### Description



A function called at the beginning of each search.





A search is performed every time the search query is modified. This function is not called for [IObjectSelectorEngines](SearchService.IObjectSelectorEngine.html).

Additional resources: [ISearchEngineBase.EndSearch](SearchService.ISearchEngineBase.EndSearch.html), [ISearchEngineBase.BeginSession](SearchService.ISearchEngineBase.BeginSession.html), [ISearchEngineBase.EndSession](SearchService.ISearchEngineBase.EndSession.html).


            
