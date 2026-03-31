This version of Unity is unsupported.



# ModelImporterIndexFormat





enumeration


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



Format of the imported mesh index buffer data.





Index buffer can either be 16 bit (supports up to 65535 vertices in a mesh), or 32 bit (supports up to 4 billion vertices).
Default behavior is [ModelImporterIndexFormat.Auto](ModelImporterIndexFormat.Auto.html), which picks the format based on vertex count in the mesh.

Additional resources: [ModelImporter.indexFormat](ModelImporter-indexFormat.html), [Mesh.indexFormat](Mesh-indexFormat.html).





### Properties



| Property | Description |
| --- | --- |
| Auto | Use 16 or 32 bit index buffer depending on mesh size. |
| UInt16 | Use 16 bit index buffer. |
| UInt32 | Use 32 bit index buffer. |


            
