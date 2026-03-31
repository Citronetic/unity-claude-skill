This version of Unity is unsupported.



# [Mesh](Mesh.html).GetLods




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

public MeshLodRange[] GetLods(int submesh);






### Parameters



| Parameter | Description |
| --- | --- |
| subMeshIndex | Sub-mesh index to get LOD ranges from. |





### Returns



**MeshLodRange[]**
        Index ranges for all LODs in this sub-mesh.





### Description



Gets an array containing the Mesh LOD ranges (index start and index count) for a given Mesh LOD.





Note that the Mesh LOD range is relative to the sub-mesh holding the LOD. See [MeshLodRange](MeshLodRange.html) for more information.




---








## Declaration

public void GetLods(List<MeshLodRange> levels,
int submesh);






### Parameters



| Parameter | Description |
| --- | --- |
| levelRanges | List to store LOD ranges for all LODs in this sub-mesh. |
| submesh | Sub-mesh to get LODs from. |





### Description



Gets all index ranges for a given sub-mesh.





Note that the Mesh LOD range is relative to the sub-mesh holding the LOD. See [MeshLodRange](MeshLodRange.html) for more information.


            
