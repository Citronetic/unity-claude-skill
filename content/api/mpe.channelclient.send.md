This version of Unity is unsupported.



# [ChannelClient](MPE.ChannelClient.html).Send




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

public void Send(string data);






## Declaration

public void Send(byte[] data);






## Declaration

public static void Send(int connectionId,
byte[] data);






### Parameters



| Parameter | Description |
| --- | --- |
| data | Data to send. |
| connectionId | The connection ID of the client sending the data. |





### Description



Sends an ASCII or binary message to the [ChannelService](MPE.ChannelService.html). Depending on how the channel's handler processes the message, it may also be sent to other connections.


            
