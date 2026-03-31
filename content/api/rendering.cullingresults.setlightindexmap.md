This version of Unity is unsupported.



# [CullingResults](Rendering.CullingResults.html).SetLightIndexMap




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















## Declaration

public void SetLightIndexMap(NativeArray<int> lightIndexMap);






### Parameters



| Parameter | Description |
| --- | --- |
| lightIndexMap | Array with light indices that map from VisibleLight to internal per-object light lists. |





### Description



If a [RenderPipeline](Rendering.RenderPipeline.html) sorts or otherwise modifies the [VisibleLight](Rendering.VisibleLight.html) list, an index remap will be necessary to properly make use of per-object light lists.





If an element of the array is set to -1, the light corresponding to that element will be disabled.
Additional resources:: [CullingResults.GetLightIndexMap](Rendering.CullingResults.GetLightIndexMap.html), [CullingResults](Rendering.CullingResults.html).


            
