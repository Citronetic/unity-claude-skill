This version of Unity is unsupported.



# [Mesh.MeshData](Mesh.MeshData.html).indexFormat




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







                    public [Rendering.IndexFormat](Rendering.IndexFormat.html) indexFormat;






### Description



Gets the format of the index buffer data in the `MeshData`. (Read Only)





A Mesh's index buffer format can be either 16 bit (which supports up to 65535 vertices), or 32 bit (which supports up to 4 billion vertices).
The default index format is 16 bit, which requires less memory and bandwidth and is more widely supported than 32 bit.
Note that GPU support for 32 bit indices is not guaranteed on all platforms; for example Android devices with Mali-400 GPUs do not support them. When using 32 bit indices on such a platform, Unity logs a warning message and does not render the Mesh.
Additional resources: [IndexFormat](Rendering.IndexFormat.html), [Mesh.indexFormat](Mesh-indexFormat.html), [GetIndices](Mesh.MeshData.GetIndices.html), [Mesh.AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html).


            
