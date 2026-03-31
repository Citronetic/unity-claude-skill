This version of Unity is unsupported.



# [SearchSelection](Search.SearchSelection.html).GetEnumerator




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

public IEnumerator<SearchItem> GetEnumerator();






### Returns



**IEnumerator<SearchItem>**
        Enumerator on the currently selected SearchItems.





### Description



Gets an enumerator on the currently selected SearchItems.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Search;

static class Example_SearchSelection_GetEnumerator
{
    static ISearchView s_View;

    [MenuItem("Examples/SearchSelection/GetEnumerator")]
    public static void Run()
    {
        s_View = SearchService.ShowContextual("asset");
        s_View.SetSearchText("t:MonoScript");

        EditorApplication.delayCall += DisplayResultsWhenReady;
    }

    public static void DisplayResultsWhenReady()
    {
        // Wait until results are ready to process.
        if (s_View.results.pending || s_View.results.Count == 0)
        {
            EditorApplication.delayCall += DisplayResultsWhenReady;
            return;
        }

        s_View.AddSelection(0);
        s_View.AddSelection(2);
        s_View.AddSelection(4);

        // Use Enumerator pattern to iterate over selected items
        var selection = s_View.selection;
        foreach (var item in selection)
        {
            Debug.Log(item.GetLabel(s_View.context));
        }
    }
}
```


            
