This version of Unity is unsupported.



# [TierSettings](Rendering.TierSettings.html).prefer32BitShadowMaps




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












                    public bool prefer32BitShadowMaps;






### Description



Whether Unity should try to use 32-bit shadow maps, where possible.





Most platforms have a fixed shadow map format that you cannot adjust. These vary in format, and can be 16-bit, 24-bit, or 32-bit, and can also be either float or integer based.

However, when you are targeting PlayStation 4 or platforms using DirectX 11 or DirectX 12, you can choose whether Unity should use a 16-bit or 32-bit float shadow map.

32-bit shadow maps give higher quality shadows than 16-bit, but they will use increased memory and bandwidth on the GPU.

In addition, 32-bit shadow maps can only be used if the [depth buffer](Display-depthBuffer.html) is also set to 32-bit.


            
