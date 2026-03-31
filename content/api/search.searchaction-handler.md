This version of Unity is unsupported.



# [SearchAction](Search.SearchAction.html).handler




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












                    public Action<SearchItem> handler;






### Description



This handler is used for actions that do not support multi-selection.


              


```
new SearchAction("asset", "print_dependencies", new GUIContent("Print Dependencies", null, "Print all dependencies of an asset."))
{
    // If this action is the default, double-clicking on an item to execute this action will not close the Search window.
    closeWindowAfterExecution = false,

    // Handler for a single item.
    handler = (item) =>
    {
        var asset = item.ToObject();
        if (!asset)
            return;
        var path = AssetDatabase.GetAssetPath(asset);
        if (string.IsNullOrEmpty(path))
            return;

        var dependencyPaths = AssetDatabase.GetDependencies(path);
        foreach (var dependencyPath in dependencyPaths)
        {
            var o = AssetDatabase.LoadAssetAtPath<UnityEngine.Object>(dependencyPath);
            if (o != null)
                Debug.Log(dependencyPath, o);
        }
    }
},
```


            
