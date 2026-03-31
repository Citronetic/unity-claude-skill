This version of Unity is unsupported.



# [AssetBundleBuild](AssetBundleBuild.html).assetNames




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












                    public string[] assetNames;






### Description



Asset names which belong to the given AssetBundle.





Please use the asset path relative to the project folder, for example "Assets/MyPrefab.prefab".

An AssetBundle can contain either Scene files or Asset files, but not a mix of the two.

This same path is used to retrieve assets from a loaded AssetBundle, for example with [AssetBundle.LoadAsset](AssetBundle.LoadAsset.html), unless an alternative name has been specified in [AssetBundleBuild.addressableNames](AssetBundleBuild-addressableNames.html).


            
