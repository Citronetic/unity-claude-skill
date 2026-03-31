This version of Unity is unsupported.



# [BuildPlayerOptions](BuildPlayerOptions.html).assetBundleManifestPath




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












                    public string assetBundleManifestPath;






### Description



The path to an manifest file describing all of the asset bundles used in the build (optional).





When you call [BuildPipeline.BuildAssetBundles](BuildPipeline.BuildAssetBundles.html) to create your AssetBundles, Unity will also generate a manifest file with a filename matching the parent directory name and ".manifest" as its extension.
You can assign the path to this manifest file to `assetBundleManifestPath` to ensure that a player build does not strip any types used in the AssetBundles that you built.

You do not need to set this property when you use `link.xml` files, or if you generate AssetBundles using the [Addressables](https://docs.unity3d.com/Packages/com.unity.addressables@latest) package.

See [Managed code stripping](../Manual/ManagedCodeStripping.html) for more information about code stripping.


            
