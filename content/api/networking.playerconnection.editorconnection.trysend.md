This version of Unity is unsupported.



# [EditorConnection](Networking.PlayerConnection.EditorConnection.html).TrySend




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

public bool TrySend(Guid messageId,
byte[] data,
int playerId);






## Declaration

public bool TrySend(Guid messageId,
byte[] data);






### Parameters



| Parameter | Description |
| --- | --- |
| messageId | The type ID of the message to send to the connected Players. |
| playerId | The ID of the Player that you want to sent this message to. If you want to send it to all Players, set this to 0.. |





### Returns



**bool**
        Returns true when the Editor sends data successfully, and false when there is no space in the socket ring buffer or sending fails.





### Description



Attempts to send data from the Editor to the connected Players.


            
