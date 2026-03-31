This version of Unity is unsupported.



# [ISearchView](Search.ISearchView.html).SetSelection




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

public void SetSelection(params int[] selection);






### Parameters



| Parameter | Description |
| --- | --- |
| selection | Array of item indices to select. |





### Description



Updates the search view with a new selection.





[Image: image].


              


```
using UnityEditor;
using UnityEditor.Search;

static class Example_ISearchView_SetSelection
{
    static ISearchView s_View;
    [MenuItem("Examples/ISearchView/SetSelection")]
    public static void Run()
    {
        s_View = SearchService.ShowContextual("asset");
        s_View.SetSearchText("t:MonoScript");

        // Calling SetSelection when no results are available has no effect.
        // Wait until some results are available.
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

        // Use SetSelection to specify which items should be selected.
        s_View.SetSelection(0, 2, 4);
    }
}
```


            
