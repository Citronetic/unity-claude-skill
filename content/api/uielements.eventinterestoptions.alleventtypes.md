This version of Unity is unsupported.



# [EventInterestOptions](UIElements.EventInterestOptions.html).AllEventTypes




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



Use the [EventInterestOptions.AllEventTypes](UIElements.EventInterestOptions.AllEventTypes.html) option when the method with an
 [EventInterestAttribute](UIElements.EventInterestAttribute.html) doesn't have a specific filter for the event types it uses, or wants
 to receive all possible event types.
 For example, a class that overrides [CallbackEventHandler.HandleEventBubbleUp](UIElements.CallbackEventHandler.HandleEventBubbleUp.html) and logs
 a message every time an event of any kind is received would require this option.


            
