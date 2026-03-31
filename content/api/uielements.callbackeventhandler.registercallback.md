This version of Unity is unsupported.



# [CallbackEventHandler](UIElements.CallbackEventHandler.html).RegisterCallback




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

public void RegisterCallback(EventCallback<TEventType> callback,
[UIElements.TrickleDown](UIElements.TrickleDown.html) useTrickleDown);






### Parameters



| Parameter | Description |
| --- | --- |
| callback | The event handler to add. If the handler is null, this method throws an exception. |
| useTrickleDown | By default, this callback is called during the BubbleUp phase. Pass TrickleDown.TrickleDown to call this callback during the TrickleDown phase. |





### Description



Adds an event handler to the instance.





If the event handler is already registered for the same phase (either TrickleDown or BubbleUp), this method has no effect.

 Refer to the [Handle event callbacks and value changes](../Manual/UIE-Events-Handling.html) manual page for more information and examples.


Additional resources: [PropagationPhase](UIElements.PropagationPhase.html)




---








## Declaration

public void RegisterCallback(EventCallback<TEventType,TUserArgsType> callback,
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





If the event handler is already registered for the same phase (either TrickleDown or BubbleUp), this method has no effect.

 Refer to the [Handle event callbacks and value changes](../Manual/UIE-Events-Handling.html) manual page for more information and examples.


Additional resources: [PropagationPhase](UIElements.PropagationPhase.html)


              


```
using UnityEngine;
using UnityEngine.UIElements;[RequireComponent(typeof(UIDocument))]
public class RegisterCallbackExample : MonoBehaviour
{
    void OnEnable()
    {
        var myClickableLabel = new Label("Click me");        myClickableLabel.RegisterCallback<PointerDownEvent, string>((ev, userArg) =>
        {
            Debug.Log("Hello from " + userArg);
        }, gameObject.name);        GetComponent<UIDocument>().rootVisualElement.Add(myClickableLabel);
    }
}
```


            
