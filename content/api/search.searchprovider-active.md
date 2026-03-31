This version of Unity is unsupported.



# [SearchProvider](Search.SearchProvider.html).active




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












                    public bool active;






### Description



Indicates if the search provider is active or not. Inactive search providers are ignored by the search service. The active state can be toggled in the search settings.


              


```
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class SearchProvider_active
{
    static string typeColors = "example_colors_active";
    static string displayNameColors = "example_Colors_active";
    static string typeFruits = "example_fruits_active";
    static string displayNameFruits = "example_Fruits_active";

    static List<string> colors = new List<string> { "orange", "red", "green", "blue" };
    static List<string> fruits = new List<string> { "orange", "apple", "banana", "strawberry" };

    [SearchItemProvider]
    internal static SearchProvider CreateProviderColors()
    {
        return new SearchProvider(typeColors, displayNameColors)
        {
            filterId = "c:",
            priority = 99999, // put example provider at a low priority
            isExplicitProvider = false,
            fetchItems = (context, items, provider) =>
            {
                var expression = context.searchQuery;
                if (colors.Contains(expression))
                {
                    var id = expression + "(color)";
                    items.Add(provider.CreateItem(context, id, id, id, null, null));
                }
                return null;
            }
        };
    }

    [SearchItemProvider]
    internal static SearchProvider CreateProviderFruits()
    {
        return new SearchProvider(typeFruits, displayNameFruits)
        {
            filterId = "f:",
            priority = 99999, // put example provider at a low priority
            isExplicitProvider = false,
            fetchItems = (context, items, provider) =>
            {
                var expression = context.searchQuery;
                if (fruits.Contains(expression))
                {
                    var id = expression + "(fruit)";
                    items.Add(provider.CreateItem(context, id, id, id, null, null));
                }
                return null;
            }
        };
    }

    [MenuItem("Examples/SearchProvider/active")]
    public static void Run()
    {
        var colorProvider = SearchService.GetProvider(typeColors);
        colorProvider.active = false;

        var context = SearchService.CreateContext("orange");

        // The providers used in the context should not contain the inactive provider
        var sb = new StringBuilder();
        foreach (var provider in context.providers)
            sb.AppendLine(provider.name);
        Debug.Log(sb.ToString());
    }
}
```


            
