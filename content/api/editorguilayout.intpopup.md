This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).IntPopup




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

public static int IntPopup(int selectedValue,
string[] displayedOptions,
int[] optionValues,
params GUILayoutOption[] options);






## Declaration

public static int IntPopup(int selectedValue,
string[] displayedOptions,
int[] optionValues,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int IntPopup(int selectedValue,
GUIContent[] displayedOptions,
int[] optionValues,
params GUILayoutOption[] options);






## Declaration

public static int IntPopup(int selectedValue,
GUIContent[] displayedOptions,
int[] optionValues,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int IntPopup(string label,
int selectedValue,
string[] displayedOptions,
int[] optionValues,
params GUILayoutOption[] options);






## Declaration

public static int IntPopup(string label,
int selectedValue,
string[] displayedOptions,
int[] optionValues,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int IntPopup([GUIContent](GUIContent.html) label,
int selectedValue,
GUIContent[] displayedOptions,
int[] optionValues,
params GUILayoutOption[] options);






## Declaration

public static int IntPopup([GUIContent](GUIContent.html) label,
int selectedValue,
GUIContent[] displayedOptions,
int[] optionValues,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label in front of the field. |
| selectedValue | The value of the option the field shows. |
| displayedOptions | An array with the displayed options the user can choose from. |
| optionValues | An array with the values for each option. |
| style | Optional GUIStyle. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**int**
        The value of the option that has been selected by the user.





### Description



Make an integer popup selection field.





Takes the currently selected integer as a parameter and returns the integer selected by the user.

[Image: image]

*Rescales the current selected GameObject.*


              


```
// Simple Editor Script that lets you rescale the current selected GameObject.
using UnityEditor;
using UnityEngine;public class IntPopupExample : EditorWindow
{
    int   selectedSize = 1;
    string[] names = new string[] {"Normal", "Double", "Quadruple"};
    int[] sizes = {1, 2, 4};    [MenuItem("Examples/Int Popup usage")]
    static void Init()
    {
        EditorWindow window = GetWindow(typeof(IntPopupExample));
        window.Show();
    }    void OnGUI()
    {
        selectedSize = EditorGUILayout.IntPopup("Resize Scale: ", selectedSize, names, sizes);
        if (GUILayout.Button("Scale"))
            ReScale();
    }    void ReScale()
    {
        if (Selection.activeTransform)
            Selection.activeTransform.localScale =
                new Vector3(selectedSize, selectedSize, selectedSize);
        else
            Debug.LogError("No Object selected, please select an object to scale.");
    }
}
```




---






                        **Obsolete**
                        This function is obsolete and the style is not used.




## Declaration

public static void IntPopup([SerializedProperty](SerializedProperty.html) property,
GUIContent[] displayedOptions,
int[] optionValues,
[GUIContent](GUIContent.html) label,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static void IntPopup([SerializedProperty](SerializedProperty.html) property,
GUIContent[] displayedOptions,
int[] optionValues,
params GUILayoutOption[] options);






## Declaration

public static void IntPopup([SerializedProperty](SerializedProperty.html) property,
GUIContent[] displayedOptions,
int[] optionValues,
[GUIContent](GUIContent.html) label,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| property | The value of the option the field shows. |
| displayedOptions | An array with the displayed options the user can choose from. |
| optionValues | An array with the values for each option. |
| label | Optional label in front of the field. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Description



Make an integer popup selection field.


            
