This version of Unity is unsupported.



# RenderTargetSetup Constructor




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

public RenderTargetSetup([RenderBuffer](RenderBuffer.html) color,
[RenderBuffer](RenderBuffer.html) depth);






## Declaration

public RenderTargetSetup([RenderBuffer](RenderBuffer.html) color,
[RenderBuffer](RenderBuffer.html) depth,
int mipLevel);






## Declaration

public RenderTargetSetup([RenderBuffer](RenderBuffer.html) color,
[RenderBuffer](RenderBuffer.html) depth,
int mipLevel,
[CubemapFace](CubemapFace.html) face);






## Declaration

public RenderTargetSetup(RenderBuffer[] color,
[RenderBuffer](RenderBuffer.html) depth);






## Declaration

public RenderTargetSetup(RenderBuffer[] color,
[RenderBuffer](RenderBuffer.html) depth,
int mipLevel);






## Declaration

public RenderTargetSetup(RenderBuffer[] color,
[RenderBuffer](RenderBuffer.html) depth,
int mip,
[CubemapFace](CubemapFace.html) face);






### Parameters



| Parameter | Description |
| --- | --- |
| color | Color Buffer(s) to set. |
| depth | Depth Buffer to set. |
| mipLevel | Mip Level to render to. |
| face | Cubemap face to render to. |





### Description



Constructs RenderTargetSetup.


            
