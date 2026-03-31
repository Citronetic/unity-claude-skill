This version of Unity is unsupported.



# [ChannelService](MPE.ChannelService.html).RegisterMessageHandler




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

public static [Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) RegisterMessageHandler(string channelName,
Action<int,byte[]> handler);






### Parameters



| Parameter | Description |
| --- | --- |
| channelName | The name of the channel. |
| handler | The handler that processes messages. |





### Returns



**Action**
        An action that you can use to unregister the handler from message processing (see [ChannelService.UnregisterMessageHandler](MPE.ChannelService.UnregisterMessageHandler.html)).





### Description



Registers a handler to process all incoming messages on a specific channel.


            
