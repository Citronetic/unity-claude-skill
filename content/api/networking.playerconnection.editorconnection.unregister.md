This version of Unity is unsupported.



# [EditorConnection](Networking.PlayerConnection.EditorConnection.html).Unregister




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

public void Unregister(Guid messageId,
UnityAction<MessageEventArgs> callback);






### Parameters



| Parameter | Description |
| --- | --- |
| messageId | Message ID associated with the callback that you wish to deregister. |
| callback | The Action callback you wish to deregister. |





### Description



Deregisters a registered callback.





Only deregisters the callback that is matched with the given message ID and given Action.


            
