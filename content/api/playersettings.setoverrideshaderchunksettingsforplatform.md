This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).SetOverrideShaderChunkSettingsForPlatform




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)










## Declaration

public static void SetOverrideShaderChunkSettingsForPlatform([BuildTarget](BuildTarget.html) buildTarget,
bool value);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTarget | The build target to set the override for. |
| value | Set the value to true if you want settings for the buildTarget to override the default settings. |





### Description



Enable this to override the default shader variant chunk settings.





If you set `SetOverrideShaderChunkSettingsForPlatform` to `true` for a build target, you can do the following:



          - Use [PlayerSettings.SetShaderChunkCountForPlatform](PlayerSettings.SetShaderChunkCountForPlatform.html) to override [PlayerSettings.SetDefaultShaderChunkCount](PlayerSettings.SetDefaultShaderChunkCount.html).

          - Use [PlayerSettings.SetShaderChunkSizeInMBForPlatform](PlayerSettings.SetShaderChunkSizeInMBForPlatform.html) to override [PlayerSettings.SetDefaultShaderChunkSizeInMB](PlayerSettings.SetDefaultShaderChunkSizeInMB.html).





Additional resources: [PlayerSettings.GetOverrideShaderChunkSettingsForPlatform](PlayerSettings.GetOverrideShaderChunkSettingsForPlatform.html).


            
