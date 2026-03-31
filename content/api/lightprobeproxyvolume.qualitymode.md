This version of Unity is unsupported.



# QualityMode





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




                [Switch to Manual](../Manual/class-LightProbeProxyVolume.html)














### Description



An enum describing the Quality option used by the Light Probe Proxy Volume component.





Additional resources: [Light Probes](../Manual/LightProbes.html), [Light Probe Proxy Volume](LightProbeProxyVolume.html),  [Spherical Harmonics(SH)](Rendering.SphericalHarmonicsL2.html).





### Properties



| Property | Description |
| --- | --- |
| Low | This option will use only two SH coefficients bands: L0 and L1. The coefficients are sampled from the Light Probe Proxy Volume 3D Texture. Using this option might increase the draw call batch sizes by not having to change the L2 coefficients per Renderer. |
| Normal | This option will use L0 and L1 SH coefficients from the Light Probe Proxy Volume 3D Texture. The L2 coefficients are constant per Renderer. By having to provide the L2 coefficients, draw call batches might be broken. |


            
