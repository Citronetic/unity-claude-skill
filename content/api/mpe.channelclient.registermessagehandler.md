This version of Unity is unsupported.



# [ChannelClient](MPE.ChannelClient.html).RegisterMessageHandler




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

public [Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) RegisterMessageHandler(Action<string> handler);






## Declaration

public [Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) RegisterMessageHandler(Action<byte[]> handler);






### Parameters



| Parameter | Description |
| --- | --- |
| handler | A handler for all incoming messages on a specific channel. |





### Returns



**Action**
        An action that, when invoked, unregisters the ChannelClient handler (See [ChannelClient.UnregisterMessageHandler](MPE.ChannelClient.UnregisterMessageHandler.html)).





### Description



Registers a new handler on a specific channel. The new handler is called whenever a message is sent to the [ChannelClient](MPE.ChannelClient.html).


            
