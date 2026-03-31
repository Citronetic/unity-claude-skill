This version of Unity is unsupported.



# [Clickable](UIElements.Clickable.html).clickedWithEventInfo




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



Callback triggered when the target element is clicked, including event data.





See [Clickable.clicked](UIElements.Clickable-clicked.html) for more information on when the `clicked` and
 `clickedWithEventInfo` events are invoked.
 The callback methods registered to this event should have an [EventBase](UIElements.EventBase.html) parameter and
 return no value.


Additional resources: [Clickable.clicked](UIElements.Clickable-clicked.html)


              


```
using UnityEngine;
using UnityEngine.UIElements;[RequireComponent(typeof(UIDocument))]
public class ButtonDoubleClickedExample : MonoBehaviour
{
    public UIDocument uiDocument;    void Start()
    {
        var button = new Button { text = "Press Me" };        button.style.width = 160;
        button.style.height = 40;        button.clickable.clickedWithEventInfo += (EventBase evt) =>
        {
            int clickCount = ((IPointerEvent)evt).clickCount;
            if (clickCount == 1)
                Debug.Log("Button was single-clicked.");
            else if (clickCount == 2)
                Debug.Log("Button was double-clicked.");
        };        uiDocument.rootVisualElement.Add(button);
    }
}
```


            
