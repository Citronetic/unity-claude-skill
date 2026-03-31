This version of Unity is unsupported.



# GpuBvhBuildOptions





struct in
          UnityEditor.Embree


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



Options for bounding volume hierarchy (BVH) build.





### Properties



| Property | Description |
| --- | --- |
| allowPrimitiveSplits | With this option enabled, Unity performs spatial splits. This increases the memory footprint, but the resulting BVH makes the ray tracing stage faster. |
| isTopLevel | With this option enabled, Unity builds a top level BVH (for instances). When disabled, it builds a bottom level BVH (for a Mesh). |
| maxLeafSize | The maximum number of primitives allowed in a leaf node. |
| minLeafSize | The minimum number of primitives allowed in a leaf node. |
| quality | BVH build quality. |


            
