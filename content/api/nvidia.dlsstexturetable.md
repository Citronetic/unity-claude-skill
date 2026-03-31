This version of Unity is unsupported.



# DLSSTextureTable





struct in
          UnityEngine.NVIDIA



/



Implemented in:[UnityEngine.NVIDIAModule](UnityEngine.NVIDIAModule.html)


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



The set of texture slots available for the [DLSSContext](NVIDIA.DLSSContext.html). SA [GraphicsDevice.ExecuteDLSS](NVIDIA.GraphicsDevice.ExecuteDLSS.html)





### Properties



| Property | Description |
| --- | --- |
| biasColorMask | A mask, same size as colorInput, preferably of format R8_UNORM that informs DLSS of possible moving pixels. If heavy ghosting is encountered, set pixels to this mask to fix the problem. This texture is optional. |
| colorInput | The input color buffer to upsample for DLSSContext. This texture is mandatory and you must set it to a non-null value. |
| colorOutput | The output color buffer to write the upsampling result for DLSSContext. This must be large enough to fit in the output rect specified in the command. This texture is mandatory and you must set it to a non-null value. |
| depth | The input depth buffer. This must be the same size as the input color buffer. This texture is mandatory and you must set it to a non-null value. |
| exposureTexture | A 1x1 texture with pre-exposure values. If you do not use pre-exposure, do not set this texture. This texture is optional. |
| motionVectors | The motion vectors requested by the DLSSContext. Depending on the DLSSFeatureFlags specified in DLSSContext.initData, this buffer can be a smaller scale or the full output resolution. This texture is mandatory and you must set it to a non-null value. |
| transparencyMask | A transparency bit mask. This must be the same size as the input texture. This texture helps the DLSSContext with ghosting issues. This texture is optional. |


            
