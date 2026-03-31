This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).EndVertical




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

public static void EndVertical();






### Description



Close a group started with BeginVertical.





Additional resources: [EditorGUILayout.BeginVertical](EditorGUILayout.BeginVertical.html)

[Image: image]

*Vertical Compound group.*


              


```
// Create a Vertical Compound Button
using UnityEngine;
using UnityEditor;public class EndVerticalCS : EditorWindow
{
    [MenuItem("Examples/Begin-End Vertical usage")]
    static void Init()
    {
        EditorWindow window = GetWindow(typeof(EndVerticalCS));
        window.Show();
    }    void OnGUI()
    {
        Rect r = EditorGUILayout.BeginVertical("Button");
        if (GUI.Button(r, GUIContent.none))
            Debug.Log("Go here");
        GUILayout.Label("I'm inside the button");
        GUILayout.Label("So am I");
        EditorGUILayout.EndVertical();
    }
}
```


            
