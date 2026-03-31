This version of Unity is unsupported.



# [LightProbeProxyVolume.DataFormat](LightProbeProxyVolume.DataFormat.html).HalfFloat




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




                [Switch to Manual](../Manual/class-LightProbeProxyVolume.html)














### Description



A 16-bit half floating-point format is used for the Light Probe Proxy Volume 3D texture.





Using this format will incur a CPU performance impact since the data has to be converted from float to half-float when generating the 3D texture data associated with the Light Probe Proxy Volume component.

Texture sampling perfomance will increase on the GPU when using this format. Additionally, less GPU memory will be used.


            
