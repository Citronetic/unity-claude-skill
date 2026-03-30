This version of Unity is unsupported.



# [EditorConnection](Networking.PlayerConnection.EditorConnection.html).Register




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
| messageId | The message ID that invokes the callback when received by the Editor. |
| callback | Action that is executed when a message with ID messageId is received by the Editor.
The callback includes the data that is sent from the Player, and the Player's ID.
The Player ID is used to distinguish between multiple Players connected to the same Editor. |





### Description



Registers a callback on a certain message ID.





The message ID must be the same as that used in the PlayerConnection.Send().

There can be multiple registered callbacks for one message ID, and these can be deregistered individually with [EditorConnection.Unregister](Networking.PlayerConnection.EditorConnection.Unregister.html).


            
