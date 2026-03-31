This version of Unity is unsupported.



# [AsyncOperation](AsyncOperation.html).priority




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












                    public int priority;






### Description



Priority lets you tweak in which order async operation calls will be performed.





When multiple asynchronous operations are queued up, the operation with the
higher priority will be executed first. Once an operation has been started on
the background thread, changing the priority will have no effect anymore.


            
