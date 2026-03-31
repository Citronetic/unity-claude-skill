This version of Unity is unsupported.



# [ISearchView](Search.ISearchView.html).results




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












                    public [Search.ISearchList](Search.ISearchList.html) results;






### Description



Returns the list of all search results.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Search;

static class Example_ISearchView_results
{
    static ISearchList s_Results;
    static ISearchView s_View;

    [MenuItem("Examples/ISearchView/results")]
    public static void Run()
    {
        s_View = SearchService.ShowContextual("asset");
        s_View.SetSearchText("t:MonoScript");

        // Keep result until the asynchronous Search query is totally processed.
        s_Results = s_View.results;
        EditorApplication.delayCall += DisplayResultsWhenReady;
    }

    public static void DisplayResultsWhenReady()
    {
        // Wait until results are ready to be processed.
        if (s_Results.pending || s_Results.Count == 0)
        {
            EditorApplication.delayCall += DisplayResultsWhenReady;
            return;
        }

        // Iterate over all results:
        foreach (var result in s_Results)
        {
            Debug.Log(result.GetLabel(s_View.context));
        }
    }
}
```


            
