This version of Unity is unsupported.



# [SearchIndexer](Search.SearchIndexer.html).SaveBytes




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

public byte[] SaveBytes();






### Returns



**byte[]**
        Bytes representation of the index.





### Description



Get the bytes representation of this index. See [SearchIndexer.Write](Search.SearchIndexer.Write.html).


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


            
