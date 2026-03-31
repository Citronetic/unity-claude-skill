This version of Unity is unsupported.



# GraphicsFormatUsage





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



Use this format usages to figure out the capabilities of specific [GraphicsFormat](Experimental.Rendering.GraphicsFormat.html)





Each graphics card may not support all usages across formats. Use [SystemInfo.IsFormatSupported](SystemInfo.IsFormatSupported.html) to check which usages the graphics card supports.

Additional resources: [Texture2D](Texture2D.html), [texture assets](../Manual/Textures.html).





### Properties



| Property | Description |
| --- | --- |
| None | No flags are set. |
| Sample | Use this to create and sample textures. |
| Linear | Use this to sample textures with a linear filter. This is for regular texture sampling (non-shadow compare). Rentertextures created using ShadowSamplingMode.CompareDepths always support linear filtering on the comparison result. |
| Sparse | Use this to create sparse textures |
| Render | Use this to create and render to a rendertexture. |
| Blend | Use this to blend on a rendertexture. |
| GetPixels | Use this to get pixel data from a texture. |
| SetPixels | Use this to set pixel data to a texture. |
| SetPixels32 | Use this to set pixel data to a texture using `SetPixels32`. |
| ReadPixels | Use this to read back pixels data from a rendertexture. |
| LoadStore | Use this to perform resource load and store on a texture |
| MSAA2x | Use this to create and render to a MSAA 2X rendertexture. |
| MSAA4x | Use this to create and render to a MSAA 4X rendertexture. |
| MSAA8x | Use this to create and render to a MSAA 8X rendertexture. |
| StencilSampling | Use this to create and render to the Stencil sub element of a RenderTexture. |


            
