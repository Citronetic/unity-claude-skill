This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).DrawMesh




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

public void DrawMesh([Mesh](Mesh.html) mesh,
[Matrix4x4](Matrix4x4.html) matrix,
[Material](Material.html) material,
int submeshIndex = 0,
int shaderPass = -1,
[MaterialPropertyBlock](MaterialPropertyBlock.html) properties = null);






### Parameters



| Parameter | Description |
| --- | --- |
| mesh | Mesh to draw. |
| matrix | Transformation matrix to use. |
| material | Material to use. |
| submeshIndex | Which subset of the mesh to render. |
| shaderPass | Which pass of the shader to use (default is -1, which renders all passes). |
| properties | Additional Material properties to apply onto the Material just before this Mesh is drawn. See MaterialPropertyBlock. |





### Description



Add a "draw mesh" command.





Note that the rendered mesh will not have any lighting related shader data (light colors, directions, shadows, light and reflection probes etc.) set up. If the shader used by the material uses any lighting related variables, the results are undefined.

Additional resources: [DrawRenderer](Rendering.CommandBuffer.DrawRenderer.html), [MaterialPropertyBlock](MaterialPropertyBlock.html).


            
