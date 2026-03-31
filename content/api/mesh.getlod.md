This version of Unity is unsupported.



# [Mesh](Mesh.html).GetLod




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

public [MeshLodRange](MeshLodRange.html) GetLod(int subMeshIndex,
int levelIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| subMeshIndex | Sub-mesh index to get LOD from. |
| levelIndex | Level of detail to get range for. |





### Returns



**MeshLodRange**
        Index range for the requested level of detail.





### Description



Gets a Mesh LOD range (index start and index count) for a given Mesh LOD.





Note that each Mesh LOD range is relative to the sub-mesh holding the LOD. See [MeshLodRange](MeshLodRange.html) for more information.


            
