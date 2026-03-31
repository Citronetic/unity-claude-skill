This version of Unity is unsupported.



# SearchActionsProviderAttribute





class in
          UnityEditor.Search


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



















### Description



Attribute used to declare a static method that defines new actions for specific search providers.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;
using UnityEngine.Rendering;

public class Example_SearchAction
{
    [SearchActionsProvider]
    internal static IEnumerable<SearchAction> ActionHandlers()
    {
        return new[]
        {
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

            new SearchAction("scene", "toggle_cast_shadows", new GUIContent("Toggle Cast Shadows", null, "Toggle Cast Shadows on a Mesh"))
            {
                // Only enable this action if any of the selected items are actually a GameObject with a MeshRenderer.
                enabled = items =>
                {
                    foreach (var searchItem in items)
                    {
                        var go = searchItem.ToObject<GameObject>();
                        if (!go)
                            continue;
                        var mesh = go.GetComponent<MeshRenderer>();
                        if (mesh)
                            return true;
                    }
                    return false;
                },
                // Handler for multiple items: (used when multi selection is used in the Search Window).
                execute = (items) =>
                {
                    foreach (var searchItem in items)
                    {
                        var go = searchItem.ToObject<GameObject>();
                        if (!go)
                            continue;
                        var mesh = go.GetComponent<MeshRenderer>();
                        if (!mesh)
                            continue;
                        mesh.shadowCastingMode = mesh.shadowCastingMode == ShadowCastingMode.Off ? ShadowCastingMode.On : ShadowCastingMode.Off;
                    }
                }
            },
        };
    }
}
```


            
