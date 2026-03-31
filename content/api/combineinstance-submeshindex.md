This version of Unity is unsupported.



# [CombineInstance](CombineInstance.html).subMeshIndex




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












                    public int subMeshIndex;






### Description



The index of the sub-mesh to be combined with the other meshes.





The [Mesh.CombineMeshes](Mesh.CombineMeshes.html) method uses this property along with the [mesh](CombineInstance-mesh.html) property to identify the mesh data copy into the combined mesh. If a mesh contains multiple sub-meshes, you must create a separate `CombineInstance` for each sub-mesh.

The default value of this property is 0.

Accepted values range from greater than or equal to 0 and less than the sub-mesh count for the corresponding [mesh](CombineInstance-mesh.html).


            
