This version of Unity is unsupported.



# Target





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



The intended targets for GraphicsBuffer.





Provide the intended targets ([target](GraphicsBuffer-target.html)) when creating a GraphicsBuffer. For example, pass
[GraphicsBuffer.Target.Index](GraphicsBuffer.Target.Index.html) for a buffer to be usable as a geometry index buffer.

Different platforms and devices might or might not support different targets. Any target values different from  [Vertex](GraphicsBuffer.Target.Vertex.html), [Index](GraphicsBuffer.Target.Index.html) or [Constant](GraphicsBuffer.Target.Constant.html) require the compute shader support (see [SystemInfo.supportsComputeShaders](SystemInfo-supportsComputeShaders.html)).

You can combine values in this enum. For example, `GraphicsBuffer.Target.Index | GraphicsBuffer.Target.Raw` creates a buffer that can be used both as an index buffer in a [Graphics.DrawProcedural](Graphics.DrawProcedural.html) call, and as a raw byte address buffer in a compute shader.

DirectX 11 does not allow [Index](GraphicsBuffer.Target.Index.html) or [Vertex](GraphicsBuffer.Target.Vertex.html) buffers to also be [Structured](GraphicsBuffer.Target.Structured.html). For compute shader mesh data access with DirectX 11 compatibility, use [Raw](GraphicsBuffer.Target.Raw.html).

Additional resources: [GraphicsBuffer](GraphicsBuffer.html) class, [GraphicsBuffer constructor](GraphicsBuffer-ctor.html), [Mesh.vertexBufferTarget](Mesh-vertexBufferTarget.html), [Mesh.indexBufferTarget](Mesh-indexBufferTarget.html).





### Properties



| Property | Description |
| --- | --- |
| Vertex | GraphicsBuffer can be used as a vertex buffer. |
| Index | GraphicsBuffer can be used as an index buffer. |
| CopySource | GraphicsBuffer can be used as a source for CopyBuffer. |
| CopyDestination | GraphicsBuffer can be used as a destination for CopyBuffer. |
| Structured | GraphicsBuffer can be used as a structured buffer. |
| Raw | GraphicsBuffer can be used as a raw byte-address buffer. |
| Append | GraphicsBuffer can be used as an append-consume buffer. |
| Counter | GraphicsBuffer with an internal counter. |
| IndirectArguments | GraphicsBuffer can be used as an indirect argument buffer for indirect draws and dispatches. |
| Constant | GraphicsBuffer can be used as a constant buffer (uniform buffer). |


            
