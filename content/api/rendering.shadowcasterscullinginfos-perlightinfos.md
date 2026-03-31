This version of Unity is unsupported.



# [ShadowCastersCullingInfos](Rendering.ShadowCastersCullingInfos.html).perLightInfos




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












                    public NativeArray<LightShadowCasterCullingInfo> perLightInfos;






### Description



An array of [LightShadowCasterCullingInfo](Rendering.LightShadowCasterCullingInfo.html).





Each entry in this array is associated with the [VisibleLight](Rendering.VisibleLight.html) at the same position in the array [CullingResults.visibleLights](Rendering.CullingResults-visibleLights.html). Therefore, both arrays must have the same size. The [LightShadowCasterCullingInfo.splitRange](Rendering.LightShadowCasterCullingInfo-splitRange.html) of each entry describes a range in the array [ShadowCastersCullingInfos.splitBuffer](Rendering.ShadowCastersCullingInfos-splitBuffer.html). An entry with [LightShadowCasterCullingInfo.splitRange](Rendering.LightShadowCasterCullingInfo-splitRange.html) set to (0,0) will cause shadow casters culling and shadow maps rendering to be skipped for this light.


            
