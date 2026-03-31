This version of Unity is unsupported.



# [SearchService](Search.SearchService.html).GetAction




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

public static [Search.SearchAction](Search.SearchAction.html) GetAction([Search.SearchProvider](Search.SearchProvider.html) provider,
string actionId);






### Parameters



| Parameter | Description |
| --- | --- |
| provider | Search provider to look up. |
| actionId | Unique action ID within the search provider. |





### Returns



**SearchAction**
        The matching action.





### Description



Returns the search action for a given search provider and search action ID.


              


```
using System.Linq;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class Example_SearchService_GetAction
{
    [MenuItem("Examples/SearchService/GetAction")]
    public static void Run()
    {
        var menuProvider = SearchService.GetProvider("menu");
        Debug.Assert(menuProvider != null);

        var execMenuAction = SearchService.GetAction(menuProvider, "select");
        Debug.Assert(execMenuAction != null);

        using var context = SearchService.CreateContext(menuProvider, "Search All...");
        using var results = SearchService.Request(context, SearchFlags.Synchronous);
        execMenuAction.handler(results.First());
    }
}
```


            
