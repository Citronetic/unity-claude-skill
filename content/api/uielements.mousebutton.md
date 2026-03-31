This version of Unity is unsupported.



# MouseButton





enumeration


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



Enumerates the mouse buttons to identify specific mouse button interactions.





Use this enumeration for mouse-related events to identify and respond to specific mouse button interactions.
 For example, you can check the [Button](UIElements.Button.html) property of a mouse event to determine which button triggered the event.


 Additional resources: [Button](UIElements.Button.html), [MouseDownEvent](UIElements.MouseDownEvent.html), [PointerDownEvent](UIElements.PointerDownEvent.html)


The following example shows how to use the MouseButton enumeration.


              


```
using UnityEngine;
using UnityEditor;
using UnityEngine.UIElements;public class MouseButtonExample : EditorWindow
{
    [MenuItem("Window/Mouse Button Example")]
    public static void ShowExample()
    {
        GetWindow<MouseButtonExample>();
    }

    void CreateGUI()
    {
        var button = new Button { text = "Click me" };
        button.RegisterCallback<PointerDownEvent>(OnPointerDown, TrickleDown.TrickleDown); // Use TrickleDown phase        rootVisualElement.Add(button);
    }    private void OnPointerDown(PointerDownEvent evt)
    {
        switch ((MouseButton)evt.button)
        {
            case MouseButton.LeftMouse:
                Debug.Log("Left mouse button clicked");
                break;
            case MouseButton.RightMouse:
                Debug.Log("Right mouse button clicked");
                break;
            case MouseButton.MiddleMouse:
                Debug.Log("Middle mouse button clicked");
                break;
            default:
                Debug.Log("Unknown mouse button clicked");
                break;
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| LeftMouse | Represents the left mouse button. Typically used for selection or activation. |
| RightMouse | Represents the right mouse button. Typically used to open context menus. |
| MiddleMouse | Represents the middle mouse button. |


            
