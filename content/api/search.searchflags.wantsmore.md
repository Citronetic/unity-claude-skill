This version of Unity is unsupported.



# [SearchFlags](Search.SearchFlags.html).WantsMore




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



Sets the search to search for all results. This might take longer than unusual if [SearchProvider](Search.SearchProvider.html) are using multiple sources of items (files on disk, AssetDatabase...)


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class Example_SearchService_GetItems
{
    [MenuItem("Examples/SearchService/GetItems")]
    public static void Run()
    {
        // Create a container to hold found items.
        var results = new List<SearchItem>();

        // Create the search context that will be used to execute the query.
        using (var searchContext = SearchService.CreateContext("scene", "is:leaf"))
        {
            // Initiate the query and get the results.
            // Note: it is recommended to use SearchService.Request if you wish to fetch the items asynchronously.
            results = SearchService.GetItems(searchContext, SearchFlags.WantsMore | SearchFlags.Synchronous);

            // Print results
            foreach (var searchItem in results)
                Debug.Log(searchItem.GetDescription(searchContext));
        }
    }
}
```


            
