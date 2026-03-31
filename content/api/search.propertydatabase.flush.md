This version of Unity is unsupported.



# [PropertyDatabase](Search.PropertyDatabase.html).Flush




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

public void Flush();






### Description



Triggers a manual update of the backing file.





When a change happens on the [PropertyDatabase](Search.PropertyDatabase.html), it is stored in memory until we update the backing file. If the [PropertyDatabase](Search.PropertyDatabase.html) is created with the flag **autoFlush** set to true, this is done automatically. If not, you have to trigger the update manually with [PropertyDatabase.Flush](Search.PropertyDatabase.Flush.html). This function is blocking until the operation completes.


            
