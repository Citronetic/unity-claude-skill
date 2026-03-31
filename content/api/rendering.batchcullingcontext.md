This version of Unity is unsupported.



# BatchCullingContext





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



Culling context for a batch.





Specifies the data required to perform culling. Additional resources: [OnPerformCulling](Rendering.BatchRendererGroup.OnPerformCulling.html).





### Properties



| Property | Description |
| --- | --- |
| cullingFlags | Additional culling information for the current context. |
| cullingLayerMask | The cullingLayerMask value of the object from which the culling is invoked. The draw command is discarded by the internal culling if the expression (1 << layer) & cullingLayerMask is false. Using this field is optional, use it for performance or other optimization purposes. |
| cullingPlanes | Planes to cull against. |
| cullingSplits | The array of CullingSplit structs. |
| localToWorldMatrix | Local to world matrix. |
| lodParameters | Additional resources: LODParameters. |
| projectionType | The projection of the view from which the culling is invoked. Usage example: take different culling paths for orthographic vs perspective views. |
| receiverPlaneCount | The number of receiver planes. |
| receiverPlaneOffset | The index of the first receiver plane in the BatchCullingContext.cullingPlanes array. |
| sceneCullingMask | Use this bit mask to discard the draw commands in a particular context. A draw command is not discarded if the expression (1 << layer) & sceneCullingMask is true. This field is typically used when rendering Editor previews. |
| splitExclusionMask | A bitmask that represents the BatchCullingContext.cullingSplits Unity ignores in a BatchDrawCommand struct. |
| viewID | The ID of the object from which the culling is invoked. Usage example: store culling-related data for each object. |
| viewType | The type of the view from which the culling is invoked. Usage examples: skip culling, take different culling paths depending on the view type, etc. |


            
