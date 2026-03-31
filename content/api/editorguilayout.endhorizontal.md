This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).EndHorizontal




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

public static void EndHorizontal();






### Description



Close a group started with BeginHorizontal.





Additional resources: [EditorGUILayout.BeginHorizontal](EditorGUILayout.BeginHorizontal.html)

[Image: image]

*Horizontal Compound group.*


              


```
using UnityEngine;
using UnityEditor;// Create a Horizontal Compound Buttonpublic class EndHorizontalCS : EditorWindow
{
    [MenuItem("Examples/Begin-End Horizontal usage")]
    static void Init()
    {
        EditorWindow window = GetWindow(typeof(EndHorizontalCS));
        window.Show();
    }    void OnGUI()
    {
        Rect r = EditorGUILayout.BeginHorizontal("Button");
        if (GUI.Button(r, GUIContent.none))
            Debug.Log("I got pressed");
        GUILayout.Label("I'm inside the button");
        GUILayout.Label("So am I");
        EditorGUILayout.EndHorizontal();
    }
}
```


            
