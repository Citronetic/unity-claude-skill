This version of Unity is unsupported.



# [Mesh](Mesh.html).MarkDynamic




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

public void MarkDynamic();






### Description



Optimize mesh for frequent updates.





Call this before assigning vertices to get better performance when continually updating the Mesh.
Internally, this makes the Mesh use "dynamic buffers" in the underlying graphics API, which
are more efficient when Mesh data changes often.

Additional resources: [vertices](Mesh-vertices.html), [normals](Mesh-normals.html), [triangles](Mesh-triangles.html), [UploadMeshData](Mesh.UploadMeshData.html).


            
