This version of Unity is unsupported.



# Clickable Constructor




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

public Clickable([Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) handler,
long delay,
long interval);






### Parameters



| Parameter | Description |
| --- | --- |
| handler | The method to call when the clickable is clicked. |
| delay | Determines when the event begins. Value is defined in milliseconds. Applies if delay is greater than 0. |
| interval | Determines the time delta between event repetition. Value is defined in milliseconds. Applies if interval is greater than 0. |





### Description



Constructor.





When you use this constructor, a click event is invoked repeatedly at regular intervals
 for as long as the pointer is held down on the target element.


Additional resources: [Clickable.clicked](UIElements.Clickable-clicked.html)


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;public class ClickableEditorWindow : EditorWindow
{
    [MenuItem("Window/UI Toolkit/Clickable Example")]
    public static void ShowWindow()
    {
        var window = GetWindow<ClickableEditorWindow>();
        window.titleContent = new GUIContent("Clickable Example");
    }     public void CreateGUI()
    {        var clickableElement = new VisualElement
        {
            style =
            {
                width = 200,
                height = 40,
                backgroundColor = new Color(0.2f, 0.6f, 0.8f, 1),
                justifyContent = Justify.Center,
                alignItems = Align.Center,
            }
        };
        clickableElement.Add(new Label("Click Me"));        clickableElement.AddManipulator(new Clickable(() =>
        {
            Debug.Log("Element clicked!");
        }));        rootVisualElement.Add(clickableElement);
    }
}
```




---








## Declaration

public Clickable(Action<EventBase> handler);






### Parameters



| Parameter | Description |
| --- | --- |
| handler | The method to call when the clickable is clicked. |





### Description



Constructor.





When you use this constructor, the event (usually a [PointerUpEvent](UIElements.PointerUpEvent.html) or a [NavigationSubmitEvent](UIElements.NavigationSubmitEvent.html))
 that triggered the click is passed as an argument to the handler method.


Additional resources: [Clickable.clickedWithEventInfo](UIElements.Clickable-clickedWithEventInfo.html), [Clickable.clicked](UIElements.Clickable-clicked.html)




---








## Declaration

public Clickable([Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) handler);






### Parameters



| Parameter | Description |
| --- | --- |
| handler | The method to call when the clickable is clicked. |





### Description



Constructor.





Additional resources: [Clickable.clicked](UIElements.Clickable-clicked.html)


            
