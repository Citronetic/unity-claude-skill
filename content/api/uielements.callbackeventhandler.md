This version of Unity is unsupported.



# CallbackEventHandler





class in
          UnityEngine.UIElements



/



Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)


                  Leave feedback





Implements interfaces:[IEventHandler](UIElements.IEventHandler.html)




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



Interface for classes capable of having callbacks to handle events.





### Public Methods



| Method | Description |
| --- | --- |
| HasBubbleUpHandlers | Return true if event handlers for the event propagation BubbleUp phase have been attached to this object. |
| HasTrickleDownHandlers | Returns true if event handlers, for the event propagation TrickleDown phase, are attached to this object. |
| RegisterCallback | Adds an event handler to the instance. |
| RegisterCallbackOnce | Adds an event handler to the instance.
 The event handler is automatically unregistered after it has been invoked exactly once. |
| SendEvent | Sends an event to the event handler. |
| UnregisterCallback | Remove callback from the instance. |





### Protected Methods



| Method | Description |
| --- | --- |
| HandleEventBubbleUp | Executes logic on this element during the BubbleUp phase, immediately before this element's
 BubbleUp callbacks.
 Calling StopPropagation will prevent further invocations of this method along the propagation path. |
| HandleEventTrickleDown | Executes logic on this element during the TrickleDown phase, immediately after this element's
 TrickleDown callbacks.
 Calling StopPropagation will prevent further invocations of this method along the propagation path. |
| NotifyPropertyChanged | Informs the data binding system that a property of a control has changed. |


            
