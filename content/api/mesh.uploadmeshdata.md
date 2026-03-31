This version of Unity is unsupported.



# [Mesh](Mesh.html).UploadMeshData




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

public void UploadMeshData(bool markNoLongerReadable);






### Parameters



| Parameter | Description |
| --- | --- |
| markNoLongerReadable | Frees up system memory copy of mesh data when set to true. |





### Description



Upload previously done Mesh modifications to the graphics API.





When creating or modifying a Mesh from code (using [vertices](Mesh-vertices.html), [normals](Mesh-normals.html), [triangles](Mesh-triangles.html) etc. properties), the Mesh data is internally marked as "modified" and is sent to the graphics API next time the Mesh is rendered.

Call UploadMeshData to immediately send the modified data to the graphics API, to avoid a possible problem
later. Passing `true` in a `markNoLongerReadable` argument makes Mesh data not be readable from the script
anymore, and frees up system memory copy of the data.

Additional resources: [vertices](Mesh-vertices.html), [normals](Mesh-normals.html), [triangles](Mesh-triangles.html), [MarkDynamic](Mesh.MarkDynamic.html).


            
