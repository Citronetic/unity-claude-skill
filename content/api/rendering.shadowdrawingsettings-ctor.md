This version of Unity is unsupported.



# ShadowDrawingSettings Constructor




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













                        **Obsolete**
                        ShadowDrawingSettings(CullingResults, int, BatchCullingProjectionType) is deprecated. Use ShadowDrawingSettings(CullingResults, int) instead.




## Declaration

public ShadowDrawingSettings([Rendering.CullingResults](Rendering.CullingResults.html) cullingResults,
int lightIndex,
[Rendering.BatchCullingProjectionType](Rendering.BatchCullingProjectionType.html) projectionType);






### Parameters



| Parameter | Description |
| --- | --- |
| cullResults | The cull results for this light. |
| lightIndex | The light index. |
| projectionType | The projection type of the shadow map. For directional lights this is usually BatchCullingProjectionType.Orthographic and for point or spot lights, it is usually BatchCullingProjectionType.Perspective. |





### Description



Create a shadow settings object.





Additional resources: [CullingResults](Rendering.CullingResults.html).


            
