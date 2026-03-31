This version of Unity is unsupported.



# [Mesh](Mesh.html).GetIndexCount




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




                [Switch to Manual](../Manual/class-Mesh.html)










## Declaration

public uint GetIndexCount(int submesh);






### Parameters



| Parameter | Description |
| --- | --- |
| submesh | The index of the sub-mesh to get the indices for. See subMeshCount. |





### Returns



**uint**
        The index count.





### Description



Gets the index count of the given `sub-mesh`. If the mesh contains Mesh LODs, the index count of LOD0.





Additional resources: [SetIndices](Mesh.SetIndices.html), [GetIndexStart](Mesh.GetIndexStart.html).




---








## Declaration

public uint GetIndexCount(int submesh,
int meshLod);






### Parameters



| Parameter | Description |
| --- | --- |
| submesh | The index of the sub-mesh to get the indices for. See subMeshCount. |
| meshLod | The Mesh LOD index. A value of -1 gets the count for the sub-mesh. |





### Returns



**uint**
        The index count.





### Description



Gets the index count of the given `sub-mesh` and level of detail. When meshlod has a value of -1, this returns the index count for the specified sub-mesh (which can include multiple LODs).


            
