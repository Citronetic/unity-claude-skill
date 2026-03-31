This version of Unity is unsupported.



# [AsyncGPUReadbackRequest](Rendering.AsyncGPUReadbackRequest.html).WaitForCompletion




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

public void WaitForCompletion();






### Description



Waits for completion of the request.





Calling [AsyncGPUReadbackRequest.done](Rendering.AsyncGPUReadbackRequest-done.html) on the request after this call, will always result in true whether the request has completed successfully or not.
[AsyncGPUReadbackRequest.hasError](Rendering.AsyncGPUReadbackRequest-hasError.html) can be used to find out whether this request has been successful.
Since WaitForCompletion stalls both GPU and CPU, calling this function will result in a large performance hit and should be used sparingly.


            
