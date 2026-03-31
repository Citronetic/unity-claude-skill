This version of Unity is unsupported.



# [ChannelClient](MPE.ChannelClient.html).GetOrCreateClient




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

public static [MPE.ChannelClient](MPE.ChannelClient.html) GetOrCreateClient(string channelName);






### Parameters



| Parameter | Description |
| --- | --- |
| channelName | The name of the channel to open. This matches the last part of a WebSocket URL. For example, "127.0.0.1:9090/<channelName>". |





### Returns



**ChannelClient**
        Instance of the newly-created or existing ChannelClient.





### Description



Creates a new ChannelClient on a specific channel. If a client already exists, this method gets the client.





This method does not automatically start clients that it creates. For information about starting a client, see [ChannelClient.Start](MPE.ChannelClient.Start.html).


            
