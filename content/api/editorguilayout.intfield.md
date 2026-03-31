This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).IntField




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

public static int IntField(int value,
params GUILayoutOption[] options);






## Declaration

public static int IntField(int value,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int IntField(string label,
int value,
params GUILayoutOption[] options);






## Declaration

public static int IntField(string label,
int value,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int IntField([GUIContent](GUIContent.html) label,
int value,
params GUILayoutOption[] options);






## Declaration

public static int IntField([GUIContent](GUIContent.html) label,
int value,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label to display in front of the int field. |
| value | The value to edit. |
| style | Optional GUIStyle. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**int**
        The value entered by the user.





### Description



Make a text field for entering integers.





[Image: image]


*Clone the Selected object a number of times.*


              


```
// Editor Script that clones the selected GameObject a number of times.using UnityEditor;
using UnityEngine;public class IntFieldExample : EditorWindow
{
    static int clones = 1;    [MenuItem("Examples/Clone Object")]
    static void Init()
    {
        EditorWindow window = GetWindow(typeof(IntFieldExample));
        window.Show();
    }    void OnGUI()
    {
        clones = EditorGUILayout.IntField("Number of clones:", clones);        if (GUILayout.Button("Clone!"))
        {
            if (!Selection.activeGameObject)
            {
                Debug.Log("Select a GameObject first");
                return;
            }            for (var i = 0; i < clones; i++)
                Instantiate(Selection.activeGameObject, Vector3.zero, Quaternion.identity);
        }
    }
}
```


            
