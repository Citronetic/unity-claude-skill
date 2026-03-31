This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [GraphicsFormatUtility](Experimental.Rendering.GraphicsFormatUtility.html).ComputeMipChainSize




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

public static uint ComputeMipChainSize(int width,
int height,
[Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) format,
int mipCount = -1);






## Declaration

public static uint ComputeMipChainSize(int width,
int height,
[TextureFormat](TextureFormat.html) format,
int mipCount = -1);






## Declaration

public static uint ComputeMipChainSize(int width,
int height,
int depth,
[Experimental.Rendering.GraphicsFormat](Experimental.Rendering.GraphicsFormat.html) format,
int mipCount = -1);






## Declaration

public static uint ComputeMipChainSize(int width,
int height,
int depth,
[TextureFormat](TextureFormat.html) format,
int mipCount = -1);






### Parameters



| Parameter | Description |
| --- | --- |
| mipCount | Total number of mip levels to calculate. A value of -1 means Unity calculates the entire mip chain. |





### Description



Computes the memory size in bytes for a chain of mipmaps.


            
