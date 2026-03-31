This version of Unity is unsupported.



# [SearchIndexer](Search.SearchIndexer.html).Finish




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

public void Finish();






## Declaration

public void Finish(string[] removedDocuments);






## Declaration

public void Finish([Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) threadCompletedCallback);






## Declaration

public void Finish([Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) threadCompletedCallback,
string[] removedDocuments);






## Declaration

public void Finish(Action<byte[]> threadCompletedCallback,
string[] removedDocuments);






## Declaration

public void Finish(Action<byte[]> threadCompletedCallback,
string[] removedDocuments,
bool saveBytes);






### Parameters



| Parameter | Description |
| --- | --- |
| threadCompletedCallback | Callback invoked when the index is ready to be used. |
| removedDocuments | Documents to be removed from current index (if any). |
| saveBytes | Indicates if the system should return the binary stream of the index as a byte array. |





### Description



Finalizes the current index, sorting and compiling of all the indexes.


              


```
using System.Linq;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

/// <summary>
/// SearchIndexer.Finish is always a threaded operation, meaning that all indexes
/// will be computed in a thread and Search will callback when the index is ready
/// to be used.
/// </summary>
static class Example_SearchIndexer_Finish
{
    [MenuItem("Examples/SearchIndexer/Finish")]
    public static void Run()
    {
        // Create an indexer and wait for indexing to complete in the current thread.
        var si = new SearchIndexer();
        si.Start();
        si.AddProperty("wait", "yes", si.AddDocument("Wait"));
        si.Finish();
        while (!si.IsReady())
            ;
        Debug.Assert(si.IsReady());

        // Reset the indexer and receive a callback when the indexing is completed.
        si.Start(clear: true);
        si.AddProperty("wait", "callback", si.AddDocument("Callback"));
        si.Finish(() => Debug.Log("Indexing is ready."));
        while (!si.IsReady())
            ;

        // Reset the indexer and receive a callback when the indexing is completed and backup the index.
        // With that override you can also indicate if you want any documents to be deleted
        si.Start(clear: false);
        si.AddProperty("wait", "callback", si.AddDocument("CallbackBytes"));
        si.AddProperty("wait", "callback", si.AddDocument("DeleteMe"));
        si.Finish((bytes) =>
        {
            Debug.Log($"Indexing is ready and its size is {bytes.Length}.");
            // Dispose of the SearchIndexer when you are done with it.
            si.Dispose();
        }, new string[] { "Callback", "DeleteMe" });
    }
}
```


            
