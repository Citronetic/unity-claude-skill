This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).maximized




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












                    public bool maximized;






### Description



Whether or not this window is maximized?





To maximize the custome Editor window to the size of the Unity screen, set `maximized`. It works only when the custom Editor window is docked within Unity.


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;

public class MaximizedExample : EditorWindow
{
    [MenuItem("Examples/Maximized Window Example")]
    public static void ShowExample()
    {
        MaximizedExample wnd = GetWindow<MaximizedExample>();
        wnd.titleContent = new GUIContent("MaximizedExample");
    }

    public void CreateGUI()
    {
        var toggle = new Toggle("Maximize window");
        toggle.value = this.maximized;
        rootVisualElement.Add(toggle);
    }
}
```


            
