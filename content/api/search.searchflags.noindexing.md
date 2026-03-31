This version of Unity is unsupported.



# [SearchFlags](Search.SearchFlags.html).NoIndexing




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



Prevents the search from using indexing. Asset Provider will use its builtin Find in Files provider.


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

public class SearchFlags_NoIndexing
{
    [MenuItem("Examples/SearchFlags/NoIndexing")]
    public static void RequestAll()
    {
        // Find all assets matching the word Search without using any indexed data (will rely on the Find Files provider).
        SearchService.Request("p: Search", (SearchContext context, IList<SearchItem> items) =>
        {
            foreach (var item in items)
                Debug.Log(item);
        }, SearchFlags.NoIndexing);
    }
}
```


            
