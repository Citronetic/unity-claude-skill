This version of Unity is unsupported.



# [EditorApplication](EditorApplication.html).isCompiling




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












                    public static bool isCompiling;






### Description



Is editor currently compiling scripts? (Read Only)





[Image: image]


*Editor Window that tells you if Unity is compiling scripts.*


              


```
// Small example that shows when scripts are being compiled.using UnityEditor;
using UnityEngine;public class isCompilingExample : EditorWindow
{
    [MenuItem("Examples/Is compiling?")]
    static void Init()
    {
        EditorWindow window = GetWindowWithRect(typeof(isCompilingExample), new Rect(0, 0, 200, 200));
        window.Show();
    }    void OnGUI()
    {
        EditorGUILayout.LabelField("Compiling:", EditorApplication.isCompiling ? "Yes" : "No");        this.Repaint();
    }
}
```


            
