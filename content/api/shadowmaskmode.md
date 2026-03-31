This version of Unity is unsupported.



# ShadowmaskMode





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



The rendering mode of Shadowmask.





Set whether static shadow casters should be rendered into real-time shadow maps.

          Additional resources: [QualitySettings.shadowmaskMode](QualitySettings-shadowmaskMode.html), [QualitySettings.shadowDistance](QualitySettings-shadowDistance.html).





### Properties



| Property | Description |
| --- | --- |
| Shadowmask | Static shadow casters won't be rendered into real-time shadow maps. All shadows from static casters are handled via Shadowmasks and occlusion from Light Probes. |
| DistanceShadowmask | Static shadow casters will be rendered into real-time shadow maps. Shadowmasks and occlusion from Light Probes will only be used past the real-time shadow distance. |


            
