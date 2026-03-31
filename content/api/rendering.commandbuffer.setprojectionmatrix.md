This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetProjectionMatrix




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

public void SetProjectionMatrix([Matrix4x4](Matrix4x4.html) proj);






### Parameters



| Parameter | Description |
| --- | --- |
| proj | Projection (camera to clip space) matrix. |





### Description



Add a command to set the projection matrix.





The projection matrix is the matrix that transforms from view space into homogeneous clip space.

When you want to set both the view and projection matrices, it's more efficient to use [SetViewProjectionMatrices](Rendering.CommandBuffer.SetViewProjectionMatrices.html) because it sets both in one CommandBuffer command.

Additional resources: [SetViewMatrix](Rendering.CommandBuffer.SetViewMatrix.html), [SetViewProjectionMatrices](Rendering.CommandBuffer.SetViewProjectionMatrices.html), [Camera.projectionMatrix](Camera-projectionMatrix.html), [Matrix4x4.Perspective](Matrix4x4.Perspective.html).


            
