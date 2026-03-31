This version of Unity is unsupported.



# [SearchIndexer](Search.SearchIndexer.html).AddExactWord




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

public void AddExactWord(string word,
int score,
int documentIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| word | Word to add to the index. |
| score | Relevance score of the word. |
| documentIndex | Document where the indexed word was found. |





### Description



Adds a new word coming from a document to the index. The word is added with multiple variations allowing partial search.


              


```
using System.Linq;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class Example_SearchIndexer_AddExactWord
{
    [MenuItem("Examples/SearchIndexer/AddExactWord")]
    public static void Run()
    {
        using var si = new SearchIndexer();
        si.Start();
        var di = si.AddDocument("document1");

        // AddExactWord is used to add exact word match on queries using !"exact_match"
        si.AddExactWord("unity2020", score: 0, di);

        si.Finish(new string[0]);
        Debug.Assert(si.Search("unity").Count() == 0, "You need to search using !\"unity2020\"");
        Debug.Assert(si.Search("!\"unity2020\"").Count() == 1, "No result found");
    }
}
```


            
