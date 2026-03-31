This version of Unity is unsupported.



# [ContentBuildInterface](Build.Content.ContentBuildInterface.html).GenerateAssetBundleBuilds




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

public static AssetBundleBuild[] GenerateAssetBundleBuilds();






### Description



Returns an array of AssetBundleBuild structs that detail the current AssetBundle layout, as set through the Inspector and stored in the AssetDatabase.





This API does not generate a build, instead it is a convenient function to populate the build definition into the format expected by some signatures of [BuildPipeline.BuildAssetBundles](BuildPipeline.BuildAssetBundles.html), or the Scriptable Build Pipeline.

                    Additional resources: [BuildPipeline.BuildAssetBundles](BuildPipeline.BuildAssetBundles.html), [AssetDatabase.GetAllAssetBundleNames](AssetDatabase.GetAllAssetBundleNames.html), [AssetDatabase.GetAssetPathsFromAssetBundle](AssetDatabase.GetAssetPathsFromAssetBundle.html).


            
