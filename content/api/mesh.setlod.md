This version of Unity is unsupported.



# [Mesh](Mesh.html).SetLod




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

public void SetLod(int submesh,
int level,
[MeshLodRange](MeshLodRange.html) levelRange,
[Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| subMeshIndex | Sub-mesh to set LOD for. |
| level | Level to set. |
| levelRange | Range for the set LOD. |
| flags | Mesh update flags.  If set to DontValidateIndices, then index range validation is skipped. |





### Description



Sets a Mesh LOD range (index start and index count) for a given sub-mesh and level of detail.





Note that the Mesh LOD range should be relative to the sub-mesh holding the LOD. See [MeshLodRange](MeshLodRange.html) for more information.


            
