This version of Unity is unsupported.



# [CombineInstance](CombineInstance.html).mesh




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












                    public [Mesh](Mesh.html) mesh;






### Description



The [Mesh](Mesh.html) to be combined with the other meshes.





The [Mesh.CombineMeshes](Mesh.CombineMeshes.html) method uses this property along with [subMeshIndex](CombineInstance-subMeshIndex.html) to identify the mesh data to copy into the combined mesh.

The default value of this property is `null`.

To combine a mesh, this property must reference a valid, non-null mesh. Furthermore, the mesh must be CPU-readable.


            
