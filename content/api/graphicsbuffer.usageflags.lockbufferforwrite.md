This version of Unity is unsupported.



# [GraphicsBuffer.UsageFlags](GraphicsBuffer.UsageFlags.html).LockBufferForWrite




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



Enable the LockBufferForWrite and UnlockBufferAfterWrite methods on the GraphicsBuffer. CAUTION: when using this flag, ensure that you do not introduce memory read/write hazards.





With this flag, the buffer can be updated at any time using [GraphicsBuffer.SetData](GraphicsBuffer.SetData.html) and equivalent functions that write data from the CPU.

The GPU can only read from the buffer, including using it as a copy source. No writes from the GPU are allowed, including using the GPU as a copy destination or a UAV. This means that when using [GraphicsBuffer.Target.Raw](GraphicsBuffer.Target.Raw.html), for example, you can use `ByteAddressBuffer` but not `RWByteAddressBuffer` in an HLSL shader. Using `RWByteAddressBuffer` allows writes into the buffer.

The buffer can be written to directly from the CPU using [GraphicsBuffer.LockBufferForWrite](GraphicsBuffer.LockBufferForWrite.html). For more information, see [GraphicsBuffer.LockBufferForWrite](GraphicsBuffer.LockBufferForWrite.html).

This mode might place the buffer in the CPU visible GPU memory or in GPU visible CPU memory depending on a platform.

Additional resources: [GraphicsBuffer](GraphicsBuffer.html) [GraphicsBuffer.LockBufferForWrite](GraphicsBuffer.LockBufferForWrite.html).


            
