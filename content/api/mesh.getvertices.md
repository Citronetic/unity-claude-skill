This version of Unity is unsupported.



# [Mesh](Mesh.html).GetVertices




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

public void GetVertices(List<Vector3> vertices);






### Parameters



| Parameter | Description |
| --- | --- |
| vertices | A list of vertex positions to populate. |





### Description



Gets the vertex positions of the Mesh.





Use this method instead of [vertices](Mesh-vertices.html) if you control the life cycle of the list passed in and you want to avoid allocating a new array with every access.

Additional resources: [AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html) function.


            
