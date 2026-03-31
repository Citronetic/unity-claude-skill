This version of Unity is unsupported.



# [GraphicsBuffer.Target](GraphicsBuffer.Target.html).Counter




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



GraphicsBuffer with an internal counter.





Adds a "counter" to a `RWStructuredBuffer` and allows using `IncrementCounter` / `DecrementCounter` HLSL functions on it.

When you construct a GraphicsBuffer of this type, the value of `stride` must match the stride of the corresponding StructuredBuffer struct type in your HLSL code. It must also be a multiple of 4, and less than 2048.

See Microsoft's HLSL documentation on [IncrementCounter](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/sm5-object-rwstructuredbuffer-incrementcounter) and [DecrementCounter](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/sm5-object-rwstructuredbuffer-decrementcounter).

The buffer size value can be copied into another buffer using [GraphicsBuffer.CopyCount](GraphicsBuffer.CopyCount.html), or explicitly reset with [GraphicsBuffer.SetCounterValue](GraphicsBuffer.SetCounterValue.html).

Additional resources: [GraphicsBuffer.SetCounterValue](GraphicsBuffer.SetCounterValue.html), [GraphicsBuffer.CopyCount](GraphicsBuffer.CopyCount.html).


            
