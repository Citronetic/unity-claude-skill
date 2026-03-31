This version of Unity is unsupported.



# [Undo](Undo.html).IncrementCurrentGroup




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

public static void IncrementCurrentGroup();






### Description



Unity automatically groups undo operations by the current group index.





The current group is automatically incremented based on events eg. mouse down events, executing a menu item increments the current group. But sometimes it is necessary to manually group undo operations.


            
