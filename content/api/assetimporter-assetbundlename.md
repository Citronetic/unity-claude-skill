This version of Unity is unsupported.



# [AssetImporter](AssetImporter.html).assetBundleName




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












                    public string assetBundleName;






### Description



Get or set the AssetBundle name.





This property makes it possible to programmatically access the assignment of Assets to AssetBundles, corresponding to the AssetBundle control found at the bottom of the Inspector.
				This property is stored in the .meta file for the Asset, and inside the [AssetDatabase](AssetDatabase.html).


				Alternatively, AssetBundle contents can also be defined programmatically by filling in an array of [AssetBundleBuild](AssetBundleBuild.html) structures when calling [BuildPipeline.BuildAssetBundles](BuildPipeline.BuildAssetBundles.html).


				Additional resources: [AssetBundleBuild.assetBundleName](AssetBundleBuild-assetBundleName.html), [AssetDatabase.GetAssetPathsFromAssetBundle](AssetDatabase.GetAssetPathsFromAssetBundle.html), [AssetDatabase.GetImplicitAssetBundleName](AssetDatabase.GetImplicitAssetBundleName.html).


            
