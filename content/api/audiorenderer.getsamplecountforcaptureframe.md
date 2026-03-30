This version of Unity is unsupported.



# [AudioRenderer](AudioRenderer.html).GetSampleCountForCaptureFrame




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

public static int GetSampleCountForCaptureFrame();






### Returns



**int**
        Number of samples available since last recorded frame.





### Description



Returns the number of samples available since the last time [AudioRenderer.Render](AudioRenderer.Render.html) was called. This is dependent on the frame capture rate.


            
