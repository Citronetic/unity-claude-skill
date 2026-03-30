This version of Unity is unsupported.



# [IConnectionState](Networking.PlayerConnection.IConnectionState.html).connectedToTarget




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












                    public [Networking.PlayerConnection.ConnectionTarget](Networking.PlayerConnection.ConnectionTarget.html) connectedToTarget;






### Description



Supplies the type of the established connection, as in whether the target is a Player or an Editor.





ConnectionTarget.None could only be true from within a Player, because the Editor will always fall back to a connection to itself if no other target is connected.


            
