This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).Close




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

public void Close();






### Description



Close the editor window.





This will destroy the editor window.

[Image: image]

*Simple example to show Close()*


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;

public class CloseWindow : EditorWindow
{
    [MenuItem("Examples/Close Window")]
    public static void ShowExample()
    {
        CloseWindow wnd = GetWindow<CloseWindow>();
        wnd.titleContent = new GUIContent("CloseWindow");
    }

    public void CreateGUI()
    {
        var closeButton = new Button();
        closeButton.text = "Close!";
        closeButton.clicked += () =>
        {
            this.Close();
        };

        rootVisualElement.Add(closeButton);
    }
}
```


            
