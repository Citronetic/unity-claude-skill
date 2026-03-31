This version of Unity is unsupported.



# [ContentFile](Unity.Loading.ContentFile.html).WaitForCompletion




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

public bool WaitForCompletion(int timeoutMs);






### Parameters



| Parameter | Description |
| --- | --- |
| timeoutMs | The maximum time in milliseconds this function will wait before returning. Pass 0 to block indefinitely until completion. |





### Returns



**bool**
        Returns false if the timeout was reached before ContentFile completed loading.





### Description



Blocks on the main thread until the load operation completes. This function can be slow and so should be used carefully to avoid frame rate stuttering.


            
