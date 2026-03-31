This version of Unity is unsupported.



# [RenderParams](RenderParams.html).forceMeshLod




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












                    public int forceMeshLod;






### Description



Force Unity to use a specific Mesh LOD if the mesh has Mesh LODs.





If the value is -1, Unity uses the following:



          - LOD0 at all times, if you use [Graphics.RenderMeshInstanced](Graphics.RenderMeshInstanced.html), [Graphics.RenderMeshIndirect](Graphics.RenderMeshIndirect.html), or [Graphics.RenderMeshPrimitives](Graphics.RenderMeshPrimitives.html)

          - The default Mesh LOD selection method, if you use [Graphics.RenderMesh](Graphics.RenderMesh.html).




            
