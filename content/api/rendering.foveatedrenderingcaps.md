This version of Unity is unsupported.



# FoveatedRenderingCaps





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



Capabilities of the foveated rendering implementation.





### Properties



| Property | Description |
| --- | --- |
| None | Foveated rendering is not supported. |
| FoveationImage | The platform can use a foveation image to control the shading rate per tile in screen-space. |
| NonUniformRaster | The platform can use non-uniform rasterization to redistribute the resolution density. |
| ModeChangeOnlyBeforeRenderTargetSet | The platform requires that the mode change (enable/disable) to be done before changing render target. If this flag is not set the mode can be changed every drawcall. |


            
