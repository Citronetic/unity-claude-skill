This version of Unity is unsupported.



# [Clickable](UIElements.Clickable.html).clicked




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



Callback triggered when the target element is clicked.





The `clicked` and `clickedWithEventInfo` events are invoked when any of the following conditions occur:



          - The target receives a [NavigationSubmitEvent](UIElements.NavigationSubmitEvent.html).

          - The target receives a [PointerDownEvent](UIElements.PointerDownEvent.html) followed by a [PointerUpEvent](UIElements.PointerUpEvent.html).





If the `delay` and `interval` optional constructor parameters are used, then the `clicked` event is
 considered repeatable and is instead invoked when any of the following conditions occur:



          - The target receives a [NavigationSubmitEvent](UIElements.NavigationSubmitEvent.html).

          - The target just received a [PointerDownEvent](UIElements.PointerDownEvent.html).

          - The target has received a [PointerDownEvent](UIElements.PointerDownEvent.html) and the pointer button has been held down for a given period of time.





If the `clicked` event is repeatable, then the first repeated click occurs after an amount of time
 corresponding to the `delay` parameter, and subsequent clicks occur after amounts of time corresponding
 to the `interval` parameter.

 The callback methods registered to this event should have no parameters and return no value.

 This manipulator makes use of pointer capture.


Additional resources: [Clickable.clickedWithEventInfo](UIElements.Clickable-clickedWithEventInfo.html), [NavigationSubmitEvent](UIElements.NavigationSubmitEvent.html), [PointerDownEvent](UIElements.PointerDownEvent.html), [PointerCaptureEvent](UIElements.PointerCaptureEvent.html)


              


```
using UnityEngine;
using UnityEditor;
using UnityEngine.UIElements;public class ButtonExample : EditorWindow
{
    [MenuItem("Window/Button Example")]
    public static void ShowExample()
    {
        GetWindow<ButtonExample>();
    }    void CreateGUI()
    {
        var button = new Button { text = "Click me" };
        button.clicked += OnClick;        rootVisualElement.Add(button);
    }    void OnClick()
    {
        Debug.Log("Clicked!");
    }
}
```


            
