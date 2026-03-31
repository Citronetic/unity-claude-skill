This version of Unity is unsupported.



# [SearchFlags](Search.SearchFlags.html).Sorted




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



Fetched items are sorted by the search service.


              


```
using System;
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

public class SearchFlags_Sorted
{
    [MenuItem("Examples/SearchFlags/Sorted")]
    public static void RequestAll()
    {
        ISearchList results = SearchService.Request("p: t:Script", SearchFlags.Sorted);
        AsyncResultEnumerator.Fetch(results, item => Debug.Log(item));
    }

    class AsyncResultEnumerator
    {
        private Action<SearchItem> m_OnEnumerate;
        private IEnumerator<SearchItem> m_Iterator;
        private ISearchList m_SearchList;

        public static AsyncResultEnumerator Fetch(ISearchList results, Action<SearchItem> onEnumerate)
        {
            return new AsyncResultEnumerator(results, onEnumerate);
        }

        public AsyncResultEnumerator(ISearchList results, Action<SearchItem> onEnumerate)
        {
            m_OnEnumerate = onEnumerate;
            m_SearchList = results;
            m_Iterator = results.GetEnumerator();
            EditorApplication.update += WaitForSearchCompleted;
        }

        private void WaitForSearchCompleted()
        {
            // Wait for the search to complete, otherwise it will not yield sorted items.
            if (!m_SearchList.pending)
            {
                EditorApplication.update -= WaitForSearchCompleted;
                EditorApplication.update += EnumerateResults;
            }
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
}
```


            
