This version of Unity is unsupported.



# [SearchIndexer](Search.SearchIndexer.html).GetDocument




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

public [Search.SearchDocument](Search.SearchDocument.html) GetDocument(int index);






### Parameters



| Parameter | Description |
| --- | --- |
| index | Valid index of the document to access. |





### Returns



**SearchDocument**
        Indexed search document.





### Description



Returns a search document by its index.


              


```
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class Example_SearchIndexer_GetDocument
{
    [MenuItem("Examples/SearchIndexer/GetDocument")]
    public static void Run()
    {
        var si = new SearchIndexer();
        si.Start();
        si.AddDocument("document 1");
        si.AddDocument("document 2");
        si.AddDocument("document 3");
        si.Finish(() =>
        {
            // Enumerate all documents
            for (int di = 0; di < si.documentCount; ++di)
            {
                var doc = si.GetDocument(di);
                Debug.Assert(doc.id.StartsWith("document"));
                Debug.Log(doc.id);
            }

            // Dispose of the SearchIndexer when you are done with it.
            si.Dispose();
        });
    }
}
```


            
