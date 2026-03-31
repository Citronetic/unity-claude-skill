This version of Unity is unsupported.



# [BuildAssetBundleOptions](BuildAssetBundleOptions.html).DisableLoadAssetByFileName




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



Disables calling LoadAsset on Asset Bundles using only the file name.





Asset Bundles by default have three ways to look up the same asset: the full asset path, asset file name, and asset file name with extension. The full path is serialized into Asset Bundles, while the file name and file name with extension are generated when an Asset Bundle is loaded from a file.

                    For example, "Assets/Prefabs/Player.prefab", "Player", and "Player.prefab" are different ways to reference the same asset.

                    This option will set a flag on Asset Bundles to prevent creating the asset file name lookup, saving runtime memory and improving loading performance for asset bundles.

                    Related topic: [BuildAssetBundleOptions.DisableLoadAssetByFileNameWithExtension](BuildAssetBundleOptions.DisableLoadAssetByFileNameWithExtension.html).


            
