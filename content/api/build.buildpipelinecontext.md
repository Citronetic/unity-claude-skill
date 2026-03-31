This version of Unity is unsupported.



# BuildPipelineContext





class in
          UnityEditor.Build


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



Defines the build context for IProcessSceneWithReport during a build event.





This class contains static methods for declaring additional scene dependencies for the build system. These dependencies are used to trigger scene rebuilds in cases where dependencies are not explicit in the scene itself.

                For example, if the implementation of [IProcessSceneWithReport](Build.IProcessSceneWithReport.html) loads an Asset programmatically then [BuildPipelineContext.DependOnAsset](Build.BuildPipelineContext.DependOnAsset.html) should be called, unless the same Asset is also referenced by the Scene.
                Then, if the Asset is changed and the build run again, Unity will retrigger the callback and save the latest scene state instead of reusing an out-of-date cached result.

                Dependency tracking is currently only required when [EditorBuildSettings.UseParallelAssetBundleBuilding](EditorBuildSettings.UseParallelAssetBundleBuilding.html) is true, for calls to [BuildPipeline.BuildAssetBundles](BuildPipeline.BuildAssetBundles.html).  It does not currently apply to [BuildPipeline.BuildPlayer](BuildPipeline.BuildPlayer.html).

                Additional resources: [AssetDatabase.LoadAssetAtPath](AssetDatabase.LoadAssetAtPath.html)





### Static Methods



| Method | Description |
| --- | --- |
| DependOnAsset | Allows you to specify that a Scene depends on contents of an asset directly provided. |
| DependOnPath | Allows you to specify that a Scene depends on contents of a source asset at the provided path. |


            
