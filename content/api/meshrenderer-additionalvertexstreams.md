This version of Unity is unsupported.



# [MeshRenderer](MeshRenderer.html).additionalVertexStreams




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




                [Switch to Manual](../Manual/class-MeshRenderer.html)







                    public [Mesh](Mesh.html) additionalVertexStreams;






### Description



Vertex attributes in this mesh will override or add attributes of the primary mesh in the MeshRenderer.





This can be used for vertex painting tools, etc. This data is serialized.

        For example, if the primary mesh doesn't contain the [Mesh.colors](Mesh-colors.html) channel, the colors from additionalVertexStreams are used. If the primary mesh contains the colors channel and the additionalVertexStreams mesh also has colors, then colors from additionalVertexStreams are used.

        `MeshRenderer.additionalVertexStreams` isn't supported if you use either of the following:



          - [Dynamic batching](../Manual/dynamic-batching.html)

          - [GPU instancing](../Manual/GPUInstancing.html)




            
