This version of Unity is unsupported.



# [CallbackEventHandler](UIElements.CallbackEventHandler.html).HandleEventTrickleDown




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

protected void HandleEventTrickleDown([UIElements.EventBase](UIElements.EventBase.html) evt);






### Parameters



| Parameter | Description |
| --- | --- |
| evt | The event instance. |





### Description



Executes logic on this element during the TrickleDown phase, immediately after this element's
 TrickleDown callbacks.
 Calling StopPropagation will prevent further invocations of this method along the propagation path.





This method is designed to be overriden by subclasses. Use it to implement event handling without
 registering callbacks, which guarantees precedences of callbacks registered by users of the subclass.

 Use [EventInterestAttribute](UIElements.EventInterestAttribute.html) on this method to specify a range of event types that this
 method needs to receive. Events that don't fall into the specified types might not be sent to this method.


              


```
using UnityEngine;
using UnityEngine.UIElements;public class HandleEventExample : VisualElement
{
    // This method is obsolete! Use HandleEventTrickleDown instead and add the "at target" check.
    // Note that this may impact the execution order between the content of this method and other callbacks
    // on parent or child elements. It's recommended not to mix ExecuteDefaultAction and HandleEvent methods.
    protected override void ExecuteDefaultActionAtTarget(EventBase evt)
    {
        Debug.Log("Received event " + evt + ", at target, before bubble up on parents.");
        DoSomethingEarlyOnTarget();
    }    // This method is obsolete! Use HandleEventBubbleUp instead and add the "at target" check.
    // Note that this may impact the execution order between the content of this method and other callbacks
    // on parent or child elements. It's recommended not to mix ExecuteDefaultAction and HandleEvent methods.
    protected override void ExecuteDefaultAction(EventBase evt)
    {
        Debug.Log("Received event " + evt + ", at target, after bubble up on parents.");
        DoSomethingLateOnTarget();
    }    // This is the recommended method to use. Note that you can also handle events on the element if it's not the target.
    protected override void HandleEventTrickleDown(EventBase evt)
    {
        Debug.Log("Received event " + evt + " before trickle down on children.");        if (evt.target == this)
        {
            Debug.Log("Received event " + evt + ", at target, before trickle down on children.");
            DoSomethingEarlyOnTarget();
        }
    }    // The recommended way to go. Note that you can also handle events on the element if it's not the target.
    protected override void HandleEventBubbleUp(EventBase evt)
    {
        Debug.Log("Received event " + evt + " before bubble up on parents.");        if (evt.target == this)
        {
            Debug.Log("Received event " + evt + ", at target, before bubble up on parents.");
            DoSomethingLateOnTarget();
        }
    }    private void DoSomethingEarlyOnTarget() { }
    private void DoSomethingLateOnTarget() { }
}
```


            
