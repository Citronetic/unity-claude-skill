This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).ShowModal




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

public void ShowModal();






### Description



Show modal editor window.





Other windows will not be accessible and any script recompilation will not happen until this window is closed.


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;

public class ShowModalExample : EditorWindow
{
    [MenuItem("Examples/Modal Window")]
    public static void ShowExample()
    {
        ShowModalExample wnd = GetWindow<ShowModalExample>();
        wnd.titleContent = new GUIContent("Must Read Before Continuing");
        wnd.ShowModal();
    }

    public void OnEnable()
    {
        Label recommendationLabel = new Label("We recommend you activate this custom setting before you continue.");
        rootVisualElement.Add(recommendationLabel);
        Label instructionLabel = new Label("To continue using the Editor, you can either activate the setting, or choose to ignore it by closing the window.");
        rootVisualElement.Add(instructionLabel);
        Button customSettingButton = new Button(() =>
        {
            Debug.Log("Custom Setting Activated");
            Close();
        });
        customSettingButton.text = "Activate Custom Setting";
        rootVisualElement.Add(customSettingButton);
    }
}
```


            
