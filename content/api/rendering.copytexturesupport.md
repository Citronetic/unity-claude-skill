This version of Unity is unsupported.



# CopyTextureSupport





enumeration


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



Support for various [Graphics.CopyTexture](Graphics.CopyTexture.html) cases.





Most modern platforms and graphics APIs support quite flexible texture copy (e.g. copy from a [RenderTexture](RenderTexture.html)
into a [Cubemap](Cubemap.html) face). However some older systems might not support certain parts of texture copy functionality.
This enum indicates support for this. Use [SystemInfo.copyTextureSupport](SystemInfo-copyTextureSupport.html) to check for support before
calling [Graphics.CopyTexture](Graphics.CopyTexture.html).

Direct3D11, DirectD12, Metal and PS4 platforms generally support flexible texture copy (all CopyTextureSupport flags are set).

OpenGL supports flexible texture copy since OpenGL 4.3; OpenGL ES supports flexible texture copy since OpenGL ES 3.1 with Android Extension Pack; on earlier versions there's no copy support right now ([CopyTextureSupport.None](Rendering.CopyTextureSupport.None.html)).

Direct3D9 systems have somewhat limited texture copy support (can't copy 3D textures, and can't copy between
textures and render textures).

WebGL currently do not have texture copy support ([CopyTextureSupport.None](Rendering.CopyTextureSupport.None.html)).

Additional resources: [Graphics.CopyTexture](Graphics.CopyTexture.html), [SystemInfo.copyTextureSupport](SystemInfo-copyTextureSupport.html).





### Properties



| Property | Description |
| --- | --- |
| None | No support for Graphics.CopyTexture. |
| Basic | Basic Graphics.CopyTexture support. |
| Copy3D | Support for Texture3D in Graphics.CopyTexture. |
| DifferentTypes | Support for Graphics.CopyTexture between different texture types. |
| TextureToRT | Support for Texture to RenderTexture copies in Graphics.CopyTexture. |
| RTToTexture | Support for RenderTexture to Texture copies in Graphics.CopyTexture. |


            
