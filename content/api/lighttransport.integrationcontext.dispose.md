This version of Unity is unsupported.



# [IntegrationContext](LightTransport.IntegrationContext.html).Dispose




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

public void Dispose();






### Description



Perform a dispose operation.





Releases all resources associated with the integration context, including native memory, cached data structures, and GPU resources. This method should be called when the context is no longer needed to prevent resource leaks.

The context becomes invalid after disposal and should not be used for further operations.


            
