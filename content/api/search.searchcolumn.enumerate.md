This version of Unity is unsupported.



# [SearchColumn](Search.SearchColumn.html).Enumerate




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

public static List<SearchColumn> Enumerate([Search.SearchContext](Search.SearchContext.html) context,
IEnumerable<SearchItem> items);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Search context. |
| items | Items for which to fetch a set of columns. |





### Returns



**List<SearchColumn>**
        Search columns.





### Description



Enumerate a set of columns for a variety of search items.





This funciton would essentially be used with [SearchProvider.fetchColumns](Search.SearchProvider-fetchColumns.html).


            
