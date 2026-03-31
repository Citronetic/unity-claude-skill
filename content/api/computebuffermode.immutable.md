This version of Unity is unsupported.



# [ComputeBufferMode](ComputeBufferMode.html).Immutable




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



Static buffer, only initial upload allowed by the CPU





The buffer is not modified by the CPU apart from optionally providing the initial contents of the buffer at buffer creation time. Unity typically stores these buffers in the GPU-only memory (where available). Compute shaders and other GPU operations are allowed to modify the contents of the buffer.


            
