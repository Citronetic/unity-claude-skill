This version of Unity is unsupported.



# [AsyncGPUReadback](Rendering.AsyncGPUReadback.html).WaitAllRequests




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















## Declaration

public static void WaitAllRequests();






### Description



Waits until the completion of every request.





If you call [AsyncGPUReadbackRequest.done](Rendering.AsyncGPUReadbackRequest-done.html) on any request after this call, it always returns `true` whether the request completed successfully or not.
                    You can use [AsyncGPUReadbackRequest.hasError](Rendering.AsyncGPUReadbackRequest-hasError.html) to find out whether a request has been successful or not.
                    WaitAllRequests stalls both the GPU and the CPU. This means that calling this function results in a large performance decrease. Therefore, you should use this function sparingly.


            
