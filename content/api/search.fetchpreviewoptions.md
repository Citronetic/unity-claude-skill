This version of Unity is unsupported.



# FetchPreviewOptions





enumeration


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



Options for the search provider on how the preview should be fetched.





These options are used by the [SearchProvider.fetchPreview](Search.SearchProvider-fetchPreview.html) functor.


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





### Properties



| Property | Description |
| --- | --- |
| None | No options are defined. |
| Preview2D | Indicates that the search provider should generate a 2D preview. |
| Preview3D | Indicates that the search provider should generate a 3D preview. |
| Normal | Indicates that the preview size should be around 128x128. |
| Large | Indicates that the preview resolution should be higher than 256x256. |


            
