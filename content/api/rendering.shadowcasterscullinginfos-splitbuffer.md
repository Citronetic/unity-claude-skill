This version of Unity is unsupported.



# [ShadowCastersCullingInfos](Rendering.ShadowCastersCullingInfos.html).splitBuffer




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












                    public NativeArray<ShadowSplitData> splitBuffer;






### Description



An array that works as a buffer to store all the [ShadowSplitData](Rendering.ShadowSplitData.html) structs you want to use for shadow casters culling.





This buffer is referred to by the [LightShadowCasterCullingInfo.splitRange](Rendering.LightShadowCasterCullingInfo-splitRange.html) of each [LightShadowCasterCullingInfo](Rendering.LightShadowCasterCullingInfo.html) in [ShadowCastersCullingInfos.perLightInfos](Rendering.ShadowCastersCullingInfos-perLightInfos.html).


            
