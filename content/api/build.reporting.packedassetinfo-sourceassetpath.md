This version of Unity is unsupported.



# [PackedAssetInfo](Build.Reporting.PackedAssetInfo.html).sourceAssetPath




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












                    public string sourceAssetPath;






### Description



The file path to the source Asset that the build process used to generate the Packed Asset, relative to the Project directory.





Note: the same path may be repeated many times in the PackedAssets array, because PackedAssets track objects, and a single Asset can contain many objects.

Note: Some packed Assets might not have a source Asset.  For example a Sprite Atlas that is generated at build time.  Also, AssetBundles contain generated objects that do not come from any source asset, e.g. the [AssetBundleManifest](AssetBundleManifest.html).


            
