This version of Unity is unsupported.



# [SearchProvider](Search.SearchProvider.html).name




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












                    public string name;






### Description



Unique ID of the search provider.


              


```
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class SearchProvider_name
{
    internal static string id = "example_colors_name";
    internal static string name = "example_Colors_name";

    internal static SearchProvider CreateProvider()
    {
        return new SearchProvider(id, name)
        {
            filterId = "#",
            priority = 99999, // put example provider at a low priority
            isExplicitProvider = false,
            fetchItems = (context, items, provider) =>
            {
                var expression = context.searchQuery;
                if (expression.Length == 6 && IsHex(expression))
                {
                    expression = "#" + expression;
                    items.Add(provider.CreateItem(context, expression, GetColorName(expression), "Look at this " + GetColorName(expression) + " color!", CreateTextureFromColor(expression, 64, 64), null));
                }
                return null;
            },
            fetchPreview = (item, context, size, options) =>
            {
                return CreateTextureFromColor(item.id, (int)size.x, (int)size.y);
            },
        };
    }

    [MenuItem("Examples/SearchProvider/name")]
    public static void Run()
    {
        var context = SearchService.CreateContext(new List<SearchProvider>() { CreateProvider() });

        Debug.Log(context.providers.First().name);
    }

    private static Texture2D CreateTextureFromColor(string color, int width, int height)
    {
        Color fillColor;
        if (!ColorUtility.TryParseHtmlString(color, out fillColor))
            return null;
        var texture = new Texture2D(width, height, TextureFormat.ARGB32, false);
        var fillColorArray = texture.GetPixels32();

        for (var i = 0; i < fillColorArray.Length; ++i)
            fillColorArray[i] = fillColor;

        texture.SetPixels32(fillColorArray);

        texture.Apply();
        return texture;
    }

    private static bool IsHex(string expression)
    {
        foreach (var c in expression)
        {
            if (!Uri.IsHexDigit(c))
                return false;
        }
        return true;
    }

    private static string GetColorName(string color)
    {
        if (color[1] > color[3] && color[1] > color[5])
            return "reddish";
        else if (color[3] > color[1] && color[3] > color[5])
            return "greenish";
        else if (color[5] > color[1] && color[5] > color[3])
            return "bluish";
        return "undefined";
    }
}
```


            
