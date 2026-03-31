This version of Unity is unsupported.



# EventDataSerialization





enumeration


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



















### Description



The Serialization type for sending a message, with arguments, using the [EventService](MPE.EventService.html). For more information about argument serialization, see [ChannelService.Broadcast](MPE.ChannelService.Broadcast.html) and ChannelService.Emit.





### Properties



| Property | Description |
| --- | --- |
| StandardJson | Use normal JSON to send a message using the [[EventService]. The receiving handler gets JSON objects (Dictionary<string, object>, List<object>, primitive types) as arguments of his ChannelHandler. |
| JsonUtility | Use JsonUtility.ToJson to serialize a message argument. Additional metadata is added to the message to specify which type to convert the JSON to when it is received. |


            
