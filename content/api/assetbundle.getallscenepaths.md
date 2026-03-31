This version of Unity is unsupported.



# [AssetBundle](AssetBundle.html).GetAllScenePaths




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

public string[] GetAllScenePaths();






### Description



Return all the names of Scenes in the AssetBundle.





The names are the project-relative path of each .unity file, unless a different name was specified at build time.

                An AssetBundle can store either Scenes or Assets, never a mix of the two.  If the AssetBundle contains only Assets this returns an empty string array.

                Additional resources: [AssetBundle.isStreamedSceneAssetBundle](AssetBundle-isStreamedSceneAssetBundle.html), [SceneManager.LoadScene](SceneManagement.SceneManager.LoadScene.html), [AssetBundleBuild.addressableNames](AssetBundleBuild-addressableNames.html)


            
