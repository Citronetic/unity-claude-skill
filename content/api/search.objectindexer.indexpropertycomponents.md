This version of Unity is unsupported.



# [ObjectIndexer](Search.ObjectIndexer.html).IndexPropertyComponents




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

public void IndexPropertyComponents(int documentIndex,
string name,
string value);






### Parameters



| Parameter | Description |
| --- | --- |
| documentIndex | Document handle for the indexed property. |
| name | Key used to retrieve the value. |
| value | Value to add to the index. |





### Description



Indexes multiple variations of a property value.





In the example, indexing "AudioClipComponent", will split the word in many ways and index variations such as "Audio", "Clip", "Component", "ACC", etc.

The user will be able to search the property with `mytype:clip` instead of having to start with `audio`.


              


```
using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class Example_ObjectIndexer_IndexPropertyComponents
{
    [CustomObjectIndexer(typeof(MonoScript), version = 1)]
    internal static void IndexMonoScriptClassType(CustomObjectIndexerTarget context, ObjectIndexer indexer)
    {
        if (!(context.target is MonoScript script))
            return;

        var klass = script.GetClass();
        if (klass == null)
            return;
        indexer.IndexPropertyComponents(context.documentIndex, "class", klass.Name);
    }

    [MenuItem("Examples/ObjectIndexer/IndexPropertyComponents")]
    public static void Run()
    {
        void PrintResults(IEnumerable<SearchItem> items) => Debug.Log(string.Join(", ", items.Select(r => r.id)));

        var context = SearchService.CreateContext("asset", "a:examples class:property");
        context.asyncItemReceived += (context, items) => PrintResults(items);

        PrintResults(SearchService.GetItems(context));
    }
}
```





This example suppose you are indexing MonoScript with an index similar to this one:


              


```
{
    "name": "examples",
    "type": "asset",
    "roots": [],
    "includes": [
        ".cs"
    ],
    "excludes": [
        "Temp/",
        "External/"
    ],
    "options": {
        "disabled": false,
        "types": true,
        "properties": true,
        "extended": false,
        "dependencies": false
    },
    "baseScore": 100
}
```


            
