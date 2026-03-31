This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).Update()




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



Called multiple times per second on all visible windows.





This callback is triggered from [EditorApplication.update](EditorApplication-update.html).


              


```
// The window appears in front of the Editor.
// The window shows the type of a Unity object the cursor is over.

using UnityEngine;
using UnityEditor;
using UnityEngine.UIElements;

public class MouseOverWindowExample : EditorWindow
{
    [MenuItem("Examples/Mouse Over Example")]
    static void Init()
    {
        GetWindow<MouseOverWindowExample>("mouseOver");
    }

    Label m_Label;

    void CreateGUI()
    {
        m_Label = new Label();
        rootVisualElement.Add(m_Label);
    }

    void Update()
    {
        EditorWindow window = EditorWindow.mouseOverWindow;
        if (window != null)
            Debug.Log(window.ToString());
        string windowName = window != null ? window.ToString() : "(none)";
        m_Label.text = $"Mouse over: {windowName}";
    }
}
```


            
