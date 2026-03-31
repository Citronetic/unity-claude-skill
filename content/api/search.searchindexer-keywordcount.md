This version of Unity is unsupported.



# [SearchIndexer](Search.SearchIndexer.html).keywordCount




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












                    public int keywordCount;






### Description



Returns the number keywords in the index.


              


```
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class Example_SearchIndexer_keywordCount
{
    [MenuItem("Examples/SearchIndexer/keywordCount")]
    public static void Run()
    {
        var searchIndexer = new SearchIndexer();
        searchIndexer.Start();
        {
            var di = searchIndexer.AddDocument("unity");

            // Add some properties and save the filter keywords.
            searchIndexer.AddProperty("is", "awesome", di, saveKeyword: true);
            searchIndexer.AddProperty("search", "powerful", di, saveKeyword: true);
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
        Debug.Log($"Index contains {si.keywordCount} keywords");
    }
}
```


            
