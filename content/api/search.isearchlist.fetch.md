This version of Unity is unsupported.



# [ISearchList](Search.ISearchList.html).Fetch




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

public IEnumerable<SearchItem> Fetch();






### Returns



**IEnumerable<SearchItem>**
        List of search items. Items can be null and must be discarded.





### Description



Yields search items until the search query is finished.





Nullified items can be returned while the search request is pending.


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

struct AsyncResultEnumerator
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


            
