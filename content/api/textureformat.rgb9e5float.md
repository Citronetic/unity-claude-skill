This version of Unity is unsupported.



# [TextureFormat](TextureFormat.html).RGB9e5Float




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



RGB HDR format, with 9 bit mantissa per channel and a 5 bit shared exponent.





Three partial-precision floating-point numbers encoded into a single 32-bit value all sharing the same 5-bit exponent (variant of s10e5, which is sign bit, 10-bit mantissa, and 5-bit biased(15) exponent). There is no sign bit, and there is a shared 5-bit biased(15) exponent and a 9-bit mantissa for each channel. RGB9e5Float is implemented for Direct3D 11, Direct3D 12, Xbox One, Playstation 4, OpenGL 3.0+, metal and Vulkan. The format is used for Precomputed Enlighten Realtime Global Illumination textures on supported platforms.

Additional resources: [Texture2D.format](Texture2D-format.html), [texture assets](../Manual/Textures.html).


            
