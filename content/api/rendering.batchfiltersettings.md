This version of Unity is unsupported.



# BatchFilterSettings





struct in
          UnityEngine.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Represents settings that Unity applies to draw commands in this [draw range](Rendering.BatchDrawRange.html).





For more information, see [BatchRendererGroup](../Manual/batch-renderer-group.html).





### Properties



| Property | Description |
| --- | --- |
| allDepthSorted | Indicates whether all draw commands in the current draw range have the BatchDrawCommandFlags.HasSortingPosition flag set. |
| batchLayer | The batch layer to use for draw commands in this draw range. |
| layer | The layer to use for draw commands in this draw range. |
| motionMode | Specifies how to generate motion vectors in this draw range. |
| receiveShadows | Indicates whether instances from draw commands in this draw range should receive shadows. |
| rendererPriority | The sorting priority to use for draw commands in this draw range. |
| renderingLayerMask | The rendering layer mask to use for draw commands in this draw range. |
| sceneCullingMask | Use this bit mask to discard the draw commands in a particular context. A draw command is not discarded if the expression (1 << layer) & sceneCullingMask is true. This field is typically used when rendering Editor previews. |
| shadowCastingMode | Specifies how instances from the draw commands in this draw range cast shadows. |
| staticShadowCaster | Indicates whether instances from the draw commands in this draw range render into cached shadow maps. |


            
