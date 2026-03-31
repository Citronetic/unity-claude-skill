This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).SetShaderChunkSizeInMBForPlatform




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

public static void SetShaderChunkSizeInMBForPlatform([BuildTarget](BuildTarget.html) buildTarget,
int sizeInMegabytes);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTarget | The build target to set the shader chunk size for. |
| sizeInMegabytes | The chunk size in megabytes. |





### Description



Sets the default size for compressed shader variant chunks on the build target.





Unity stores multiple [shader variants](../Manual/shadervariants.html) in compressed chunks. You can use `SetDefaultShaderChunkSizeInMBForPlatform` to set the maximum size of each chunk.

This parameter overrides [PlayerSettings.SetDefaultShaderChunkSizeInMB](PlayerSettings.SetDefaultShaderChunkSizeInMB.html) on the build target.

You can use this parameter with [PlayerSettings.SetShaderChunkCountForPlatform](PlayerSettings.SetShaderChunkCountForPlatform.html) to limit the amount of memory Unity uses for shader variants.

Additional resources: [PlayerSettings.GetShaderChunkSizeInMBForPlatform](PlayerSettings.GetShaderChunkSizeInMBForPlatform.html).


            
