This version of Unity is unsupported.



# EventInterestOptions





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



Options used as arguments for EventInterestAttribute when the affected method treats events in a general,
 non type-specific manner.





### Properties



| Property | Description |
| --- | --- |
| Inherit | Use the Inherit option when only the events needed by the base
 class are required.
 For example, a class that overrides the CallbackEventHandler.HandleEventBubbleUp
 method and checks if an enabled flag is active before calling its base.ExecuteDefaultActionAtTarget method
 would use this option. |
| AllEventTypes | Use the EventInterestOptions.AllEventTypes option when the method with an
 EventInterestAttribute doesn't have a specific filter for the event types it uses, or wants
 to receive all possible event types.
 For example, a class that overrides CallbackEventHandler.HandleEventBubbleUp and logs
 a message every time an event of any kind is received would require this option. |


            
