This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).SetDefaultShaderChunkSizeInMB




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

public static void SetDefaultShaderChunkSizeInMB(int sizeInMegabytes);






### Parameters



| Parameter | Description |
| --- | --- |
| sizeInMegabytes | The chunk size in megabytes. |





### Description



Sets the default size for compressed shader variant chunks.





Unity stores multiple [shader variants](../Manual/shadervariants.html) in compressed chunks. You can use `SetDefaultShaderChunkSizeInMB` to set the maximum size of each chunk.

You can use this parameter with [PlayerSettings.SetDefaultShaderChunkCount](PlayerSettings.SetDefaultShaderChunkCount.html) to limit the amount of memory Unity uses for shader variants.

Use [PlayerSettings.SetShaderChunkSizeInMBForPlatform](PlayerSettings.SetShaderChunkSizeInMBForPlatform.html) to override the default shader chunk size for a build target.

Additional resources: [PlayerSettings.GetDefaultShaderChunkSizeInMB](PlayerSettings.GetDefaultShaderChunkSizeInMB.html).


            
