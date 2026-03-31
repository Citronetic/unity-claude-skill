This version of Unity is unsupported.



# [SearchIndexer](Search.SearchIndexer.html).Read




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

public bool Read(Stream stream,
bool checkVersionOnly);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | The stream to read the index from. |
| checkVersionOnly | If true, verifies the version of the index. |





### Returns



**bool**
        Returns false if the version of the index is not supported.





### Description



Reads a stream and populates the index from it.


              


```
using System.IO;
using System.Linq;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class Example_SearchIndexer_Read
{
    [MenuItem("Examples/SearchIndexer/Read")]
    public static void Run()
    {
        var si = new SearchIndexer();
        si.Start();
        si.AddDocument("document 1");
        si.AddDocument("document 2");
        si.Finish(() =>
        {
            File.WriteAllBytes("Temp/Read.index", si.SaveBytes());
            // Dispose of the SearchIndexer when you are done with it.
            si.Dispose();

            // Stream the index from disk but only check if the stream is valid.
            using (var fileStream = new FileStream("Temp/Read.index", FileMode.Open, FileAccess.Read, FileShare.Read))
            {
                using var copyIndex = new SearchIndexer();
                Debug.Assert(copyIndex.Read(fileStream, checkVersionOnly: true));
            }

            // Completely stream the index from disk.
            using (var fileStream = new FileStream("Temp/Read.index", FileMode.Open, FileAccess.Read, FileShare.Read))
            {
                using var copyIndex = new SearchIndexer();
                Debug.Assert(copyIndex.Read(fileStream, checkVersionOnly: false));
                Debug.Assert(copyIndex.GetDocument(0).id == "document 1");
            }
        });
    }
}
```


            
