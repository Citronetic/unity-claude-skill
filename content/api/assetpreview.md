This version of Unity is unsupported.



# AssetPreview





class in
          UnityEditor


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



Utility for fetching asset previews by instance ID of assets, See [AssetPreview.GetAssetPreview](AssetPreview.GetAssetPreview.html). Since previews are loaded asynchronously methods are provided for requesting if all previews have been fully loaded, see [AssetPreview.IsLoadingAssetPreviews](AssetPreview.IsLoadingAssetPreviews.html). Loaded previews are stored in a cache, the size of the cache can be controlled by calling [AssetPreview.SetPreviewTextureCacheSize].





### Static Methods



| Method | Description |
| --- | --- |
| GetAssetPreview | Returns a preview texture for an asset. |
| GetMiniThumbnail | Returns the thumbnail for an object (like the ones you see in the project view). |
| GetMiniTypeThumbnail | Returns the thumbnail for the type. |
| IsLoadingAssetPreview | Loading previews is asynchronous so it is useful to know if a specific asset preview is in the process of being loaded so client code e.g can repaint while waiting for the loading to finish. |
| IsLoadingAssetPreviews | Loading previews is asynchronous so it is useful to know if any requested previews are in the process of being loaded so client code e.g can repaint while waiting. |
| SetPreviewTextureCacheSize | Set the asset preview cache to a size that can hold all visible previews on the screen at once. |


            
