This version of Unity is unsupported.



# [SearchSelection](Search.SearchSelection.html).MaxIndex




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

public int MaxIndex();






### Returns



**int**
        Returns the highest selected index.





### Description



Highest selected index of any item in the selection.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Search;

static class Example_ISearchView_AddSelection
{
    static ISearchView s_View;

    [MenuItem("Examples/ISearchView/AddSelection")]
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

        // Use AddSelection to append to the current selection.
        s_View.AddSelection(0);
        s_View.AddSelection(2);
        s_View.AddSelection(4);

        // Validate what is actually selected:
        var selection = s_View.selection;
        Debug.Log(selection.Count); // 3
        Debug.Log(selection.MinIndex()); // 0
        Debug.Log(selection.MaxIndex()); // 4
    }
}
```


            
