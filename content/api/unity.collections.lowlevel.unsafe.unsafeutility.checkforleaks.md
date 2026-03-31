This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).CheckForLeaks




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

public static int CheckForLeaks();






### Returns



**int**
        The number of leaks found.





### Description



Gets a list of memory leaks.





Any memory allocated before this call that hasn't already been freed, is assumed to have leaked.


            
