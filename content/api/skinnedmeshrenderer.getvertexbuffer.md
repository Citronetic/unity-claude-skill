This version of Unity is unsupported.



# [SkinnedMeshRenderer](SkinnedMeshRenderer.html).GetVertexBuffer




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




                [Switch to Manual](../Manual/class-SkinnedMeshRenderer.html)










## Declaration

public [GraphicsBuffer](GraphicsBuffer.html) GetVertexBuffer();






### Returns



**GraphicsBuffer**
        The skinned mesh vertex buffer as a [GraphicsBuffer](GraphicsBuffer.html).





### Description



Retrieves a [GraphicsBuffer](GraphicsBuffer.html) that provides direct access to the GPU vertex buffer for this skinned mesh, for the current frame.





During motion vector rendering (used for motion blur, temporal anti-aliasing, or other effects), skinned meshes that have [skinnedMotionVectors](SkinnedMeshRenderer-skinnedMotionVectors.html) on alternate between two GPU vertex buffers. You can access the GPU vertex buffer for the current frame using `GetVertexBuffer`, and for the previous frame using [GetPreviousVertexBuffer](SkinnedMeshRenderer.GetPreviousVertexBuffer.html).

You can use this method to access the skinned mesh vertex buffer for the current frame in a [ComputeShader](ComputeShader.html). To do that, first request an appropriate buffer binding target via [vertexBufferTarget](SkinnedMeshRenderer-vertexBufferTarget.html), then get the graphics buffer using `GetVertexBuffer`, and then set it up as a parameter for your shaders using ComputeBuffer.SetBuffer, [Material.SetBuffer](Material.SetBuffer.html) and similar methods.

Additional resources: [vertexBufferTarget](SkinnedMeshRenderer-vertexBufferTarget.html), [GetPreviousVertexBuffer](SkinnedMeshRenderer.GetPreviousVertexBuffer.html).


            
