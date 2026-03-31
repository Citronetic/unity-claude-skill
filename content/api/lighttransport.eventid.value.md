This version of Unity is unsupported.



# [EventID](LightTransport.EventID.html).Value




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



The underlying event identifier value.





This value is implementation-specific and carries the actual event identifier used by the device context. The interpretation of this value depends on the concrete implementation:



          - **CPU Implementations:** May store thread handles, condition variables, or other synchronization primitives.

          - **GPU Implementations:** May store OpenCL event objects, CUDA event handles, or API-specific synchronization objects.





User code should treat this value as opaque and only use it for equality comparisons or debugging purposes.


            
