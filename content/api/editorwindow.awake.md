This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).Awake




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



Called as the new window is opened.





[Awake](EditorWindow.Awake.html)() message is called as a new editor window starts.  This is
          similar to how an [Awake](EditorWindow.Awake.html)() is called as an GameObject starts.


              


```
// Show how Awake is called as an Editor Window starts
// In the script, the Awake message changes the string variable.

using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;

public class AwakeExample : EditorWindow
{
    static string s_Text = "hello";

    [MenuItem("Examples/Awake Example")]

    public static void ShowExample()
    {
        AwakeExample wnd = GetWindow<AwakeExample>();
        wnd.titleContent = new GUIContent("AwakeExample");
    }

    public void CreateGUI()
    {
        var label = new Label("Text: " + s_Text);
        rootVisualElement.Add(label);
    }

    public void Awake()
    {
        Debug.Log("Awake");
        s_Text = "demo";
    }

    public void OnDestroy()
    {
        Debug.Log("OnDestroy");
    }
}
```


            
