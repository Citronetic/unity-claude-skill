This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).EndScrollView




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

public static void EndScrollView();






### Description



Ends a scrollview started with a call to BeginScrollView.





[Image: image]


*Label inside a scroll view.*


              


```
using UnityEngine;
using UnityEditor;// Simple Editor Window that creates a scroll view with a Label insidepublic class CreateEndScrollViewCS : EditorWindow
{
    Vector2 scrollPos;
    string t = "This is a string inside a Scroll view!";    [MenuItem("Examples/Write text on ScrollView")]
    static void Init()
    {
        EditorWindow window = GetWindow(typeof(CreateEndScrollViewCS));
        window.Show();
    }    void OnGUI()
    {
        EditorGUILayout.BeginHorizontal();
        scrollPos =
            EditorGUILayout.BeginScrollView(scrollPos, GUILayout.Width(100), GUILayout.Height(100));
        GUILayout.Label(t);
        EditorGUILayout.EndScrollView();
        if (GUILayout.Button("Add More Text", GUILayout.Width(100), GUILayout.Height(100)))
            t += " \nAnd this is more text!";
        EditorGUILayout.EndHorizontal();
        if (GUILayout.Button("Clear"))
            t = "";
    }
}
```


            
