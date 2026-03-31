This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).Vector2Field




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

public static [Vector2](Vector2.html) Vector2Field(string label,
[Vector2](Vector2.html) value,
params GUILayoutOption[] options);






## Declaration

public static [Vector2](Vector2.html) Vector2Field([GUIContent](GUIContent.html) label,
[Vector2](Vector2.html) value,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Label to display above the field. |
| value | The value to edit. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style. |





### Returns



**Vector2**
        The value entered by the user.





### Description



Make an X & Y field for entering a [Vector2](Vector2.html).





[Image: image]


*Measure the distance between 2 points.*


              


```
using UnityEditor;
using UnityEngine;public class EditorGUILayoutVector2Field : UnityEditor.EditorWindow
{
    float distance = 0f;
    Vector3 p1;
    Vector3 p2;    [MenuItem("Examples/Measure Distance")]
    static void Init()
    {
        EditorGUILayoutVector2Field window = (EditorGUILayoutVector2Field)EditorWindow.GetWindow(typeof(EditorGUILayoutVector2Field), true, "My Empty Window");
        window.Show();
    }    void OnGUI()
    {
        p1 = EditorGUILayout.Vector2Field("Point 1:", p1);
        p2 = EditorGUILayout.Vector2Field("Point 2:", p2);
        EditorGUILayout.LabelField("Distance:", distance.ToString());
        if (GUILayout.Button("Close"))
            this.Close();
    }    void OnInspectorUpdate()
    {
        distance = Vector2.Distance(p1, p2);
        this.Repaint();
    }
}
```


            
