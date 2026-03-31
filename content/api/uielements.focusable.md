This version of Unity is unsupported.



# Focusable





class in
          UnityEngine.UIElements



/



Inherits from:[UIElements.CallbackEventHandler](UIElements.CallbackEventHandler.html)



/



Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)


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



Base class for objects that can get the focus.





The focus is used to designate an element that will receive keyboard and navigation events.

 You can retrieve a panel's current focused element using its FocusController's [FocusController.focusedElement](UIElements.FocusController-focusedElement.html) property.


Additional resources: [KeyboardEventBase<T0>](UIElements.KeyboardEventBase_1.html), [NavigationEventBase<T0>](UIElements.NavigationEventBase_1.html)


              


```
using UnityEngine;
using UnityEngine.UIElements;[RequireComponent(typeof(UIDocument))]
public class FocusExample : MonoBehaviour
{
    void OnEnable()
    {
        var startGameButton = GetComponent<UIDocument>().rootVisualElement.Q<Button>("StartGame");        startGameButton.RegisterCallback<FocusInEvent>(ev =>
        {
            Debug.Log("FocusInEvent: button is focused and can be activated with keyboard or gamepad input.");
        });        Debug.Log("Calling startGameButton.Focus().");
        startGameButton.Focus();        var isFocused = startGameButton.focusController.focusedElement == startGameButton;
        Debug.Log("Immediately after startGameButton.Focus(): isFocused=" + isFocused);        // Expected output:
        // > Calling startGameButton.Focus().
        // > FocusInEvent: button is focused and can be activated with keyboard or gamepad input.
        // > Immediately after startGameButton.Focus(): isFocused=true
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| canGrabFocus | Whether the element can be focused. |
| delegatesFocus | Whether the element delegates the focus to its children. |
| focusable | Whether an element can potentially receive focus. |
| focusController | Returns the focus controller for this element. |
| tabIndex | An integer used to sort focusable elements in the focus ring. Must be greater than or equal to zero. |





### Public Methods



| Method | Description |
| --- | --- |
| Blur | Tell the element to release the focus. |
| Focus | Attempts to give the focus to this element. |





### Inherited Members








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







            
