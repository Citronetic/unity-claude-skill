This version of Unity is unsupported.



# [GraphicsBuffer.Target](GraphicsBuffer.Target.html).IndirectArguments




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



GraphicsBuffer can be used as an indirect argument buffer for indirect draws and dispatches.





Indirect arguments buffers are used for [Graphics.RenderPrimitivesIndirect](Graphics.RenderPrimitivesIndirect.html), [ComputeShader.DispatchIndirect](ComputeShader.DispatchIndirect.html), [RayTracingShader.DispatchIndirect](Rendering.RayTracingShader.DispatchIndirect.html) or [Graphics.RenderMeshIndirect](Graphics.RenderMeshIndirect.html).

The buffer size must be a minimum of 12 bytes. The underlying DirectX 11 unordered access view format will be R32_UINT, and shader resource view format will be R32 typeless.

Additional resources: [GraphicsBuffer](GraphicsBuffer.html), [ComputeShader](ComputeShader.html), [Material.SetBuffer](Material.SetBuffer.html), [GraphicsBuffer.CopyCount](GraphicsBuffer.CopyCount.html).


            
