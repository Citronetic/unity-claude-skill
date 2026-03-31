This version of Unity is unsupported.



# [SearchUtils](Search.SearchUtils.html).GetHierarchyAssetPath




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

public static string GetHierarchyAssetPath([GameObject](GameObject.html) gameObject,
bool prefabOnly);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObject | GameObject to find the scene path. |
| prefabOnly | If true, will return a path only if the GameObject is a prefab. |





### Returns



**string**
        Returns the path of a scene or prefab.





### Description



Get the path of the scene (or prefab) containing a GameObject.


              


```
static Texture2D FetchPreview(SearchItem item, SearchContext context, Vector2 size, FetchPreviewOptions options)
{
    var obj = ObjectFromItem(item);
    if (obj == null)
        return item.thumbnail;

    var assetPath = SearchUtils.GetHierarchyAssetPath(obj, true);
    if (string.IsNullOrEmpty(assetPath))
        return item.thumbnail;

    if (options.HasFlag(FetchPreviewOptions.Large))
    {
        if (AssetPreview.GetAssetPreview(obj) is Texture2D tex)
            return tex;
    }
    return GetAssetPreviewFromPath(assetPath, size, options);
}
```


            
