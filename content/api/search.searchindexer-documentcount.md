This version of Unity is unsupported.



# [SearchIndexer](Search.SearchIndexer.html).documentCount




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












                    public int documentCount;






### Description



Returns the number of documents in the index.


              


```
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class Example_SearchIndexer_documentCount
{
    [MenuItem("Examples/SearchIndexer/documentCount")]
    public static void Run()
    {
        var searchIndexer = new SearchIndexer();
        searchIndexer.Start();
        {
            searchIndexer.AddDocument("document 1");
            searchIndexer.AddDocument("document 2");
            searchIndexer.AddDocument("document 3");
        }
        searchIndexer.Finish(() =>
        {
            OnIndexReady(searchIndexer);
            // Dispose the SearchIndexer when you are done with it.
            searchIndexer.Dispose();
        });
    }

    private static void OnIndexReady(SearchIndexer si)
    {
        Debug.Log($"{si.documentCount} document were indexed");
    }
}
```


            
