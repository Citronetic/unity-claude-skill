This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).CreateGUI()




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



`CreateGUI` is called when the EditorWindow's rootVisualElement is ready to be populated.





Use `CreateGUI` to add UI Toolkit UI elements to your window.

When creating a custom Editor window, follow these guidelines:



          - Put code dependent on UXML/USS loading in the [CreateGUI](EditorWindow.CreateGUI.html) method to ensure that all necessary assets are available.

          - Keep the event registration code inside [CreateGUI](EditorWindow.CreateGUI.html) or after [CreateGUI](EditorWindow.CreateGUI.html) is called.





It's important to note that `CreateGUI` might not be called before the first call to [Update](EditorWindow.Update.html).
For more information, refer to [the order of execution of the Editor window](EditorWindow.html).

For an example on how to create an Editor window to react to user input, refer to [Create a custom Editor window with C# script](../Manual/UIE-HowTo-CreateEditorWindow.html).


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


            
