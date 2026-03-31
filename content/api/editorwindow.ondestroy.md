This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).OnDestroy()




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



OnDestroy is called to close the EditorWindow window.





[Image: image]


*A simple example of OnDestroy()*


              


```
// Close the window when the Button is pressed. The window
// will receive an OnDestroy() call.

using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;

public class OnDestroyExample : EditorWindow
{
    [MenuItem("Examples/OnDestroy Example")]
    public static void ShowExample()
    {
        OnDestroyExample wnd = GetWindow<OnDestroyExample>();
        wnd.titleContent = new GUIContent("OnDestroy Example");
    }

    public void CreateGUI()
    {
        Button closebutton = new Button();
        closebutton.text = "Close!";
        closebutton.clicked += () =>
        {
            this.Close();
        };

        rootVisualElement.Add(closebutton);
    }
    void OnDestroy()
    {
        Debug.Log("Destroyed...");
    }
}
```


            
