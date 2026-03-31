This version of Unity is unsupported.



# [GraphicsBuffer.Target](GraphicsBuffer.Target.html).Append




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



GraphicsBuffer can be used as an append-consume buffer.





Allows a buffer to be treated like a stack in compute shaders. Maps to `AppendStructuredBuffer<T>` or `ConsumeStructuredBuffer<T>` in HLSL.

When you construct a GraphicsBuffer of this type, the value of `stride` must match the stride of the corresponding StructuredBuffer struct type in your HLSL code. It must also be a multiple of 4, and less than 2048.

See Microsoft's HLSL documentation on [AppendStructuredBuffer](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/sm5-object-appendstructuredbuffer) and [ConsumeStructuredBuffer](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/sm5-object-consumestructuredbuffer).

The buffer size value can be copied into another buffer using [GraphicsBuffer.CopyCount](GraphicsBuffer.CopyCount.html), or explicitly reset with [GraphicsBuffer.SetCounterValue](GraphicsBuffer.SetCounterValue.html).

Additional resources: [GraphicsBuffer](GraphicsBuffer.html), [ComputeShader](ComputeShader.html), [Material.SetBuffer](Material.SetBuffer.html).


            
