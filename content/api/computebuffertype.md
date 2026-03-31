This version of Unity is unsupported.



# ComputeBufferType





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



[ComputeBuffer](ComputeBuffer.html) type.





Different types of compute buffers map to different usage and declarations in HLSL shaders. Default type is "structured buffer" (`StructuredBuffer<T>` or `RWStructuredBuffer<T>`).

Additional resources: [ComputeBuffer](ComputeBuffer.html), [ComputeShader](ComputeShader.html), [Material.SetBuffer](Material.SetBuffer.html).





### Properties



| Property | Description |
| --- | --- |
| Default | Default ComputeBuffer type (structured buffer). |
| Raw | Raw ComputeBuffer type (byte address buffer). |
| Append | Append-consume ComputeBuffer type. |
| Counter | ComputeBuffer with a counter. |
| Constant | ComputeBuffer that you can use as a constant buffer (uniform buffer). |
| Structured | ComputeBuffer that you can use as a structured buffer. |
| IndirectArguments | ComputeBuffer used for Graphics.DrawProceduralIndirect, ComputeShader.DispatchIndirect or Graphics.DrawMeshInstancedIndirect arguments. |


            
