This version of Unity is unsupported.



# [SearchProvider](Search.SearchProvider.html).fetchItems




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












                    public Func<SearchContext,List<SearchItem>,SearchProvider,object> fetchItems;






### Description



MANDATORY: Handler to get items for a given search context. The return value is an object that can be of type IEnumerable or IEnumerator. The enumeration of those objects should return SearchItems.





For different use cases see [SearchProvider](Search.SearchProvider.html), [SearchProvider.id](Search.SearchProvider-id.html), [SearchProvider.isExplicitProvider](Search.SearchProvider-isExplicitProvider.html), [SearchProvider.priority](Search.SearchProvider-priority.html).


            
