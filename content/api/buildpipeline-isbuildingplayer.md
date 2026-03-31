This version of Unity is unsupported.



# [BuildPipeline](BuildPipeline.html).isBuildingPlayer




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












                    public static bool isBuildingPlayer;






### Description



Returns true when Unity is actively building a Player or AssetBundles





This returns true during Player builds ([BuildPipeline.BuildPlayer](BuildPipeline.BuildPlayer.html)) and AssetBundle builds ([BuildPipeline.BuildAssetBundles](BuildPipeline.BuildAssetBundles.html)).
It can be used to check the context inside script code that could be triggered during a build, for example when [ExecuteAlways](ExecuteAlways.html) is being used on a [MonoBehaviour](MonoBehaviour.html).


            
