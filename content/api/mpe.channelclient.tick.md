This version of Unity is unsupported.



# [ChannelClient](MPE.ChannelClient.html).Tick




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

public void Tick();






### Description



Ticks the ChannelClient. When you call this method, it checks whether any incoming messages from the server need to be processed, and whether any outgoing messages need to be sent to the server.





Call this method from the main thread. Call it only if auto-tick is set to false. If a ChannelClient is set to ChannelClient.IsAutoTick, Unity ticks it automatically in [EditorApplication.update](EditorApplication-update.html).


            
