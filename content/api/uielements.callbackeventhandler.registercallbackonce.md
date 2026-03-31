This version of Unity is unsupported.



# [CallbackEventHandler](UIElements.CallbackEventHandler.html).RegisterCallbackOnce




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

public void RegisterCallbackOnce(EventCallback<TEventType> callback,
[UIElements.TrickleDown](UIElements.TrickleDown.html) useTrickleDown);






### Parameters



| Parameter | Description |
| --- | --- |
| callback | The event handler to add. If the handler is null, this method throws an exception. |
| useTrickleDown | By default, this callback is called during the BubbleUp phase. Pass TrickleDown.TrickleDown to call this callback during the TrickleDown phase. |





### Description



Adds an event handler to the instance.
 The event handler is automatically unregistered after it has been invoked exactly once.





If the event handler is already registered for the same phase (either TrickleDown or BubbleUp)
 and hasn't been invoked yet, this method has no effect.


Additional resources: [PropagationPhase](UIElements.PropagationPhase.html), [CallbackEventHandler.RegisterCallback](UIElements.CallbackEventHandler.RegisterCallback.html)




---








## Declaration

public void RegisterCallbackOnce(EventCallback<TEventType,TUserArgsType> callback,
TUserArgsType userArgs,
[UIElements.TrickleDown](UIElements.TrickleDown.html) useTrickleDown);






### Parameters



| Parameter | Description |
| --- | --- |
| callback | The event handler to add. If the handler is null, this method throws an exception. |
| userArgs | Data to pass to the callback. Use this argument to avoid closing on local variables. |
| useTrickleDown | By default, this callback is called during the BubbleUp phase. Pass TrickleDown.TrickleDown to call this callback during the TrickleDown phase. |





### Description



Adds an event handler to the instance.
 The event handler is automatically unregistered after it has been invoked exactly once.





If the event handler is already registered for the same phase (either TrickleDown or BubbleUp)
 and hasn't been invoked yet, this method has no effect.


Additional resources: [PropagationPhase](UIElements.PropagationPhase.html), [CallbackEventHandler.RegisterCallback](UIElements.CallbackEventHandler.RegisterCallback.html)


            
