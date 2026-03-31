This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).PushCamera




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

public static void PushCamera([Camera](Camera.html) camera);






### Description



Store all camera settings.





The camera settings will be added to a so-called "stack" list, where they will stay until retrieved by a call to [PopCamera](HandleUtility.PopCamera.html). The settings will be stored in the reverse of the order in which they were added, so a call to PopCamera will retrieve the most recently stored Camera data and then remove it from the stack. A subsequent call to PopCamera will then retrieve the next most recently pushed data and so on.


            
