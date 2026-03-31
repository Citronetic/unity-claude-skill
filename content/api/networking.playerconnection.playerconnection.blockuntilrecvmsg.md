This version of Unity is unsupported.



# [PlayerConnection](Networking.PlayerConnection.PlayerConnection.html).BlockUntilRecvMsg




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

public bool BlockUntilRecvMsg(Guid messageId,
int timeout);






### Parameters



| Parameter | Description |
| --- | --- |
| messageId | The type ID of the message that is sent to the Editor. |
| timeout | The time-out specified in milliseconds. |





### Returns



**bool**
        Returns true when the message is received and false if the call timed out.





### Description



Blocks the calling thread until either a message with the specified `messageId` is received or the specified time-out elapses.


            
