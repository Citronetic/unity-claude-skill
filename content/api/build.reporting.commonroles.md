This version of Unity is unsupported.



# CommonRoles





class in
          UnityEditor.Build.Reporting


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



This class provides constant values for some of the common roles used by files in the build. The role of each file in the build is available in [BuildFile.role](Build.Reporting.BuildFile-role.html).





### Static Properties



| Property | Description |
| --- | --- |
| appInfo | The BuildFile.role value of the file that provides config information used in Low Integrity mode on Windows. |
| assetBundle | The BuildFile.role value of built AssetBundle files. |
| assetBundleTextManifest | The BuildFile.role value of an AssetBundle manifest file, produced during the build process, that contains information about the bundle and its dependencies. |
| bootConfig | The BuildFile.role value of the file that contains configuration information for the very early stages of engine startup. |
| builtInResources | The BuildFile.role value of the file that contains built-in resources for the engine. |
| builtInShaders | The BuildFile.role value of the file that contains Unity's built-in shaders, such as the Standard shader. |
| crashHandler | The BuildFile.role value of the executable that is used to capture crashes from the player. |
| debugInfo | The BuildFile.role value of files that contain information for debuggers. |
| dependentManagedLibrary | The BuildFile.role value of a managed library that is present in the build due to being a dependency of a CommonRoles.managedLibrary. |
| engineLibrary | The BuildFile.role value of the main Unity runtime when it is built as a separate library. |
| executable | The BuildFile.role value of an executable - the file that will actually be launched on the target device. |
| globalGameManagers | The BuildFile.role value of the file that contains global Project Settings data for the player. |
| managedEngineApi | The BuildFile.role value of files that provide the managed API for Unity. |
| managedLibrary | The BuildFile.role value of a managed assembly, containing compiled script code. |
| manifestAssetBundle | The BuildFile.role value of a manifest AssetBundle, which is an AssetBundle that contains information about other AssetBundles and their dependencies. |
| monoConfig | The BuildFile.role value of files that are used as configuration data by the Mono runtime. |
| monoRuntime | The BuildFile.role value of files that make up the Mono runtime itself. |
| resourcesFile | The BuildFile.role value of the file that contains the contents of the project's "Resources" folder, packed into a single file. |
| scene | The BuildFile.role value of a file that contains the packed content of a Scene. |
| sharedAssets | The BuildFile.role value of a file that contains asset objects which are shared between Scenes. Examples of asset objects are textures, models, and audio. |
| streamingAsset | The BuildFile.role value of files that have been copied into the build without modification from the StreamingAssets folder in the project. |
| streamingResourceFile | The BuildFile.role value of a file that contains streaming resource data. |


            
