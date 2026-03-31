This version of Unity is unsupported.



# [BatchCullingFlags](Rendering.BatchCullingFlags.html).CullLightmappedShadowCasters




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



This culling invocation should cull static objects whose shadows have been baked in lightmaps.





This flag will only be set when [BatchCullingContext.viewType](Rendering.BatchCullingContext-viewType.html) is [BatchCullingViewType.Light](Rendering.BatchCullingViewType.Light.html), for lights that use a mixture of baked and dynamic shadows.  When set, the implementation of the [OnPerformCulling](Rendering.BatchRendererGroup.OnPerformCulling.html) callback should skip renderers that affect lightmaps, adding only dynamic shadow casters to the [BatchCullingOutput](Rendering.BatchCullingOutput.html).


            
