This version of Unity is unsupported.



# [BufferID](LightTransport.BufferID.html).Value




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












                    public ulong Value;






### Description



The underlying buffer identifier value.





This value is implementation-specific and carries the actual buffer identifier used by the device context. The interpretation of this value depends on the concrete implementation:



          - **CPU Implementations:** May store memory pointers or array indices.

          - **GPU Implementations:** May store OpenCL buffer objects, GPU specific device pointers, or API-specific handles.





User code should treat this value as opaque and only use it for equality comparisons or debugging purposes.


            
