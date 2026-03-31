This version of Unity is unsupported.



# [ChannelClient](MPE.ChannelClient.html).Close




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

public void Close();






## Declaration

public static void Close(string channelName);






### Parameters



| Parameter | Description |
| --- | --- |
| channelName | The name of the channel to close. |





### Description



Closes the [ChannelClient](MPE.ChannelClient.html). This closes the WebSocket client but not the Channel in the [ChannelService](MPE.ChannelService.html). Other [ChannelClient](MPE.ChannelClient.html)s can still connect on the same Channel.





For information about closing a channel permanently, see [ChannelService.CloseChannel](MPE.ChannelService.CloseChannel.html).


            
