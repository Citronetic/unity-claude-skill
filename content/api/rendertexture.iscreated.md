This version of Unity is unsupported.



# [RenderTexture](RenderTexture.html).IsCreated




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




                [Switch to Manual](../Manual/class-RenderTexture.html)










## Declaration

public bool IsCreated();






### Description



Is the render texture actually created?





RenderTexture constructor does not actually create the hardware texture;
by default the texture is created the first time it is set [active](RenderTexture-active.html).
`IsCreated` returns `true` if the hardware resources for this render
are created.

Additional resources: [Create](RenderTexture.Create.html), [Release](RenderTexture.Release.html) functions.


            
