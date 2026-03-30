This version of Unity is unsupported.



# [SubsystemWithProvider](SubsystemsImplementation.SubsystemWithProvider.html).Destroy




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

public void Destroy();






### Description



Destroys this instance of a subsystem.

Also unloads all resources acquired during the initialization step. Call this when you no longer need this instance of a subsystem.

Note: Once a subsystem is Destroyed, script can still hold a reference but calling a method on it will result in a NullArgumentException.


            
