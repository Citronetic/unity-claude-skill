This version of Unity is unsupported.



# ISearchList





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



A search list represents a collection of search results that is filled.


              


```
public static IEnumerable<SearchItem> YieldResults()
{
    ISearchList results = SearchService.Request("*.cs");
    foreach (var result in results)
        yield return result;
}
```





### Properties



| Property | Description |
| --- | --- |
| context | Any valid search context that is used to track async search requests. It can be null. |
| pending | Indicates if the search request is still running and might return more results asynchronously. |





### Public Methods



| Method | Description |
| --- | --- |
| AddItems | Add new items to the search list. |
| Fetch | Yields search items until the search query is finished. |
| GetRange | Return a subset of items. |
| InsertRange | Insert new search items in the current list. |
| Select | Enumerate search items and transform them while they are being fetched. |


            
