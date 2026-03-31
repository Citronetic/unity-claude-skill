This version of Unity is unsupported.



# [ISearchView](Search.ISearchView.html).context




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












                    public [Search.SearchContext](Search.SearchContext.html) context;






### Description



Returns the current view search context.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Search;

static class Example_ISearchView_context
{
    [MenuItem("Examples/ISearchView/context")]
    public static void Run()
    {
        var view = SearchService.ShowContextual("asset");

        view.SetSearchText("t:material");

        // Search text corresponds to the searchText of the view SearchContext.
        Debug.Assert(view.context.searchText == "t:material");
    }
}
```


            
