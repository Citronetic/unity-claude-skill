This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).PrefixLabel




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

public static void PrefixLabel(string label,
[GUIStyle](GUIStyle.html) followingStyle = "Button");






## Declaration

public static void PrefixLabel(string label,
[GUIStyle](GUIStyle.html) followingStyle,
[GUIStyle](GUIStyle.html) labelStyle);






## Declaration

public static void PrefixLabel([GUIContent](GUIContent.html) label,
[GUIStyle](GUIStyle.html) followingStyle = "Button");






## Declaration

public static void PrefixLabel([GUIContent](GUIContent.html) label,
[GUIStyle](GUIStyle.html) followingStyle,
[GUIStyle](GUIStyle.html) labelStyle);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Label to show to the left of the control. |





### Description



Make a label in front of some control.





[Image: image]


*Simple window that shows the prefix label.*

Note that most editor controls already have built-in optional labels that can be specified as one of the parameters. PrefixLabel can be used when there is no such built-in label available, or when you're creating your own editor control from scratch.

[PrefixLabel](EditorGUILayout.PrefixLabel.html) also ensures that when the label is clicked, the linked control will get keyboard focus (if the control supports keyboard focus). The label is automatically linked to the following control coming after it.


              


```
using UnityEditor;
using UnityEngine;public class ExampleClass : EditorWindow
{
    static int ammo = 0;    [MenuItem("Examples/Prefix Label Usage")]
    static void Init()
    {
        ExampleClass window = (ExampleClass)GetWindow(typeof(ExampleClass));
        window.Show();
    }    public void OnGUI()
    {
        EditorGUILayout.BeginHorizontal();
        EditorGUILayout.PrefixLabel("Ammo");
        ammo = EditorGUILayout.IntField(ammo);
        EditorGUILayout.EndHorizontal();
    }
}
```


            
