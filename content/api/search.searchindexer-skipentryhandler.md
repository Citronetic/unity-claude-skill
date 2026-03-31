This version of Unity is unsupported.



# [SearchIndexer](Search.SearchIndexer.html).skipEntryHandler




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












                    public Func<string,bool> skipEntryHandler;






### Description



Handler used to skip entries.


              


```
using System;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class Example_SearchIndexer_skipEntryHandler
{
    [MenuItem("Examples/SearchIndexer/skipEntryHandler")]
    public static void Run()
    {
        using var searchIndexer = new SearchIndexer
        {
            // The skip entry handler can be used to prevent some documents from being indexed.
            skipEntryHandler = SkipDocumentThatStartsWithAnUnderscore
        };

        searchIndexer.Start();
        {
            var di = searchIndexer.AddDocument("A/Valid/File/Path");
            Debug.Assert(di >= 0);

            // This document should get discarded.
            di = searchIndexer.AddDocument("_Not/Valid/File/Path");
            Debug.Assert(di == -1);
        }
        searchIndexer.Finish(Array.Empty<string>());

        Debug.Log($"{searchIndexer.documentCount} document were indexed");
    }

    private static bool SkipDocumentThatStartsWithAnUnderscore(string documentId)
    {
        return documentId[0] == '_';
    }
}
```


            
