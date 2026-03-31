This version of Unity is unsupported.



# [PlayerConnection](Networking.PlayerConnection.PlayerConnection.html).Register




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

public void Register(Guid messageId,
UnityAction<MessageEventArgs> callback);






### Parameters



| Parameter | Description |
| --- | --- |
| messageId | The message ID that should cause the Action callback to be executed when received. |
| callback | Action that is executed when a message with ID messageId is received by the Editor.
The callback includes the data that is sent from the Player, and the Player ID.
The Player ID is always 1, because only one Editor can be connected. |





### Description



Registers a listener for a specific message ID, with an Action to be executed whenever that message is received by the Editor.
This ID must be the same as for messages sent from EditorConnection.Send().


            
