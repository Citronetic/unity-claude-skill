This version of Unity is unsupported.



# [ISearchEngineBase](SearchService.ISearchEngineBase.html).BeginSession




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

public void BeginSession([SearchService.ISearchContext](SearchService.ISearchContext.html) context);






### Parameters



| Parameter | Description |
| --- | --- |
| context | The search context. |





### Description



A function called at the beginning of a search session.





A search session is started when a user inputs the first character in the search field. This function is not called again until the next search session is started.

Additional resources: [ISearchEngineBase.EndSession](SearchService.ISearchEngineBase.EndSession.html), [ISearchEngineBase.BeginSearch](SearchService.ISearchEngineBase.BeginSearch.html), [ISearchEngineBase.EndSearch](SearchService.ISearchEngineBase.EndSearch.html).


            
