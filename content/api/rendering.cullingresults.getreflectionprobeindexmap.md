This version of Unity is unsupported.



# [CullingResults](Rendering.CullingResults.html).GetReflectionProbeIndexMap




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

public NativeArray<int> GetReflectionProbeIndexMap([Unity.Collections.Allocator](Unity.Collections.Allocator.html) allocator);






### Parameters



| Parameter | Description |
| --- | --- |
| allocator | The allocator to use. |





### Returns



**NativeArray<int>**
        Array of indices that map from [VisibleReflectionProbe](Rendering.VisibleReflectionProbe.html) indices to internal per-object reflection probe list indices.





### Description



If a [RenderPipeline](Rendering.RenderPipeline.html) sorts or otherwise modifies the [VisibleReflectionProbe](Rendering.VisibleReflectionProbe.html) list, an index remap will be necessary to properly make use of per-object reflection probe lists.





Additional resources:: [CullingResults.SetReflectionProbeIndexMap](Rendering.CullingResults.SetReflectionProbeIndexMap.html), [CullingResults](Rendering.CullingResults.html).


            
