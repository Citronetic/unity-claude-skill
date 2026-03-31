This version of Unity is unsupported.



# EditorBuildSettingsScene





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



Represents entries in the Scenes list, as displayed in the [Build Profiles](../Manual/BuildSettings.html) window.





This class contains the path of a Scene and an enabled flag that indicates whether the Scene is enabled in the Build Profiles window or not.

You can use this class in combination with [EditorBuildSettings.scenes](EditorBuildSettings-scenes.html) to populate the list of Scenes to include in the build via script. This is useful when you create custom editor scripts to automate your build pipeline.

See [EditorBuildSettings.scenes](EditorBuildSettings-scenes.html) for an example script.
Additional resources: [BuildPipeline.BuildPlayer](BuildPipeline.BuildPlayer.html).





### Properties



| Property | Description |
| --- | --- |
| enabled | Whether this Scene is enabled for inclusion in the build. |
| path | The file path of the Scene. |


            
