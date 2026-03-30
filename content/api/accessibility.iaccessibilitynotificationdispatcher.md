This version of Unity is unsupported.



# IAccessibilityNotificationDispatcher





interface in
          UnityEngine.Accessibility


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



Sends accessibility notifications to the screen reader.





### Public Methods



| Method | Description |
| --- | --- |
| SendAnnouncement | Sends a notification to the screen reader conveying an announcement. Use this notification to provide
 accessibility information about events that don't update the app's UI, or that update the UI only briefly. |
| SendLayoutChanged | Sends a notification to the screen reader when the layout of a screen changes (for example, when an
 individual element appears or disappears). An optional parameter can be used to request the screen reader
 focus on a specific node after processing the notification. |
| SendScreenChanged | Sends a notification to the screen reader when the screen has changed considerably. An optional parameter
 can be used to request the screen reader focus on a specific node after processing the notification. |


            
