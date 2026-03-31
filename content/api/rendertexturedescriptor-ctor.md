This version of Unity is unsupported.



# [RenderTextureDescriptor](RenderTextureDescriptor.html).RenderTextureDescriptor Constructor




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

public RenderTextureDescriptor(int width,
int height,
[RenderTextureFormat](RenderTextureFormat.html) colorFormat = RenderTextureFormat.Default,
int depthBufferBits = 0,
int mipCount = Texture.GenerateAllMips,
[RenderTextureReadWrite](RenderTextureReadWrite.html) readWrite = RenderTextureReadWrite.Linear);






















### Parameters



| Parameter | Description |
| --- | --- |
| width | Width of the RenderTexture in pixels. |
| height | Height of the RenderTexture in pixels. |
| colorFormat | The color format for the RenderTexture. |
| depthStencilFormat | The depth stencil format for the RenderTexture. |
| depthBufferBits | The number of bits to use for the depth buffer. |
| mipCount | Amount of mips to allocate for the RenderTexture. |
| readWrite | How color space conversions are applied on texture read/write. |





### Description



Create a RenderTextureDescriptor with default values, or a certain width, height, and format.


            
