This version of Unity is unsupported.



# [Dispatcher](Search.Dispatcher.html).ProcessOne




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

public static bool ProcessOne();






### Returns



**bool**
        Returns true if an enqueued action was processed.





### Description



This function can called in the main thread to force the execution of one enqueued action.





This can be used to prevent the main thread from waiting for an action to be executed later. We usually use this function internally when we process a synchronous search request using [SearchService.Request](Search.SearchService.Request.html) with [SearchFlags.Synchronous](Search.SearchFlags.Synchronous.html).


            
