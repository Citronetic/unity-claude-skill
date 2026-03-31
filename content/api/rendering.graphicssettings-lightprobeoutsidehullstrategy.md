This version of Unity is unsupported.



# [GraphicsSettings](Rendering.GraphicsSettings.html).lightProbeOutsideHullStrategy




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












                    public static [Rendering.LightProbeOutsideHullStrategy](Rendering.LightProbeOutsideHullStrategy.html) lightProbeOutsideHullStrategy;






### Description



Defines the way Unity chooses a probe to light a Renderer that is lit by Light Probes but positioned outside the bounds of the Light Probe tetrahedral hull.





When a Renderer that is lit by Light Probes is positioned outside the bounds of a Light Probe tetrahedral hull, there are two different approaches Unity can use to light that Renderer. Unity can either search for the probe closest to that Renderer (which is a resource-intensive process) or use the Ambient Probe. Configure this enum to determine which approach Unity uses in this situation.


            
