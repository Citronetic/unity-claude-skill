This version of Unity is unsupported.



# [SearchIndexer](Search.SearchIndexer.html).GetMetaInfo




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

public string GetMetaInfo(string documentId);






### Parameters



| Parameter | Description |
| --- | --- |
| documentId | Document id of the document. |





### Returns



**string**
        Metadata of the document.





### Description



Get metadata of a specific document.


              


```
using System.IO;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

/// <summary>
/// Use GetMetaInfo to store some additional data about a specific document within the index db
/// that you can retrieve later if needed.
/// </summary>
static class Example_SearchIndexer_GetMetaInfo
{
    [MenuItem("Examples/SearchIndexer/GetMetaInfo")]
    public static void Run()
    {
        var si = new SearchIndexer();
        si.Start();
        var newDocumentId = System.Guid.NewGuid().ToString("N");
        var di = si.AddDocument(newDocumentId);
        si.SetMetaInfo(newDocumentId, "Please save this data for later");
        si.Finish((bytes) =>
        {
            File.WriteAllBytes("Temp/index.db", bytes);
            EditorApplication.delayCall += ReloadIndex;
            // Dispose of the SearchIndexer when you are done with it.
            si.Dispose();
        }, null);
    }

    private static void ReloadIndex()
    {
        var si = new SearchIndexer();
        si.LoadBytes(File.ReadAllBytes("Temp/index.db"), (success) =>
        {
            Debug.Assert(success);
            Debug.Assert(si.GetMetaInfo(si.GetDocument(0).id) == "Please save this data for later");
            // Dispose of the SearchIndexer when you are done with it.
            si.Dispose();
        });
    }
}
```


            
