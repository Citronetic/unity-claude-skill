This version of Unity is unsupported.



# [ScriptableRenderContext](Rendering.ScriptableRenderContext.html).CreateSkyboxRendererList




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

public [Rendering.RendererList](Rendering.RendererList.html) CreateSkyboxRendererList([Camera](Camera.html) camera);






## Declaration

public [Rendering.RendererList](Rendering.RendererList.html) CreateSkyboxRendererList([Camera](Camera.html) camera,
[Matrix4x4](Matrix4x4.html) projectionMatrix,
[Matrix4x4](Matrix4x4.html) viewMatrix);






## Declaration

public [Rendering.RendererList](Rendering.RendererList.html) CreateSkyboxRendererList([Camera](Camera.html) camera,
[Matrix4x4](Matrix4x4.html) projectionMatrixL,
[Matrix4x4](Matrix4x4.html) viewMatrixL,
[Matrix4x4](Matrix4x4.html) projectionMatrixR,
[Matrix4x4](Matrix4x4.html) viewMatrixR);






### Parameters



| Parameter | Description |
| --- | --- |
| camera | The camera that is used for rendering the skybox. |
| projectionMatrix | The projection matrix used during XR rendering of the skybox. |
| viewMatrix | The view matrix used during XR rendering of the skybox. |
| projectionMatrixL | The left eye projection matrix used during Legacy single pass XR rendering of the skybox. |
| viewMatrixL | The left eye view matrix used during Legacy single pass XR rendering of the skybox. |
| projectionMatrixR | The right eye projection matrix used during Legacy single pass XR rendering of the skybox. |
| viewMatrixR | The right eye view matrix used during Legacy single pass XR rendering of the skybox. |





### Returns



**RendererList**
        Returns a new RendererList based on the settings you pass in.





### Description



Creates a new skybox [RendererList](Rendering.RendererList.html).





A [RendererList](Rendering.RendererList.html) represents a set of draw commands. To draw the skybox in a RendererList, add the [CommandBuffer.DrawRendererList](Rendering.CommandBuffer.DrawRendererList.html) command to a [CommandBuffer](Rendering.CommandBuffer.html).


            
