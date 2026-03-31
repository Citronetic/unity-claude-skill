This version of Unity is unsupported.



# [CullingResults](Rendering.CullingResults.html).SetReflectionProbeIndexMap




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

public void SetReflectionProbeIndexMap(NativeArray<int> lightIndexMap);






### Parameters



| Parameter | Description |
| --- | --- |
| lightIndexMap | Array with reflection probe indices that map from VisibleReflectionProbe to internal per-object reflection probe lists. |





### Description



If a [RenderPipeline](Rendering.RenderPipeline.html) sorts or otherwise modifies the [VisibleReflectionProbe](Rendering.VisibleReflectionProbe.html) list, an index remap will be necessary to properly make use of per-object reflection probe lists.





If an element of the array is set to -1, the reflection probe corresponding to that element will be disabled.
Additional resources:: [CullingResults.GetReflectionProbeIndexMap](Rendering.CullingResults.GetReflectionProbeIndexMap.html), [CullingResults](Rendering.CullingResults.html).


            
