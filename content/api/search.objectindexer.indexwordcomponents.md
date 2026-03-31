This version of Unity is unsupported.



# [ObjectIndexer](Search.ObjectIndexer.html).IndexWordComponents




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

public void IndexWordComponents(int documentIndex,
ref string word);






### Parameters



| Parameter | Description |
| --- | --- |
| documentIndex | Document where the indexed word was found. |
| word | Word to add to the index. |





### Description



Splits a word into multiple variations.





See [IndexPropertyComponents](Search.ObjectIndexer.IndexPropertyComponents.html) for some examples on how a value can be split into multiple variations. [IndexWordComponents](Search.ObjectIndexer.IndexWordComponents.html) performs the same task for words.


              


```
using UnityEditor;
using UnityEditor.Search;

static class Example_ObjectIndexer_IndexWordComponents
{
    [CustomObjectIndexer(typeof(SceneAsset), version = 2 /* update me when the code below changes */)]
    internal static void IndexSceneName(CustomObjectIndexerTarget context, ObjectIndexer indexer)
    {
        if (!(context.target is SceneAsset sceneAsset))
            return;

        indexer.IndexWordComponents(context.documentIndex, sceneAsset.name);
    }

}
```


            
