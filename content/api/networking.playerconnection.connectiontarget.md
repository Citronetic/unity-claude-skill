This version of Unity is unsupported.



# ConnectionTarget





enumeration


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



















### Description



The type of the connected target.





Used in [IConnectionState](Networking.PlayerConnection.IConnectionState.html). For example, this is used to signify whether the Editor is connected to a Player, or to an Editor. When the Editor is connected to another Editor or itself, it also picks up the PlayMode Player. If the Editor is not connected to a Player, it always falls back onto a connection to itself. Therefore, [ConnectionTarget.None](Networking.PlayerConnection.ConnectionTarget.None.html) is only applicable in a Player.





### Properties



| Property | Description |
| --- | --- |
| None | No target is connected, this is only possible in a Player. |
| Player | The connected target is a Player. |
| Editor | The connected target is an Editor. |


            
