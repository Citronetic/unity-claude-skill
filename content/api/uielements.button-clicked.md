This version of Unity is unsupported.



# [Button](UIElements.Button.html).clicked




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



Callback triggered when the button is clicked.





This is a shortcut for modifying [Clickable.clicked](UIElements.Clickable-clicked.html). It is provided as a convenience. When you add or remove actions from clicked, it adds or removes them from `Clickable.clicked` automatically.


The following example shows how to use the clicked event to print a message to the console when the button is clicked.


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


            
