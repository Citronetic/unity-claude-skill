This version of Unity is unsupported.



# [AssetImporter](AssetImporter.html).assetBundleVariant




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












                    public string assetBundleVariant;






### Description



Get or set the AssetBundle variant.





This property has a value when the Asset is assigned to a specific variant of an AssetBundle, and corresponds to the second dropdown of the AssetBundle control found at the bottom of the Inspector.
				Its value is stored in the .meta file for the Asset, and inside the [AssetDatabase](AssetDatabase.html).


				This property is not used when AssetBundles are being built programmatically with the signature of [BuildPipeline.BuildAssetBundles](BuildPipeline.BuildAssetBundles.html) that accepts an array of [AssetBundleBuild](AssetBundleBuild.html) structures.


				Additional resources: [AssetImporter.assetBundleName](AssetImporter-assetBundleName.html), [AssetBundleBuild.assetBundleVariant](AssetBundleBuild-assetBundleVariant.html)


            
