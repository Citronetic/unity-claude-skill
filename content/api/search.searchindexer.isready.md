This version of Unity is unsupported.



# [SearchIndexer](Search.SearchIndexer.html).IsReady




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

public bool IsReady();






### Returns



**bool**
        Returns true if the index is ready for search.





### Description



Indicates if the index is fully built, up to date, and ready for search.


              


```
using System.Linq;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class Example_SearchIndexer_IsReady
{
    [MenuItem("Examples/SearchIndexer/IsReady")]
    public static void Run()
    {
        // Create an indexer and wait for indexing to complete in the current thread.
        using var si = new SearchIndexer();
        si.Start();
        si.AddDocument("document 1");
        si.AddDocument("document 2");
        si.Finish();
        while (!si.IsReady())
            ;
        Debug.Log("Indexing is completed");
    }
}
```


            
