This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).DrawRenderer




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















## Declaration

public void DrawRenderer([Renderer](Renderer.html) renderer,
[Material](Material.html) material,
int submeshIndex = 0,
int shaderPass = -1);






### Parameters



| Parameter | Description |
| --- | --- |
| renderer | Renderer to draw. |
| material | Material to use. |
| submeshIndex | Which subset of the mesh to render. |
| shaderPass | Which pass of the shader to use (default is -1, which renders all passes). |





### Description



Add a "draw renderer" command.





Note that the rendered mesh will not have any lighting related shader data (light colors, directions, shadows, light and reflection probes etc.) set up. If the shader used by the material uses any lighting related variables, the results are undefined.

Additional resources: [DrawMesh](Rendering.CommandBuffer.DrawMesh.html).


            
