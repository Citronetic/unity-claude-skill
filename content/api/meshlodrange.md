This version of Unity is unsupported.



# MeshLodRange





struct in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



Index range (start index and index count) describing a single Mesh LOD within a [Mesh](Mesh.html).

The index range is relative to the sub-mesh holding the LOD. Add [SubMeshDescriptor.indexStart](Rendering.SubMeshDescriptor-indexStart.html) to this range to calculate the absolute position of the LOD within the whole index buffer.

Additional resources: [Mesh.SetLod](Mesh.SetLod.html), [Mesh.SetLods](Mesh.SetLods.html).





### Properties



| Property | Description |
| --- | --- |
| indexCount | This property, together with indexStart, determines which part of the whole index buffer is used by
a particular Mesh LOD. This should be a positive number or zero.Additional resources: indexStart, Mesh.SetLod, Mesh.SetLods. |
| indexStart | This property, together with indexCount, determines which part of the whole index buffer is used by
a particular Mesh LOD. The index start is relative to the sub-mesh holding the LOD. This should be a positive number or zero.Additional resources: indexCount, Mesh.SetLod, Mesh.SetLods. |





### Constructors



| Constructor | Description |
| --- | --- |
| MeshLodRange | Create a MeshLodRange. |


            
