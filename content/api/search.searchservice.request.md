This version of Unity is unsupported.



# [SearchService](Search.SearchService.html).Request




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

public static [Search.ISearchList](Search.ISearchList.html) Request(string searchText,
[Search.SearchFlags](Search.SearchFlags.html) options);






## Declaration

public static [Search.ISearchList](Search.ISearchList.html) Request([Search.SearchContext](Search.SearchContext.html) context,
[Search.SearchFlags](Search.SearchFlags.html) options);






### Parameters



| Parameter | Description |
| --- | --- |
| searchText | Search query to be executed. |
| context | Search context used to track asynchronous requests. You need to dispose of the context yourself. |
| options | Options defining how the query is performed. |





### Returns



**ISearchList**
        Asynchronous list of search items.





### Description



Executes a search request that will fetch search results asynchronously.





The following example executes a query and print results over many frames using [EditorApplication.update](EditorApplication-update.html).


              


```
[MenuItem("Examples/SearchService/Request List")]
public static void RequestList()
{
    ISearchList results = SearchService.Request("*.cs");

    // It is important to note that when you request some search results,
    // that you need to enumerate them asynchronously using the returned search list.
    AsyncResultEnumerator.Fetch(results, item => Debug.Log(item));
}

class AsyncResultEnumerator
{
    private Action<SearchItem> m_OnEnumerate;
    private IEnumerator<SearchItem> m_Iterator;

    public static AsyncResultEnumerator Fetch(ISearchList results, Action<SearchItem> onEnumerate)
    {
        return new AsyncResultEnumerator(results, onEnumerate);
    }

    public AsyncResultEnumerator(ISearchList results, Action<SearchItem> onEnumerate)
    {
        m_OnEnumerate = onEnumerate;
        m_Iterator = results.GetEnumerator();
        EditorApplication.update += EnumerateResults;
    }

    private void EnumerateResults()
    {
        if (m_Iterator == null || !m_Iterator.MoveNext())
        {
            m_Iterator = null;
            EditorApplication.update -= EnumerateResults;
        }
        else if (m_Iterator.Current != null)
            m_OnEnumerate(m_Iterator.Current);
    }
}
```





If you are running a coroutine you can yield results like the following:


              


```
public static IEnumerable<SearchItem> YieldResults()
{
    ISearchList results = SearchService.Request("*.cs");
    foreach (var result in results)
        yield return result;
}
```




---








## Declaration

public static void Request(string searchText,
Action<SearchContext,IList<SearchItem>> onSearchCompleted,
[Search.SearchFlags](Search.SearchFlags.html) options);






## Declaration

public static void Request([Search.SearchContext](Search.SearchContext.html) context,
Action<SearchContext,IList<SearchItem>> onSearchCompleted,
[Search.SearchFlags](Search.SearchFlags.html) options);






### Parameters



| Parameter | Description |
| --- | --- |
| onSearchCompleted | Callback invoked when the search request is completed and all results are available. |





### Description



Executes a search request and calls back the specified function when all results are available.


              


```
[MenuItem("Examples/SearchService/Request All")]
public static void RequestAll()
{
    SearchService.Request("t:texture", (SearchContext context, IList<SearchItem> items) =>
    {
        Debug.Log("All Textures");
        foreach (var item in items)
            Debug.Log(item);
    }, SearchFlags.Debug);
}
```




---








## Declaration

public static void Request(string searchText,
Action<SearchContext,IEnumerable<SearchItem>> onIncomingItems,
Action<SearchContext> onSearchCompleted,
[Search.SearchFlags](Search.SearchFlags.html) options);






## Declaration

public static void Request([Search.SearchContext](Search.SearchContext.html) context,
Action<SearchContext,IEnumerable<SearchItem>> onIncomingItems,
Action<SearchContext> onSearchCompleted,
[Search.SearchFlags](Search.SearchFlags.html) options);






### Parameters



| Parameter | Description |
| --- | --- |
| onIncomingItems | Callback invoked everytime a batch of results are found and available. |
| onSearchCompleted | Callback invoked when the search request is completed. |





### Description



Executes a search request and callbacks for every batch of incoming results. It is possible to get duplicate items, so filter the final list if needed.


              


```
[MenuItem("Examples/SearchService/Request Async")]
public static void RequestAsync()
{
    var batchCount = 0;
    var totalItemCount = 0;

    void OnIncomingResults(SearchContext context, IEnumerable<SearchItem> items)
    {
        var batchItemCount = items.Count();
        totalItemCount += batchItemCount;
        Debug.Log($"#{++batchCount} Incoming materials ({batchItemCount}): {string.Join("\n", items)}");
    }

    void OnSearchCompleted(SearchContext context)
    {
        Debug.Log($"Query <b>\"{context.searchText}\"</b> completed with a total of {totalItemCount}");
    }

    SearchService.Request("t:material", OnIncomingResults, OnSearchCompleted, SearchFlags.Debug);
}
```


            
