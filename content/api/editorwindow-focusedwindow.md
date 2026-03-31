This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).focusedWindow




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












                    public static [EditorWindow](EditorWindow.html) focusedWindow;






### Description



The EditorWindow which currently has keyboard focus. (Read Only)





`focusedWindow` can be null if no window has focus.

Additional resources: [mouseOverWindow](EditorWindow-mouseOverWindow.html), [Focus](EditorWindow.Focus.html).

[Image: image]

*Focus other windows with a mouse click.*


              


```
using UnityEngine;
using UnityEditor;
using UnityEngine.UIElements;

// Print the name of the focused window to a label.
public class FocusedWindow : EditorWindow
{
    [MenuItem("Examples/Focused Window")]
    public static void ShowExample()
    {
        FocusedWindow wnd = GetWindow<FocusedWindow>();
        wnd.titleContent = new GUIContent("Focused Window Example");
    }

    public void CreateGUI()
    {
        var label = new Label();
        rootVisualElement.Add(label);

        EditorApplication.update += UpdateLabel;

        void UpdateLabel()
        {
            label.text = EditorWindow.focusedWindow != null
                ? EditorWindow.focusedWindow.ToString()
                : "No focused window";
        }
    }
}
```


            
