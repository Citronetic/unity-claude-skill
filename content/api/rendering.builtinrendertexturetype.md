This version of Unity is unsupported.



# BuiltinRenderTextureType





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



Built-in temporary render textures produced during camera's rendering.





When camera is rendering the Scene, in some cases it can produce temporary render textures in the process (e.g. depth textures, deferred G-buffer etc.). This enum indicates these temporary render textures.

BuiltinRenderTextureType can be used as a [RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) in some functions of [CommandBuffer](Rendering.CommandBuffer.html).

Additional resources: [CommandBuffer](Rendering.CommandBuffer.html), [RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html).





### Properties



| Property | Description |
| --- | --- |
| PropertyName | A globally set property name. |
| BufferPtr | The raw RenderBuffer pointer to be used. |
| RenderTexture | The given RenderTexture. |
| CurrentActive | Currently active render target. |
| CameraTarget | Target texture of currently rendering camera. |
| Depth | Camera's depth texture. |
| DepthNormals | Camera's depth+normals texture. |
| ResolvedDepth | Resolved depth buffer from deferred. |
| GBuffer0 | Deferred shading G-buffer #0 (typically diffuse color). |
| GBuffer1 | Deferred shading G-buffer #1 (typically specular + roughness). |
| GBuffer2 | Deferred shading G-buffer #2 (typically normals). |
| GBuffer3 | Deferred shading G-buffer #3 (typically emission/lighting). |
| Reflections | Reflections gathered from default reflection and reflections probes. |
| MotionVectors | Motion Vectors generated when the camera has motion vectors enabled. |
| GBuffer4 | Deferred shading G-buffer #4 (typically occlusion mask for static lights if any). |
| GBuffer5 | G-buffer #5 Available. |
| GBuffer6 | G-buffer #6 Available. |
| GBuffer7 | G-buffer #7 Available. |


            
