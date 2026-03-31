This version of Unity is unsupported.



# [MeshLodUtility](MeshLodUtility.html).GenerateMeshLods




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

public static void GenerateMeshLods([Mesh](Mesh.html) mesh,
int meshLodLimit);






## Declaration

public static void GenerateMeshLods([Mesh](Mesh.html) mesh,
[MeshLodUtility.LodGenerationFlags](MeshLodUtility.LodGenerationFlags.html) flags,
int meshLodLimit);






### Parameters



| Parameter | Description |
| --- | --- |
| mesh | Mesh to generate LODs for. |
| meshLodLimit | The maximum number of LOD levels to generate. If the value is 0, the method does not generate any extra LOD levels in addition to the original mesh. If the value is negative, the generation process stops when the next Mesh LOD level has around 64 indices. |
| flags | Mesh Generation settings. |





### Description



Creates automatic Mesh LOD for a given mesh.


            
