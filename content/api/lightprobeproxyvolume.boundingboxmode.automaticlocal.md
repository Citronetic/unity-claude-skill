This version of Unity is unsupported.



# [LightProbeProxyVolume.BoundingBoxMode](LightProbeProxyVolume.BoundingBoxMode.html).AutomaticLocal




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



The bounding box encloses the current Renderer and all the relevant Renderers down the hierarchy, in local space.





Only Renderers that have the **Light Probes** property set to **Use Proxy Volume** are taken into account. The interpolated Light Probe positions are generated in the local-space of the Renderer inside the resulting bounding box. If a Renderer component isn’t attached to the GameObject, a default bounding box is generated.


            
