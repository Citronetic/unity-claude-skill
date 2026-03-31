This version of Unity is unsupported.



# [LightShadowCasterCullingInfo](Rendering.LightShadowCasterCullingInfo.html).splitExclusionMask




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












                    public ushort splitExclusionMask;






### Description



A bitmask that represents the shadow splits in [LightShadowCasterCullingInfo.splitRange](Rendering.LightShadowCasterCullingInfo-splitRange.html) Unity discards.





The bitmask is 8 bits. A bit value of 1 means Unity doesn't render the shadow split, so the CPU can end the culling job early. The least significant bit corresponds to the first shadow split, and each successive bit corresponds to the next shadow split. The maximum number of bits is the length of [LightShadowCasterCullingInfo.splitRange](Rendering.LightShadowCasterCullingInfo-splitRange.html).


            
