This version of Unity is unsupported.



# [SearchIndexer](Search.SearchIndexer.html).LoadBytes




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

public bool LoadBytes(byte[] bytes,
Action<bool> finished);






### Parameters



| Parameter | Description |
| --- | --- |
| bytes | Binary buffer containing the index representation. |
| finished | Callback that triggers when the index is fully loaded. The callback parameters indicates if loading was succesful. |





### Returns



**bool**
        Returns false if the index is of an unsupported version or if there was a problem initializing the reading thread.





### Description



Loads the index asynchronously (in another thread) from a binary buffer.


              


```
using System.IO;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class Example_SearchIndexer_LoadBytes
{
    const string tempIndexPath = "Temp/LoadBytes.db";

    [MenuItem("Examples/SearchIndexer/LoadBytes")]
    public static void Run()
    {
        var si = new SearchIndexer();
        si.Start();
        var di = si.AddDocument("document 1");
        si.AddNumber("test", 2, 0, di);
        si.Finish(() =>
        {
            File.WriteAllBytes(tempIndexPath, si.SaveBytes());
            // Dispose of the SearchIndexer when you are done with it.
            si.Dispose();
            ReloadIndex();
        });
    }

    private static void ReloadIndex()
    {
        var indexBytes = File.ReadAllBytes(tempIndexPath);
        var si = new SearchIndexer();

        // Load the search index from a binary stream.
        si.LoadBytes(indexBytes, (success) =>
        {
            Debug.Assert(success);
            Debug.Log($"Index loaded from {indexBytes} bytes");
            // Dispose of the SearchIndexer when you are done with it.
            si.Dispose();
        });
    }
}
```


            
