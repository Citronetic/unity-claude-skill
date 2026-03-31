This version of Unity is unsupported.



# AssetBundleBuild





struct in
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



AssetBundle building map entry.





This structure is used with [BuildPipeline.BuildAssetBundles](BuildPipeline.BuildAssetBundles.html) to specify the name of a bundle and the names of the assets that it will contain. The array of AssetBundleBuild elements that is passed to the function is known as the "building map" and serves as an alternative to specifying the contents of bundles from the editor.

Additional resources: [BuildPipeline.BuildAssetBundles](BuildPipeline.BuildAssetBundles.html).





### Properties



| Property | Description |
| --- | --- |
| addressableNames | Addressable name used to load an asset. |
| assetBundleName | AssetBundle name. |
| assetBundleVariant | AssetBundle variant. |
| assetNames | Asset names which belong to the given AssetBundle. |


            
