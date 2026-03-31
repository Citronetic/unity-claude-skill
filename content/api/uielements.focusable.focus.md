This version of Unity is unsupported.



# [Focusable](UIElements.Focusable.html).Focus




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

public void Focus();






### Description



Attempts to give the focus to this element.





The element might not become focused if:



          - The element cannot be [focused](UIElements.Focusable-canGrabFocus.html).

          - The element [delegates its focus](UIElements.Focusable-delegatesFocus.html).





A Panel's current focused element can be retrieved using its FocusController's focusedElement property.

 As long as an element is focused, it receives all keyboard and navigation events sent to its Panel.

 If a focus change is requested during another event's propagation, the change is only applied
 after all the events currently in the event queue have been fully dispatched and propagated.


Additional resources: [IFocusRing](UIElements.IFocusRing.html), [FocusController.focusedElement](UIElements.FocusController-focusedElement.html)


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


            
