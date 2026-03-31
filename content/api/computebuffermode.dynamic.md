This version of Unity is unsupported.



# [ComputeBufferMode](ComputeBufferMode.html).Dynamic




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



Dynamic buffer.





Use this if the buffer is modified often by the CPU (by calls to [ComputeBuffer.SetData](ComputeBuffer.SetData.html) or [ComputeBuffer.BeginWrite](ComputeBuffer.BeginWrite.html)). Unity typically stores buffers of this type into GPU-visible CPU memory, to enable fast CPU uploads at the cost of GPU performance when it accesses the buffer. If the contents of the buffer are modified while the GPU is reading from it, Unity makes the GPU see the buffer contents as they were at the time the GPU command was issued. This can create extra transient copies of the buffer, which are deleted once the GPU operation is complete.


            
