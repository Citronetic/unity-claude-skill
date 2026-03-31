This version of Unity is unsupported.



# BuildPipeline





class in
          UnityEditor


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



API for building players or AssetBundles.





The BuildPipeline class in the Unity Editor namespace provides essential tools to programmatically [Build Players](BuildPipeline.BuildPlayer.html) and [Build AssetBundles](BuildPipeline.BuildAssetBundles.html).
AssetBundles can be loaded from external sources such as the web, enhancing the flexibility and scalability of content delivery in Unity applications.
The class contains several static properties and methods to facilitate building workflows.

Additional resources: [AssetBundles](../Manual/AssetBundlesIntro.html), [Build Player Pipeline](../Manual/BuildPlayerPipeline.html)





### Static Properties



| Property | Description |
| --- | --- |
| isBuildingPlayer | Returns true when Unity is actively building a Player or AssetBundles |





### Static Methods



| Method | Description |
| --- | --- |
| BuildAssetBundles | Builds the AssetBundles in your project. |
| BuildCanBeAppended | Checks if Unity can append the build. |
| BuildPlayer | Builds a player. |
| GetBuildTargetName | Given a BuildTarget will return the well known string representation for the build target platform. |
| GetCRCForAssetBundle | Extract the CRC checksum for the given AssetBundle. |
| GetHashForAssetBundle | Extract the hash for the given AssetBundle. |
| GetPlaybackEngineDirectory | Returns the path of a player directory. For ex., Editor\Data\PlaybackEngines\AndroidPlayer. |
| GetPlayerConnectionInitiateMode | Returns the mode currently used by players to initiate a connect to the host. |
| IsBuildTargetSupported | Returns true if the specified build target is currently available in the Editor. |


            
