This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).ShowPopup




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

public void ShowPopup();






### Description



Shows an Editor window using popup-style framing.





This means the window has no frame, and is not draggable. It is intended for showing something like a popup menu within an existing window.

[Image: image]

Opening a window using this method will not give it the functionality of a popup window, only the styling. For full popup functionality (eg, auto closing when the window loses focus), use [PopupWindow](PopupWindow.html).


              


```
using UnityEngine;
using UnityEditor;
using UnityEngine.UIElements;

public class ShowPopupExample : EditorWindow
{
    [MenuItem("Examples/ShowPopup Example")]
    static void Init()
    {
        ShowPopupExample window = ScriptableObject.CreateInstance<ShowPopupExample>();
        window.position = new Rect(Screen.width / 2, Screen.height / 2, 250, 150);
        window.ShowPopup();
    }

    void CreateGUI()
    {
        var label = new Label("This is an example of EditorWindow.ShowPopup");
        rootVisualElement.Add(label);

        var button = new Button();
        button.text = "Agree!";
        button.clicked += () => this.Close();
        rootVisualElement.Add(button);
    }
}
```


            
