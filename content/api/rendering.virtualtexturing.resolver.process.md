This version of Unity is unsupported.

                Virtual Texturing is experimental and not ready for production use. The feature and documentation might be changed or removed in the future.


# [Resolver](Rendering.VirtualTexturing.Resolver.html).Process




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

public void Process([Rendering.CommandBuffer](Rendering.CommandBuffer.html) cmd,
[Rendering.RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) rt,
int x,
int width,
int y,
int height,
int mip,
int slice);






## Declaration

public void Process([Rendering.CommandBuffer](Rendering.CommandBuffer.html) cmd,
[Rendering.RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) rt);






### Parameters



| Parameter | Description |
| --- | --- |
| cmd | The commandbuffer used to schedule processing. |
| rt | Texture containing the feedback data. |
| x | X position of the subrect that is processed. |
| width | Width of the subrect that is processed. |
| y | Y position of the subrect that is processed. |
| height | Height of the subrect that is processed. |
| mip | Miplevel of the texture to process. |
| slice | Arrayslice of the texture to process. |





### Description



Process the passed in feedback texture.


            
