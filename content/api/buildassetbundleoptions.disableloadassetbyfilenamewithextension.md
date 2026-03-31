This version of Unity is unsupported.



# [BuildAssetBundleOptions](BuildAssetBundleOptions.html).DisableLoadAssetByFileNameWithExtension




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



Prevents loading assets from Asset Bundles using the file name with its extension.





By default, Asset Bundles support three methods to look up the same asset: full asset path, asset file name, and asset file name with extension. The full path is serialized into Asset Bundles, whereas the file name and the file name with extension are generated when an Asset Bundle is loaded from a file.

                    For example, "Assets/Prefabs/Player.prefab", "Player", and "Player.prefab" are different ways to reference the same asset.

                    Selecting this option sets a flag on Asset Bundles to prevent creating the asset file name with extension lookup, helping conserve runtime memory and improving loading performance for asset bundles.

                    Related topic: [BuildAssetBundleOptions.DisableLoadAssetByFileName](BuildAssetBundleOptions.DisableLoadAssetByFileName.html).


            
