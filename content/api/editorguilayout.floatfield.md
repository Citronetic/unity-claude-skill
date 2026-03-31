This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).FloatField




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

public static float FloatField(float value,
params GUILayoutOption[] options);






## Declaration

public static float FloatField(float value,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static float FloatField(string label,
float value,
params GUILayoutOption[] options);






## Declaration

public static float FloatField(string label,
float value,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static float FloatField([GUIContent](GUIContent.html) label,
float value,
params GUILayoutOption[] options);






## Declaration

public static float FloatField([GUIContent](GUIContent.html) label,
float value,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label to display in front of the float field. |
| value | The value to edit. |
| style | Optional GUIStyle. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**float**
        The value entered by the user.





### Description



Make a text field for entering float values.





[Image: image]


*Multiply the scale of the selected GameObject.*


              


```
using UnityEngine;
using UnityEditor;// Editor Script that multiplies the scale of the current selected GameObjectpublic class FloatFieldExample : EditorWindow
{
    float sizeMultiplier = 1.0f;    [MenuItem("Examples/Scale selected Object")]
    static void Init()
    {
        var window = (FloatFieldExample)GetWindow(typeof(FloatFieldExample));
        window.Show();
    }    void OnGUI()
    {
        sizeMultiplier = EditorGUILayout.FloatField("Increase scale by:", sizeMultiplier);        if (GUILayout.Button("Scale"))
        {
            if (!Selection.activeGameObject)
            {
                Debug.Log("Select a GameObject first");
                return;
            }            Selection.activeTransform.localScale =
                Selection.activeTransform.localScale * sizeMultiplier;
        }
    }
}
```


            
