This version of Unity is unsupported.



# IEventHandler





interface in
          UnityEngine.UIElements


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



Interface for class capable of handling events.





### Public Methods



| Method | Description |
| --- | --- |
| HandleEvent | Handles an event according to its propagation phase and current target, by executing the element's
 default action or callbacks associated with the event. |
| HasBubbleUpHandlers | Returns true if event handlers for the event propagation BubbleUp phase, have been attached to this object. |
| HasTrickleDownHandlers | Returns true if event handlers, for the event propagation TrickleDown phase, are attached to this object. |
| SendEvent | Sends an event to the event handler. |


            
