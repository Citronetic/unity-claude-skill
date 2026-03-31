This version of Unity is unsupported.



# [SearchProvider](Search.SearchProvider.html).onDisable




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












                    public [Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) onDisable;






### Description



Called when the SearchWindow is closed. Allows the search provider to release cached resources.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class LightsSearchProvider
{
    [SearchItemProvider]
    internal static SearchProvider CreateProvider()
    {
        return new SearchProvider("example_lights", "Lights")
        {
            filterId = "z:",
            priority = 99999, // Put example provider at a low priority
            showDetailsOptions = ShowDetailsOptions.Inspector,
            fetchItems = (context, items, provider) => FetchItems(context, provider),
            toObject = (item, type) => item.data as Light,
            onEnable = () => { /*Cache some data in here*/ },
            onDisable = () => { /*Clear the cache*/ },

            // This provider can be used in the scene view contextually.
            isEnabledForContextualSearch = () => IsFocusedWindowTypeName("SceneView")
        };
    }

    static IEnumerable<SearchItem> FetchItems(SearchContext context, SearchProvider provider)
    {
        if (context.empty)
            yield break;

        var sceneProvider = SearchService.GetProvider("scene");
        using (var sceneQuery = SearchService.CreateContext(sceneProvider, $"t:light {context.searchQuery}"))
        using (var results = SearchService.Request(sceneQuery))
        {
            var lightIcon = EditorGUIUtility.FindTexture("Lighting");
            foreach (var r in results)
            {
                if (r == null)
                {
                    // ***IMPORTANT***: Make sure to yield so you do not block the main thread waiting for results.
                    yield return null;
                }
                else
                {
                    yield return provider.CreateItem(context, r.id,
                        r.GetLabel(sceneQuery, true), r.GetDescription(sceneQuery, true),
                        lightIcon, r.ToObject<GameObject>().GetComponent<Light>());
                }
            }
        }
    }

    static bool IsFocusedWindowTypeName(string focusWindowName)
    {
        return EditorWindow.focusedWindow != null && EditorWindow.focusedWindow.GetType().ToString().EndsWith("." + focusWindowName);
    }

    [MenuItem("Examples/SearchProvider/Show lights")]
    public static void ShowLights()
    {
        // Search for directional lights (lights with "directional" in their name)
        SearchService.ShowWindow(SearchService.CreateContext("z:directional"));
    }
}
```


            
